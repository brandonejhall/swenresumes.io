"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Save,
} from "lucide-react"
import Link from "next/link"

const sections = [
  { id: "profile", label: "Profile", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FileText },
  { id: "skills", label: "Skills & Certifications", icon: Cpu },
  { id: "awards", label: "Awards", icon: Award },
]

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState("profile")
  const [page, setPage] = useState(1)
  const [experiences, setExperiences] = useState([
    { company: "", title: "", startDate: "", endDate: "", description: "", achievements: [""] },
  ])
  const [educations, setEducations] = useState([{ school: "", degree: "", fieldOfStudy: "", graduationDate: "" }])
  const [projects, setProjects] = useState([{ name: "", description: "", technologies: "", link: "" }])
  const [skills, setSkills] = useState([""])
  const [certifications, setCertifications] = useState([{ name: "", issuer: "", date: "" }])

  const addItem = (section) => {
    switch (section) {
      case "experience":
        setExperiences([
          ...experiences,
          { company: "", title: "", startDate: "", endDate: "", description: "", achievements: [""] },
        ])
        break
      case "education":
        setEducations([...educations, { school: "", degree: "", fieldOfStudy: "", graduationDate: "" }])
        break
      case "projects":
        setProjects([...projects, { name: "", description: "", technologies: "", link: "" }])
        break
      case "skills":
        setSkills([...skills, ""])
        break
      case "certifications":
        setCertifications([...certifications, { name: "", issuer: "", date: "" }])
        break
    }
  }

  const removeItem = (section, index) => {
    switch (section) {
      case "experience":
        setExperiences(experiences.filter((_, i) => i !== index))
        break
      case "education":
        setEducations(educations.filter((_, i) => i !== index))
        break
      case "projects":
        setProjects(projects.filter((_, i) => i !== index))
        break
      case "skills":
        setSkills(skills.filter((_, i) => i !== index))
        break
      case "certifications":
        setCertifications(certifications.filter((_, i) => i !== index))
        break
    }
  }

  const addAchievement = (expIndex) => {
    const newExperiences = [...experiences]
    newExperiences[expIndex].achievements.push("")
    setExperiences(newExperiences)
  }

  const removeAchievement = (expIndex, achIndex) => {
    const newExperiences = [...experiences]
    newExperiences[expIndex].achievements = newExperiences[expIndex].achievements.filter((_, i) => i !== achIndex)
    setExperiences(newExperiences)
  }

  const handleInputChange = (section, index, field, value) => {
    switch (section) {
      case "experience":
        const newExperiences = [...experiences]
        newExperiences[index][field] = value
        setExperiences(newExperiences)
        break
      case "education":
        const newEducations = [...educations]
        newEducations[index][field] = value
        setEducations(newEducations)
        break
      case "projects":
        const newProjects = [...projects]
        newProjects[index][field] = value
        setProjects(newProjects)
        break
      case "skills":
        const newSkills = [...skills]
        newSkills[index] = value
        setSkills(newSkills)
        break
      case "certifications":
        const newCertifications = [...certifications]
        newCertifications[index][field] = value
        setCertifications(newCertifications)
        break
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-xl font-semibold">
              <Code className="mr-2 h-6 w-6 text-primary" />
              <span>SWE</span>
              <span className="text-primary">Resumes</span>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        <div className="w-1/2 space-y-8">
          <nav className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors
                  ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                <section.icon className="mr-2 h-4 w-4" />
                {section.label}
              </button>
            ))}
          </nav>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{sections.find((s) => s.id === activeSection)?.label}</h2>
            {activeSection === "profile" && (
              <>
                <Input placeholder="Full Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Input type="tel" placeholder="Phone" className="w-full" />
                <Input placeholder="Location" className="w-full" />
                <Input placeholder="GitHub Profile" className="w-full" />
                <Input placeholder="LinkedIn Profile" className="w-full" />
                <Textarea placeholder="Professional Summary" className="w-full" rows={4} />
              </>
            )}
            {activeSection === "experience" && (
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="space-y-4 border rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Experience {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeItem("experience", index)}>
                        <Minus className="h-4 w-4 mr-2" /> Remove
                      </Button>
                    </div>
                    <Input
                      placeholder="Company Name"
                      value={exp.company}
                      onChange={(e) => handleInputChange("experience", index, "company", e.target.value)}
                      className="w-full"
                    />
                    <Input
                      placeholder="Job Title"
                      value={exp.title}
                      onChange={(e) => handleInputChange("experience", index, "title", e.target.value)}
                      className="w-full"
                    />
                    <div className="flex gap-4">
                      <Input
                        type="date"
                        placeholder="Start Date"
                        value={exp.startDate}
                        onChange={(e) => handleInputChange("experience", index, "startDate", e.target.value)}
                        className="w-1/2"
                      />
                      <Input
                        type="date"
                        placeholder="End Date"
                        value={exp.endDate}
                        onChange={(e) => handleInputChange("experience", index, "endDate", e.target.value)}
                        className="w-1/2"
                      />
                    </div>
                    <Textarea
                      placeholder="Job Description"
                      value={exp.description}
                      onChange={(e) => handleInputChange("experience", index, "description", e.target.value)}
                      className="w-full"
                      rows={4}
                    />
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <Input
                            placeholder="Key Achievement"
                            value={achievement}
                            onChange={(e) => {
                              const newExperiences = [...experiences]
                              newExperiences[index].achievements[achIndex] = e.target.value
                              setExperiences(newExperiences)
                            }}
                            className="w-full"
                          />
                          <Button size="sm" variant="ghost" onClick={() => removeAchievement(index, achIndex)}>
                            <Minus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button size="sm" variant="outline" onClick={() => addAchievement(index)}>
                        <Plus className="h-4 w-4 mr-2" /> Add Achievement
                      </Button>
                    </div>
                  </div>
                ))}
                <Button onClick={() => addItem("experience")}>
                  <Plus className="h-4 w-4 mr-2" /> Add Experience
                </Button>
              </div>
            )}
            {activeSection === "education" && (
              <div className="space-y-4">
                {educations.map((edu, index) => (
                  <div key={index} className="space-y-4 border rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Education {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeItem("education", index)}>
                        <Minus className="h-4 w-4 mr-2" /> Remove
                      </Button>
                    </div>
                    <Input
                      placeholder="School"
                      value={edu.school}
                      onChange={(e) => handleInputChange("education", index, "school", e.target.value)}
                      className="w-full"
                    />
                    <Input
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => handleInputChange("education", index, "degree", e.target.value)}
                      className="w-full"
                    />
                    <Input
                      placeholder="Field of Study"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleInputChange("education", index, "fieldOfStudy", e.target.value)}
                      className="w-full"
                    />
                    <Input
                      type="date"
                      placeholder="Graduation Date"
                      value={edu.graduationDate}
                      onChange={(e) => handleInputChange("education", index, "graduationDate", e.target.value)}
                      className="w-full"
                    />
                  </div>
                ))}
                <Button onClick={() => addItem("education")}>
                  <Plus className="h-4 w-4 mr-2" /> Add Education
                </Button>
              </div>
            )}
            {activeSection === "projects" && (
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="space-y-4 border rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Project {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeItem("projects", index)}>
                        <Minus className="h-4 w-4 mr-2" /> Remove
                      </Button>
                    </div>
                    <Input
                      placeholder="Project Name"
                      value={project.name}
                      onChange={(e) => handleInputChange("projects", index, "name", e.target.value)}
                      className="w-full"
                    />
                    <Textarea
                      placeholder="Project Description"
                      value={project.description}
                      onChange={(e) => handleInputChange("projects", index, "description", e.target.value)}
                      className="w-full"
                      rows={4}
                    />
                    <Input
                      placeholder="Technologies Used"
                      value={project.technologies}
                      onChange={(e) => handleInputChange("projects", index, "technologies", e.target.value)}
                      className="w-full"
                    />
                    <Input
                      placeholder="Project Link"
                      value={project.link}
                      onChange={(e) => handleInputChange("projects", index, "link", e.target.value)}
                      className="w-full"
                    />
                  </div>
                ))}
                <Button onClick={() => addItem("projects")}>
                  <Plus className="h-4 w-4 mr-2" /> Add Project
                </Button>
              </div>
            )}
            {activeSection === "skills" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Skills</h3>
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="Skill"
                        value={skill}
                        onChange={(e) => handleInputChange("skills", index, "", e.target.value)}
                        className="w-full"
                      />
                      <Button size="sm" variant="ghost" onClick={() => removeItem("skills", index)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button size="sm" variant="outline" onClick={() => addItem("skills")}>
                    <Plus className="h-4 w-4 mr-2" /> Add Skill
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Certifications</h3>
                  {certifications.map((cert, index) => (
                    <div key={index} className="space-y-2 border rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-md font-medium">Certification {index + 1}</h4>
                        <Button size="sm" variant="destructive" onClick={() => removeItem("certifications", index)}>
                          <Minus className="h-4 w-4 mr-2" /> Remove
                        </Button>
                      </div>
                      <Input
                        placeholder="Certification Name"
                        value={cert.name}
                        onChange={(e) => handleInputChange("certifications", index, "name", e.target.value)}
                        className="w-full"
                      />
                      <Input
                        placeholder="Issuing Organization"
                        value={cert.issuer}
                        onChange={(e) => handleInputChange("certifications", index, "issuer", e.target.value)}
                        className="w-full"
                      />
                      <Input
                        type="date"
                        placeholder="Date Obtained"
                        value={cert.date}
                        onChange={(e) => handleInputChange("certifications", index, "date", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  ))}
                  <Button size="sm" variant="outline" onClick={() => addItem("certifications")}>
                    <Plus className="h-4 w-4 mr-2" /> Add Certification
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/2">
          <div className="sticky top-8">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-4">
              <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
              <div className="h-[600px] bg-gray-100 rounded flex items-center justify-center text-gray-400">
                Preview will be generated here
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">Page {page}</span>
                <Button variant="outline" size="icon" onClick={() => setPage((p) => p + 1)}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button>Generate Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

