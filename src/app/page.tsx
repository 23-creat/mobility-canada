import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Mobility Canada — Experts en Immigration, Visa et Relocalisation au Canada",
  description:
    "Accompagnement sur mesure pour votre visa étudiant, permis de travail et résidence permanente au Canada. Présent dans les DOM-TOM.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════ */}
        <section className="hero" data-hero-dark aria-labelledby="home-h1">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />

          <div className="hero-inner mc-container">
            <h1 id="home-h1">
              <span className="line"><span>Votre vie</span></span>
              <span className="line"><span className="accent">au Canada.</span></span>
              <span className="line"><span className="outline">Sans friction.</span></span>
            </h1>

            <div className="hero-sub-row">
              <p className="hero-sub">
                Visa étudiant, résidence permanente, mobilité RH internationale — Mobility Canada
                gère chaque démarche de A à Z. Vous vous concentrez sur votre nouveau départ.
              </p>
              <div className="hero-ctas">
                <Link href="/rendez-vous" className="btn btn-light btn-arrow">
                  Consultation gratuite
                </Link>
                <Link href="#apropos" className="btn btn-ghost-dark">
                  Notre expertise
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-stats" role="list" aria-label="Chiffres clés">
            {[
              { n: "1 100€", unit: "",     l: "Service dès" },
              { n: "6",      unit: "",    l: "Services disponibles" },
              { n: "M-6",    unit: "",    l: "Délai recommandé" },
              { n: "100 %",  unit: "",    l: "Paiement avant départ" },
            ].map(({ n, unit, l }) => (
              <div key={l} className="hero-stat" role="listitem">
                <div className="n">{n}<span className="unit">{unit}</span></div>
                <div className="l">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2. MARQUEE BAND
        ══════════════════════════════════════════════ */}
        <div className="uni-marquee" data-hero-dark aria-hidden="true">
          <div className="mc-marquee">
            <div className="mc-marquee-track">
              {[
                "McGill University", "Université de Montréal", "Concordia", "UQAM",
                "Université Laval", "HEC Montréal", "Polytechnique", "UQAC",
                "McGill University", "Université de Montréal", "Concordia", "UQAM",
                "Université Laval", "HEC Montréal", "Polytechnique", "UQAC",
              ].map((name, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
                  {name}
                  <span className="sep" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            3. PATHS — 3 parcours
        ══════════════════════════════════════════════ */}
        <section className="paths" aria-labelledby="paths-heading">
          <div className="mc-container">
            <div className="paths-head">
              <div>
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Nos parcours</span>
                </div>
                <h2 id="paths-heading" className="big-heading mc-reveal">
                  Choisissez<br />
                  <span className="muted">votre chemin.</span>
                </h2>
              </div>
              <Link href="/rendez-vous" className="btn btn-primary btn-arrow mc-reveal">
                Démarrer
              </Link>
            </div>

            <div className="paths-grid">

              {/* Étudiant — featured */}
              <Link href="/etudiant" className="path-card is-featured mc-reveal">
                <div className="path-featured-pill">Populaire</div>
                <div className="path-num">01 — ÉTUDIANT</div>
                <h3 className="path-title">Études au Canada</h3>
                <p className="path-desc">
                  Admission, CAQ, permis d&apos;études et logement sécurisé avant le départ.
                  Votre enfant arrive avec tout en ordre.
                </p>
                <ul className="path-list">
                  <li><span>Validation programme</span><span>Choix optimal</span></li>
                  <li><span>Assistance immigration</span><span>Avocats partenaires</span></li>
                  <li><span>Logement sécurisé</span><span>Avant le départ</span></li>
                  <li><span>Accueil aéroport</span><span>Inclus dans le pack</span></li>
                </ul>
                <span className="path-cta">Voir le parcours étudiant</span>
              </Link>

              {/* Particulier */}
              <Link href="/particulier" className="path-card mc-reveal">
                <div className="path-num">02 — PARTICULIER</div>
                <h3 className="path-title">S&apos;installer</h3>
                <p className="path-desc">
                  Résidence permanente, logement, école, banque — un seul conseiller
                  porte toute la charge administrative à votre place.
                </p>
                <ul className="path-list">
                  <li><span>Résidence permanente</span><span>Express Entry</span></li>
                  <li><span>Logement &amp; école</span><span>Avant l&apos;arrivée</span></li>
                  <li><span>Banque &amp; RAMQ</span><span>J+1</span></li>
                  <li><span>Permis conjoint</span><span>Inclus</span></li>
                </ul>
                <span className="path-cta">Voir le parcours famille</span>
              </Link>

              {/* Entreprise */}
              <Link href="/entreprise" className="path-card mc-reveal">
                <div className="path-num">03 — ENTREPRISE</div>
                <h3 className="path-title">Mobilité RH</h3>
                <p className="path-desc">
                  EIMT, permis de travail, transferts intra-compagnie. Réduisez votre
                  time-to-hire et éliminez le risque IRCC.
                </p>
                <ul className="path-list">
                  <li><span>EIMT</span><span>3–4 semaines</span></li>
                  <li><span>Permis de travail</span><span>Prioritaire</span></li>
                  <li><span>Transfert ICT</span><span>Sans EIMT</span></li>
                  <li><span>Onboarding J+1</span><span>Opérationnel</span></li>
                </ul>
                <span className="path-cta">Voir les solutions B2B</span>
              </Link>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. ÉQUIPE — Frédéric & Diana
        ══════════════════════════════════════════════ */}
        <section id="apropos" className="equipe" aria-labelledby="equipe-heading">
          <div className="mc-container">

            {/* Header */}
            <div className="equipe-header mc-reveal">
              <div className="eyebrow-row" style={{ justifyContent: "center" }}>
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Notre équipe</span>
              </div>
              <h2 id="equipe-heading" className="equipe-heading">
                Deux experts.<br />
                <span className="muted">Un seul objectif.</span>
              </h2>
              <blockquote className="equipe-philosophy">
                &ldquo;Voir son enfant partir à 6 000 km de la maison, c&apos;est une étape immense.
                Nous ne sommes pas là pour vous vendre du rêve, mais pour être votre relais sur le terrain.
                Notre seul but : que vos enfants atterrissent en douceur, et que vous puissiez souffler.&rdquo;
                <cite>— Diana &amp; Frédéric</cite>
              </blockquote>
            </div>

            {/* Cards */}
            <div className="equipe-cards">

              {/* Frédéric */}
              <article className="equipe-card mc-reveal">
                <div className="equipe-card-photo">
                  <Image
                    src="/frederic.jpg"
                    alt="Portrait de Frédéric Clément"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 680px) 100vw, 430px"
                  />
                </div>
                <div className="equipe-card-body">
                  <p className="equipe-card-tagline">
                    &ldquo;Mon métier, c&apos;est d&apos;éviter que le projet de votre enfant ne déraille.&rdquo;
                  </p>
                  <h3 className="equipe-card-name">Frédéric Clément</h3>
                  <p className="equipe-card-role">Mobilité &amp; Logement · Paris</p>
                  <hr className="equipe-card-divider" aria-hidden="true" />
                  <p className="equipe-card-bio">
                    Ça fait près de 20 ans que je gère des dossiers de mobilité, avec une grande attache
                    pour les familles d&apos;Outre-mer. Mon rôle : prendre tout le stress à ma charge — logement
                    sécurisé, dossier qui tient la route, zéro mauvaise surprise. Je ne fais pas de longs
                    discours, je m&apos;assure que les choses sont faites carrément.
                  </p>
                </div>
              </article>

              {/* Diana */}
              <article className="equipe-card mc-reveal">
                <div className="equipe-card-photo">
                  <Image
                    src="/diana.jpg"
                    alt="Portrait de Diana Torbay-Clément"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 42%" }}
                    sizes="(max-width: 680px) 100vw, 430px"
                  />
                </div>
                <div className="equipe-card-body">
                  <p className="equipe-card-tagline">
                    &ldquo;Je suis le premier visage familier qu&apos;ils croisent en arrivant à Montréal.&rdquo;
                  </p>
                  <h3 className="equipe-card-name">Diana Torbay-Clément</h3>
                  <p className="equipe-card-role">Terrain &amp; Accueil · Montréal</p>
                  <hr className="equipe-card-divider" aria-hidden="true" />
                  <p className="equipe-card-bio">
                    Mon quotidien, c&apos;est le terrain. J&apos;attends vos enfants à l&apos;aéroport, je les accompagne
                    pour le compte en banque, les clés, le métro. Je veille sur eux comme on le ferait pour
                    sa propre famille. Une mission réussie, c&apos;est quand ils appellent le soir en disant :
                    &ldquo;Ça y est, je suis chez moi.&rdquo;
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. MONTRÉAL / CITIES
        ══════════════════════════════════════════════ */}
        <section className="cities" aria-labelledby="cities-heading">
          <div className="mc-container">
            <div className="cities-head mc-reveal">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Destination phare</span>
              </div>
              <h2 id="cities-heading" className="big-heading">
                Montréal.<br />
                <span className="muted">La ville qui vous attend.</span>
              </h2>
            </div>

            <div className="mtl-wrap">
              <div className="mtl-hero" aria-label="Montréal, Canada">
                <Image
                  src="/mtl-skyline.jpg"
                  alt=""
                  fill
                  className="mtl-photo"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                  aria-hidden="true"
                />
                <div className="mtl-bg" aria-hidden="true" />
                <div className="mtl-noise" aria-hidden="true" />
                <div className="mtl-content">
                  <div className="mtl-meta eyebrow">45°30&apos;N · 73°34&apos;O · Québec, Canada</div>
                  <div className="mtl-name" aria-hidden="true">Mtl.</div>
                  <p className="mtl-tag">
                    Deuxième ville francophone mondiale. Hub technologique, culturel et universitaire.
                    Qualité de vie exceptionnelle à coût européen.
                  </p>
                </div>
              </div>

              <div className="mtl-facts">
                {[
                  { k: "30+",     l: "Universités dans le Grand Montréal" },
                  { k: "2ème",    l: "Ville francophone mondiale par la population" },
                  { k: "Top 10",  l: "QS Best Student Cities 2024" },
                  { k: "−40 %",   l: "vs. coût de la vie parisien" },
                ].map(({ k, l }) => (
                  <div key={l} className="mtl-fact mc-reveal">
                    <div className="k">{k}</div>
                    <div className="l">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. PROCESS
        ══════════════════════════════════════════════ */}
        <section id="process" className="process" aria-labelledby="process-heading">
          <div className="mc-container">
            <div className="process-head">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Notre méthode</span>
              </div>
              <h2 id="process-heading" className="big-heading mc-reveal">
                4 étapes.<br />
                <span className="muted">Zéro surprise.</span>
              </h2>
            </div>

            <div className="process-steps">
              {[
                { n: "M-6", title: "Validation du programme", desc: "Analyse de profil, choix du programme et de l'établissement, plan d'action personnalisé. Consultation gratuite pour poser les bases.", dur: "Consultation gratuite" },
                { n: "M-4", title: "Dossier d'admission",     desc: "Constitution du dossier, obtention de la lettre d'admission. Orientation vers nos avocats et para-juristes partenaires pour les démarches immigration.", dur: "CAQ + permis d'études" },
                { n: "M-2", title: "Permis obtenu",           desc: "Permis d'études validé, logement sécurisé, billet confirmé. Le paiement du volet relocalisation est activé à cette étape.", dur: "Logement confirmé" },
                { n: "Jour J", title: "Accueil &amp; installation", desc: "Accueil à l'aéroport, remise des clés, 2 jours d'accompagnement sur place (16h). Compte bancaire, RAMQ, NAS — tout bouclé.", dur: "Opérationnel dès J+1" },
              ].map(({ n, title, desc, dur }) => (
                <div key={n} className="process-step mc-reveal">
                  <div className="num" aria-hidden="true">{n}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="dur">{dur}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            7. TESTIMONIALS
        ══════════════════════════════════════════════ */}
        <section className="tstm" data-hero-dark aria-labelledby="tstm-heading">
          <div className="mc-container">
            <div className="tstm-head mc-reveal">
              <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Ils nous font confiance</span>
              </div>
              <h2 id="tstm-heading" className="big-heading">
                Des parcours<br />
                <span style={{ color: "rgba(255,255,255,0.4)" }}>réussis.</span>
              </h2>
            </div>

            <div className="tstm-rail" role="list">
              {[
                {
                  quote: "Indispensable ! Avec Mobility, nous avons eu un accompagnement sur mesure, une écoute totale. Diana fut une aide précieuse pour la recherche du logement à Montréal et bien plus encore. Une prestation de qualité conforme à ses promesses. Je recommande Mobility Canada à toutes les personnes qui s'installent au Canada.",
                  name: "Delphine D.", role: "Installation famille · France → Montréal", av: "DD",
                },
                {
                  quote: "Merci à l'équipe de Mobility Canada de nous avoir accompagnés dans toutes les étapes de l'installation de notre fils au Canada pour ses études. Cela nous a permis d'éviter des dépenses superflues, de trouver un logement adapté et de sécuriser la signature du bail locatif. Un grand merci à l'ensemble de l'équipe.",
                  name: "David B.", role: "Famille · Installation étudiant · Canada", av: "DB",
                },
                {
                  quote: "Accompagnement impeccable, j'ai pu trouver mon logement en 3 mois. Un logement très bien situé et en dessous du prix du marché. Le suivi personnel est surtout humain et régulier. Merci !",
                  name: "Gamsye", role: "Particulier · Logement · Montréal", av: "GA",
                },
                {
                  quote: "Un service 5 étoiles. Diana est à l'écoute et elle sait rapidement comprendre les besoins. Malgré le court délai elle a su relever le défi. Je recommande +++",
                  name: "Nicaise V.", role: "Particulier · Montréal", av: "NV",
                },
              ].map(({ quote, name, role, av }) => (
                <div key={name} className="tstm-card" role="listitem">
                  <div className="tstm-rating" aria-label="5 étoiles">★★★★★</div>
                  <blockquote className="quote">&ldquo;{quote}&rdquo;</blockquote>
                  <div className="tstm-who">
                    <div className="av" aria-hidden="true">{av}</div>
                    <div>
                      <div className="name">{name}</div>
                      <div className="role">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
              <a
                href="https://share.google/jkxzEavPE2aBmKPKV"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-dark"
                style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Voir les 17 avis Google · 5,0 ★
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            8. BIG CTA
        ══════════════════════════════════════════════ */}
        <section className="big-cta" aria-labelledby="cta-home-heading">
          <div className="mc-container">
            <div className="big-cta-inner">
              <h2 id="cta-home-heading">
                Prêt à écrire<br />
                <em>votre prochain chapitre ?</em>
              </h2>
              <div className="ctas">
                <Link href="/rendez-vous" className="btn btn-light btn-arrow">
                  Consultation gratuite
                </Link>
                <a href="tel:+15143770857" className="btn btn-ghost-dark">
                  +1 (514) 377-0857
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
