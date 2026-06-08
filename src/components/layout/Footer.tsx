import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mc-footer" role="contentinfo">
      <div className="mc-container">

        {/* Top grid */}
        <div className="mc-footer-grid">

          {/* Col 1 — Brand */}
          <div className="mc-footer-col">
            <h4>Mobility Canada</h4>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Expert en immigration et relocalisation au Canada.
              Accompagnement sur mesure depuis Paris et Montréal.
            </p>
            <ul>
              <li>
                <a href="mailto:contact@mobilitycanada.fr">contact@mobilitycanada.fr</a>
              </li>
              <li>
                <a href="tel:+15143770857">+1 (514) 377-0857</a>
              </li>
              <li>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>Paris, France métropolitaine &amp; Montréal, Canada</span>
              </li>
            </ul>
          </div>

          {/* Col 2 — Parcours */}
          <div className="mc-footer-col">
            <h4>Nos parcours</h4>
            <ul>
              <li><Link href="/etudiant">Étudiants</Link></li>
              <li><Link href="/particulier">Particuliers &amp; Familles</Link></li>
              <li><Link href="/entreprise">Entreprises B2B</Link></li>
              <li><Link href="/rendez-vous">Prendre rendez-vous</Link></li>
            </ul>
          </div>

          {/* Col 3 — Ressources */}
          <div className="mc-footer-col">
            <h4>Ressources</h4>
            <ul>
              <li><Link href="/#process">Notre méthode</Link></li>
              <li><Link href="/#guide">Guide de l&apos;expatrié (PDF)</Link></li>
              <li><Link href="/etudiant#faq-etudiant">FAQ Immigration</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Col 4 — Légal */}
          <div className="mc-footer-col">
            <h4>Informations légales</h4>
            <ul>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/loi-25">Conformité Loi 25</Link></li>
              <li><Link href="/cgu">CGU</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Giant wordmark — pleine largeur, sans mc-container pour éviter le clipping */}
      <div className="mc-footer-wordmark" aria-hidden="true">
        Mobility Canada
      </div>

      {/* Bottom bar */}
      <div className="mc-container">
        <div className="mc-footer-bottom">
          <span>© {CURRENT_YEAR} Mobility Canada. Tous droits réservés.</span>
          <span>RGPD · Loi 25</span>
          <span>FR | EN (bientôt)</span>
        </div>
      </div>
    </footer>
  );
}
