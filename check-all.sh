#!/bin/bash

echo "🔍 KONTROLA VŠETKÝCH STRÁNOK NA PORTE 3001"
echo "=========================================="

echo ""
echo "📍 1. Hlavná stránka (index.html):"
curl -s http://localhost:3001 | grep -i "title\|cryps\|načítavam" | head -3

echo ""
echo "📍 2. Viditeľná stránka (visible.html):"
curl -s http://localhost:3001/visible.html | grep -i "cryps\|krypto" | head -2

echo ""
echo "📍 3. Jednoduchá stránka (simple.html):"
curl -s http://localhost:3001/simple.html | grep -i "cryps je tu" | head -1

echo ""
echo "📍 4. Test stránka (test.html):"
curl -s http://localhost:3001/test.html | grep -i "cryps" | head -1

echo ""
echo "=========================================="
echo "🌐 DOSTUPNÉ URL:"
echo "   • http://localhost:3001"
echo "   • http://localhost:3001/visible.html"
echo "   • http://localhost:3001/simple.html"
echo "   • http://localhost:3001/test.html"
echo ""
echo "🌐 EXTERNÁ IP:"
echo "   • http://21.0.9.59:3001"
echo "   • http://21.0.9.59:3001/visible.html"
echo "   • http://21.0.9.59:3001/simple.html"

echo ""
echo "🔍 AK STALE VIDÍTE LOGO Z:"
echo "   1. Skúste: http://localhost:3001/simple.html"
echo "   2. Skúste: http://21.0.9.59:3001/simple.html"
echo "   3. Vymažte cache prehliadača (Ctrl+F5)"
echo "   4. Skúste iný prehliadač"
echo "   5. Skontrolujte, či používate správny port"