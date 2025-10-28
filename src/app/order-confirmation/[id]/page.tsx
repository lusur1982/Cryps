import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { OrderConfirmation } from "@/components/shop/order-confirmation"

interface PageProps {
  params: {
    id: string
  }
}

async function getOrder(id: string) {
  const order = await db.order.findUnique({
    where: { id },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  })

  if (!order) {
    notFound()
  }

  return order
}

export default async function OrderConfirmationPage({ params }: PageProps) {
  const order = await getOrder(params.id)
  
  return <OrderConfirmation order={order} />
}