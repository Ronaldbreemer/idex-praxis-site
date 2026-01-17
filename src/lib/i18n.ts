export type Lang = "nl" | "en" | "it";

export const SUPPORTED: Lang[] = ["nl", "en", "it"];
export const FALLBACK: Lang = "en"; // bij twijfel Engels

export function normalizeLang(input?: string | null): Lang {
  const v = (input || "").toLowerCase();
  if (v.startsWith("nl")) return "nl";
  if (v.startsWith("it")) return "it";
  if (v.startsWith("en")) return "en";
  return FALLBACK;
}

export function isSupported(input?: string | null): input is Lang {
  return SUPPORTED.includes((input || "") as Lang);
}

export function langFromParams(params: Record<string, string | undefined>): Lang {
  const p = params.lang || "";
  return isSupported(p) ? (p as Lang) : FALLBACK;
}

export function withLang(lang: Lang, slug = "") {
  const clean = slug.replace(/^\//, "");
  return `/${lang}/${clean}`.replace(/\/$/, "") + "/";
}

export function langLabel(lang: Lang) {
  return lang === "nl" ? "NL" : lang === "it" ? "IT" : "EN";
}

export const copy = {
  nl: {
    meta: {
      title: "IDEX Praxis - Praktijksoftware die jouw werkwijze volgt",
      desc: "Een veilige plek voor intake, trajecten en voortgang - zonder dat jij je methode hoeft aan te passen aan standaardsoftware.",
    },
    common: {
      brandName: "IDEX Praxis",
      logoAlt: "IDEX Praxis logo",
      primaryNavLabel: "Hoofdmenu",
      menuLabel: "Menu",
      languageSwitcherLabel: "Taal",
    },
    nav: {
      home: "Home",
      werkwijze: "Werkwijze",
      vergelijking: "Vergelijking",
      aanbod: "Aanbod",
      contact: "Contact",
      cases: "Cases",
      faq: "FAQ",
    },
    cta: {
      kennismaking: "Plan een kennismaking (15 min)",
      scan: "Praxis Scan (?750)",
      aanbod: "Bekijk het aanbod",
      cases: "Bekijk cases",
      faq: "Lees de FAQ",
    },
    ctaPanel: {
      kicker: "Volgende stap",
      badgeTitle: "Praxis",
      badgeSubtitle: "MVP",
      stats: [
        { n: "15", l: "min intake" },
        { n: "1", l: "kernworkflow" },
        { n: "0", l: "lock-in" },
      ],
    },
    footer: {
      blurb: "Praxis bouwt praktijksoftware die jouw werkwijze volgt - veilig, overzichtelijk en overdraagbaar.",
      pagesLabel: "Pagina's",
      contactLabel: "Contact",
    },
    home: {
      heroKicker: "Maatwerk praktijksoftware",
      heroTitle: "Slimme praktijksoftware die jouw werkwijze volgt.",
      heroSub:
        "Een veilige plek voor intake, trajecten en voortgang - zonder dat jij je methode hoeft aan te passen aan een standaardpakket.",
      heroForWho: "Voor o.a. fysiotherapie, psychologie, coaching en kleinschalige praktijken.",
      scanHint: "Praxis Scan: plan + roadmap in 1-2 weken (verrekenbaar).",
      heroOrbTitle: "Workflow - Rust - Tijdwinst",
      heroOrbBody: "Geen ruis, geen lock-in - een heldere kernflow die werkt.",
      heroOrbExample: "Intake -> plan -> sessies -> verslag -> export",
      promises: [
        { t: "Overzicht & rust", d: "Alles terugvindbaar, met rollen en rechten." },
        { t: "Privacy-by-design", d: "Duidelijke afspraken over opslag, toegang en bewaartermijnen." },
        { t: "Workflow op maat", d: "Intake -> doelen -> sessies -> oefeningen -> evaluatie." },
      ],
      stats: [
        { n: "1", l: "kernworkflow eerst" },
        { n: "EU", l: "hosting mogelijk" },
        { n: "0", l: "lock-in" },
        { n: "100%", l: "overdraagbaar" },
      ],
      herkenbaarTitle: "Herkenbaar?",
      herkenbaarBody:
        "Werk je met losse documenten, notities en tools? Dan gaat er ongemerkt veel tijd naar administratie. IDEX Praxis brengt structuur: clientinformatie, stappen in het traject en oefeningen op een plek, zodat jij meer aandacht overhoudt voor het contact.",
      watJeKrijgtTitle: "Wat je krijgt",
      watJeKrijgtIntro:
        "Standaardsoftware is 'one size fits most'. Praxis is voor 'one size fits jouw praktijk'.",
      watJeKrijgtBullets: [
        "Eerste werkbare versie van een kernworkflow (snel waarde).",
        "Templates, vragenlijsten en schemas passend bij jouw aanpak.",
        "Overzichtelijke verslaglegging en eenvoudige exports/rapportage.",
        "Overdraagbaar: documentatie + broncode + overdracht (geen vendor lock-in).",
        "Uitbreiden wanneer het nodig is, nazorg op afroep (geen abonnement).",
      ],
      tooltipTitle: "Open source & EU-hosting (wat bedoelen we hiermee?)",
      tooltipBody:
        "We bouwen met open-source componenten en kunnen hosten in Duitsland (Hetzner). Dat geeft meer transparantie en minder afhankelijkheid. Je krijgt bovendien documentatie + broncode, zodat je niet vastzit aan een leverancier.",
      hoeWerktTitle: "Hoe het werkt",
      hoeWerktSteps: [
        ["Kennismaking (15 min)", "Doelen, knelpunten en huidige werkwijze."],
        ["Scope-schets", "We kiezen een kernworkflow met direct effect."],
        ["Offerte (vaste prijs)", "Scope, planning, acceptatiecriteria en fixed price."],
        ["Bouw in mijlpalen", "Tussentijds testen en bijsturen binnen de scope."],
        ["Oplevering + overdracht", "Documentatie + broncode + overdracht. Nazorg op afroep."],
      ],
      prijsTitle: "Indicatie (eerste werkbare versie)",
      prijsBody:
        "Een eerste werkbare versie voor een kernworkflow (bijv. intake + verslag of afspraken + verslag) ligt vaak tussen ?1.500 en ?5.000, afhankelijk van rollen, templates en rapportage. Wil je eerst zekerheid? Dan is er de Praxis Scan (?750) - die wordt verrekend als je doorgaat.",
      securityTitle: "Veiligheid & privacy",
      securityBody:
        "Privacy en informatiebeveiliging zijn onderdeel van de scope. Minimaal: rolgebaseerde toegang, logging, back-ups, veilige wachtwoordopslag en afspraken over hosting/subverwerkers. Indien van toepassing is een verwerkersovereenkomst beschikbaar.",
      bottomCtaTitle: "Twijfel je wat bij je past?",
      bottomCtaBody:
        "Plan een gratis kennismaking van 15 minuten. Daarna weet je snel of standaardsoftware voldoende is, of dat een eerste werkbare versie op maat juist tijd en frustratie bespaart.",
    },

    werkwijze: {
      title: "Werkwijze & garanties",
      intro:
        "Software die jouw werkwijze volgt - veilig, overzichtelijk en overdraagbaar. Niet zoveel mogelijk functies, maar een heldere workflow die rust en tijdwinst oplevert. Je start klein en breidt alleen uit wanneer het echt nodig is.",
      bullets: [
        ["Bedrijfskundig eerst", "Jouw proces, templates en manier van werken staan centraal - techniek volgt."],
        ["Voorspelbaar traject", "Fixed scope/fixed price, mijlpalen met acceptatiecriteria."],
        ["Privacy & security by design", "Passend bij gevoelige clientdata, met rollen/rechten en heldere afspraken."],
        ["Overdraagbaar, zonder lock-in", "Documentatie, broncode en overdrachtsmoment standaard inbegrepen."],
        ["Nazorg zonder verplichting", "Onderhoud en doorontwikkeling op afroep, vooraf geoffreerd - geen abonnement."],
      ],
      continuityTitle: "Continuiteit (een specialist, goed geborgd)",
      continuityBody:
        "Je werkt met een vaste specialist: korte lijnen en snelheid. Continuiteit wordt geborgd via overdraagbaarheid: documentatie, repository-structuur, herhaalbare builds en afspraken over hosting/accounts. Indien nodig kan tijdelijk extra capaciteit worden ingezet, altijd in overleg.",
    },

    standaard: {
      title: "Standaardsoftware / low-code vs IDEX Praxis",
      intro:
        "Standaard praktijksoftware en low-code tools zijn prima als je werkwijze grotendeels standaard is. Praxis is er voor praktijken die juist een kloppende workflow willen die precies aansluit op de realiteit van de werkvloer.",
      whenStdTitle: "Wanneer past standaardsoftware of low-code?",
      whenStd: [
        "Je proces gaat grotendeels volgens het boekje.",
        "Je gebruikt weinig eigen templates/modellen.",
        "Je kunt leven met workarounds of extra losse tools.",
      ],
      whenIdexTitle: "Wanneer past IDEX Praxis beter?",
      whenIdex: [
        "Jouw intake-, sessie- en verslagworkflow moet leidend zijn.",
        "Je wil vragenlijsten/schemas/modellen precies zoals jij werkt.",
        "Je wil minder losse tools en een duidelijke flow.",
        "Je wil eigenaarschap en overdraagbaarheid (geen lock-in).",
      ],
      tableTitle: "Korte vergelijking",
      table: [
        ["Start", "Snel, maar vaak zoals de tool het wil", "Klein starten met jouw kernworkflow"],
        ["Workflow", "Jij past je werkwijze aan", "Software volgt jouw werkwijze"],
        ["Eigen templates/modellen", "Beperkt / workarounds", "Precies zoals jij werkt"],
        ["Overzicht", "Vaak extra tools ernaast", "Een duidelijke flow"],
        ["Uitbreiden", "Afhankelijk van vendor/roadmap", "Op basis van gebruik/impact"],
        ["Eigenaarschap", "Lock-in risico", "Overdraagbaar (broncode + documentatie + overdracht)"],
      ],
    },

    aanbod: {
      title: "Aanbod",
      intro:
        "Je kunt direct klein starten. Of je begint met zekerheid via een scan. Alles is gericht op een eerste versie die in de praktijk prettig loopt.",
      items: [
        {
          t: "Kennismaking (15 min)",
          d: "Gratis. We bespreken doelen, knelpunten en bepalen of standaardsoftware volstaat of dat maatwerk slimmer is.",
          price: "Gratis",
        },
        {
          t: "Praxis Scan",
          d: "Een korte scan die eindigt in een helder plan: beste eerste kernworkflow, scope, risico's, planning en vaste prijs. Wordt verrekend als je doorgaat met bouwen.",
          price: "?750 (verrekenbaar)",
        },
        {
          t: "Praxis MVP (eerste werkbare versie)",
          d: "Een eerste versie rond een kernworkflow (bijv. intake -> sessie -> verslag), met jouw templates en rollen/rechten. Uitbreiden kan later, gecontroleerd.",
          price: "Vaak ?2.500 - ?6.000",
        },
      ],
      note:
        "Wil je dat 'Plan kennismaking' naar Calendly of een boekingspagina gaat? Vervang dan de link in de CTA-component.",
    },

    cases: {
      title: "Cases",
      intro:
        "Praktijksoftware die echt werkt in de dagelijkse routine. Geen alles-in-een pakket, maar een heldere kernworkflow die direct rust en tijdwinst oplevert - en daarna gecontroleerd uitbreidbaar is.",
      kicker: "Praktijkcases",
      labels: {
        pain: "Probleem",
        solution: "Oplossing",
        result: "Resultaat",
      },
      items: [
        {
          t: "Case 1 - Van losse notities naar een duidelijke clientflow",
          s: "Situatie: losse documenten, notities en Excel. Overzicht terugvinden kost tijd.",
          k: [
            "Informatie verspreid over meerdere tools",
            "Verslaglegging en voortgang niet uniform",
            "Geen vaste structuur van intake -> sessie -> evaluatie",
            "Modellen uitwerken kost veel tijd",
          ],
          o: "Oplossing: Praxis MVP rond intake -> sessie -> verslag -> overzicht, met eigen velden en templates.",
          r: ["Een overzicht per clienttraject", "Sneller verslag door vaste structuur", "Basis om later uit te breiden"],
        },
        {
          t: "Case 2 - Eigen templates en methodiek, zonder workarounds",
          s: "Situatie: eigen methodiek met modellen, vragenlijsten en evaluaties. Standaardsoftware past net niet.",
          k: ["Templates passen niet lekker in standaardvelden", "Workarounds met exports/losse docs", "Rapportage kost te veel handwerk"],
          o: "Oplossing: templates en vragenlijsten zoals de praktijk werkt + duidelijke workflow + eenvoudige export.",
          r: ["Minder dubbele administratie", "Vaste structuur per traject", "Meer rust: alles in een flow"],
        },
        {
          t: "Case 3 - Privacy & toegang: clientdata veilig en helder geregeld",
          s: "Situatie: behoefte aan zorgvuldige AVG-verwerking, rollen/rechten en eigenaarschap.",
          k: ["Onzekerheid over datalocatie en toegang", "Behoefte aan rollen/rechten (wie mag wat zien)"],
          o: "Oplossing: RBAC + hosting/toegangsafspraken + overdraagbare oplevering (broncode + documentatie).",
          r: ["Duidelijke afspraken (rust en vertrouwen)", "Professionele basis voor gevoelige data", "Geen lock-in"],
        },
      ],
      ctaTitle: "Klaar om te starten?",
      ctaBody: "Plan een kennismaking van 15 minuten. Dan bepalen we of standaardsoftware volstaat of dat een eerste versie op maat meer oplevert.",
    },

    faq: {
      title: "FAQ",
      intro: "De vragen die je waarschijnlijk als eerste hebt. Staat jouw vraag er niet bij? Mail of bel gerust.",
      items: [
        {
          q: "Is mijn clientdata veilig?",
          a:
            "Ja. Veiligheid en privacy zijn onderdeel van ontwerp en oplevering. Standaard borgen we o.a. rollen & rechten (RBAC), veilige authenticatie, HTTPS/TLS, logging (waar passend) en back-ups/herstelafspraken. Extra maatregelen zoals 2FA zijn mogelijk op afspraak.",
        },
        {
          q: "Waar staat mijn data?",
          a:
            "Dat spreken we vooraf helder af. Hosting kan in de EU, bijvoorbeeld Duitsland (Hetzner), met afgeschermde database en duidelijke beheerafspraken. Je krijgt overdraagbaar opgeleverd (broncode + documentatie).",
        },
        {
          q: "Kan dit aansluiten op mijn huidige werkwijze?",
          a:
            "Ja. Praxis is juist bedoeld om jouw werkwijze te volgen. We starten klein met een kernworkflow en bouwen templates/velden zoals jij ze gebruikt. Je test tussentijds mee zodat het echt prettig werkt.",
        },
        {
          q: "Wat kost het en hoe snel kan het live?",
          a:
            "Een eerste werkbare versie voor een kernworkflow ligt vaak tussen ?2.500 en ?6.000. Doorlooptijd is meestal enkele weken, afhankelijk van scope en feedbackmomenten. Praxis Scan (?750) is een lage-risico start en wordt verrekend als je doorgaat.",
        },
        {
          q: "Zit ik vast aan jullie?",
          a:
            "Nee. Geen vendor lock-in: documentatie, broncode en een overdrachtsmoment zijn standaard onderdeel van de oplevering. Nazorg en doorontwikkeling zijn op afroep.",
        },
      ],
    },

    contact: {
      title: "Contact",
      intro: "Plan een kennismaking of stuur je vraag. Ik reageer snel (meestal binnen 1 werkdag).",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Nederland"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "KVK nr.: (vul in)",
      btw: "BTW: (vul in)",
      formTitle: "Stuur een bericht",
      formNote:
        "Deze form gebruikt een mailto fallback (opent je mailprogramma). Wil je een echte server-form (Netlify/Vercel/Formspree), zeg het en ik pas hem aan.",
    },
  },

  en: {
    meta: {
      title: "IDEX Praxis - Software that follows your practice workflow",
      desc: "One secure place for intake, sessions and progress - without forcing you into generic software.",
    },
    common: {
      brandName: "IDEX Praxis",
      logoAlt: "IDEX Praxis logo",
      primaryNavLabel: "Primary navigation",
      menuLabel: "Menu",
      languageSwitcherLabel: "Language",
    },
    nav: { home: "Home", werkwijze: "Approach", vergelijking: "Comparison", aanbod: "Offer", contact: "Contact", cases: "Cases", faq: "FAQ" },
    cta: { kennismaking: "Book a 15-min intro", scan: "Praxis Scan (?750)", aanbod: "See the offer", cases: "View cases", faq: "Read FAQ" },
    ctaPanel: {
      kicker: "Next step",
      badgeTitle: "Praxis",
      badgeSubtitle: "MVP",
      stats: [
        { n: "15", l: "min intro" },
        { n: "1", l: "core workflow" },
        { n: "0", l: "lock-in" },
      ],
    },
    footer: {
      blurb: "Praxis builds practice software that follows your workflow - secure, clear, and transferable.",
      pagesLabel: "Pages",
      contactLabel: "Contact",
    },
    home: {
      heroKicker: "Custom practice software",
      heroTitle: "Practice software that follows your workflow.",
      heroSub:
        "One secure place for intake, sessions and progress - without forcing your method into a generic package.",
      heroForWho: "For physiotherapy, psychology, coaching and small practices.",
      scanHint: "Praxis Scan: plan + roadmap in 1-2 weeks (deductible).",
      heroOrbTitle: "Workflow - Calm - Time saved",
      heroOrbBody: "No noise, no lock-in - one clear core flow that works.",
      heroOrbExample: "Intake -> plan -> sessions -> report -> export",
      promises: [
        { t: "Clarity & calm", d: "Everything findable, with roles & permissions." },
        { t: "Privacy by design", d: "Clear agreements on storage, access and retention." },
        { t: "Workflow-first", d: "Intake -> goals -> sessions -> exercises -> evaluation." },
      ],
      stats: [
        { n: "1", l: "core workflow first" },
        { n: "EU", l: "hosting possible" },
        { n: "0", l: "lock-in" },
        { n: "100%", l: "handover-ready" },
      ],
      herkenbaarTitle: "Does this sound familiar?",
      herkenbaarBody:
        "Working with scattered docs, notes and tools? Admin grows silently. IDEX Praxis brings structure: client info, steps and exercises in one place - so you can focus on the client.",
      watJeKrijgtTitle: "What you get",
      watJeKrijgtIntro: "Generic tools are 'one size fits most'. Praxis is 'one size fits your practice'.",
      watJeKrijgtBullets: [
        "A first usable version of one core workflow (fast value).",
        "Templates and questionnaires aligned with your method.",
        "Clean reporting and simple exports.",
        "Transferable delivery: documentation + source code + handover (no lock-in).",
        "Extend only when needed, support on demand (no subscription).",
      ],
      tooltipTitle: "Open-source components & EU hosting",
      tooltipBody:
        "Built with open-source components and optionally hosted in the EU (e.g., Germany). You receive documentation + source code so you are not tied to one vendor.",
      hoeWerktTitle: "How it works",
      hoeWerktSteps: [
        ["Intro (15 min)", "Goals, pain points, current workflow."],
        ["Scope sketch", "Pick one core workflow with immediate impact."],
        ["Fixed-price offer", "Scope, plan, acceptance criteria."],
        ["Build in milestones", "Test and adjust within scope."],
        ["Delivery + handover", "Docs + code + handover. Support on demand."],
      ],
      prijsTitle: "Typical range (first usable version)",
      prijsBody:
        "A first version for one core workflow is often ?1,500 - ?5,000 depending on roles, templates and reporting. Prefer certainty first? Praxis Scan (?750) is deducted if you continue.",
      securityTitle: "Security & privacy",
      securityBody:
        "Security and data-processing agreements are part of the scope: role-based access, backups, secure password handling, and clear hosting/sub-processor agreements.",
      bottomCtaTitle: "Not sure what fits?",
      bottomCtaBody:
        "Book a free 15-minute intro. You will quickly know whether a standard tool is enough or a first custom version saves time and frustration.",
    },
    werkwijze: {
      title: "Approach & guarantees",
      intro:
        "Workflow-first software: secure, clear and transferable. Start small, expand only when it truly helps.",
      bullets: [
        ["Business first", "Your process and templates lead - tech follows."],
        ["Predictable delivery", "Fixed scope / fixed price with milestones."],
        ["Privacy & security", "Designed for sensitive client data (roles/permissions, clear agreements)."],
        ["No lock-in", "Documentation + source code + handover included."],
        ["Support on demand", "No subscription; changes quoted upfront."],
      ],
      continuityTitle: "Continuity",
      continuityBody:
        "One specialist, short lines. Continuity is secured through documentation, reproducible builds and clear hosting/account access agreements.",
    },
    standaard: {
      title: "Standard tools / low-code vs IDEX Praxis",
      intro:
        "Standard tools are fine when your workflow is standard. Praxis is for practices that want one workflow that truly fits.",
      whenStdTitle: "When standard/low-code fits",
      whenStd: ["Your process is mostly standard.", "Few custom templates/models.", "Workarounds are acceptable."],
      whenIdexTitle: "When IDEX Praxis fits better",
      whenIdex: ["Your workflow must lead.", "Your templates/models are central.", "You want fewer tools and one flow.", "You want ownership and transferability."],
      tableTitle: "Compact comparison",
      table: [
        ["Start", "Fast, but often as the tool wants", "Start small with your core workflow"],
        ["Workflow", "You adapt to the tool", "Tool adapts to you"],
        ["Templates/models", "Limited / workarounds", "Exactly as you work"],
        ["Overview", "Often extra tools", "One clear flow"],
        ["Extending", "Vendor roadmap dependent", "Based on real usage/impact"],
        ["Ownership", "Lock-in risk", "Transferable (code + docs + handover)"],
      ],
    },
    aanbod: {
      title: "Offer",
      intro: "Start small. Or start with certainty via a scan. Everything aims at a first version that feels great in daily work.",
      items: [
        { t: "Intro (15 min)", d: "Free. We check fit and best first workflow.", price: "Free" },
        { t: "Praxis Scan", d: "A clear plan: best first workflow, scope, risks, plan and fixed price. Deducted if you continue.", price: "?750 (deductible)" },
        { t: "Praxis MVP (first usable version)", d: "One core workflow with your templates and roles/permissions. Extend later, controlled.", price: "Often ?2,500 - ?6,000" },
      ],
      note: "Want the intro button to go to Calendly? Replace the link in the CTA component.",
    },
    cases: {
      title: "Cases",
      intro: "Real-world workflows: start with one core flow, extend based on impact.",
      kicker: "Practice cases",
      labels: {
        pain: "Pain points",
        solution: "Solution",
        result: "Result",
      },
      items: [
        { t: "Case 1 - From scattered notes to one client flow", s: "Situation: docs, notes and spreadsheets everywhere.", k: ["Info in multiple tools", "Inconsistent reporting", "No fixed flow"], o: "Solution: intake -> session -> report -> overview.", r: ["Less searching", "Faster reporting", "Ready to extend"] },
        { t: "Case 2 - Your method, without workarounds", s: "Situation: custom method, templates, evaluations.", k: ["Templates do not fit", "Exports + loose docs", "Too much manual reporting"], o: "Solution: templates + workflow + export.", r: ["Less double work", "Clear structure", "Calm"] },
        { t: "Case 3 - Privacy & access clarity", s: "Need: roles/permissions + clear hosting/access.", k: ["Uncertainty about data location", "Need RBAC"], o: "Solution: RBAC + agreements + transferable handover.", r: ["Trust", "Professional base", "No lock-in"] },
      ],
      ctaTitle: "Ready to start?",
      ctaBody: "Book a 15-minute intro. We will confirm if standard tools are enough or if a first custom version brings more value.",
    },
    faq: {
      title: "FAQ",
      intro: "Quick answers to the usual questions.",
      items: [
        { q: "Is client data secure?", a: "Yes - security and privacy are part of the scope: roles/permissions, HTTPS, backups and clear agreements. Optional 2FA possible." },
        { q: "Where is the data hosted?", a: "Agreed upfront. EU hosting is possible, e.g. Germany. Transferable delivery (docs + source code)." },
        { q: "Can it match my workflow?", a: "That is the point: your workflow leads. Start with one core flow and iterate with your feedback." },
        { q: "What does it cost / timeline?", a: "Often ?2,500 - ?6,000 for one core workflow. Usually a few weeks, depending on scope and feedback." },
        { q: "Is there lock-in?", a: "No. You receive docs + source code + a handover moment." },
      ],
    },
    contact: {
      title: "Contact",
      intro: "Book an intro or send a message.",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Netherlands"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "Chamber of Commerce: (fill in)",
      btw: "VAT: (fill in)",
      formTitle: "Send a message",
      formNote: "This form uses a mailto fallback. Want a real hosted form? I can adapt it.",
    },
  },

  it: {
    meta: {
      title: "IDEX Praxis - Software che segue il tuo metodo di lavoro",
      desc: "Un luogo sicuro per intake, sessioni e progresso - senza adattare il tuo metodo a un software standard.",
    },
    common: {
      brandName: "IDEX Praxis",
      logoAlt: "Logo IDEX Praxis",
      primaryNavLabel: "Menu principale",
      menuLabel: "Menu",
      languageSwitcherLabel: "Lingua",
    },
    nav: { home: "Home", werkwijze: "Metodo", vergelijking: "Confronto", aanbod: "Offerta", contact: "Contatti", cases: "Casi", faq: "FAQ" },
    cta: { kennismaking: "Call di 15 min", scan: "Praxis Scan (?750)", aanbod: "Vedi l'offerta", cases: "Vedi i casi", faq: "Leggi FAQ" },
    ctaPanel: {
      kicker: "Prossimo passo",
      badgeTitle: "Praxis",
      badgeSubtitle: "MVP",
      stats: [
        { n: "15", l: "min call" },
        { n: "1", l: "workflow chiave" },
        { n: "0", l: "lock-in" },
      ],
    },
    footer: {
      blurb: "Praxis crea software per la pratica che segue il tuo workflow - sicuro, chiaro e trasferibile.",
      pagesLabel: "Pagine",
      contactLabel: "Contatti",
    },
    home: {
      heroKicker: "Software su misura",
      heroTitle: "Software per la pratica che segue il tuo workflow.",
      heroSub:
        "Un unico posto sicuro per intake, sessioni e progresso - senza forzare il tuo metodo dentro un pacchetto standard.",
      heroForWho: "Per fisioterapia, psicologia, coaching e piccoli studi.",
      scanHint: "Praxis Scan: piano + roadmap in 1-2 settimane (scalabile).",
      heroOrbTitle: "Workflow - Calma - Risparmio tempo",
      heroOrbBody: "Niente rumore, niente lock-in - un flusso chiaro che funziona.",
      heroOrbExample: "Intake -> piano -> sessioni -> report -> export",
      promises: [
        { t: "Chiarezza & calma", d: "Tutto rintracciabile, con ruoli e permessi." },
        { t: "Privacy by design", d: "Accordi chiari su archiviazione, accesso e conservazione." },
        { t: "Workflow su misura", d: "Intake -> obiettivi -> sessioni -> esercizi -> valutazione." },
      ],
      stats: [
        { n: "1", l: "workflow base" },
        { n: "UE", l: "hosting possibile" },
        { n: "0", l: "lock-in" },
        { n: "100%", l: "consegna trasferibile" },
      ],
      herkenbaarTitle: "Ti suona familiare?",
      herkenbaarBody:
        "Documenti e note sparsi aumentano l'amministrazione. IDEX Praxis porta struttura: dati cliente, passi del percorso ed esercizi in un unico flusso.",
      watJeKrijgtTitle: "Cosa ottieni",
      watJeKrijgtIntro: "I tool standard sono 'one size fits most'. Praxis e 'one size fits la tua pratica'.",
      watJeKrijgtBullets: [
        "Prima versione utilizzabile di un workflow chiave.",
        "Template e questionari secondo il tuo metodo.",
        "Report puliti ed export semplici.",
        "Consegna trasferibile: documentazione + codice sorgente + handover.",
        "Estensione solo quando serve, supporto su richiesta.",
      ],
      tooltipTitle: "Componenti open-source & hosting UE",
      tooltipBody:
        "Costruito con componenti open-source e (opzionale) hosting in UE. Ricevi documentazione + codice sorgente.",
      hoeWerktTitle: "Come funziona",
      hoeWerktSteps: [
        ["Call (15 min)", "Obiettivi, problemi, workflow attuale."],
        ["Scope", "Scegliamo un workflow con impatto immediato."],
        ["Offerta a prezzo fisso", "Scope, piano, criteri di accettazione."],
        ["Sviluppo a milestone", "Test e aggiustamenti dentro lo scope."],
        ["Consegna + handover", "Doc + codice + handover. Supporto su richiesta."],
      ],
      prijsTitle: "Range tipico (prima versione)",
      prijsBody:
        "Spesso ?1.500 - ?5.000 per un workflow chiave (in base a ruoli, template e report). Praxis Scan (?750) viene scalato se prosegui.",
      securityTitle: "Sicurezza & privacy",
      securityBody:
        "Sicurezza e accordi di trattamento dati fanno parte dello scope: accesso a ruoli, backup e accordi chiari.",
      bottomCtaTitle: "Non sei sicuro?",
      bottomCtaBody:
        "Prenota una call gratuita di 15 minuti. Capirai subito se basta un tool standard o se una prima versione su misura ti fa risparmiare tempo.",
    },
    werkwijze: {
      title: "Metodo & garanzie",
      intro: "Software guidato dal workflow: sicuro, chiaro e trasferibile. Parti piccolo, espandi solo quando serve.",
      bullets: [
        ["Business first", "Il tuo processo guida - la tecnica segue."],
        ["Consegna prevedibile", "Scope fisso / prezzo fisso a milestone."],
        ["Privacy & security", "Pensato per dati sensibili (ruoli/permessi, accordi chiari)."],
        ["No lock-in", "Doc + codice sorgente + handover inclusi."],
        ["Supporto su richiesta", "Nessun abbonamento obbligatorio."],
      ],
      continuityTitle: "Continuita",
      continuityBody: "Linee dirette con uno specialista; continuita garantita via documentazione e build riproducibili.",
    },
    standaard: {
      title: "Standard/low-code vs IDEX Praxis",
      intro: "Gli strumenti standard vanno bene se il tuo workflow e standard. Praxis e per chi vuole un flusso che calzi davvero.",
      whenStdTitle: "Quando lo standard va bene",
      whenStd: ["Processo standard.", "Pochi template personalizzati.", "Workaround accettabili."],
      whenIdexTitle: "Quando Praxis e meglio",
      whenIdex: ["Il workflow deve guidare.", "Template/modelli sono centrali.", "Meno tool, un flusso.", "Ownership e trasferibilita."],
      tableTitle: "Confronto rapido",
      table: [
        ["Start", "Veloce ma decide il tool", "Parti con il workflow chiave"],
        ["Workflow", "Ti adatti al tool", "Il tool si adatta a te"],
        ["Template", "Limitato", "Come lavori tu"],
        ["Overview", "Altri tool", "Un flusso chiaro"],
        ["Estensioni", "Dipende dal vendor", "Basato su uso/impatti"],
        ["Ownership", "Rischio lock-in", "Trasferibile (codice+doc+handover)"],
      ],
    },
    aanbod: {
      title: "Offerta",
      intro: "Parti piccolo. Oppure parti con certezza con una scan. Obiettivo: una prima versione che funzioni davvero nel quotidiano.",
      items: [
        { t: "Call (15 min)", d: "Gratis. Valutiamo fit e primo workflow.", price: "Gratis" },
        { t: "Praxis Scan", d: "Piano chiaro: workflow, scope, rischi, piano e prezzo fisso. Scalato se prosegui.", price: "?750 (scalabile)" },
        { t: "Praxis MVP", d: "Un workflow chiave con template e ruoli/permessi. Estensione controllata.", price: "Spesso ?2.500 - ?6.000" },
      ],
      note: "Vuoi collegare il bottone a Calendly? Sostituisci il link nella CTA.",
    },
    cases: {
      title: "Casi",
      intro: "Workflow reali: un flusso chiave, poi estensioni basate sull'impatto.",
      kicker: "Casi pratici",
      labels: {
        pain: "Problema",
        solution: "Soluzione",
        result: "Risultato",
      },
      items: [
        { t: "Caso 1 - Da note sparse a un flusso cliente", s: "Documenti e fogli ovunque.", k: ["Info in piu tool", "Report incoerenti"], o: "Intake -> sessione -> report -> overview.", r: ["Meno ricerca", "Report piu veloci"] },
        { t: "Caso 2 - Metodo tuo, senza workaround", s: "Template e valutazioni su misura.", k: ["Template non entrano", "Troppo manuale"], o: "Template + workflow + export.", r: ["Meno doppio lavoro", "Piu calma"] },
        { t: "Caso 3 - Privacy & accessi", s: "Ruoli/permessi e hosting chiaro.", k: ["Dubbio su data location", "Serve RBAC"], o: "RBAC + accordi + handover trasferibile.", r: ["Fiducia", "No lock-in"] },
      ],
      ctaTitle: "Pronto a partire?",
      ctaBody: "Prenota una call di 15 minuti. Verifichiamo se basta uno strumento standard o se conviene una prima versione su misura.",
    },
    faq: {
      title: "FAQ",
      intro: "Risposte rapide.",
      items: [
        { q: "I dati sono sicuri?", a: "Si: ruoli/permessi, HTTPS, backup e accordi chiari. 2FA opzionale." },
        { q: "Dove sono ospitati i dati?", a: "Definito in anticipo. Hosting UE possibile. Consegna trasferibile (doc + codice)." },
        { q: "Si adatta al mio workflow?", a: "Si: il tuo workflow guida. Partiamo da un flusso chiave e iteriamo." },
        { q: "Costi e tempi?", a: "Spesso ?2.500 - ?6.000 per un workflow chiave. Alcune settimane secondo lo scope." },
        { q: "C'e lock-in?", a: "No: doc + codice + handover." },
      ],
    },
    contact: {
      title: "Contatti",
      intro: "Prenota una call o invia un messaggio.",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Paesi Bassi"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "Registro imprese: (compila)",
      btw: "IVA: (compila)",
      formTitle: "Invia un messaggio",
      formNote: "Il form usa un mailto fallback. Vuoi un form vero ospitato? Posso adattarlo.",
    },
  },
} as const;

export function t(lang: Lang) {
  return copy[lang];
}
