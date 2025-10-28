const http = require('http');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

// Inicializácia databázy
const db = new PrismaClient({
  datasources: {
    db: {
      url: 'file:/home/z/my-project/db/custom.db',
    },
  },
});

const server = http.createServer(async (req, res) => {
  // Log všetkých požiadaviek
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Nastavenie CORS headers pre Replit
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // API endpoint pre produkty
  if (req.url.startsWith('/api/products')) {
    try {
      const url = new URL(req.url, `http://localhost:3000`);
      const category = url.searchParams.get('category');
      const featured = url.searchParams.get('featured');
      const isNew = url.searchParams.get('new');
      const limit = url.searchParams.get('limit');
      
      const where = { inStock: true };
      
      if (category) where.category = category;
      if (featured === 'true') where.featured = true;
      if (isNew === 'true') where.isNew = true;
      
      const products = await db.product.findMany({
        where,
        take: limit ? parseInt(limit) : undefined,
        orderBy: { createdAt: 'desc' }
      });
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(products));
      return;
    } catch (error) {
      console.error('Chyba pri načítaní produktov:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch products' }));
      return;
    }
  }
  
  // Ak je to root, presmeruj na index.html
  if (req.url === '/' || req.url === '') {
    req.url = '/index.html';
  }
  
  // Ak je to /faq, presmeruj na faq.html
  if (req.url === '/faq') {
    req.url = '/faq.html';
  }
  
  // Získanie cesty k súboru
  const filePath = path.join(__dirname, req.url);
  
  // Kontrola, či súbor existuje
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Ak súbor neexistuje, vráť 404
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 - Stránka nenájdená</title></head>
        <body style="background: #000; color: #fff; font-family: Arial; text-align: center; padding: 50px;">
          <h1 style="color: #ff0000;">404 - Stránka nenájdená</h1>
          <p>Stránka ${req.url} neexistuje</p>
          <a href="/" style="color: #00ff00;">Späť na hlavnú stránku</a>
        </body>
        </html>
      `);
      return;
    }
    
    // Načítanie súboru
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Server Error');
        return;
      }
      
      // Nastavenie content type podľa prípony
      const ext = path.extname(filePath);
      let contentType = 'text/html';
      
      switch (ext) {
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'application/javascript';
          break;
        case '.json':
          contentType = 'application/json';
          break;
      }
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

const PORT = 3000;

server.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 CRYPS Server beží na porte ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🌐 Replit bude dostupný cez preview URL`);
  console.log(`⏰ Čas štartu: ${new Date().toLocaleString()}`);
  console.log(`📦 Produkty v databáze: ${await db.product.count()}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('Server sa zastavuje...');
  await db.$disconnect();
  server.close(() => {
    console.log('Server zastavený');
    process.exit(0);
  });
});