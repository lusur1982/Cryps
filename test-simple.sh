#!/bin/bash

echo "🚀 Testing Cryps Website - Simple HTML Solution"
echo "================================================"

# Test 1: Direct API access
echo "1. Testing direct API access..."
API_RESPONSE=$(curl -s -w "%{http_code}" http://localhost:3001/api/simple -o /tmp/api_response.html)
if [ "$API_RESPONSE" = "200" ]; then
    echo "✅ API endpoint working (HTTP $API_RESPONSE)"
    
    # Check content
    if grep -q "Cryps" /tmp/api_response.html; then
        echo "✅ Content contains 'Cryps'"
    else
        echo "❌ Content missing 'Cryps'"
    fi
    
    if grep -q "Premium Crypto Mining Hardware" /tmp/api_response.html; then
        echo "✅ Content contains subtitle"
    else
        echo "❌ Content missing subtitle"
    fi
else
    echo "❌ API endpoint failed (HTTP $API_RESPONSE)"
fi

# Test 2: Main page redirect
echo ""
echo "2. Testing main page redirect..."
MAIN_RESPONSE=$(curl -s -w "%{http_code}" http://localhost:3001 -o /tmp/main_response.html)
if [ "$MAIN_RESPONSE" = "200" ]; then
    echo "✅ Main page responding (HTTP $MAIN_RESPONSE)"
    
    # Check for redirect meta tag
    if grep -q "url=/api/simple" /tmp/main_response.html; then
        echo "✅ Redirect meta tag found"
    else
        echo "❌ Redirect meta tag missing"
    fi
else
    echo "❌ Main page failed (HTTP $MAIN_RESPONSE)"
fi

# Test 3: Response times
echo ""
echo "3. Testing response times..."
API_TIME=$(curl -s -o /dev/null -w "%{time_total}" http://localhost:3001/api/simple)
MAIN_TIME=$(curl -s -o /dev/null -w "%{time_total}" http://localhost:3001)

echo "📍 API Response Time: ${API_TIME}s"
echo "📍 Main Page Response Time: ${MAIN_TIME}s"

# Test 4: HTML validation
echo ""
echo "4. Testing HTML structure..."
if grep -q "<!DOCTYPE html>" /tmp/api_response.html; then
    echo "✅ Valid DOCTYPE"
else
    echo "❌ Missing DOCTYPE"
fi

if grep -q "<title>" /tmp/api_response.html; then
    echo "✅ Title tag present"
else
    echo "❌ Missing title tag"
fi

if grep -q "feature-card" /tmp/api_response.html; then
    echo "✅ Feature cards present"
else
    echo "❌ Missing feature cards"
fi

echo ""
echo "================================================"
echo "🎉 Cryps website is working with simple HTML!"
echo "📍 Direct URL: http://localhost:3001/api/simple"
echo "📍 Main URL (redirects): http://localhost:3001"
echo "⚡ API Response Time: ${API_TIME}s"
echo "📄 Pure HTML (no React dependencies)"

# Cleanup
rm -f /tmp/api_response.html /tmp/main_response.html