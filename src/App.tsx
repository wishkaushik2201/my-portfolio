import { useEffect, useState, type FormEvent } from 'react'
import { getPortfolio, submitContact } from './api'
import type { Portfolio } from './types'
import './App.css'

function App() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [contactMessage, setContactMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getPortfolio(controller.signal)
      .then((data) => {
        setPortfolio(data)
        setLoadError(null)
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setLoadError(error instanceof Error ? error.message : 'Could not load portfolio.')
      })

    return () => controller.abort()
  }, [retryCount])

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setContactStatus('sending')
    setContactMessage('')

    try {
      const result = await submitContact({
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        message: String(formData.get('message') ?? ''),
      })
      form.reset()
      setContactStatus('sent')
      setContactMessage(result.message)
    } catch (error: unknown) {
      setContactStatus('error')
      setContactMessage(error instanceof Error ? error.message : 'Could not send message.')
    }
  }

  if (!portfolio) {
    return (
      <main className="api-state" aria-live="polite">
        {loadError ? (
          <>
            <p role="alert">{loadError}</p>
            <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
              Retry
            </button>
          </>
        ) : (
          <p role="status">Loading portfolio…</p>
        )}
      </main>
    )
  }

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
            <p className="eyebrow"><span className="status-dot" /> Software Engineer · {portfolio.hero.location}</p>
            <h1 id="intro-title">{portfolio.hero.headline} <span>{portfolio.hero.headlineAccent}</span></h1>
            <div className="intro-bottom">
              <p className="intro-description">
                {portfolio.hero.summary}
              </p>
              <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="intro-art" aria-label="Abstract composition of color and form" role="img">
            <div className="art-sun" />
            <div className="art-panel art-panel--coral" />
            <div className="art-panel art-panel--blue" />
            <div className="art-panel art-panel--yellow" />
            <span className="art-caption">{portfolio.hero.focus}</span>
            <span className="art-stamp">V<br />S</span>
          </div>
          <div className="intro-meta">
            <span>{portfolio.hero.years}</span>
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
            {portfolio.projects.map((project) => (
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
            <span className="section-index">{portfolio.experience.length} roles · {portfolio.hero.years}</span>
          </div>
          <div className="experience-list">
            {portfolio.experience.map((item) => (
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
            {portfolio.skillGroups.map((group) => (
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
              <h2 id="about-title">{portfolio.about.headline} <span>{portfolio.about.headlineAccent}</span></h2>
              <p>{portfolio.about.summary}</p>
              <div className="services">
                {portfolio.about.services.map((service, index) => (
                  <span key={service}>{String(index + 1).padStart(2, '0')} / {service}</span>
                ))}
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
            <span className="section-index">{portfolio.education.year}</span>
          </div>
          <div className="education-entry">
            <h3>{portfolio.education.degree}</h3>
            <p>{portfolio.education.field}</p>
            <span>{portfolio.education.institution}</span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Let&apos;s build<br /><span>something useful.</span></h2>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" maxLength={100} required />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} minLength={10} maxLength={3000} required />
            </label>
            <button type="submit" disabled={contactStatus === 'sending'}>
              {contactStatus === 'sending' ? 'Sending…' : 'Send message'}
              <span aria-hidden="true">↗</span>
            </button>
            {contactMessage && (
              <p className={`contact-feedback contact-feedback--${contactStatus}`} role={contactStatus === 'error' ? 'alert' : 'status'}>
                {contactMessage}
              </p>
            )}
          </form>
          <a className="contact-link" href={`mailto:${portfolio.contact.email}`}>
            {portfolio.contact.email} <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-bottom">
            <span>{portfolio.contact.location}</span>
            <a className="phone-link" href={`tel:${portfolio.contact.phone.replace(/\s/g, '')}`}>{portfolio.contact.phone}</a>
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
