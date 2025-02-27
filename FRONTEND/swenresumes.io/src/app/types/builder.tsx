import {
  Code,
  Briefcase,
  GraduationCap,
  FileText,
  Cpu,
  Award,
} from "lucide-react";
export interface Section {
  id: string;
  label: string;
  icon:
    | typeof Code
    | typeof Briefcase
    | typeof GraduationCap
    | typeof FileText
    | typeof Cpu
    | typeof Award;
}

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  graduationDate: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string;
  link: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeState {
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  skills: string[];
  certifications: Certification[];
}
