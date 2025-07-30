# Personal Portfolio

A modern, responsive personal portfolio built with React and Supabase. Features a clean design, dynamic content management, and a contact form.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Dynamic Content**: Projects and skills managed through Supabase database
- **Contact Form**: Functional contact form with form validation
- **Smooth Animations**: Subtle animations and transitions for better UX
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Supabase (PostgreSQL database, authentication, real-time)
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Run the SQL commands from `supabase-schema.sql` in your Supabase SQL editor

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗄 Database Schema

The portfolio uses three main tables:

### Projects
- `id`: Primary key
- `title`: Project title
- `description`: Project description
- `image_url`: Project screenshot/image
- `github_url`: GitHub repository link
- `live_url`: Live demo link
- `technologies`: Array of technologies used
- `featured`: Boolean for featured projects

### Skills
- `id`: Primary key
- `name`: Skill name
- `category`: Skill category (Frontend, Backend, Tools)
- `proficiency`: Skill level (0-100)

### Contacts
- `id`: Primary key
- `name`: Contact name
- `email`: Contact email
- `subject`: Message subject
- `message`: Message content
- `created_at`: Timestamp

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx`: Name, title, and description
- `src/components/About.jsx`: About section content
- `src/components/Contact.jsx`: Contact information
- `src/components/Footer.jsx`: Social links and footer content

### Styling
- Colors: Edit `tailwind.config.js` to change the color scheme
- Fonts: Update the Google Fonts import in `src/index.css`
- Layout: Modify component styles using Tailwind classes

### Content Management
Add your projects and skills directly in Supabase:
1. Go to your Supabase dashboard
2. Navigate to the Table Editor
3. Add/edit records in the `projects` and `skills` tables

## 📱 Sections

1. **Hero**: Introduction with name, title, and call-to-action buttons
2. **About**: Personal information and brief skill overview
3. **Projects**: Showcase of your work with links to code and live demos
4. **Skills**: Technical skills organized by category with proficiency levels
5. **Contact**: Contact form and contact information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables
4. Set up continuous deployment from Git

### Other Platforms
The portfolio is a static React app and can be deployed to any static hosting service.

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills display
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── lib/
│   └── supabase.js     # Supabase client configuration
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help setting up the portfolio, feel free to open an issue or contact me.

---

**Happy coding!** 🎉
