-- Portfolio Database Schema for Supabase
-- Run these commands in your Supabase SQL editor

-- Projects table
CREATE TABLE projects (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  github_url VARCHAR(500),
  live_url VARCHAR(500),
  technologies TEXT[], -- Array of technology names
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills table
CREATE TABLE skills (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL, -- Frontend, Backend, Tools, etc.
  proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data for projects
INSERT INTO projects (title, description, image_url, github_url, live_url, technologies, featured) VALUES
('E-Commerce Platform', 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.', 'https://via.placeholder.com/400x250', 'https://github.com', 'https://example.com', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], true),
('Task Management App', 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.', 'https://via.placeholder.com/400x250', 'https://github.com', 'https://example.com', ARRAY['React', 'Supabase', 'Tailwind CSS'], true),
('Weather Dashboard', 'A responsive weather dashboard that displays current weather conditions and forecasts using external APIs.', 'https://via.placeholder.com/400x250', 'https://github.com', 'https://example.com', ARRAY['React', 'OpenWeather API', 'Chart.js'], false);

-- Insert sample data for skills
INSERT INTO skills (name, category, proficiency) VALUES
('React', 'Frontend', 90),
('JavaScript', 'Frontend', 95),
('TypeScript', 'Frontend', 85),
('Tailwind CSS', 'Frontend', 90),
('HTML/CSS', 'Frontend', 95),
('Node.js', 'Backend', 85),
('Supabase', 'Backend', 80),
('PostgreSQL', 'Backend', 75),
('Express.js', 'Backend', 80),
('Git', 'Tools', 90),
('Docker', 'Tools', 70),
('AWS', 'Tools', 65),
('Figma', 'Tools', 75);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON projects FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON skills FOR SELECT USING (true);

-- Create policy for contact form submissions (insert only)
CREATE POLICY "Enable insert for all users" ON contacts FOR INSERT WITH CHECK (true);

-- Optional: Create policies for authenticated users to manage content
-- Uncomment these if you want to add an admin interface later
-- CREATE POLICY "Enable all for authenticated users only" ON projects FOR ALL USING (auth.role() = 'authenticated');
-- CREATE POLICY "Enable all for authenticated users only" ON skills FOR ALL USING (auth.role() = 'authenticated');