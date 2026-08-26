const points = [
  ["01", "Premium quality", "Materials selected for reliable performance and lasting character."],
  ["02", "Modern design", "Contemporary finishes that work across residential and commercial spaces."],
  ["03", "Practical choice", "A curated collection makes it easier to compare what matters."],
  ["04", "Customer first", "A showroom experience designed around real project decisions."],
];

export default function WhyChoose() {
  return (
    <section className="section why-section">
      <div className="page-container">
        <div className="center-heading">
          <span className="eyebrow">WHY CHOOSE MARRKS C</span>
          <h2>More than materials.<br /><em>A better way to choose.</em></h2>
        </div>
        <div className="why-grid">
          {points.map(([number, title, text]) => (
            <div className="why-card" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
