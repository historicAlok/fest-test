import { useReveal } from '@/hooks/useReveal';

const current = ['Bangalore', 'Chennai', 'Mumbai'];
const upcoming = ['Hyderabad', 'Delhi NCR'];

export function Locations() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="locations section-dark section-pad" id="locations" ref={ref}>
      <div className={`locations-top ${visible ? 'in' : ''}`}>
        <div>
          <p className="eyebrow gold"><span /> Where we work</p>
          <h2>Close to<br /><em>where you are.</em></h2>
        </div>
        <p>Currently operating across three cities, with new locations arriving soon.</p>
      </div>

      <div className="location-grid">
        <div className={`location-card current ${visible ? 'in' : ''}`}>
          <span className="loc-status">Currently operating</span>
          {current.map((city) => (
            <h3 key={city}>{city}</h3>
          ))}
        </div>
        <div className={`location-card upcoming ${visible ? 'in' : ''}`} style={{ transitionDelay: '120ms' }}>
          <span className="loc-status">Coming soon</span>
          {upcoming.map((city) => (
            <h3 key={city}>{city}</h3>
          ))}
        </div>
        <div className={`location-card outline ${visible ? 'in' : ''}`} style={{ transitionDelay: '240ms' }}>
          <span className="loc-status">Beyond these</span>
          <h3>Other locations</h3>
          <p>Based on operational requirements</p>
        </div>
      </div>
    </section>
  );
}
