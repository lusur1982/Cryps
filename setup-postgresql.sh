#!/bin/bash

echo "Setting up Cryps E-commerce Platform with PostgreSQL..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js 18+ first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "Warning: PostgreSQL command line tools not found."
    echo "Please make sure PostgreSQL is installed and psql is in your PATH."
    echo "Download from: https://www.postgresql.org/download/"
    echo
    echo "If you have PostgreSQL installed but psql is not in PATH,"
    echo "please add PostgreSQL bin directory to your system PATH."
    echo
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
    echo
    echo "IMPORTANT: Please edit .env file and update the DATABASE_URL"
    echo "with your PostgreSQL credentials:"
    echo 'DATABASE_URL="postgresql://username:password@localhost:5432/cryps"'
    echo
    echo "Make sure PostgreSQL is running and the database exists."
    echo
    read -p "Press Enter to continue after editing .env file..."
else
    echo "⚠️  .env file already exists."
fi

# Setup database
echo "Setting up database..."
npm run db:setup
if [ $? -ne 0 ]; then
    echo
    echo "Error: Database setup failed."
    echo "Please check:"
    echo "1. PostgreSQL is running"
    echo "2. Database 'cryps' exists"
    echo "3. DATABASE_URL in .env is correct"
    echo "4. User has proper permissions"
    echo
    echo "To create database manually:"
    echo "psql -U postgres -c \"CREATE DATABASE cryps;\""
    echo
    exit 1
fi

echo
echo "✅ PostgreSQL setup completed successfully!"
echo
echo "You can now start the development server with:"
echo "npm run dev"
echo
echo "Default login credentials:"
echo "Admin: admin@cryps.com / admin123"
echo "User:  user@cryps.com  / user123"
echo