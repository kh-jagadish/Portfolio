import './App.css'

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jagadish, home">
          J<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="intro" id="top" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow"><span className="status-dot" /> PORTFOLIO <span className="eyebrow-divider">/</span> 2026</p>
          <h1 id="intro-title">Hello, I’m <span>Jagadish.</span><br />I’m learning by making.</h1>
          <p className="intro-description">
            A home for the ideas, experiments, and projects I build along the way.
          </p>
          <a className="text-link" href="#work">Explore the work <span aria-hidden="true">↓</span></a>
        </div>
        <div className="intro-art" role="img" aria-label="A sunlit desk with a laptop and notebook">
          <div className="art-note">A LITTLE SPACE<br />TO MAKE THINGS</div>
          <div className="art-stamp">J<span>.</span></div>
          <div className="art-caption"><span>CURIOUS BY DEFAULT</span><span>01 / 03</span></div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PROCESS</p>
            <h2 id="work-title">Work in progress<span>.</span></h2>
          </div>
          <p className="section-note">Good things take a few iterations.<br />This collection is just getting started.</p>
        </div>
        <div className="work-list">
          <article className="work-item">
            <span className="work-number">01</span>
            <div className="work-title"><h3>Learning</h3><p>New tools, new ideas, one step at a time.</p></div>
            <span className="work-tag">ONGOING</span>
            <span className="work-arrow" aria-hidden="true">↗</span>
          </article>
          <article className="work-item">
            <span className="work-number">02</span>
            <div className="work-title"><h3>Building</h3><p>Small experiments made real on the web.</p></div>
            <span className="work-tag">IN THE MAKING</span>
            <span className="work-arrow" aria-hidden="true">↗</span>
          </article>
          <article className="work-item">
            <span className="work-number">03</span>
            <div className="work-title"><h3>Sharing</h3><p>More projects and details coming soon.</p></div>
            <span className="work-tag">UP NEXT</span>
            <span className="work-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <p className="eyebrow">A NOTE ABOUT ME</p>
        <div className="about-content">
          <h2 id="about-title">Curiosity first.<br /><span>Then make it useful.</span></h2>
          <p>This is where I’ll share a little about what I do, what I’m learning, and the kind of problems I like to solve. For now, it’s a work in progress, just like the best projects.</p>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div><p className="eyebrow">HAVE A GOOD ONE</p><h2>Thanks for stopping by<span>.</span></h2></div>
        <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        <p className="copyright">© 2026 Jagadish</p>
      </footer>
    </main>
  )
}

export default App
