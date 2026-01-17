export type Lang = "nl" | "en" | "it";

export const SUPPORTED: Lang[] = ["nl", "en", "it"];
export const FALLBACK: Lang = "en"; // bij twijfel Engels

export function normalizeLang(input: string | null): Lang {
  const v = (input || "").toLowerCase();
  if (v.startsWith("nl")) return "nl";
  if (v.startsWith("it")) return "it";
  if (v.startsWith("en")) return "en";
  return FALLBACK;
}

export function isSupported(input: string | null): input is Lang {
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
      scan: "Praxis Scan (€750)",
      aanbod: "Bekijk het aanbod",
      cases: "Bekijk cases",
      faq: "Lees de FAQ",
    },
    ctaPanel: {
      kicker: "Volgende stap",
      badgeTitle: "Praxis",
      badgeSubtitle: "Prima versione",
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
      heroOrbUi: {
        header: "Intake - Eerste afspraak",
        time: "Vandaag 10:30",
        clientLabel: "Client",
        clientValue: "Nieuwe client",
        goalLabel: "Doel",
        goalValue: "Rust en overzicht in traject",
        statusLabel: "Status",
        statusValue: "In behandeling",
        steps: ["Intake", "Plan", "Sessie", "Verslag"],
      },
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
        "Een eerste werkbare versie voor een kernworkflow (bijv. intake + verslag of afspraken + verslag) ligt vaak tussen €1.500 en €5.000, afhankelijk van rollen, templates en rapportage. Wil je eerst zekerheid? Dan is er de Praxis Scan (€750) - die wordt verrekend als je doorgaat.",
      securityTitle: "Veiligheid & privacy",
      securityBody:
        "Privacy en informatiebeveiliging zijn onderdeel van de scope. Minimaal: rolgebaseerde toegang, logging, back-ups, veilige wachtwoordopslag en afspraken over hosting/subverwerkers. Indien van toepassing is een verwerkersovereenkomst beschikbaar.",
      bottomCtaTitle: "Twijfel je wat bij je past?",
      bottomCtaBody:
        "Plan een gratis kennismaking van 15 minuten. Daarna weet je snel of standaardsoftware voldoende is, of dat een eerste werkbare versie op maat juist tijd en frustratie bespaart.",
    },

    werkwijze: {
      title: "Werkwijze & garanties",
      kicker: "IDEX Praxis",
      intro:
        "Software die jouw werkwijze volgt - veilig, overzichtelijk en overdraagbaar. Niet zoveel mogelijk functies, maar een heldere workflow die rust en tijdwinst oplevert. Je start klein en breidt alleen uit wanneer het echt nodig is.",
      miniFlow: {
        title: "Mijlpalen",
        steps: ["Kennismaking", "Scope-schets", "Bouw & testen", "Oplevering"],
      },
      bullets: [
        ["Bedrijfskundig eerst", "Jouw proces, templates en manier van werken staan centraal - techniek volgt."],
        ["Voorspelbaar traject", "Fixed scope/fixed price, mijlpalen met acceptatiecriteria."],
        ["Privacy & sicurezza by design", "Passend bij gevoelige clientdata, met rollen/rechten en heldere afspraken."],
        ["Overdraagbaar, zonder lock-in", "Documentatie, broncode en overdrachtsmoment standaard inbegrepen."],
        ["Nazorg zonder verplichting", "Onderhoud en doorontwikkeling op afroep, vooraf geoffreerd - geen abonnement."],
      ],
      continuityTitle: "Continuiteit (een specialist, goed geborgd)",
      continuityBody:
        "Je werkt met een vaste specialist: korte lijnen en snelheid. Continuiteit wordt geborgd via overdraagbaarheid: documentatie, repository-structuur, herhaalbare builds en afspraken over hosting/accounts. Indien nodig kan tijdelijk extra capaciteit worden ingezet, altijd in overleg.",
      ctaTitle: "Kies samen de beste eerste kernworkflow.",
      ctaBody: "Plan een kennismaking (15 min). Daarna is snel duidelijk wat de slimste eerste stap is.",
    },

    standaard: {
      title: "Standaardsoftware / low-code vs IDEX Praxis",
      kicker: "Vergelijking",
      intro:
        "Standaard praktijksoftware en low-code tools zijn prima als je werkwijze grotendeels standaard is. Praxis is er voor praktijken die juist een kloppende workflow willen die precies aansluit op de realiteit van de werkvloer.",
      tableHeadings: ["Onderdeel", "Standaard / low-code", "IDEX Praxis"],
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
      ctaTitle: "Twijfel je wat bij je past?",
      ctaBody:
        "Plan een kennismaking (15 min). Daarna is snel duidelijk of standaardsoftware volstaat, of dat een eerste werkbare versie op maat juist tijd en frustratie bespaart.",
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
          price: "€750 (verrekenbaar)",
        },
        {
          t: "Praxis MVP (eerste werkbare versie)",
          d: "Een eerste versie rond een kernworkflow (bijv. intake -> sessie -> verslag), met jouw templates en rollen/rechten. Uitbreiden kan later, gecontroleerd.",
          price: "Vaak €2.500 - €6.000",
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
      kicker: "FAQ",
      intro: "De vragen die je waarschijnlijk als eerste hebt. Staat jouw vraag er niet bij? Mail of bel gerust.",
      items: [
        {
          q: "Is mijn clientdata veilig?",
          short: "Kort antwoord: Ja. Veiligheid en privacy zijn onderdeel van het ontwerp en de oplevering.",
          long:
            "IDEX Praxis wordt gebouwd met een professionele basis (Java Spring Boot + Spring Security) en ingericht om clientdata veilig en zorgvuldig te verwerken. Standaard borgen we o.a.: rollen & rechten (RBAC), veilige authenticatie (wachtwoorden gehasht), versleutelde verbindingen (HTTPS/TLS), afgeschermde dataopslag, logging (waar passend) en back-ups/herstelafspraken. AVG-aspecten zoals dataminimalisatie, transparantie over hosting/toegang/bewaartermijnen en een verwerkersovereenkomst (waar nodig) worden vooraf vastgelegd. Geen enkel systeem is 100% risicovrij; daarom combineren we techniek met werkafspraken (accountbeheer, sterke wachtwoorden). Indien gewenst kunnen extra maatregelen zoals 2FA of strengere logging worden afgesproken.",
        },
        {
          q: "Waar staat mijn data?",
          short: "Kort antwoord: Dat spreken we vooraf helder af. Hosting kan in de EU, bijvoorbeeld in Duitsland (Hetzner).",
          long:
            "Afhankelijk van jouw voorkeur kan hosting worden ingericht in een EU-regio - bijvoorbeeld Duitsland (Hetzner) - met een afgeschermde database en duidelijke beheerafspraken. We bouwen daarnaast met open-source componenten en leveren overdraagbaar op (documentatie + broncode), zodat je niet vastzit aan een platform of leverancier.",
          note:
            "Open source & EU-hosting (wat bedoelen we daarmee?) Transparant gebouwd en (optioneel) gehost in Duitsland (Hetzner). Inclusief documentatie en broncode, zodat je niet vastzit aan een leverancier.",
        },
        {
          q: "Kan dit aansluiten op mijn huidige werkwijze?",
          short: "Kort antwoord: Ja. Praxis is bedoeld om jouw werkwijze te volgen, niet andersom.",
          long:
            "Veel praktijken werken met een eigen methodiek, templates en manier van rapporteren. Daarom starten we klein: we kiezen samen een kernworkflow (bijv. intake -> sessie -> verslag) die direct rust en tijdwinst oplevert. We bouwen templates, velden en stappen zoals jij ze gebruikt (vragenlijsten, modellen, grafieken/overzichten) en je test tussentijds mee. Zo ontstaat software die in de praktijk prettig werkt - en later kun je uitbreiden op basis van gebruik.",
        },
        {
          q: "Wat kost het en hoe snel kan het live?",
          short: "Kort antwoord: Je krijgt vooraf duidelijkheid. Een eerste werkbare versie ligt vaak tussen €2.500 en €6.000.",
          long:
            "De investering hangt af van scope, rollen, templates en rapportage. Een eerste werkbare versie voor een kernworkflow ligt vaak tussen €2.500 en €6.000. Doorlooptijd is meestal enkele weken, afhankelijk van scope en feedbackmomenten. Wil je klein starten met laag risico? Dan kun je beginnen met de Praxis Scan (€750) (wordt verrekend als je doorgaat met bouwen).",
        },
        {
          q: "Wat als ik later wil uitbreiden?",
          short: "Kort antwoord: Dan bouwen we stap voor stap door op basis van impact en gebruik.",
          long:
            "Praxis is ontworpen om gecontroleerd te groeien: eerst een kernworkflow goed, daarna uitbreiden met extra stappen, templates, rapportages of (waar zinvol) integraties. Nieuwe wensen gaan via change requests: we prijzen en plannen ze apart, zodat scope, planning en kosten voorspelbaar blijven.",
        },
        {
          q: "Zit ik vast aan jullie?",
          short: "Kort antwoord: Nee. Je krijgt een overdraagbare oplevering en zit niet vast aan een platform.",
          long:
            "Geen vendor lock-in: documentatie, broncode en een overdrachtsmoment zijn standaard onderdeel van de oplevering. Nazorg en doorontwikkeling zijn op afroep (geen verplicht abonnement). Zo houd jij eigenaarschap en keuzevrijheid.",
        },
        {
          q: "Waarom niet gewoon standaardsoftware?",
          short: "Kort antwoord: Standaardsoftware is prima als je workflow standaard is. Praxis is voor maatwerk dat jouw methodiek volgt.",
          long:
            "Standaardsoftware is vaak goedkoper om te starten, maar kan onzichtbare kosten geven: je werkwijze aanpassen, workarounds, extra tools ernaast of beperkte rapportage. Praxis is voor praktijken die liever een kloppende workflow hebben. Standaard/low-code past vaak als: je proces grotendeels standaard is, je weinig eigen modellen/templates gebruikt en je kunt leven met workarounds. Praxis past beter als: jouw methodiek leidend is, je eigen templates/modellen centraal staan, je wilt uitbreiden in stappen en je eigenaarschap/overdraagbaarheid belangrijk vindt.",
        },
        {
          q: "Is low-code niet de toekomst?",
          short: "Kort antwoord: Low-code is waardevol, maar niet altijd de beste fit bij gevoelige data en een specifieke werkwijze.",
          long:
            "Low-code is mainstream en kan in veel situaties een prima keuze zijn. Praxis is niet anti low-code; het is bedoeld voor situaties waar je meer vrijheid, betere fit, security/privacy en minder lock-in nodig hebt - zeker bij clientdata en workflows die precies moeten kloppen.",
        },
        {
          q: "Wat als de ontwikkelaar uitvalt?",
          short: "Kort antwoord: Continuiteit wordt geborgd met overdraagbaarheid en heldere afspraken.",
          long:
            "Je werkt met een vaste specialist: korte lijnen en snelheid. Tegelijk is continuiteit belangrijk. Daarom borgt IDEX overdraagbaarheid met: 1) documentatie en duidelijke repository-structuur 2) overdrachtsmoment bij oplevering 3) herhaalbare builds en test-/acceptatie-afspraken 4) afspraken over toegang tot hosting en accounts. Indien nodig kan tijdelijk extra capaciteit worden ingezet uit een klein netwerk van vaste freelancers/partners (alleen met akkoord).",
        },
        {
          q: "Pauzeren of annuleren?",
          short: "Kort antwoord: Altijd mogelijk, uitgevoerd werk wordt gefactureerd.",
          long:
            "Pauzeren of annuleren kan altijd: reeds uitgevoerd werk wordt afgerond en gefactureerd; niet gestart werk vervalt; broncode en documentatie kunnen worden overgedragen.",
        },
      ],
      ctaTitle: "Nog een vraag?",
      ctaBody: "Stuur gerust een bericht. Ik denk met je mee en geef snel aan wat de beste eerste stap is.",
    },

    contact: {
      title: "Contact",
      kicker: "Contact",
      intro: "Plan een kennismaking of stuur je vraag. Ik reageer snel (meestal binnen 1 werkdag).",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Nederland"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "KVK nr.: (vul in)",
      btw: "BTW: (vul in)",
      formTitle: "Stuur een bericht",
      formPlaceholders: {
        name: "Naam",
        email: "E-mail",
        message: "Bericht",
      },
      formSubmit: "Verstuur",
      formNote: "Je bericht wordt veilig verstuurd naar info@idexpraxis.nl.",
      formSuccess: "Bedankt! Je bericht is verzonden.",
    },
    root: {
      title: "IDEX Praxis",
      chooseLanguage: "Kies je taal:",
      languages: {
        nl: "Nederlands",
        en: "English",
        it: "Italiano",
      },
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
    cta: { kennismaking: "Book a 15-min intro", scan: "Praxis Scan (€750)", aanbod: "See the offer", cases: "View cases", faq: "Read FAQ" },
    ctaPanel: {
      kicker: "Next step",
      badgeTitle: "Praxis",
      badgeSubtitle: "Prima versione",
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
      heroOrbExample: "Intake -> plan -> sessions -> resoconto -> export",
      heroOrbUi: {
        header: "Intake - First appointment",
        time: "Today 10:30",
        clientLabel: "Client",
        clientValue: "New client",
        goalLabel: "Goal",
        goalValue: "Calm and clarity in the process",
        statusLabel: "Status",
        statusValue: "In progress",
        steps: ["Intake", "Plan", "Session", "Report"],
      },
      promises: [
        { t: "Clarity & calm", d: "Everything findable, with roles & permissions." },
        { t: "Privacy fin dall'inizio", d: "Clear agreements on storage, access and retention." },
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
        "A first version for one core workflow is often ?1,500 - ?5,000 depending on roles, templates and reporting. Prefer certainty first? Praxis Scan (€750) is deducted if you continue.",
      securityTitle: "Security & privacy",
      securityBody:
        "Security and data-processing agreements are part of the scope: role-based access, backups, secure password handling, and clear hosting/sub-processor agreements.",
      bottomCtaTitle: "Not sure what fits?",
      bottomCtaBody:
        "Book a free 15-minute intro. You will quickly know whether a standard tool is enough or a first custom version saves time and frustration.",
    },
    werkwijze: {
      title: "Approach & guarantees",
      kicker: "IDEX Praxis",
      intro:
        "Workflow-first software: secure, clear and transferable. Start small, expand only when it truly helps.",
      miniFlow: {
        title: "Milestones",
        steps: ["Intro", "Scope sketch", "Build & test", "Delivery"],
      },
      bullets: [
        ["Prima il processo", "Your process and templates lead - tech follows."],
        ["Predictable delivery", "Fixed scope / fixed price with milestones."],
        ["Privacy & sicurezza", "Designed for sensitive client data (roles/permissions, clear agreements)."],
        ["Nessun vincolo", "Documentation + source code + handover included."],
        ["Support on demand", "No subscription; changes quoted upfront."],
      ],
      continuityTitle: "Continuity",
      continuityBody:
        "One specialist, short lines. Continuity is secured through documentation, reproducible builds and clear hosting/account access agreements.",
      ctaTitle: "Choose the best first core workflow together.",
      ctaBody: "Book a 15-minute intro. You will quickly know the smartest first step.",
    },
    standaard: {
      title: "Standard tools / low-code vs IDEX Praxis",
      kicker: "Comparison",
      intro:
        "Standard tools are fine when your workflow is standard. Praxis is for practices that want one workflow that truly fits.",
      tableHeadings: ["Category", "Standard / low-code", "IDEX Praxis"],
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
      ctaTitle: "Not sure what fits?",
      ctaBody:
        "Book a 15-minute intro. You'll quickly know whether standard tools are enough or a first custom version saves time and frustration.",
    },
    aanbod: {
      title: "Offer",
      intro: "Start small. Or start with certainty via a scan. Everything aims at a first version that feels great in daily work.",
      items: [
        { t: "Intro (15 min)", d: "Free. We check fit and best first workflow.", price: "Free" },
        { t: "Praxis Scan", d: "A clear plan: best first workflow, scope, risks, plan and fixed price. Deducted if you continue.", price: "€750 (deductible)" },
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
        { t: "Case 3 - Privacy & access clarity", s: "Need: roles/permissions + clear hosting/access.", k: ["Uncertainty about data location", "Need RBAC"], o: "Solution: RBAC + agreements + transferable handover.", r: ["Trust", "Professional base", "Nessun vincolo"] },
      ],
      ctaTitle: "Ready to start?",
      ctaBody: "Book a 15-minute intro. We will confirm if standard tools are enough or if a first custom version brings more value.",
    },
    faq: {
      title: "FAQ",
      kicker: "FAQ",
      intro: "Quick answers to the usual questions.",
      items: [
        {
          q: "Is my client data secure?",
          short: "Short answer: Yes. Security and privacy are part of the design and delivery.",
          long:
            "IDEX Praxis is built on a professional stack (Java Spring Boot + Spring Security) and configured to handle client data safely. Standard safeguards include role-based access (RBAC), secure authentication (hashed passwords), encrypted connections (HTTPS/TLS), protected data storage, logging where appropriate, and backup/recovery agreements. GDPR aspects such as data minimization, transparency about hosting/access/retention, and a processing agreement (when needed) are agreed in advance. No system is 100% risk-free; therefore we combine technical measures with work practices (account management, strong passwords). Extra measures such as 2FA or stricter logging can be agreed if needed.",
        },
        {
          q: "Where is my data hosted?",
          short: "Short answer: We agree this upfront. Hosting can be in the EU, for example Germany (Hetzner).",
          long:
            "Depending on your preference, hosting can be set up in an EU region - for example Germany (Hetzner) - with a protected database and clear management agreements. We also build with open-source components and deliver a transferable result (documentation + source code), so you are not tied to a platform or vendor.",
          note:
            "Open-source & EU hosting (what do we mean?) Transparently built and (optionally) hosted in Germany (Hetzner). Includes documentation and source code, so you are not tied to a vendor.",
        },
        {
          q: "Can this fit my current workflow?",
          short: "Short answer: Yes. Praxis is designed to follow your workflow, not the other way around.",
          long:
            "Many practices use their own method, templates, and reporting style. We therefore start small: together we choose one core workflow (e.g., intake -> session -> report) that immediately brings calm and time savings. We build templates, fields and steps exactly as you use them (questionnaires, models, charts/overviews) and you test along the way. The result is software that feels right in practice - and later you can expand based on use.",
        },
        {
          q: "What does it cost and how fast can it go live?",
          short: "Short answer: You get clarity upfront. A first usable version is often between €2.500 and €6.000.",
          long:
            "The investment depends on scope, roles, templates and reporting. A first usable version for one core workflow often falls between €2.500 and €6.000. Lead time is usually a few weeks, depending on scope and feedback moments. Want to start small with low risk? You can begin with the Praxis Scan (€750) (deducted if you continue).",
        },
        {
          q: "What if I want to expand later?",
          short: "Short answer: We expand step by step based on impact and usage.",
          long:
            "Praxis is designed to grow in a controlled way: first one core workflow done right, then extend with extra steps, templates, reports or (where useful) integrations. New requests go through change requests: priced and planned separately, so scope, planning and costs stay predictable.",
        },
        {
          q: "Am I locked in?",
          short: "Short answer: No. You receive a transferable delivery and are not tied to a platform.",
          long:
            "No vendor lock-in: documentation, source code and a handover moment are standard parts of delivery. Support and further development are on demand (no mandatory subscription). This keeps ownership and choice with you.",
        },
        {
          q: "Why not just standard software?",
          short: "Short answer: Standard software is fine if your workflow is standard. Praxis is for custom work that follows your method.",
          long:
            "Standard software is often cheaper to start, but can create hidden costs: adapting your workflow, workarounds, extra tools, or limited reporting. Praxis is for practices that want one coherent workflow. Standard/low-code often fits when your process is mostly standard, you use few custom models/templates, and workarounds are acceptable. Praxis fits better when your method leads, your templates/models are central, you want stepwise expansion, and ownership/transferability matters.",
        },
        {
          q: "Is low-code not the future?",
          short: "Short answer: Low-code is valuable, but not always the best fit for sensitive data and a specific workflow.",
          long:
            "Low-code is mainstream and can be a great choice in many cases. Praxis is not anti low-code; it is meant for situations where you need more freedom, better fit, security/privacy and less lock-in - especially with client data and workflows that must be precise.",
        },
        {
          q: "What if the developer becomes unavailable?",
          short: "Short answer: Continuity is safeguarded through transferability and clear agreements.",
          long:
            "You work with one dedicated specialist: short lines and speed. At the same time, continuity matters. Therefore IDEX safeguards transferability with: 1) documentation and a clear repository structure 2) a handover moment at delivery 3) reproducible builds and test/acceptance agreements 4) agreements on hosting and account access. If needed, temporary capacity can be added from a small network of trusted freelancers/partners (with your approval).",
        },
        {
          q: "Pause or cancel?",
          short: "Short answer: Always possible; completed work is billed.",
          long:
            "Pausing or canceling is always possible: completed work is finished and billed; work not started is canceled; source code and documentation can be handed over.",
        },
      ],
      ctaTitle: "Still have a question?",
      ctaBody: "Feel free to send a message. I will help you choose the best next step.",
    },
    contact: {
      title: "Contact",
      kicker: "Contact",
      intro: "Book an intro or send a message.",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Netherlands"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "Chamber of Commerce: (fill in)",
      btw: "VAT: (fill in)",
      formTitle: "Send a message",
      formPlaceholders: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      formSubmit: "Send",
      formNote: "Your message will be delivered securely to info@idexpraxis.nl.",
      formSuccess: "Thanks! Your message has been sent.",
    },
    root: {
      title: "IDEX Praxis",
      chooseLanguage: "Choose your language:",
      languages: {
        nl: "Nederlands",
        en: "English",
        it: "Italiano",
      },
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
    cta: { kennismaking: "Chiamata di 15 min", scan: "Praxis Scan (€750)", aanbod: "Vedi l'offerta", cases: "Vedi i casi", faq: "Leggi FAQ" },
    ctaPanel: {
      kicker: "Prossimo passo",
      badgeTitle: "Praxis",
      badgeSubtitle: "Prima versione",
      stats: [
        { n: "15", l: "min di chiamata" },
        { n: "1", l: "flusso chiave" },
        { n: "0", l: "nessun vincolo" },
      ],
    },
    footer: {
      blurb: "Praxis crea software per la pratica che segue il tuo flusso - sicuro, chiaro e trasferibile.",
      pagesLabel: "Pagine",
      contactLabel: "Contatti",
    },
    home: {
      heroKicker: "Software su misura",
      heroTitle: "Software per la pratica che segue il tuo flusso.",
      heroSub:
        "Un unico posto sicuro per intake, sessioni e progresso - senza forzare il tuo metodo dentro un pacchetto standard.",
      heroForWho: "Per fisioterapia, psicologia, coaching e piccoli studi.",
      scanHint: "Praxis Scan: piano + percorso in 1-2 settimane (scalabile).",
      heroOrbTitle: "Flusso - Calma - Risparmio di tempo",
      heroOrbBody: "Niente rumore, nessun vincolo - un flusso chiaro che funziona.",
      heroOrbExample: "Intake -> piano -> sessioni -> resoconto -> export",
      heroOrbUi: {
        header: "Intake - Primo appuntamento",
        time: "Oggi 10:30",
        clientLabel: "Cliente",
        clientValue: "Nuovo cliente",
        goalLabel: "Obiettivo",
        goalValue: "Calma e chiarezza nel percorso",
        statusLabel: "Stato",
        statusValue: "In corso",
        steps: ["Intake", "Piano", "Sessione", "Resoconto"],
      },
      promises: [
        { t: "Chiarezza & calma", d: "Tutto rintracciabile, con ruoli e permessi." },
        { t: "Privacy fin dall'inizio", d: "Accordi chiari su archiviazione, accesso e conservazione." },
        { t: "Flusso su misura", d: "Intake -> obiettivi -> sessioni -> esercizi -> valutazione." },
      ],
      stats: [
        { n: "1", l: "flusso base" },
        { n: "UE", l: "hosting possibile" },
        { n: "0", l: "nessun vincolo" },
        { n: "100%", l: "consegna trasferibile" },
      ],
      herkenbaarTitle: "Ti suona familiare?",
      herkenbaarBody:
        "Documenti e note sparsi aumentano l'amministrazione. IDEX Praxis porta struttura: dati cliente, passi del percorso ed esercizi in un unico flusso.",
      watJeKrijgtTitle: "Cosa ottieni",
      watJeKrijgtIntro: "I tool standard sono 'taglia unica'. Praxis e su misura per la tua pratica.",
      watJeKrijgtBullets: [
        "Prima versione utilizzabile di un flusso chiave.",
        "Template e questionari secondo il tuo metodo.",
        "Resoconti puliti ed export semplici.",
        "Consegna trasferibile: documentazione + codice sorgente + passaggio.",
        "Estensione solo quando serve, supporto su richiesta.",
      ],
      tooltipTitle: "Componenti open-source & hosting UE",
      tooltipBody:
        "Costruito con componenti open-source e (opzionale) hosting in UE. Ricevi documentazione + codice sorgente.",
      hoeWerktTitle: "Come funziona",
      hoeWerktSteps: [
        ["Chiamata (15 min)", "Obiettivi, problemi, flusso attuale."],
        ["Ambito", "Scegliamo un flusso con impatto immediato."],
        ["Offerta a prezzo fisso", "Ambito, piano, criteri di accettazione."],
        ["Sviluppo a milestone", "Test e aggiustamenti dentro l'ambito."],
        ["Consegna + passaggio", "Documentazione + codice + passaggio. Supporto su richiesta."],
      ],
      prijsTitle: "Range tipico (prima versione)",
      prijsBody:
        "Spesso €1.500 - €5.000 per un flusso chiave (in base a ruoli, template e report). Praxis Scan (€750) viene scalato se prosegui.",
      securityTitle: "Sicurezza & privacy",
      securityBody:
        "Sicurezza e accordi di trattamento dati fanno parte dell'ambito: accesso a ruoli, backup e accordi chiari.",
      bottomCtaTitle: "Non sei sicuro?",
      bottomCtaBody:
        "Prenota una chiamata gratuita di 15 minuti. Capirai subito se basta un tool standard o se una prima versione su misura ti fa risparmiare tempo.",
    },
    werkwijze: {
      title: "Metodo & garanzie",
      kicker: "IDEX Praxis",
      intro: "Software guidato dal flusso: sicuro, chiaro e trasferibile. Parti piccolo, espandi solo quando serve.",
      miniFlow: {
        title: "Milestone",
        steps: ["Chiamata iniziale", "Ambito", "Sviluppo & test", "Consegna"],
      },
      bullets: [
        ["Prima il processo", "Il tuo processo guida - la tecnica segue."],
        ["Consegna prevedibile", "Ambito fisso / prezzo fisso a milestone."],
        ["Privacy & sicurezza", "Pensato per dati sensibili (ruoli/permessi, accordi chiari)."],
        ["Nessun vincolo", "Documentazione + codice sorgente + passaggio inclusi."],
        ["Supporto su richiesta", "Nessun abbonamento obbligatorio."],
      ],
      continuityTitle: "Continuita",
      continuityBody: "Linee dirette con uno specialista; continuita garantita via documentazione e build riproducibili.",
      ctaTitle: "Scegliamo insieme il primo flusso chiave.",
      ctaBody: "Prenota una chiamata di 15 minuti. Capirai rapidamente qual e il primo passo migliore.",
    },
    standaard: {
      title: "Standard/low-code vs IDEX Praxis",
      kicker: "Confronto",
      intro: "Gli strumenti standard vanno bene se il tuo flusso e standard. Praxis e per chi vuole un flusso che calzi davvero.",
      tableHeadings: ["Voce", "Standard / low-code", "IDEX Praxis"],
      whenStdTitle: "Quando lo standard va bene",
      whenStd: ["Processo standard.", "Pochi template personalizzati.", "Workaround accettabili."],
      whenIdexTitle: "Quando Praxis e meglio",
      whenIdex: ["Il flusso deve guidare.", "Template/modelli sono centrali.", "Meno tool, un flusso.", "Proprieta e trasferibilita."],
      tableTitle: "Confronto rapido",
      table: [
        ["Start", "Veloce ma decide il tool", "Parti con il flusso chiave"],
        ["Flusso", "Ti adatti al tool", "Il tool si adatta a te"],
        ["Template", "Limitato", "Come lavori tu"],
        ["Panoramica", "Altri tool", "Un flusso chiaro"],
        ["Estensioni", "Dipende dal fornitore", "Basato su uso/impatti"],
        ["Proprieta", "Rischio vincoli", "Trasferibile (codice+doc+passaggio)"],
      ],
      ctaTitle: "Non sei sicuro di cosa scegliere?",
      ctaBody:
        "Prenota una chiamata di 15 minuti. Capirai rapidamente se basta un tool standard o se conviene una prima versione su misura.",
    },
    aanbod: {
      title: "Offerta",
      intro: "Parti piccolo. Oppure parti con certezza con una scan. Obiettivo: una prima versione che funzioni davvero nel quotidiano.",
      items: [
        { t: "Chiamata (15 min)", d: "Gratis. Valutiamo fit e primo flusso.", price: "Gratis" },
        { t: "Praxis Scan", d: "Piano chiaro: flusso, ambito, rischi, piano e prezzo fisso. Scalato se prosegui.", price: "€750 (scalabile)" },
        { t: "Prima versione Praxis", d: "Un flusso chiave con template e ruoli/permessi. Estensione controllata.", price: "Spesso €2.500 - €6.000" },
      ],
      note: "Vuoi collegare il bottone a Calendly? Sostituisci il link nella CTA.",
    },
    cases: {
      title: "Casi",
      intro: "Flussi reali: un flusso chiave, poi estensioni basate sull'impatto.",
      kicker: "Casi pratici",
      labels: {
        pain: "Problema",
        solution: "Soluzione",
        result: "Risultato",
      },
      items: [
        { t: "Caso 1 - Da note sparse a un flusso cliente", s: "Documenti e fogli ovunque.", k: ["Info in piu tool", "Resoconti incoerenti"], o: "Intake -> sessione -> resoconto -> panoramica.", r: ["Meno ricerca", "Resoconti piu veloci"] },
        { t: "Caso 2 - Metodo tuo, senza workaround", s: "Template e valutazioni su misura.", k: ["Template non entrano", "Troppo manuale"], o: "Template + flusso + export.", r: ["Meno doppio lavoro", "Piu calma"] },
        { t: "Caso 3 - Privacy & accessi", s: "Ruoli/permessi e hosting chiaro.", k: ["Dubbio su data location", "Serve RBAC"], o: "RBAC + accordi + passaggio trasferibile.", r: ["Fiducia", "Nessun vincolo"] },
      ],
      ctaTitle: "Pronto a partire?",
      ctaBody: "Prenota una call di 15 minuti. Verifichiamo se basta uno strumento standard o se conviene una prima versione su misura.",
    },
    faq: {
      title: "FAQ",
      kicker: "FAQ",
      intro: "Risposte rapide.",
      items: [
        {
          q: "I dati dei clienti sono sicuri?",
          short: "Risposta breve: Si. Sicurezza e privacy fanno parte di design e consegna.",
          long:
            "IDEX Praxis e costruito su una base professionale (Java Spring Boot + Spring Security) ed e configurato per gestire i dati in modo sicuro. Le misure standard includono ruoli e permessi (RBAC), autenticazione sicura (password hashate), connessioni cifrate (HTTPS/TLS), archiviazione protetta, logging quando opportuno e accordi di backup/ripristino. Gli aspetti GDPR come minimizzazione dei dati, trasparenza su hosting/accesso/conservazione e un accordo di trattamento (quando necessario) sono definiti in anticipo. Nessun sistema e privo di rischi al 100%; per questo uniamo misure tecniche e buone pratiche operative. Se necessario, possiamo concordare 2FA o logging piu rigoroso.",
        },
        {
          q: "Dove sono ospitati i dati?",
          short: "Risposta breve: Lo definiamo in anticipo. Hosting UE possibile, ad esempio in Germania (Hetzner).",
          long:
            "In base alle preferenze, l'hosting puo essere configurato in una regione UE - ad esempio Germania (Hetzner) - con database protetto e accordi di gestione chiari. Inoltre usiamo componenti open-source e consegniamo un risultato trasferibile (documentazione + codice sorgente), cosi non sei legato a un fornitore.",
          note:
            "Open source & hosting UE (cosa intendiamo?) Costruito in modo trasparente e (opzionalmente) ospitato in Germania (Hetzner). Include documentazione e codice sorgente, cosi non sei legato a un fornitore.",
        },
        {
          q: "Si adatta al mio flusso?",
          short: "Risposta breve: Si. Praxis segue il tuo flusso, non il contrario.",
          long:
            "Molti studi usano una propria metodologia, template e reportistica. Per questo partiamo piccoli: scegliamo insieme un flusso chiave (ad es. intake -> sessione -> resoconto) che porta subito calma e risparmio di tempo. Costruiamo template, campi e passaggi come li usi tu (questionari, modelli, grafici/panoramiche) e testi lungo il percorso. Il risultato e un software che funziona davvero nella pratica - e potrai estenderlo in seguito in base all'uso.",
        },
        {
          q: "Costi e tempi?",
          short: "Risposta breve: Chiarezza subito. Una prima versione utile e spesso tra €2.500 e €6.000.",
          long:
            "L'investimento dipende da ambito, ruoli, template e reportistica. Una prima versione utile per un flusso chiave e spesso tra €2.500 e €6.000. I tempi sono di solito alcune settimane, in base a ambito e feedback. Vuoi partire a basso rischio? Puoi iniziare con la Praxis Scan (€750) (scalabile se prosegui).",
        },
        {
          q: "E se volessi espandere in futuro?",
          short: "Risposta breve: Espandiamo passo dopo passo in base a impatto e uso.",
          long:
            "Praxis e progettato per crescere in modo controllato: prima un flusso chiave fatto bene, poi estensioni con passaggi, template, report o (quando utile) integrazioni. Le nuove richieste passano da change request: stimate e pianificate a parte, cosi ambito, tempi e costi restano prevedibili.",
        },
        {
          q: "Ci sono vincoli?",
          short: "Risposta breve: No. Ricevi una consegna trasferibile e non sei legato a una piattaforma.",
          long:
            "Nessun vincolo con il fornitore: documentazione, codice sorgente e un passaggio sono standard. Supporto e sviluppo successivo sono su richiesta (nessun abbonamento obbligatorio). Mantieni proprieta e liberta di scelta.",
        },
        {
          q: "Perche non usare software standard?",
          short: "Risposta breve: Va bene se il flusso e standard. Praxis serve quando la metodologia e centrale.",
          long:
            "Il software standard e spesso piu economico all'inizio, ma puo generare costi nascosti: adattare il flusso, workaround, strumenti extra o report limitati. Praxis e per chi vuole un flusso coerente. Standard/low-code va bene se il processo e per lo piu standard, usi pochi template/modelli personalizzati e accetti workaround. Praxis e migliore se la metodologia guida, i tuoi template/modelli sono centrali, vuoi crescere a step e l'ownership e importante.",
        },
        {
          q: "Low-code non e il futuro?",
          short: "Risposta breve: Il low-code e utile, ma non sempre e la soluzione migliore per dati sensibili e flussi specifici.",
          long:
            "Il low-code e mainstream e in molti casi una buona scelta. Praxis non e anti low-code; e pensato per situazioni in cui servono piu liberta, migliore fit, sicurezza/privacy e meno vincoli - soprattutto con dati sensibili e flussi che devono essere precisi.",
        },
        {
          q: "E se lo sviluppatore non fosse disponibile?",
          short: "Risposta breve: La continuita e garantita da trasferibilita e accordi chiari.",
          long:
            "Lavori con uno specialista dedicato: linee dirette e velocita. Al tempo stesso, la continuita e importante. Per questo IDEX garantisce trasferibilita con: 1) documentazione e struttura repo chiara 2) passaggio alla consegna 3) build riproducibili e accordi di test/accettazione 4) accordi su hosting e accessi. Se necessario, possiamo coinvolgere temporaneamente partner/freelancer fidati (con tuo consenso).",
        },
        {
          q: "Pausa o annullamento?",
          short: "Risposta breve: Sempre possibile; il lavoro svolto viene fatturato.",
          long:
            "Mettere in pausa o annullare e sempre possibile: il lavoro svolto viene completato e fatturato; quello non iniziato viene cancellato; codice sorgente e documentazione possono essere consegnati.",
        },
      ],
      ctaTitle: "Hai ancora una domanda?",
      ctaBody: "Scrivimi pure. Ti aiuto a scegliere il prossimo passo migliore.",
    },
    contact: {
      title: "Contatti",
      kicker: "Contatti",
      intro: "Prenota una call o invia un messaggio.",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Paesi Bassi"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "Registro imprese: (compila)",
      btw: "IVA: (compila)",
      formTitle: "Invia un messaggio",
      formPlaceholders: {
        name: "Nome",
        email: "Email",
        message: "Messaggio",
      },
      formSubmit: "Invia",
      formNote: "Il messaggio verra inviato in modo sicuro a info@idexpraxis.nl.",
      formSuccess: "Grazie! Il tuo messaggio e stato inviato.",
    },
    root: {
      title: "IDEX Praxis",
      chooseLanguage: "Scegli la lingua:",
      languages: {
        nl: "Nederlands",
        en: "English",
        it: "Italiano",
      },
    },
  },
} as const;

export function t(lang: Lang) {
  return copy[lang];
}
