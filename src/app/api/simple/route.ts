import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const htmlPath = path.join(process.cwd(), 'public', 'index.html')
    const html = fs.readFileSync(htmlPath, 'utf8')
    
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  } catch (error) {
    return new NextResponse('Error loading page', { status: 500 })
  }
}