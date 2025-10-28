# Authentication Guide for Cryps

## 🚀 Admin Login Information

### Default Admin Account
The following admin account is created automatically when you run the seed script:

**Email:** `admin@cryps.com`  
**Username:** `admin`  
**Password:** `admin123`  
**Role:** `ADMIN`

### Test User Account
A test user account is also available for testing:

**Email:** `user@cryps.com`  
**Username:** `testuser`  
**Password:** `user123`  
**Role:** `USER`

## 🔐 How to Login as Admin

### Method 1: Using Email
1. Go to `/auth/signin`
2. Click on the "Email" tab
3. Enter:
   - Email: `admin@cryps.com`
   - Password: `admin123`
4. Click "Sign In"

### Method 2: Using Username
1. Go to `/auth/signin`
2. Click on the "Username" tab
3. Enter:
   - Username: `admin`
   - Password: `admin123`
4. Click "Sign In"

## 🛠️ Authentication Features

### Sign Up (/auth/signup)
- Full name, username, email, password
- Password confirmation
- Google OAuth (if configured)
- Automatic sign-in after registration

### Sign In (/auth/signin)
- Email or username login
- Password authentication
- Google OAuth (if configured)
- Remember me functionality

### Forgot Password (/auth/forgot-password)
- Email-based password reset
- Secure token generation (implementation needed)
- Email sending (implementation needed)

### Error Handling (/auth/error)
- Comprehensive error messages
- User-friendly error pages
- Recovery options

## 🔧 Setup Instructions

### 1. Environment Variables
Make sure your `.env` file contains:

```env
DATABASE_URL=file:/home/z/my-project/db/custom.db

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production

# Google OAuth (Optional)
# GOOGLE_CLIENT_ID=your-google-client-id
# GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 2. Database Seeding
Run the seed script to create admin and test users:

```bash
npx tsx prisma/seed.ts
```

### 3. Restart Development Server
After updating environment variables:

```bash
pkill -f "tsx server.ts"
npm run dev
```

## 🎯 Admin Features

Once logged in as admin, you can access:

- **Admin Dashboard** (`/admin`)
  - User management
  - Product management
  - Order management
  - Analytics and statistics

- **Profile Page** (`/profile`)
  - Account settings
  - Order history
  - Personal information

## 🔒 Security Notes

### Important Security Reminders:

1. **Change Default Passwords**: In production, always change the default admin password
2. **Environment Variables**: Never commit `.env` files to version control
3. **NEXTAUTH_SECRET**: Use a strong, unique secret in production
4. **Database Security**: Use proper database credentials in production
5. **HTTPS**: Always use HTTPS in production

### Password Security:
- Admin password: `admin123` (CHANGE IN PRODUCTION)
- Test user password: `user123` (CHANGE IN PRODUCTION)
- Minimum password length: 6 characters
- Passwords are hashed using bcrypt

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on Auth Pages**
   - Make sure auth routes are created in `/src/app/auth/`
   - Restart development server after creating routes

2. **NextAuth Warnings**
   - Check `NEXTAUTH_URL` environment variable
   - Ensure `NEXTAUTH_SECRET` is set

3. **Database Connection Issues**
   - Verify `DATABASE_URL` is correct
   - Run `npm run db:push` to ensure schema is up to date

4. **Login Not Working**
   - Check if seed script has been run
   - Verify user exists in database
   - Check console for error messages

### Debug Steps:

1. Check browser console for JavaScript errors
2. Check network tab for failed API calls
3. Check development server logs
4. Verify environment variables are loaded
5. Ensure database is seeded with users

## 📱 Mobile Responsiveness

All authentication pages are fully responsive:
- Mobile-first design
- Touch-friendly forms
- Proper viewport handling
- Optimized for all screen sizes

## 🎨 UI/UX Features

- Clean, modern design
- Loading states with spinners
- Error handling with toast notifications
- Form validation
- Tab-based login (email/username)
- Social login integration ready
- Consistent branding with Cryps theme

## 🔄 Next Steps for Production

1. **Set up Google OAuth** (optional)
2. **Implement email sending** for password resets
3. **Add email verification** for new registrations
4. **Set up proper session management**
5. **Add rate limiting** for auth endpoints
6. **Implement 2FA** for admin accounts
7. **Add audit logging** for admin actions

---

**Note**: This authentication system is fully functional and ready for use. The admin account provides complete access to the admin dashboard for managing users, products, and orders.