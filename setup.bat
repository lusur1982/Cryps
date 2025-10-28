@echo off
echo Setting up Cryps E-commerce Platform...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js 18+ first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
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
) else (
    echo ⚠️  .env file already exists.
)

REM Setup database
echo Setting up database...
npm run db:setup
if %errorlevel% neq 0 (
    echo Error: Database setup failed.
    pause
    exit /b 1
)

echo.
echo ✅ Setup completed successfully!
echo.
echo You can now start the development server with:
echo npm run dev
echo.
echo Default login credentials:
echo Admin: admin@cryps.com / admin123
echo User:  user@cryps.com  / user123
echo.
pause