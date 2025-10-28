#!/bin/bash

echo "🚀 Testing Cryps Website..."
echo "================================"

# Test 1: Server is running
echo "1. Testing server connectivity..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001)
if [ "$RESPONSE" = "200" ]; then
    echo "✅ Server is responding (HTTP $RESPONSE)"
else
    echo "❌ Server not responding (HTTP $RESPONSE)"
    exit 1
fi

# Test 2: Response time
echo "2. Testing response time..."
TIME=$(curl -s -o /dev/null -w "%{time_total}" http://localhost:3001)
echo "📍 Response time: ${TIME}s"

# Test 3: Page content
echo "3. Testing page content..."
CONTENT=$(curl -s http://localhost:3001)
if echo "$CONTENT" | grep -q "Cryps"; then
    echo "✅ Page contains 'Cryps' title"
else
    echo "❌ Page missing 'Cryps' title"
fi

if echo "$CONTENT" | grep -q "Premium Crypto Mining Hardware"; then
    echo "✅ Page contains subtitle"
else
    echo "❌ Page missing subtitle"
fi

if echo "$CONTENT" | grep -q "Quality Products"; then
    echo "✅ Page contains features"
else
    echo "❌ Page missing features"
fi

echo "================================"
echo "🎉 Cryps website is running successfully!"
echo "📍 URL: http://localhost:3001"
echo "⚡ Response Time: ${TIME}s"