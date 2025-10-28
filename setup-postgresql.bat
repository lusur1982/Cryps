@echo off
echo Setting up Cryps E-commerce Platform with PostgreSQL...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js 18+ first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if PostgreSQL is installed
psql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Warning: PostgreSQL command line tools not found.
    echo Please make sure PostgreSQL is installed and psql is in your PATH.
    echo Download from: https://www.postgresql.org/download/
    echo.
    echo If you have PostgreSQL installed but psql is not in PATH,
    echo please add PostgreSQL bin directory to your system PATH.
    echo.
    pause
)

REM Install dependencies
echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies.
    pause
    exit /b 1
)

REM Create .env file from template
echo Creating environment file...
if not exist .env (
    copy .env.example .env >nul
    echo ✅ .env file created successfully.
    echo.
    echo IMPORTANT: Please edit .env file and update the DATABASE_URL
    echo with your PostgreSQL credentials:
    echo DATABASE_URL="postgresql://username:password@localhost:5432/cryps"
    echo.
    echo Make sure PostgreSQL is running and the database exists.
    echo.
    set /p continue="Press Enter to continue after editing .env file..."
) else (
    echo ⚠️  .env file already exists.
)

REM Setup database
echo Setting up database...
npm run db:setup
if %errorlevel% neq 0 (
    echo.
    echo Error: Database setup failed.
    echo Please check:
    echo 1. PostgreSQL is running
    echo 2. Database 'cryps' exists
    echo 3. DATABASE_URL in .env is correct
    echo 4. User has proper permissions
    echo.
    echo To create database manually:
    echo psql -U postgres -c "CREATE DATABASE cryps;"
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ PostgreSQL setup completed successfully!
echo.
echo You can now start the development server with:
echo npm run dev
echo.
echo Default login credentials:
echo Admin: admin@cryps.com / admin123
echo User:  user@cryps.com  / user123
echo.
pause