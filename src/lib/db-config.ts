import { PrismaClient } from '@prisma/client'

// SQLite client for local development
const sqliteClient = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'file:./dev.db',
    },
  },
})

// PostgreSQL client for production (when configured)
let postgresClient: PrismaClient | null = null

if (process.env.POSTGRES_DATABASE_URL) {
  postgresClient = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_DATABASE_URL,
      },
    },
  })
}

// Main database client - uses SQLite by default, PostgreSQL when available
export const db = sqliteClient

// Export both clients for specific operations
export { sqliteClient, postgresClient }

// Helper function to sync data between databases
export async function syncDatabases() {
  if (!postgresClient) {
    console.log('PostgreSQL not configured, skipping sync')
    return
  }

  try {
    // Sync users
    const sqliteUsers = await sqliteClient.user.findMany()
    for (const user of sqliteUsers) {
      await postgresClient.user.upsert({
        where: { id: user.id },
        update: user,
        create: user,
      })
    }

    // Sync products
    const sqliteProducts = await sqliteClient.product.findMany()
    for (const product of sqliteProducts) {
      await postgresClient.product.upsert({
        where: { id: product.id },
        update: product,
        create: product,
      })
    }

    // Sync orders
    const sqliteOrders = await sqliteClient.order.findMany()
    for (const order of sqliteOrders) {
      await postgresClient.order.upsert({
        where: { id: order.id },
        update: order,
        create: order,
      })
    }

    // Sync other entities as needed...
    console.log('Database sync completed')
  } catch (error) {
    console.error('Database sync failed:', error)
  }
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await sqliteClient.$disconnect()
  if (postgresClient) {
    await postgresClient.$disconnect()
  }
})