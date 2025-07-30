const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Your Photo Here</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Hello! I'm a passionate developer.
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for creating digital experiences 
                that are not only functional but also intuitive and engaging. With expertise 
                in modern web technologies, I enjoy turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities. 
                I believe in continuous learning and always strive to improve my skills.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Node.js</li>
                    <li>Supabase</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About