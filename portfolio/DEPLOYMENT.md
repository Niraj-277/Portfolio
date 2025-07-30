# Deployment Guide

This guide will help you deploy your personal portfolio to various platforms.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - Click "Deploy"

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for continuous deployment

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Environment Variables

Make sure to set these environment variables in your deployment platform:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## 📊 Supabase Setup

1. **Create a Supabase project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Set up the database**
   - Go to the SQL Editor in your Supabase dashboard
   - Copy and paste the contents of `supabase-schema.sql`
   - Run the SQL commands

3. **Configure Row Level Security**
   - The schema already includes RLS policies
   - Projects and skills are publicly readable
   - Contact form submissions are allowed for all users

## 🎨 Customization Before Deployment

1. **Update personal information**
   - Edit `src/components/Hero.jsx` with your name and title
   - Update `src/components/About.jsx` with your bio
   - Change contact information in `src/components/Contact.jsx`
   - Update social links in `src/components/Footer.jsx`

2. **Add your projects and skills**
   - Use the Supabase dashboard to add your actual projects
   - Update the skills table with your technologies
   - Replace placeholder images with your project screenshots

3. **Customize colors and styling**
   - Edit `tailwind.config.js` to change the color scheme
   - Update fonts in `src/index.css`

## 🔍 Testing Before Deployment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Domain Setup (Optional)

After deployment, you can:
1. Purchase a custom domain
2. Configure it in your hosting platform
3. Set up SSL (usually automatic)

## 🚨 Troubleshooting

**Build fails with Tailwind errors:**
- Make sure all Tailwind classes are properly configured
- Check that `@tailwindcss/postcss` is installed

**Supabase connection issues:**
- Verify environment variables are set correctly
- Check that RLS policies are properly configured
- Ensure the database schema has been applied

**Contact form not working:**
- Verify Supabase connection
- Check that the `contacts` table exists
- Ensure RLS policy allows inserts

---

Your portfolio is now ready for deployment! 🎉