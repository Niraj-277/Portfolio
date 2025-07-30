import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSkills()
  }, [])

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })

      if (error) {
        console.error('Error fetching skills:', error)
        setSkills(mockSkills)
      } else {
        setSkills(data || mockSkills)
      }
    } catch (error) {
      console.error('Error:', error)
      setSkills(mockSkills)
    } finally {
      setLoading(false)
    }
  }

  // Mock data for when Supabase isn't configured
  const mockSkills = [
    { id: 1, name: 'React', category: 'Frontend', proficiency: 90 },
    { id: 2, name: 'JavaScript', category: 'Frontend', proficiency: 95 },
    { id: 3, name: 'TypeScript', category: 'Frontend', proficiency: 85 },
    { id: 4, name: 'Tailwind CSS', category: 'Frontend', proficiency: 90 },
    { id: 5, name: 'Node.js', category: 'Backend', proficiency: 85 },
    { id: 6, name: 'Supabase', category: 'Backend', proficiency: 80 },
    { id: 7, name: 'PostgreSQL', category: 'Backend', proficiency: 75 },
    { id: 8, name: 'Git', category: 'Tools', proficiency: 90 },
    { id: 9, name: 'Docker', category: 'Tools', proficiency: 70 },
    { id: 10, name: 'AWS', category: 'Tools', proficiency: 65 }
  ]

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  if (loading) {
    return (
      <section id="skills" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j}>
                      <div className="h-4 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills