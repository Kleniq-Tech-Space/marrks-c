import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShowroomCta() {
  return (
    <section className="section">
      <div className="page-container">
        <div className="showroom-banner">
          <div className="showroom-banner-image" />
          <div className="showroom-banner-copy">
            <span className="eyebrow">DESIGN YOUR SPACE</span>
            <h2>See the material before you make the decision.</h2>
            <p>Visit the MARRKS C showroom, compare finishes and reserve what works for your project.</p>
            <Link href="/showroom" className="button button-primary">Visit the showroom <ArrowRight size={17} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
