import { useReveal } from '@/hooks/useReveal';

const clients = [
  { name: 'Newton School of Technology', image: 'https://images.pexels.com/photos/20200756/pexels-photo-20200756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Campus dining' },
  { name: 'ISBR Bangalore', image: 'https://images.pexels.com/photos/37145891/pexels-photo-37145891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Institution catering' },
  { name: 'IFIM Bangalore', image: 'https://images.pexels.com/photos/5147366/pexels-photo-5147366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Campus food service' },
  { name: 'Physics Wallah', image: 'https://images.pexels.com/photos/38431957/pexels-photo-38431957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Educational catering' },
  { name: 'Welingkar', image: 'https://images.pexels.com/photos/36899861/pexels-photo-36899861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Institute dining' },
  { name: 'Ajeenkya DY Patil University', image: 'https://images.pexels.com/photos/5147362/pexels-photo-5147362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'University catering' },
  { name: 'S-VYASA University', image: 'https://images.pexels.com/photos/35427325/pexels-photo-35427325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Campus food programme' },
  { name: 'Other institutional & corporate environments', image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Diverse environments' },
];

export function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="experience section-pad" id="experience" ref={ref}>
      <div className={`experience-top ${visible ? 'in' : ''}`}>
        <div>
          <p className="eyebrow"><span /> Our experience</p>
          <h2>Trusted food-service<br /><em>across diverse environments.</em></h2>
        </div>
        <div className="experience-stat">
          <strong>10,000<span>+</span></strong>
          <p>Meals served daily across our partner locations</p>
        </div>
      </div>

      <div className="experience-grid">
        {clients.map((client, i) => (
          <article className={`exp-card ${visible ? 'in' : ''}`} key={client.name} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="exp-image">
              <img src={client.image} alt={client.name} loading="lazy" />
            </div>
            <div className="exp-body">
              <h3>{client.name}</h3>
              <p>{client.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
