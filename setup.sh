#!/bin/bash

echo "Setting up Cryps E-commerce Platform..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js 18+ first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies."
    exit 1
fi

# Create .env file from template
echo "Creating environment file..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ .env file created successfully."
else
    echo "⚠️  .env file already exists."
fi

# Setup database
echo "Setting up database..."
npm run db:setup
if [ $? -ne 0 ]; then
    echo "Error: Database setup failed."
    exit 1
fi

echo
echo "✅ Setup completed successfully!"
echo
echo "You can now start the development server with:"
echo "npm run dev"
echo
echo "Default login credentials:"
echo "Admin: admin@cryps.com / admin123"
echo "User:  user@cryps.com  / user123"
echo