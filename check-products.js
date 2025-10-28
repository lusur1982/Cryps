const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

async function checkProducts() {
  try {
    const products = await db.product.findMany();
    console.log('Počet produktov:', products.length);
    products.forEach(p => {
      console.log(`- ${p.name}: ${p.price}€ (Stock: ${p.stockCount})`);
    });
  } catch (error) {
    console.error('Chyba:', error);
  } finally {
    await db.$disconnect();
  }
}

checkProducts();