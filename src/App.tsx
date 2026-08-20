import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { Intro } from '@/components/Intro';
import { TrustNumbers } from '@/components/TrustNumbers';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Locations } from '@/components/Locations';
import { useReveal } from '@/hooks/useReveal';

const images = {
  hero: 'https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  table: 'https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  students: 'https://images.pexels.com/photos/8818660/pexels-photo-8818660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  events: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const values = [
  ['Quality', 'Food people look forward to, made with care.'],
  ['Hygiene', 'Clean, responsible practices at every touchpoint.'],
  ['Consistency', 'A dependable experience, meal after meal.'],
  ['People', 'Professional teams who understand hospitality.'],
  ['Experience', 'Operational thinking with a human point of view.'],
];

const operations = ['Menu Planning', 'Procurement', 'Kitchen', 'Quality Control', 'Manpower', 'Service', 'Feedback'];

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <div className="site-shell">
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}

      <header className={`site-header ${introDone ? 'in' : ''}`}>
        <a className="brand" href="#top" aria-label="Taste Feast home">
          <img src="/tastefeast-logo-removebg-preview.png" alt="Taste Feast and Events" />
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#philosophy" onClick={closeMenu}>Our food</a>
          <a href="#locations" onClick={closeMenu}>Locations</a>
          <button className="nav-cta" onClick={scrollToContact}>Get in touch <ArrowRight size={17} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <Hero onContact={scrollToContact} />

        <TrustNumbers />

        <About />

        <Services />

        <Philosophy />

        <Values />

        <Operations />

        <Events onContact={scrollToContact} />

        <Experience />

        <Locations />

        <Contact submitted={submitted} setSubmitted={setSubmitted} />
      </main>

      <Footer />
    </div>
  );
}

function Hero({ onContact }: { onContact: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="hero section-dark" ref={ref}>
      <div className="hero-pattern" />
      <div className={`hero-content ${visible ? 'in' : ''}`}>
        <p className="eyebrow"><span /> Food services, done right</p>
        <h1>Great meals.<br /><em>Happy people.</em><br />Better experiences.</h1>
        <p className="hero-copy">Premium food services for campuses, institutions, corporates, hostels and events across South &amp; West India.</p>
        <div className="hero-actions">
          <button className="button button-gold" onClick={onContact}>Get in touch <ArrowRight size={18} /></button>
          <a className="text-link light" href="#services">Explore our services <ArrowRight size={17} /></a>
        </div>
      </div>
      <div className={`hero-visual ${visible ? 'in' : ''}`}>
        <div className="hero-image-frame"><img src={images.hero} alt="A beautifully arranged Indian thali" /></div>
        <div className="memory-stamp"><span>We serve</span><strong>memories</strong><small>since day one</small></div>
        <div className="hero-caption"><span>01</span><span>Food that brings people together</span></div>
      </div>
      <a className="scroll-cue" href="#numbers"><span>Scroll to explore</span></a>
    </section>
  );
}

function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="about section-pad" id="about" ref={ref}>
      <div className={`section-intro ${visible ? 'in' : ''}`}>
        <p className="eyebrow"><span /> About Taste Feast</p>
        <h2>Food is more than<br /><em>what's on the plate.</em></h2>
      </div>
      <div className={`about-content ${visible ? 'in' : ''}`}>
        <p className="lead">It is the rhythm of a campus, the pause in a busy workday, the comfort of home when you live away from it.</p>
        <p>At Taste Feast, we bring <em>quality, hygiene, consistency</em> and customer experience together to create food programmes that work beautifully at scale.</p>
        <a className="text-link dark" href="#philosophy">Discover our approach <ArrowRight size={17} /></a>
      </div>
      <div className={`about-image ${visible ? 'in' : ''}`}>
        <img src={images.table} alt="Indian meal served for a shared dining experience" />
        <span>Made for real life<br /><em>and every day</em></span>
      </div>
    </section>
  );
}

function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="philosophy section-dark section-pad" id="philosophy" ref={ref}>
      <div className={`philosophy-copy ${visible ? 'in' : ''}`}>
        <p className="eyebrow gold"><span /> Our food philosophy</p>
        <h2>Fresh.<br />Balanced.<br /><em>Familiar.</em><br />Enjoyable.</h2>
        <p>We believe everyday food should feel generous, thoughtfully made and easy to enjoy. That simple belief guides every menu we plan.</p>
      </div>
      <div className={`philosophy-visual ${visible ? 'in' : ''}`}>
        <img src={images.events} alt="Rich Indian food prepared for a gathering" />
        <div className="round-note"><Sparkles size={16} /><span>Familiar flavours.<br />Thoughtful choices.</span></div>
      </div>
    </section>
  );
}

function Values() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="values section-pad" id="why" ref={ref}>
      <div className={`section-heading ${visible ? 'in' : ''}`}>
        <div>
          <p className="eyebrow"><span /> Why Taste Feast</p>
          <h2 className="values-heading">
            <span className={`word ${visible ? 'in' : ''}`} style={{ transitionDelay: '0ms' }}>Care</span>{' '}
            <span className={`word ${visible ? 'in' : ''}`} style={{ transitionDelay: '100ms' }}>you</span>{' '}
            <span className={`word ${visible ? 'in' : ''}`} style={{ transitionDelay: '200ms' }}>can</span>{' '}
            <span className={`word gold ${visible ? 'in' : ''}`} style={{ transitionDelay: '350ms' }}>
              <em>count</em>
            </span>{' '}
            <span className={`word gold ${visible ? 'in' : ''}`} style={{ transitionDelay: '450ms' }}>
              <em>on.</em>
            </span>
          </h2>
        </div>
        <p className={`values-copy ${visible ? 'in' : ''}`} style={{ transitionDelay: '600ms' }}>Professional food service is built on details. We stay close to the details that make an experience feel effortless.</p>
      </div>
      <div className="value-list">
        {values.map(([title, text], index) => (
          <div className={`value-row ${visible ? 'in' : ''}`} key={title} style={{ transitionDelay: `${700 + index * 100}ms` }}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <Check size={17} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Operations() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="operations section-cream section-pad" id="operations" ref={ref}>
      <div className={`section-intro ${visible ? 'in' : ''}`}>
        <p className="eyebrow"><span /> Our operations</p>
        <h2>Behind every good<br /><em>meal is a good system.</em></h2>
      </div>
      <p className={`operations-copy ${visible ? 'in' : ''}`}>A smooth dining experience begins long before service. Our process brings together planning, people and precision at every stage.</p>
      <div className="process-journey">
        <div className={`process-track ${visible ? 'in' : ''}`} />
        {operations.map((step, index) => (
          <div className={`process-node ${visible ? 'in' : ''}`} key={step} style={{ transitionDelay: `${index * 120}ms` }}>
            <div className="process-node-inner">
              <span className="process-num">{String(index + 1).padStart(2, '0')}</span>
              <div className="process-dot" />
              <strong>{step}</strong>
            </div>
            {index < operations.length - 1 && <div className={`process-arrow ${visible ? 'in' : ''}`} style={{ transitionDelay: `${index * 120 + 80}ms` }}><ArrowRight size={18} /></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Events({ onContact }: { onContact: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="events section-pad" id="events" ref={ref}>
      <div className={`events-visual ${visible ? 'in' : ''}`}>
        <img src={images.students} alt="Friends sharing a festive meal together" />
        <div className="events-tag">Gather<br /><em>well.</em></div>
      </div>
      <div className={`events-copy ${visible ? 'in' : ''}`}>
        <p className="eyebrow"><span /> Events &amp; catering</p>
        <h2>Your event.<br /><em>Our food.</em><br />One great experience.</h2>
        <p>From intimate celebrations to large gatherings, we bring warmth, polish and food worth talking about.</p>
        <button className="button button-dark" onClick={onContact}>Plan your event <ArrowRight size={18} /></button>
      </div>
    </section>
  );
}

function Contact({ submitted, setSubmitted }: { submitted: boolean; setSubmitted: (v: boolean) => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="contact section-pad" id="contact" ref={ref}>
      <div className={`contact-intro ${visible ? 'in' : ''}`}>
        <p className="eyebrow"><span /> Start a conversation</p>
        <h2>Let's serve<br /><em>something memorable.</em></h2>
        <p>Tell us what you need. We'll take care of the rest.</p>
        <div className="contact-detail"><MessageCircle size={20} /><div><span>Prefer a conversation?</span><strong>Talk to Taste Feast</strong></div></div>
        <div className="contact-detail"><Clock3 size={20} /><div><span>We'll get back to you</span><strong>Within one working day</strong></div></div>
      </div>
      <form className={`enquiry-form ${visible ? 'in' : ''}`} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        {submitted ? (
          <div className="success-message">
            <ShieldCheck size={36} />
            <h3>Thank you for reaching out.</h3>
            <p>Your enquiry has been noted. The Taste Feast team will be in touch soon.</p>
            <button type="button" className="button button-dark" onClick={() => setSubmitted(false)}>Send another enquiry</button>
          </div>
        ) : (
          <>
            <div className="form-row">
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Company / Institution<input required name="company" placeholder="Organisation name" /></label>
            </div>
            <div className="form-row">
              <label>Phone number<input required name="phone" type="tel" placeholder="+91" /></label>
              <label>Email address<input required name="email" type="email" placeholder="you@company.com" /></label>
            </div>
            <div className="form-row">
              <label>City<input required name="city" placeholder="Where are you based?" /></label>
              <label>Requirement type
                <select required name="requirement" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Institutional & campus catering</option>
                  <option>Hostel & residential catering</option>
                  <option>Corporate cafeteria services</option>
                  <option>Events & catering</option>
                </select>
                <ChevronDown className="select-icon" size={16} />
              </label>
            </div>
            <label>Estimated number of people<input name="people" placeholder="How many people do you serve?" /></label>
            <label>Tell us a little more<textarea name="message" rows={4} placeholder="Share a little about what you're looking for..." /></label>
            <button className="button button-dark submit-button" type="submit">Submit enquiry <ArrowRight size={18} /></button>
          </>
        )}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="footer-brand">
        <img src="/tastefeast-logo-removebg-preview.png" alt="Taste Feast and Events" />
        <p>We Serve Memories.</p>
      </div>
      <div className="footer-links">
        <div><span>Explore</span><a href="#about">About us</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#philosophy">Our food</a></div>
        <div><span>Connect</span><a href="#contact">Contact</a><a href="#contact">Careers</a><a href="#contact">Privacy &amp; terms</a></div>
        <div><span>Follow along</span><div className="socials"><a href="#top" aria-label="Instagram"><Instagram size={18} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Taste Feast &amp; Events</span><span>Food made meaningful.</span></div>
    </footer>
  );
}

export default App;
