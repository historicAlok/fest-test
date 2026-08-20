import { CountUp } from './CountUp';
import { useReveal } from '@/hooks/useReveal';

const stats = [
  { end: 5, suffix: '+', label: 'Years of Experience' },
  { end: 10000, suffix: '+', label: 'Meals Served Daily' },
  { end: 2, suffix: '', label: 'Regions We Serve' },
  { end: 1, suffix: '', label: 'Consistent Experience' },
];

export function TrustNumbers() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="trust" id="numbers" ref={ref}>
      <div className="trust-grid">
        {stats.map((stat, i) => (
          <div className="trust-item" key={stat.label} style={{ transitionDelay: `${i * 120}ms` }}>
            <span className="trust-number">
              <CountUp end={stat.end} suffix={stat.suffix} start={visible} />
            </span>
            <span className="trust-label">{stat.label}</span>
            <span className={`trust-bar ${visible ? 'in' : ''}`} style={{ transitionDelay: `${i * 120 + 400}ms` }} />
          </div>
        ))}
      </div>
    </section>
  );
}
