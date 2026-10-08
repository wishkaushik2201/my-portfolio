export interface ContactSubmission {
  name: string
  email: string
  message: string
}

export interface ContactSubmissionResult {
  message: string
  id: number
}

export interface Portfolio {
  hero: {
    location: string
    headline: string
    headlineAccent: string
    summary: string
    years: string
    focus: string
  }
  projects: {
    number: string
    name: string
    type: string
    description: string
    image: string
    alt: string
    tags: string[]
  }[]
  experience: {
    role: string
    company: string
    location: string
    dates: string
    highlight: string
  }[]
  skillGroups: {
    category: string
    skills: string[]
  }[]
  about: {
    headline: string
    headlineAccent: string
    summary: string
    services: string[]
  }
  education: {
    degree: string
    field: string
    institution: string
    year: string
  }
  contact: {
    email: string
    phone: string
    location: string
  }
}
