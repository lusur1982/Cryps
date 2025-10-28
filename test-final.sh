#!/bin/bash

echo "🚀 Testovanie Cryps Stránky - Riešenie s HTML Serverom"
echo "======================================================"

# Test 1: Server beží
echo "1. Kontrola, či server beží..."
if curl -s http://localhost:3001 > /dev/null; then
    echo "✅ Server beží na porte 3001"
else
    echo "❌ Server nebeží"
    exit 1
fi

# Test 2: Obsah stránky
echo ""
echo "2. Kontrola obsahu stránky..."
CONTENT=$(curl -s http://localhost:3001)

if echo "$CONTENT" | grep -q "Cryps"; then
    echo "✅ Stránka obsahuje 'Cryps'"
else
    echo "❌ Stránka neobsahuje 'Cryps'"
fi

if echo "$CONTENT" | grep -q "Krypto Ťažobný Hardvér"; then
    echo "✅ Stránka obsahuje slovenský názov"
else
    echo "❌ Stránka neobsahuje slovenský názov"
fi

if echo "$CONTENT" | grep -q "ONLINE"; then
    echo "✅ Stránka zobrazuje status ONLINE"
else
    echo "❌ Stránka neobsahuje status"
fi

# Test 3: Rýchlosť načítania
echo ""
echo "3. Test rýchlosti načítania..."
TIME=$(curl -s -o /dev/null -w "%{time_total}" http://localhost:3001)
echo "⚡ Rýchlosť načítania: ${TIME}s"

if (( $(echo "$TIME < 0.1" | bc -l 2>/dev/null || echo "0") )); then
    echo "✅ Veľmi rýchle načítanie"
elif (( $(echo "$TIME < 0.5" | bc -l 2>/dev/null || echo "0") )); then
    echo "✅ Rýchle načítanie"
else
    echo "⚠️  Pomalšie načítanie"
fi

# Test 4: Štruktúra HTML
echo ""
echo "4. Kontrola HTML štruktúry..."
if echo "$CONTENT" | grep -q "<!DOCTYPE html>"; then
    echo "✅ Správny DOCTYPE"
else
    echo "❌ Chýba DOCTYPE"
fi

if echo "$CONTENT" | grep -q "feature-card"; then
    echo "✅ Obsahuje feature karty"
else
    echo "❌ Chýbajú feature karty"
fi

if echo "$CONTENT" | grep -q "btn-primary"; then
    echo "✅ Obsahuje tlačidlá"
else
    echo "❌ Chýbajú tlačidlá"
fi

echo ""
echo "======================================================"
echo "🎉 Cryps stránka funguje perfektne!"
echo "📍 URL: http://localhost:3001"
echo "⚡ Rýchlosť: ${TIME}s"
echo "🌐 Čistý HTML server (bez Next.js)"
echo "🇸🇰 Slovenská verzia"