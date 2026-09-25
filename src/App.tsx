import './App.css'

const projects = [
  {
    number: '01',
    name: 'B2C Fintech Platform',
    type: 'Fintech · Appzlogic',
    description: 'Microservices for credit reports, financial insights and recommendations, with subscription and payment workflows.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85',
    alt: 'Editorial cover image for a fintech platform project',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Cashfree'],
  },
  {
    number: '02',
    name: 'Bookchor E-commerce',
    type: 'E-commerce · Bookchor',
    description: 'A checkout experience with cart offers, coupon rules, Razorpay and cash-on-delivery payments.',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1400&q=85',
    alt: 'Editorial cover image featuring books for the Bookchor project',
    tags: ['PHP', 'REST APIs', 'Razorpay', 'AWS S3'],
  },
  {
    number: '03',
    name: 'Lock The Box',
    type: 'Event booking platform',
    description: 'City-based event discovery, event details, ticket booking and pre-orders in one responsive flow.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
    alt: 'Editorial cover image of a live event for the Lock The Box project',
    tags: ['PHP', 'MySQL', 'Bookings', 'Responsive web'],
  },
  {
    number: '04',
    name: 'Smart Library',
    type: 'Open-source · Education',
    description: 'A multi-school library platform for book circulation, role-based access, reservations and learning content.',
    image:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85',
    alt: 'Editorial cover image of a library for the Smart Library project',
    tags: ['Python', 'Django', 'MongoDB', 'Role-based access'],
  },
]

const experience = [
  {
    role: 'Software Engineer',
    company: 'Appzlogic Mobility Solutions',
    location: 'Noida, Uttar Pradesh',
    dates: 'Jan 2026 — Present',
    highlight: 'Building fintech APIs, payment integrations and scheduled backend workflows.',
  },
  {
    role: 'Software Developer',
    company: 'Bookchor Literary Solutions',
    location: 'Noida, Uttar Pradesh',
    dates: 'Jun 2024 — Jun 2025',
    highlight: 'Led a team of four; improved checkout experience by 15% and reduced page latency by 25%.',
  },
  {
    role: 'Software Developer',
    company: 'WGD Analytics',
    location: 'Delhi',
    dates: 'May 2022 — May 2024',
    highlight: 'Reduced data processing time by 30% and page load time by 40% across web applications.',
  },
  {
    role: 'Python Developer',
    company: 'Concept Consulting & Infra',
    location: 'Noida',
    dates: 'Nov 2020 — May 2022',
    highlight: 'Taught Python, Django and Pandas through course materials, assessments and workshops.',
  },
]

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'PHP'],
  },
  {
    category: 'Frameworks & libraries',
    skills: ['Django', 'Flask', 'FastAPI', 'Celery', 'Node.js', 'Express', 'Laravel', 'SQLAlchemy'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'jQuery'],
  },
  {
    category: 'Databases & data',
    skills: ['PostgreSQL', 'MySQL', 'Microsoft SQL', 'MongoDB', 'Redis', 'Pandas', 'NumPy', 'PySpark'],
  },
  {
    category: 'Cloud & delivery',
    skills: ['AWS S3', 'Docker', 'Git', 'GitHub Actions', 'Apache Airflow'],
  },
  {
    category: 'Architecture & integrations',
    skills: ['REST APIs', 'Microservices', 'Webhooks', 'Kafka', 'Cashfree', 'Razorpay'],
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vishal Sharma, home">
          <span className="wordmark-mark">VS</span>
          <span>Vishal Sharma</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="intro section-wrap" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow"><span className="status-dot" /> Software Engineer · Greater Noida, India</p>
            <h1 id="intro-title">Backend systems, <span>built to scale.</span></h1>
            <div className="intro-bottom">
              <p className="intro-description">
                I&apos;m Vishal Sharma, a software engineer with 5+ years of experience
                building web products across fintech, e-commerce and analytics.
              </p>
              <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="intro-art" aria-label="Abstract composition of color and form" role="img">
            <div className="art-sun" />
            <div className="art-panel art-panel--coral" />
            <div className="art-panel art-panel--blue" />
            <div className="art-panel art-panel--yellow" />
            <span className="art-caption">PYTHON / APIs / MICROSERVICES</span>
            <span className="art-stamp">V<br />S</span>
          </div>
          <div className="intro-meta">
            <span>5+ years building software</span>
            <span>Scroll to explore <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Products and platforms I&apos;ve worked on</p>
              <h2 id="work-title">Selected work<span className="heading-period">.</span></h2>
            </div>
            <span className="section-index">2020 — Present</span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-number">({project.number})</span>
                  <a className="project-open" href="#contact" aria-label={`Ask about ${project.name}`}>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="project-details">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <ul className="tag-list" aria-label="Technologies and skills">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Where I&apos;ve contributed</p>
              <h2 id="experience-title">Experience<span className="heading-period">.</span></h2>
            </div>
            <span className="section-index">4 roles · 5+ years</span>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-dates">{item.dates}</div>
                <div className="experience-main">
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company} <span>· {item.location}</span></p>
                  <p className="experience-highlight">{item.highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The tools behind the work</p>
              <h2 id="skills-title">Skills &amp; stack<span className="heading-period">.</span></h2>
            </div>
            <span className="section-index">Backend · Full stack</span>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-grid">
            <div className="about-label">
              <p className="eyebrow">A little about me</p>
              <span className="about-scribble" aria-hidden="true">✳</span>
            </div>
            <div className="about-copy">
              <h2 id="about-title">I turn complex workflows into <span>systems that work.</span></h2>
              <p>
                I build backend services and web applications that help teams deliver
                reliable products. My work spans API design, microservices, payment
                integrations, data workflows and performance improvements.
              </p>
              <div className="services">
                <span>01 / API design and integrations</span>
                <span>02 / Payment and subscription flows</span>
                <span>03 / Data and query optimization</span>
                <span>04 / Team collaboration and delivery</span>
              </div>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Education</p>
              <h2 id="education-title">The foundation<span className="heading-period">.</span></h2>
            </div>
            <span className="section-index">2016</span>
          </div>
          <div className="education-entry">
            <h3>Bachelor of Technology</h3>
            <p>Electronics and Communication Engineering</p>
            <span>Vishveshwarya Institute of Engineering and Technology</span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Let&apos;s build<br /><span>something useful.</span></h2>
          <a className="contact-link" href="mailto:sharma.vishal.2201@gmail.com">
            sharma.vishal.2201@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-bottom">
            <span>Greater Noida, India</span>
            <a className="phone-link" href="tel:+918744800408">+91 87448 00408</a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#top"><span className="wordmark-mark">VS</span><span>Vishal Sharma</span></a>
        <span>© {new Date().getFullYear()} Vishal Sharma</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
