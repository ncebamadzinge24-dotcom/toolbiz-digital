import { useState } from 'react'
import './App.css'

const stats = [
  { value: '120+', label: 'brands scaled' },
  { value: '4.9/5', label: 'average client rating' },
  { value: '32%', label: 'average lift in leads' },
  { value: '14 days', label: 'to standout launch' },
]

const services = [
  {
    title: 'Brand Strategy',
    text: 'Positioning, messaging, and market research that help your business become unmistakably memorable.',
  },
  {
    title: 'Web Design & Development',
    text: 'Conversion-focused websites built for speed, clarity, and seamless mobile experiences.',
  },
  {
    title: 'Digital Marketing',
    text: 'SEO, paid campaigns, and smart funnel optimization to turn traffic into qualified business growth.',
  },
  {
    title: 'Automation Systems',
    text: 'CRM, sales workflows, and client onboarding systems that remove friction and save your team time.',
  },
]

const process = [
  'Discovery & audit',
  'Strategy & roadmap',
  'Build & optimize',
  'Launch & grow',
]

const projects = [
  {
    name: 'Northstar Finance',
    result: '+76% qualified leads in 90 days',
    description: 'Repositioned the brand and launched a faster lead-generation funnel for a financial advisory firm.',
  },
  {
    name: 'VividNest Studio',
    result: '2.4x online inquiry growth',
    description: 'Built a visually rich portfolio and simplified the client booking flow for a design agency.',
  },
  {
    name: 'PrimeTrade Labs',
    result: '3x email conversions',
    description: 'Refined the customer journey and automated the first-touch follow-up process for a growth-stage startup.',
  },
]

const testimonials = [
  {
    quote:
      'Toolbiz Digital gave us a sharper story, a cleaner website, and a process that actually generated appointments.',
    author: 'Amina Yusuf',
    role: 'Founder, Northstar Finance',
  },
  {
    quote:
      'Their team translated a chaotic online presence into a polished brand system our customers instantly trust.',
    author: 'Daniel Clarke',
    role: 'Director, VividNest Studio',
  },
]

const defaultForm = {
  name: '',
  email: '',
  company: '',
  project: '',
  message: '',
}

function App() {
  const [formData, setFormData] = useState(defaultForm)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formStatus.type !== 'idle') {
      setFormStatus({ type: 'idle', message: '' })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const values = Object.values(formData).map((value) => String(value).trim())
    if (values.some((value) => value.length === 0)) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all fields so we can prepare your project brief.',
      })
      return
    }

    const subject = encodeURIComponent(`New enquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject type: ${formData.project}\n\nProject details:\n${formData.message}`
    )

    window.location.href = `mailto:hello@toolbizdigital.com?subject=${subject}&body=${body}`

    setFormStatus({
      type: 'success',
      message: 'Your email client is ready. We look forward to hearing from you.',
    })
    setFormData(defaultForm)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">T</span>
          <div>
            <strong>Toolbiz Digital</strong>
            <small>Growth partner</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="primary-button nav-cta" href="#contact">
          Book a call
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Digital strategy for growing businesses</span>
            <h1>Build a stronger brand, a faster sales engine, and a site people trust.</h1>
            <p>
              Toolbiz Digital helps service businesses turn online attention into real pipeline
              with smarter branding, sharper websites, and measurable marketing systems.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#contact">
                Request a proposal
              </a>
              <a className="secondary-button" href="#services">
                Explore services
              </a>
            </div>

            <ul className="hero-points" aria-label="Key outcomes">
              <li>Brand clarity that sells</li>
              <li>Conversion-ready web experiences</li>
              <li>Predictable growth systems</li>
            </ul>
          </div>

          <div className="hero-panel" aria-label="Growth overview">
            <div className="panel-card panel-main">
              <p className="panel-label">Performance snapshot</p>
              <h2>2025 growth sprint</h2>
              <div className="mini-chart" aria-hidden="true">
                <span style={{ height: '52%' }} />
                <span style={{ height: '68%' }} />
                <span style={{ height: '54%' }} />
                <span style={{ height: '82%' }} />
                <span style={{ height: '96%' }} />
                <span style={{ height: '100%' }} />
              </div>
            </div>

            <div className="panel-card panel-sub">
              <p>Lead quality</p>
              <strong>+128%</strong>
              <span>over the last quarter</span>
            </div>
          </div>
        </section>

        <section className="stats-grid section" aria-label="Business statistics">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">What we do</span>
            <h2>Everything your business needs to grow online.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="icon-badge" aria-hidden="true">
                  •
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <span className="eyebrow">How we work</span>
            <h2>A simpler system for better results.</h2>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <div key={step} className="process-card">
                <span className="step-number">0{index + 1}</span>
                <h3>{step}</h3>
                <p>
                  {index === 0 && 'We define your position, audience, and opportunity before building anything.'}
                  {index === 1 && 'We map the right strategy, offer, and action plan around your growth goals.'}
                  {index === 2 && 'We design and launch the website, funnel, or system with clear conversion goals.'}
                  {index === 3 && 'We refine performance, automate follow-up, and keep your pipeline moving.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <span className="eyebrow">Recent impact</span>
            <h2>Built for businesses that need measurable momentum.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-tag">Case study</div>
                <h3>{project.name}</h3>
                <strong>{project.result}</strong>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <div className="section-heading">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by founders and teams who want real traction.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Let’s talk</span>
            <h2>Ready to turn your business into a stronger digital brand?</h2>
            <p>
              Whether you need a sharper website, a clearer message, or a smarter growth engine,
              we can build the next step with you.
            </p>

            <ul className="contact-list">
              <li>Email: hello@toolbizdigital.com</li>
              <li>Phone: +1 (415) 555-0148</li>
              <li>Available for projects worldwide</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Business name"
              />
            </label>

            <label>
              Project type
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Branding, website, marketing, automation..."
              />
            </label>

            <label>
              Project details
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals and timelines."
                rows="4"
              />
            </label>

            {formStatus.message ? (
              <p className={`form-status ${formStatus.type}`} aria-live="polite">
                {formStatus.message}
              </p>
            ) : null}

            <button type="submit" className="primary-button submit-button">
              Send inquiry
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Toolbiz Digital. Built for ambitious businesses.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
