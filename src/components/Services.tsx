import { useState } from 'react';
import { ArrowUpRight, Check, Plus, X } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    number: '01',
    title: 'Institutional & Campus Catering',
    text: 'Thoughtfully planned meals for campuses, institutions and large communities.',
    image: 'https://images.pexels.com/photos/8818660/pexels-photo-8818660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    subtitle: 'Complete Food-Service Solutions',
    intro: 'We provide end-to-end food services for universities, colleges and educational institutions.',
    features: [
      'Daily breakfast, lunch, dinner and snacks',
      'Campus cafeteria management',
      'Student dining services',
      'Mess operations',
      'Menu planning',
      'Food production and kitchen management',
      'Service & counter management',
      'Hygiene and quality processes',
      'Inventory and procurement management',
      'Manpower deployment',
      'Feedback and customer experience management',
    ],
    closing: 'Built for consistency. Designed for scale.',
  },
  {
    number: '02',
    title: 'Hostel & Residential Catering',
    text: 'Familiar, balanced food that feels like a reliable part of everyday life.',
    image: 'https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    subtitle: 'Dependable Everyday Dining',
    intro: 'We understand that residential food service is not just about serving meals — it is about creating a dependable everyday dining experience.',
    features: [
      'Balanced menus',
      'Vegetarian & non-vegetarian options as required',
      'Breakfast, lunch, dinner & snacks',
      'High-volume meal production',
      'Hygiene and sanitation',
      'Portion control',
      'Timely service',
      'Student feedback',
      'Regular menu rotation',
    ],
    closing: 'We focus on making everyday food nutritious, consistent, hygienic and enjoyable.',
  },
  {
    number: '03',
    title: 'Corporate Cafeteria Services',
    text: 'Well-run food programmes that make workplace dining a better experience.',
    image: 'https://images.pexels.com/photos/12333021/pexels-photo-12333021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    subtitle: 'Managed Cafeteria Solutions',
    intro: 'A good cafeteria can become an important part of workplace culture. Taste Feast offers managed cafeteria solutions for corporate offices and professional environments.',
    features: [
      'Daily employee meals',
      'Breakfast & evening snacks',
      'Lunch services',
      'Cafeteria operations',
      'Pantry & beverage services',
      'Menu planning',
      'Kitchen operations',
      'Vendor & procurement management',
      'Hygiene management',
      'Service staff deployment',
    ],
    closing: 'Because better food creates better experiences.',
  },
  {
    number: '04',
    title: 'Events & Catering',
    text: 'Memorable food and considered service for moments worth gathering around.',
    image: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    subtitle: 'Professionally Managed Catering',
    intro: 'From intimate corporate gatherings to large-scale institutional events, Taste Feast provides professionally managed catering solutions. We can support:',
    features: [
      'Corporate events',
      'Conferences',
      'Seminars',
      'Workshops',
      'University events',
      'Student events',
      'Launches & celebrations',
      'Institutional functions',
      'Special occasions',
    ],
    closing: 'Your event. Our food. One great experience.',
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="services section-pad section-cream" id="services" ref={ref}>
      <div className={`section-heading ${visible ? 'in' : ''}`}>
        <div>
          <p className="eyebrow"><span /> What we do</p>
          <h2>Good food.<br /><em>Well managed.</em></h2>
        </div>
        <p>From the first menu conversation to the final plate, we make food operations feel considered, dependable and distinctly human.</p>
      </div>

      <div className="service-grid">
        {services.map((service, i) => (
          <article
            className={`service-card ${visible ? 'in' : ''}`}
            key={service.number}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
            aria-label={`View details for ${service.title}`}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <span>{service.number}</span>
              <div className="service-overlay">
                <Plus size={22} />
              </div>
            </div>
            <div className="service-body">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-cta">
                View details <ArrowUpRight size={17} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {active !== null && (
        <div className="service-modal" onClick={() => setActive(null)}>
          <div className="service-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close details"><X size={22} /></button>
            <div className="modal-image">
              <img src={services[active].image} alt={services[active].title} />
              <span>{services[active].number}</span>
            </div>
            <div className="modal-content">
              <p className="eyebrow"><span /> {services[active].subtitle}</p>
              <h3>{services[active].title}</h3>
              <p className="modal-intro">{services[active].intro}</p>
              <ul className="modal-features">
                {services[active].features.map((f) => (
                  <li key={f}><Check size={15} /> {f}</li>
                ))}
              </ul>
              <p className="modal-closing">{services[active].closing}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
