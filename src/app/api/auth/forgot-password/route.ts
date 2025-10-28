import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await db.user.findUnique({
      where: { email }
    })

    // Always return success to prevent email enumeration attacks
    // In a real application, you would send an email here
    if (user) {
      console.log(`Password reset requested for user: ${email}`)
      // TODO: Send actual password reset email
      // This would involve:
      // 1. Generate a reset token
      // 2. Save it to the database with an expiration
      // 3. Send an email with the reset link
    }

    return NextResponse.json(
      { message: "If an account exists with this email, password reset instructions have been sent." },
      { status: 200 }
    )

  } catch (error) {
    console.error("Forgot password error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}