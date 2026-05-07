@AGENTS.md

---

# Mobility Canada — Directives stratégiques pour Claude Code

> Ce fichier complète les directives techniques du dossier parent (`../CLAUDE.md`).
> Il définit CE QUE le site doit accomplir stratégiquement, et précisément ce qu'il faut modifier, créer, ou ne pas toucher.

---

## 1. Contexte — Qui est Mobility Canada

Mobility Canada (MC) est un **Guichet Unique Coordinateur** pour les étudiants francophones (principalement DOM-TOM : Martinique, Guadeloupe, La Réunion) qui veulent étudier à Montréal, Québec. MC coordonne trois choses en parallèle depuis un seul point de contact :
1. **La recherche de logement à Montréal** — MC fait les visites terrain pour le client
2. **La coordination immigration** — en partenariat avec Soleil Immigration (soleilimmigration.ca), consultant agréé CICC
3. **L'installation complète** — accueil aéroport, journée d'installation, RAMQ, NAS, banque, téléphone

**La promesse :** *"De ta lettre d'admission aux clés de ton appartement — tout, depuis un seul endroit."*

**Le persona principal (Léo) :** Étudiant DOM-TOM, 18-25 ans, vient de recevoir sa lettre d'admission d'une université québécoise. Submergé par le double défi logement + immigration. Parents décideurs financiers.

---

## 2. Ce qui EST fait et fonctionne — NE PAS TOUCHER

Le design, les animations et la structure de composants existants sont validés. Ne pas les modifier sauf instruction explicite.

- ✅ `src/app/globals.css` — design system complet, palette, typographie, classes utilitaires
- ✅ `src/components/layout/Navbar.tsx` — navigation principale
- ✅ `src/components/layout/Footer.tsx` — pied de page
- ✅ `src/components/layout/CookieBanner.tsx` — bannière cookies Loi 25
- ✅ `src/components/ui/ScrollReveal.tsx` — animations au scroll
- ✅ `src/components/ui/AnimatedCounter.tsx` — compteurs animés
- ✅ `src/components/ui/FaqAccordion.tsx` — accordéon FAQ
- ✅ `src/components/ui/LogoMark.tsx` — logo
- ✅ `src/app/particulier/page.tsx` — page particulier
- ✅ `src/app/entreprise/page.tsx` — page entreprise
- ✅ `src/app/layout.tsx` — layout racine (JSON-LD, fonts, metadata) — modifier uniquement pour ajouter le Pixel Meta

**Ne jamais :**
- Changer la palette de couleurs (#003366 bleu / #D80621 rouge)
- Supprimer ou remplacer les animations Framer Motion existantes
- Modifier la structure de composants qui fonctionnent déjà
- Toucher aux pages `particulier` et `entreprise`

---

## 3. Modifications ciblées — dans cet ordre

### PRIORITÉ 1 — Bloquant avant lancement des publicités

**A. Ajouter le Pixel Meta dans `src/app/layout.tsx`**

Ajouter après les scripts JSON-LD existants, sans rien modifier d'autre dans le fichier :

```tsx
<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'PIXEL_ID_A_REMPLACER');
    fbq('track', 'PageView');
  `}
</Script>
```

Créer aussi `src/types/fbq.d.ts` :
```ts
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: object) => void;
  }
}
export {};
```

---

**B. Retirer `LeadMagnetSection` de toutes les pages**

Le lead magnet PDF n'est pas au programme du Sprint 1. Trouver et retirer tous les imports et usages :
```bash
grep -r "LeadMagnetSection" src/
```
Ne pas supprimer le fichier composant — juste le retirer des pages.

---

**C. Corriger les chiffres dans `src/app/layout.tsx` et `src/app/page.tsx`**

- Remplacer `"1 200+ clients accompagnés"` → supprimer ou remplacer par `"Présent dans les DOM-TOM"` 
- Remplacer `"98% de succès"` → supprimer (chiffre non documenté)
- Ces chiffres ne correspondent pas à la réalité actuelle du service

---

**D. Corriger `src/app/rendez-vous/page.tsx`**

- Remplacer toutes les occurrences de `"30 minutes"` par `"15 minutes"` (l'appel de faisabilité dure 15 min)
- Remplacer `<RdvForm />` par un embed Calendly :

```tsx
<iframe
  src="https://calendly.com/COMPTE_A_CONFIGURER/appel-faisabilite-15min"
  width="100%"
  height="700"
  frameBorder={0}
  title="Réserver un appel de 15 minutes"
/>
```

Ne pas modifier le reste de la page (layout, copy gauche, trust badges) — juste remplacer le formulaire.

---

### PRIORITÉ 2 — Pages à créer

**E. Créer `src/app/reserver-ton-appel/page.tsx`** — Landing page publicités

C'est la page destination de toutes les publicités Meta. Règles absolues :
- **Pas de Navbar** — ne pas importer Navbar
- **Pas de Footer standard** — footer minimal uniquement (logo + email + WhatsApp)
- **Un seul objectif** : compléter le formulaire Tally
- `robots: { index: false, follow: false }` — ne pas indexer dans Google

Structure :
```
H1 : "De ta lettre d'admission aux clés de ton appart — on s'occupe de tout."
Sous-titre : "Réserve un appel gratuit de 15 min pour savoir si ton profil est éligible."
Réassurance 3 points : 15 min sans engagement / logement + immigration / DOM-TOM + France
Tally embed (iframe tally.so/embed/FORM_ID_A_CONFIGURER)
2 extraits d'avis Google en dessous du formulaire
Footer minimal : logo + contact@mobilitycanada.fr + lien WhatsApp
```

Reprendre le style visuel du site (couleurs, typographie, ScrollReveal) mais sans la Navbar.

---

**F. Créer `src/app/merci/page.tsx`** — Page de confirmation + tracking

Page simple. Déclenche les events Pixel selon le paramètre URL :

```tsx
"use client";
import { useEffect } from "react";
import { useSearchParams, Suspense } from "react";

function MerciContent() {
  const params = useSearchParams();
  useEffect(() => {
    const event = params.get("event");
    if (!window.fbq) return;
    if (event === "lead") window.fbq("trackCustom", "LeadQualifié");
    if (event === "booking") window.fbq("trackCustom", "AppelBooké");
  }, [params]);

  return (
    <main>
      <h1>C&apos;est confirmé ✅</h1>
      <p>Tu vas recevoir un email de confirmation dans quelques minutes.</p>
    </main>
  );
}

export default function MerciPage() {
  return <Suspense><MerciContent /></Suspense>;
}
```

---

**G. Créer `src/app/pas-encore-pret/page.tsx`** — Leads non qualifiés

Page d'accueil pour les prospects sans lettre d'admission (filtrés par Tally). Style visuel du site, Navbar présente.

Message : *"Ton projet est en bonne voie 💪 — Tu n'as pas encore ta lettre d'admission, pas de problème. Laisse-nous ton email."*
Formulaire simple : prénom + email → à connecter à Brevo (liste "En attente admission")
Bouton secondaire : Instagram MC

---

**H. Mettre à jour `src/app/etudiant/page.tsx`**

Vérifier et corriger uniquement le copy et les CTAs — ne pas toucher au design ni aux animations.

- Le H1 ou accroche principale doit refléter la promesse : *"De ta lettre d'admission aux clés de ton appartement — tout, depuis un seul endroit."*
- Tutoiement systématique avec l'étudiant
- Mention de Soleil Immigration comme partenaire agréé CICC
- CTA principal → `/reserver-ton-appel` (pas `/rendez-vous`)
- Focus Montréal/Québec uniquement — supprimer toute référence à Toronto ou Vancouver
- Ajouter une section dédiée aux parents (ton rassurant, vouvoiement) si absente

---

**I. Créer `src/app/og-image.jpg`**

Ajouter dans `/public/og-image.jpg` — image 1200×630px pour les partages sur réseaux sociaux.
Contenu : logo MC + promesse sur fond bleu #003366.

---

## 4. Règles absolues — messaging et légal

Ces règles s'appliquent à tout le copy écrit ou modifié sur le site.

### ❌ Ne jamais écrire

- ~~"représentation légale"~~
- ~~"nous soumettons votre dossier IRCC"~~
- ~~"nos avocats"~~
- ~~"solutions"~~, ~~"prestations"~~, ~~"services"~~ (mots corporate froids)
- ~~"c'est simple"~~, ~~"pas de souci"~~ (minimise la vraie douleur)
- ~~"numéro 1"~~, ~~"le meilleur"~~, ~~"unique"~~ (promesses vides)
- Chiffres non documentés ("98% de succès", "1 200+ clients")

### ✅ Toujours écrire

- *"coordination avec un consultant agréé"* pour la partie immigration
- *"Soleil Immigration (soleilimmigration.ca), consultant agréé CICC"* pour nommer le partenaire
- Tutoiement avec l'étudiant, vouvoiement optionnel avec les parents
- Phrases courtes. Ton direct. Empathique sans être condescendant.

### Vocabulaire validé

**Pour l'étudiant :** toit assuré · avant ton départ · de A à Z · on s'occupe de tout · un seul interlocuteur · on visite pour toi · clés en main · sérénité

**Pour les parents :** en sécurité · relais sur place · accompagné · tranquillité d'esprit · contact d'urgence

---

## 5. Règles du tunnel de conversion

Chaque page a un rôle précis. Ne pas mélanger les rôles.

| Page | Rôle | CTA principal | Navbar ? |
|---|---|---|---|
| `/` | Orienter | → `/etudiant` | ✅ |
| `/etudiant` | Convaincre Léo + parents | → `/reserver-ton-appel` | ✅ |
| `/rendez-vous` | Booking organique | Calendly embed | ✅ |
| `/reserver-ton-appel` | Conversion trafic ads | Tally embed | ❌ |
| `/pas-encore-pret` | Capture leads froids | Formulaire email | ✅ |
| `/merci` | Confirmation + tracking | — | ❌ |

**Règle :** `/reserver-ton-appel` n'apparaît jamais dans le menu de navigation. C'est une page invisible depuis le site, accessible uniquement via les liens publicitaires.
