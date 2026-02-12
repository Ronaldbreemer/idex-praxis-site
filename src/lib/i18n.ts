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
      title: "IDEX Praxis - Praktijksoftware die werkt zoals u werkt",
      desc: "Eén veilige plek voor intake, trajecten en voortgang. Zonder dat u uw werkwijze hoeft aan te passen.",
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
      cases: "Voorbeelden",
      faq: "Veelgestelde vragen",
    },
    cta: {
      kennismaking: "Plan een kennismaking (15 min)",
      scan: "Praxis Scan (€750)",
      aanbod: "Bekijk het aanbod",
      cases: "Bekijk voorbeelden",
      faq: "Lees de veelgestelde vragen",
    },
    ctaPanel: {
      kicker: "Volgende stap",
      badgeTitle: "Praxis",
      badgeSubtitle: "Eerste versie",
      stats: [
        { n: "15", l: "min. kennismaking" },
        { n: "1", l: "stap om te starten" },
        { n: "0", l: "niet-vast-aan-een-leverancier" },
      ],
    },
    footer: {
      blurb: "Praxis maakt praktijksoftware die werkt zoals u werkt. Veilig, overzichtelijk en overdraagbaar.",
      pagesLabel: "Pagina's",
      contactLabel: "Contact",
    },
    home: {
      heroKicker: "Praktijksoftware op maat",
      heroTitle: "Praktijksoftware die werkt zoals u werkt.",
      heroSub:
        "Eén veilige plek voor intake, trajecten en voortgang. Zonder dat u uw werkwijze hoeft aan te passen aan standaardsoftware.",
      heroForWho: "Voor o.a. fysiotherapie, psychologie, coaching en kleine praktijken.",
      scanHint:
        "Praxis Scan: een helder ontwerp + tijdpad in 1–2 weken (wij verrekenen dit als u doorgaat).",
      heroOrbTitle: "Werkwijze - Rust - Tijdwinst",
      heroOrbBody: "Geen gedoe. Niet-vast-aan-een-leverancier. Een heldere basis die werkt.",
      heroOrbExample: "Intake -> plan -> sessies -> verslag -> export",
      heroOrbUi: {
        header: "Intake - Eerste afspraak",
        time: "Vandaag 10:30",
        clientLabel: "Cliënt",
        clientValue: "Nieuwe cliënt",
        goalLabel: "Doel",
        goalValue: "Rust en overzicht in het traject",
        statusLabel: "Status",
        statusValue: "In behandeling",
        steps: ["Intake", "Plan", "Sessie", "Verslag"],
      },
      promises: [
        { t: "Overzicht en rust", d: "Alles op één plek, met rollen en rechten." },
        { t: "Privacy ingebouwd", d: "Heldere afspraken over opslag, toegang en bewaartermijnen." },
        { t: "Werkwijze op maat", d: "Intake -> doelen -> sessies -> oefeningen -> evaluatie. Of uw eigen volgorde." },
      ],
      stats: [
        { n: "1", l: "belangrijkste stap eerst" },
        { n: "EU", l: "opslag mogelijk" },
        { n: "0", l: "niet-vast-aan-een-leverancier" },
        { n: "100%", l: "overdraagbaar" },
      ],
      herkenbaarTitle: "Herkenbaar?",
      herkenbaarBody:
        "Werkt u met losse documenten, notities en verschillende programma's? Dan kost administratie vaak meer tijd dan u denkt. IDEX Praxis brengt structuur: cliëntinformatie, stappen in het traject en oefeningen op één plek. Zo houdt u meer tijd over voor het contact.",
      watJeKrijgtTitle: "Wat u krijgt",
      watJeKrijgtIntro:
        "Standaardsoftware is voor iedereen. Praxis bouwen we voor uw praktijk.",
      watJeKrijgtBullets: [
        "Eerste werkende versie van uw belangrijkste proces (snel resultaat).",
        "Formulieren, vragenlijsten en schema's die passen bij uw aanpak.",
        "Makkelijk verslag maken en eenvoudig exporteren/rapporteren.",
        "Overdraagbaar: documentatie + de code + overdracht (niet-vast-aan-een-leverancier).",
        "Later uitbreiden als het nodig is. Nazorg op afroep (geen abonnement).",
      ],
      tooltipTitle: "Open source & EU-hosting (wat is dat?)",
      tooltipBody:
        "Wij bouwen met eerlijke, open bouwstenen en kunnen de opslag verzorgen binnen Europa, bijvoorbeeld in Duitsland. Dit zorgt voor volledige duidelijkheid en maakt u minder afhankelijk. U ontvangt bovendien de handleiding en de digitale bouwtekening, zodat u altijd de vrijheid heeft om over te stappen en nooit vastzit aan één bedrijf.",
      hoeWerktTitle: "Hoe het werkt",
      hoeWerktSteps: [
        ["Kennismaking (15 min)", "We bespreken uw doelen, knelpunten en werkwijze."],
        ["Plan van aanpak", "We selecteren de belangrijkste werkstappen die direct resultaat opleveren."],
        ["Voorstel met vaste prijs", "Duidelijkheid over wat we maken, de planning, de voorwaarden en een vast bedrag."],
        ["Bouwen in duidelijke stappen", "U test tussentijds mee, zodat we direct kunnen bijsturen binnen het gemaakte plan."],
        ["Oplevering + overdracht", "Documentatie en de code. Overdracht en nazorg op afroep."],
      ],
      prijsTitle: "Prijsindicatie (eerste versie)",
      prijsBody:
        "Een eerste werkende versie van één belangrijk proces (bijv. intake + verslag of afspraken + verslag) is vaak vanaf €1.500. De prijs hangt af van rollen, formulieren en rapportage. Wilt u eerst zekerheid? Dan is er de Praxis Scan (€750). Die verrekenen we als u doorgaat.",
      securityTitle: "Veiligheid & privacy",
      securityBody:
        "Privacy en veiligheid nemen we mee vanaf het begin. Minimaal: rollen en rechten, logging, back-ups, veilige wachtwoorden en duidelijke afspraken over hosting en subverwerkers. Waar nodig is er een verwerkersovereenkomst.",
      bottomCtaTitle: "Twijfelt u wat bij u past?",
      bottomCtaBody:
        "Plan een gratis kennismaking van 15 minuten. Dan weet u snel of standaardsoftware genoeg is, of dat maatwerk u tijd en frustratie bespaart.",
    },

    werkwijze: {
      title: "Werkwijze & garanties",
      kicker: "IDEX Praxis",
      intro:
        "Software die werkt zoals u werkt: veilig, overzichtelijk en overdraagbaar. Geen eindeloze lijst functies, maar een duidelijke werkwijze die rust en tijdwinst geeft. U start klein en breidt pas uit als het nodig is.",
      miniFlow: {
        title: "Mijlpalen",
        steps: ["Kennismaking", "Plan van aanpak", "Bouw & testen", "Oplevering"],
      },
      bullets: [
        ["Eerst uw proces", "Uw proces en formulieren staan centraal. De techniek volgt."],
        ["Duidelijk traject", "Duidelijke afspraken en een vaste prijs, met stappen en heldere opleverpunten."],
        ["Privacy en veiligheid ingebouwd", "Voor gevoelige cliëntgegevens, met rollen en rechten en heldere afspraken."],
        ["Overdraagbaar, niet-vast-aan-een-leverancier", "Documentatie, de code en overdracht zijn standaard inbegrepen."],
        ["Nazorg zonder verplichting", "Onderhoud en doorontwikkeling op afroep. Geen abonnement."],
      ],
      continuityTitle: "Continuiteit (goed geborgd)",
      continuityBody:
        "U werkt met één vaste specialist: korte lijnen en snel schakelen. We schrijven alles op en zetten het netjes in mappen. Ook spreken we af wie toegang heeft tot de systemen en inloggegevens. Zo kan iemand anders het overnemen als dat nodig is.",
      ctaTitle: "Kies samen de beste eerste stap om te starten.",
      ctaBody: "Plan een kennismaking (15 min). Dan weet u snel wat een slimme eerste stap is.",
    },

    standaard: {
      title: "Standaardsoftware vs IDEX Praxis",
      kicker: "Vergelijking",
      intro:
        "Standaard praktijksoftware is prima als uw werkwijze grotendeels standaard is. Praxis is er voor praktijken die een werkwijze willen die echt past bij de dagelijkse praktijk.",
      tableHeadings: ["Onderdeel", "Standaardsoftware", "IDEX Praxis"],
      whenStdTitle: "Wanneer past standaardsoftware?",
      whenStd: [
        "Uw proces is grotendeels standaard.",
        "U gebruikt weinig eigen formulieren of modellen.",
        "U vindt omwegen of extra programma's prima.",
      ],
      whenIdexTitle: "Wanneer past IDEX Praxis beter?",
      whenIdex: [
        "Uw intake, sessies en verslag zijn leidend.",
        "U wilt vragenlijsten, schema's en modellen zoals u werkt.",
        "U wilt minder losse programma's en meer overzicht.",
        "U wilt zelf eigenaar zijn en kunnen overstappen (niet-vast-aan-een-leverancier).",
      ],
      tableTitle: "Korte vergelijking",
      table: [
        ["Start", "Snel, maar vaak op de manier van de de aangeboden software", "Klein starten met uw belangrijkste proces"],
        ["Workflow", "U past uw werkwijze aan", "Software volgt uw werkwijze"],
        ["Eigen formulieren/modellen", "Beperkt of via omwegen", "Zoals u werkt"],
        ["Overzicht", "Vaak extra programma's nodig", "Eén duidelijke werkwijze"],
        ["Uitbreiden", "Afhankelijk van leverancier", "Op basis van gebruik en impact"],
        ["Eigenaarschap", "Het gevaar dat u vastzit aan één leverancier", "Overdraagbaar (de code + documentatie + overdracht)"],
      ],
      ctaTitle: "Twijfelt u wat bij u past?",
      ctaBody:
        "Plan een kennismaking (15 min). Dan is snel duidelijk of standaardsoftware volstaat, of dat maatwerk u meer oplevert.",
    },

    aanbod: {
      title: "Aanbod",
      intro:
        "U kunt klein starten, of beginnen met een scan voor extra zekerheid. Alles is gericht op een eerste versie die prettig werkt in de praktijk.",
      items: [
        {
          t: "Kennismaking (15 min)",
          d: "Gratis. We bespreken uw doelen en knelpunten. Daarna weet u of standaardsoftware genoeg is, of dat maatwerk slimmer is.",
          price: "Gratis",
        },
        {
          t: "Praxis Scan",
          d: "Een snelle controle die eindigt in een duidelijk plan: de beste eerste stap, wat we precies gaan maken, de planning en een vaste prijs. Dit bedrag trekken we af van de kosten als u daarna met ons doorgaat."
,
          price: "€750 (verrekenbaar)",
        },
        {
          t: "Praxis MVP (eerste werkbare versie)",
          d: "Een eerste werkende versie van uw belangrijkste proces (zoals aanmelden -> afspraak -> verslag), compleet met uw eigen formulieren en de juiste toegangsrechten voor uw medewerkers. Daarna kunt u stap voor stap en in uw eigen tempo uitbreiden.",
          price: "Vanaf €1.500",
        },
      ],
      note: "",
    },

    cases: {
      title: "Voorbeelden",
      intro:
        "Praktijksoftware die werkt in uw dagelijkse werk. Geen alles-in-één pakket, maar een duidelijke basis die direct rust en tijdwinst geeft. Daarna kunt u stap voor stap uitbreiden.",
      kicker: "Praktijkvoorbeelden",
      labels: {
        pain: "Probleem",
        solution: "Oplossing",
        result: "Resultaat",
      },
      items: [
        {
          t: "Voorbeeld 1 - Van losse notities naar één duidelijk cliëntproces",
          s: "Situatie: losse documenten, notities en Excel. Overzicht vinden kost veel tijd.",
          k: [
            "Info staat verspreid over meerdere programma's",
            "Verslagen en voortgang zijn niet overal hetzelfde",
            "Geen vaste stappen: intake -> sessie -> evaluatie",
            "Modellen uitwerken kost veel tijd",
          ],
          o: "Oplossing: een eerste versie met intake -> sessie -> verslag -> overzicht, met eigen invulvelden en formulieren.",
          r: ["Overzicht per traject", "Sneller verslag door vaste opbouw", "Basis om later uit te breiden"],
        },
        {
          t: "Voorbeeld 2 - Eigen formulieren en werkwijze, zonder omwegen",
          s: "Situatie: u werkt met een eigen methodiek: modellen, vragenlijsten en evaluaties. Standaardsoftware past net niet.",
          k: ["Templates passen niet goed in standaardvelden", "Omwegen met exportjes en losse documenten", "Rapportage kost te veel handwerk"],
          o: "Oplossing: formulieren en vragenlijsten zoals u werkt, met een duidelijke werkwijze en makkelijk downloaden.",
          r: ["Minder dubbele administratie", "Vaste structuur per traject", "Meer rust: alles in één werkwijze"],
        },
        {
          t: "Voorbeeld 3 - Privacy en toegang: cliëntgegevens veilig geregeld",
          s: "Situatie: u wilt AVG goed regelen, met rollen en rechten en eigenaarschap.",
          k: ["Onzekerheid over waar data staat en wie erbij kan", "Rollen en rechten nodig (wie mag wat zien)"],
          o: "Oplossing: rollen en rechten (wie mag wat zien en doen), duidelijke afspraken over opslag en toegang, en overdraagbare oplevering (de code + documentatie).",
          r: ["Duidelijke afspraken (rust en vertrouwen)", "Goede basis voor gevoelige gegevens", "Niet-vast-aan-een-leverancier"],
        },
      ],
      ctaTitle: "Klaar om te starten?",
      ctaBody: "Plan een kennismaking van 15 minuten. Dan bepalen we samen of standaardsoftware volstaat, of dat maatwerk meer oplevert.",
    },

    faq: {
      title: "Veelgestelde vragen",
      kicker: "Veelgestelde vragen",
      intro: "De meestgestelde vragen helder uitgelegd. Staat uw vraag er niet bij? Neem dan gerust contact met ons op.",
      items: [
        {
          q: "Zijn mijn klantgegevens veilig?",
          short: "Kort antwoord: Ja. Veiligheid en privacy zijn de basis van alles wat we bouwen.",
          long:
            "Ja. We bouwen op een zeer stevig fundament en regelen de beveiliging standaard in: toegang per medewerker, veilige inlogmethodes, beveiligde internetverbindingen, afgeschermde opslag en reservekopieën. We maken vooraf duidelijke afspraken over privacy, wie er bij de gegevens kan en hoe lang we zaken bewaren volgens de wet. Omdat techniek alleen niet alles oplost, maken we ook werkafspraken over veilig gebruik van wachtwoorden. Extra beveiliging, zoals een inlogcode via uw telefoon, is altijd mogelijk.",
        },
        {
          q: "Waar staat mijn data?",
          short: "Kort antwoord: Dat spreken we vooraf helder af. Opslag kan in de EU, bijvoorbeeld in Duitsland.",
          long:
            "Afhankelijk van uw voorkeur bewaren we de gegevens op een veilige plek binnen Europa – bijvoorbeeld in Duitsland – met een strikt beveiligde database en heldere beheerafspraken. U ontvangt de handleiding en de digitale bouwtekening, zodat u altijd de baas blijft over uw eigen gegevens en niet vastzit aan één bedrijf.",
          note:
            "Eerlijk gebouwd & opslag in Europa: transparant ontwikkeld met vrije technieken en (optioneel) bewaard in Duitsland. Inclusief handleiding en de code, zodat u nooit afhankelijk bent van één leverancier.",
        },
        {
          q: "Kan dit aansluiten op mijn huidige werkwijze?",
          short: "Kort antwoord: Ja. Onze software volgt uw manier van werken, niet andersom.",
          long:
            "Veel praktijken hebben een eigen unieke aanpak en eigen formulieren. Daarom beginnen we klein: we kiezen samen één belangrijk proces (bijvoorbeeld: aanmelding -> afspraak -> verslag) dat direct rust en tijdwinst geeft. We bouwen de invulvelden, formulieren en stappen precies zoals u ze nu al gebruikt, en u test tussentijds steeds mee. Zo ontstaat software die in de praktijk echt prettig werkt.",
        },
        {
          q: "Wat kost het en hoe snel kan het live?",
          short: "Kort antwoord: U krijgt vooraf volledige duidelijkheid. Een eerste werkende versie start vaak vanaf € 1.500.",
          long:
            "De investering hangt af van hoe uitgebreid het systeem moet worden en hoeveel verschillende soorten gebruikers en formulieren u nodig heeft. Meestal is de eerste versie binnen enkele weken klaar voor gebruik. Wilt u liever heel voorzichtig beginnen? Start dan met de Praxis Scan (€ 750). Dit bedrag trekken we af van de uiteindelijke rekening als u daarna met ons doorgaat.",
        },
        {
          q: "Wat als u later wilt uitbreiden?",
          short: "Kort antwoord: Dan bouwen we stap voor stap verder op basis van uw behoeften.",
          long:
            "We zorgen eerst dat de basis perfect werkt. Daarna kunt u uitbreiden met extra stappen, formulieren, overzichten of koppelingen met andere systemen. Nieuwe wensen bespreken we vooraf: we maken daar een aparte planning en prijs voor, zodat u altijd precies weet waar u aan toe bent.",
        },
        {
          q: "Zit u vast aan ons?",
          short: "Kort antwoord: Nee. U krijgt alles zo opgeleverd dat u volledig onafhankelijk bent.",
          long:
            "U zit nergens aan vast: de handleiding, de digitale bouwtekening en een officiële overdracht zijn standaard bij de oplevering. Hulp achteraf of verdere uitbreidingen zijn altijd op aanvraag; u zit dus niet vast aan een verplicht abonnement. U blijft de eigenaar en behoudt de volledige regie.",
        },
        {
          q: "Waarom niet gewoon standaardsoftware?",
          short: "Kort antwoord: Standaardpakketten zijn prima voor algemeen gebruik. Praxis is voor werk dat precies moet passen.",
          long:
            "Standaardsoftware lijkt vaak goedkoper, maar kan later tijd kosten door onhandige omwegen of beperkte overzichten. Praxis is er voor praktijken die liever een werkwijze hebben die precies klopt. Een standaardpakket past als uw proces heel algemeen is. Praxis past beter als uw eigen methode het belangrijkst is en u zelf eigenaar wilt zijn van de oplossing.",
        },
        {
          q: "Zijn moderne snelle bouwtools niet de toekomst?",
          short: "Kort antwoord: Die zijn handig, maar niet altijd de beste keuze voor gevoelige gegevens.",
          long:
            "Hulpmiddelen om heel snel iets in elkaar te zetten kunnen goed werken. Maar bij gevoelige klantgegevens en een specifieke werkwijze wilt u vaak meer controle, een betere beveiliging en niet afhankelijk zijn van de grillen van een grote softwareleverancier. In die gevallen is ons maatwerk een veiligere en slimmere keuze.",
        },
        {
          q: "Wat als de ontwikkelaar uitvalt?",
          short: "Kort antwoord: Ja. Alles is zo ingericht dat het over te nemen is.",
          long:
            "U werkt met één vaste specialist voor korte lijnen en snelheid. We schrijven alles op en zetten het netjes in mappen. Ook spreken we af wie toegang heeft tot de systemen en inloggegevens. Als het nodig is, kan een andere specialist het overnemen. Extra hulp is altijd mogelijk in overleg.",
        },
        {
          q: "Pauzeren of annuleren?",
          short: "Kort antwoord: Dat kan op elk moment. Alleen het uitgevoerde werk wordt verrekend.",
          long:
            "U kunt altijd pauzeren of stoppen. Het werk dat tot dan toe is gedaan, ronden we netjes af en brengen we in rekening. Werk dat nog niet is gestart, komt te vervallen. De gemaakte bouwtekeningen en handleidingen worden dan direct aan u overgedragen.",
        },
      ],
      
      ctaTitle: "Nog een vraag?",
      ctaBody: "Stuur gerust een bericht. Wij denken met u mee en laten snel weten wat een goede eerste stap is.",
    },

    contact: {
      title: "Contact",
      kicker: "Contact",
      intro: "Plan een kennismaking of stuur uw vraag. Wij reageren snel (meestal binnen 1 werkdag).",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Nederland"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "KVK nr.: 99623781",
      btw: "BTW: (vul in)",
      formTitle: "Stuur een bericht",
      formPlaceholders: {
        name: "Naam",
        email: "E-mail",
        message: "Bericht",
      },
      formSubmit: "Verstuur",
      formNote: "Uw bericht wordt veilig verstuurd naar info@idexpraxis.nl.",
      formSuccess: "Bedankt! Uw bericht is verzonden.",
      formError: "Er ging iets mis. Probeer later opnieuw.",
    },
    root: {
      title: "IDEX Praxis",
      chooseLanguage: "Kies uw taal:",
      languages: {
        nl: "Nederlands",
        en: "English",
        it: "Italiano",
      },
    },
  },

  en: {
    meta: {
      title: "IDEX Praxis - Practice software that follows your way of working",
      desc: "A safe place for intake, trajectories and progress - without you having to adapt your method to standard software.",
    },
    common: {
      brandName: "IDEX Praxis",
      logoAlt: "IDEX Praxis logo",
      primaryNavLabel: "Main menu",
      menuLabel: "Menu",
      languageSwitcherLabel: "Language",
    },
    nav: {
      home: "Home",
      werkwijze: "Method",
      vergelijking: "Comparison",
      aanbod: "Offer",
      contact: "Contact",
      cases: "Cases",
      faq: "FAQ",
    },
    cta: {
      kennismaking: "Schedule an intro (15 min)",
      scan: "Praxis Scan (€750)",
      aanbod: "View the offer",
      cases: "View cases",
      faq: "Read the FAQ",
    },
    ctaPanel: {
      kicker: "Next step",
      badgeTitle: "Praxis",
      badgeSubtitle: "First version",
      stats: [
        { n: "15", l: "min intake" },
        { n: "1", l: "core workflow" },
        { n: "0", l: "lock-in" },
      ],
    },
    footer: {
      blurb: "Praxis builds practice software that follows your way of working - safe, clear and transferable.",
      pagesLabel: "Pages",
      contactLabel: "Contact",
    },
    home: {
      heroKicker: "Custom practice software",
      heroTitle: "Smart practice software that follows your way of working.",
      heroSub:
        "A safe place for intake, trajectories and progress - without you having to adapt your method to a standard package.",
      heroForWho: "For e.g. physiotherapy, psychology, coaching and small practices.",
      scanHint: "Praxis Scan: plan + roadmap in 1-2 weeks (credited).",
      heroOrbTitle: "Workflow - Calm - Time savings",
      heroOrbBody: "No noise, no lock-in - a clear core flow that works.",
      heroOrbExample: "Intake -> plan -> sessions -> report -> export",
      heroOrbUi: {
        header: "Intake - First appointment",
        time: "Today 10:30",
        clientLabel: "Client",
        clientValue: "New client",
        goalLabel: "Goal",
        goalValue: "Calm and overview in the trajectory",
        statusLabel: "Status",
        statusValue: "In treatment",
        steps: ["Intake", "Plan", "Session", "Report"],
      },
      promises: [
        { t: "Overview & calm", d: "Everything retrievable, with roles and permissions." },
        { t: "Privacy-by-design", d: "Clear agreements about storage, access and retention periods." },
        { t: "Custom workflow", d: "Intake -> goals -> sessions -> exercises -> evaluation. It can be different too." },
      ],
      stats: [
        { n: "1", l: "core workflow first" },
        { n: "EU", l: "hosting possible" },
        { n: "0", l: "lock-in" },
        { n: "100%", l: "transferable" },
      ],
      herkenbaarTitle: "Sound familiar?",
      herkenbaarBody:
        "Do you work with loose documents, notes and tools? Then a lot of time quietly goes to administration. IDEX Praxis brings structure: client information, steps in the trajectory and exercises in one place, so you have more time for the contact.",
      watJeKrijgtTitle: "What you get",
      watJeKrijgtIntro:
        "Standard software is 'one size fits most'. Praxis is for 'one size fits your practice'.",
      watJeKrijgtBullets: [
        "First workable version of a core workflow (quick value).",
        "Templates, questionnaires and schemas matching your approach.",
        "Clear reporting and simple exports/reporting.",
        "Transferable: documentation + source code + handover (no vendor lock-in).",
        "Expand when needed, aftercare on request (no subscription).",
      ],
      tooltipTitle: "Open source & EU hosting (what do we mean by this?)",
      tooltipBody:
        "We build with open-source components and can host in Germany (Hetzner). That provides more transparency and less dependency. You also receive documentation + source code, so you are not tied to a supplier.",
      hoeWerktTitle: "How it works",
      hoeWerktSteps: [
        ["Intro (15 min)", "Goals, bottlenecks and current way of working."],
        ["Scope sketch", "We choose a core workflow with immediate effect."],
        ["Quote (fixed price)", "Scope, planning, acceptance criteria and fixed price."],
        ["Build in milestones", "Test and adjust within the scope."],
        ["Delivery + handover", "Documentation + source code + handover. Aftercare on request."],
      ],
      prijsTitle: "Indication (first workable version)",
      prijsBody:
        "A first workable version for a core workflow (e.g. intake + report or appointments + report) is often between €1.500 and €5.000, depending on roles, templates and reporting. Want certainty first? Then there is the Praxis Scan (€750) - which is credited if you continue.",
      securityTitle: "Security & privacy",
      securityBody:
        "Privacy and information security are part of the scope. At minimum: role-based access, logging, backups, secure password storage and agreements about hosting/subprocessors. If applicable, a data processing agreement is available.",
      bottomCtaTitle: "Not sure what fits you?",
      bottomCtaBody:
        "Schedule a free 15-minute intro. Then you will quickly know whether standard software is sufficient, or whether a first workable custom version saves time and frustration.",
    },

    werkwijze: {
      title: "Working method & guarantees",
      kicker: "IDEX Praxis",
      intro:
        "Software that follows your way of working - safe, clear and transferable. Not as many features as possible, but a clear workflow that brings calm and time savings. You start small and only expand when it is really needed.",
      miniFlow: {
        title: "Milestones",
        steps: ["Intro", "Scope sketch", "Build & test", "Delivery"],
      },
      bullets: [
        ["Business-first", "Your process, templates and way of working are central - technology follows."],
        ["Predictable process", "Fixed scope/fixed price, milestones with acceptance criteria."],
        ["Privacy & security by design", "Suitable for sensitive client data, with roles/permissions and clear agreements."],
        ["Transferable, without lock-in", "Documentation, source code and handover moment included as standard."],
        ["Aftercare without obligation", "Maintenance and development on request, quoted upfront - no subscription."],
      ],
      continuityTitle: "Continuity (one specialist, well secured)",
      continuityBody:
        "You work with one fixed specialist: short lines and speed. Continuity is ensured through transferability: documentation, repository structure, reproducible builds and agreements about hosting/accounts. If needed, temporary extra capacity can be deployed, always in consultation.",
      ctaTitle: "Choose the best first core workflow together.",
      ctaBody: "Schedule an intro (15 min). Then it is quickly clear what the smartest first step is.",
    },

    standaard: {
      title: "Standard software / low-code vs IDEX Praxis",
      kicker: "Comparison",
      intro:
        "Standard practice software and low-code tools are fine if your way of working is largely standard. Praxis is for practices that want a coherent workflow that fits the reality of the work floor.",
      tableHeadings: ["Part", "Standard / low-code", "IDEX Praxis"],
      whenStdTitle: "When does standard software or low-code fit?",
      whenStd: [
        "Your process largely follows the book.",
        "You use few custom templates/models.",
        "You can live with workarounds or extra separate tools.",
      ],
      whenIdexTitle: "When does IDEX Praxis fit better?",
      whenIdex: [
        "Your intake, session and reporting workflow must be leading.",
        "You want questionnaires/schemas/models exactly as you work.",
        "You want fewer separate tools and a clear flow.",
        "You want ownership and transferability (no lock-in).",
      ],
      tableTitle: "Short comparison",
      table: [
        ["Start", "Fast, but often the way the tool wants", "Start small with your core workflow"],
        ["Workflow", "You adapt your way of working", "Software follows your way of working"],
        ["Custom templates/models", "Limited / workarounds", "Exactly as you work"],
        ["Overview", "Often extra tools alongside", "A clear flow"],
        ["Expanding", "Depends on vendor/roadmap", "Based on usage/impact"],
        ["Ownership", "Lock-in risk", "Transferable (source code + documentation + handover)"],
      ],
      ctaTitle: "Not sure what fits you?",
      ctaBody:
        "Schedule an intro (15 min). Then it is quickly clear whether standard software is sufficient, or whether a first workable custom version saves time and frustration.",
    },

    aanbod: {
      title: "Offer",
      intro:
        "You can start small right away or start with the certainty of a scan first. Everything is aimed at a first version that runs pleasantly in practice.",
      items: [
        {
          t: "Intro (15 min)",
          d: "Free. We discuss goals, bottlenecks and determine whether standard software is sufficient or whether custom work is smarter.",
          price: "Free",
        },
        {
          t: "Praxis Scan",
          d: "A short scan that ends in a clear plan: best first core workflow, scope, risks, planning and fixed price. Credited if you continue building.",
          price: "?750 (credited)",
        },
        {
          t: "Praxis MVP (first workable version)",
          d: "A first version around a core workflow (e.g. intake -> session -> report), with your templates and roles/permissions. You can expand later, in a controlled way.",
          price: "Often €2.500 - €6.000",
        },
      ],
      note: "",
    },

    cases: {
      title: "Cases",
      intro:
        "Practice software that really works in the daily routine. Not an all-in-one package, but a clear core workflow that delivers calm and time savings immediately - and then can be expanded in a controlled way.",
      kicker: "Practice cases",
      labels: {
        pain: "Problem",
        solution: "Solution",
        result: "Result",
      },
      items: [
        {
          t: "Case 1 - From loose notes to a clear client flow",
          s: "Situation: loose documents, notes and Excel. Finding overview takes time.",
          k: [
            "Information spread across multiple tools",
            "Reporting and progress not uniform",
            "No fixed structure from intake -> session -> evaluation",
            "Working out models takes a lot of time",
          ],
          o: "Solution: Praxis MVP around intake -> session -> report -> overview, with custom fields and templates.",
          r: ["One overview per client trajectory", "Faster reporting through a fixed structure", "Base to expand later"],
        },
        {
          t: "Case 2 - Custom templates and method, without workarounds",
          s: "Situation: custom method with models, questionnaires and evaluations. Standard software does not quite fit.",
          k: ["Templates do not fit well into standard fields", "Workarounds with exports/separate docs", "Reporting takes too much manual work"],
          o: "Solution: templates and questionnaires as the practice works + clear workflow + simple export.",
          r: ["Less double administration", "Fixed structure per trajectory", "More calm: everything in one flow"],
        },
        {
          t: "Case 3 - Privacy & access: client data safe and clearly arranged",
          s: "Situation: need for careful GDPR processing, roles/permissions and ownership.",
          k: ["Uncertainty about data location and access", "Need for roles/permissions (who can see what)"],
          o: "Solution: RBAC + hosting/access agreements + transferable delivery (source code + documentation).",
          r: ["Clear agreements (calm and trust)", "Professional basis for sensitive data", "No lock-in"],
        },
      ],
      ctaTitle: "Ready to start?",
      ctaBody: "Schedule an intro of 15 minutes. Then we determine whether standard software is sufficient or whether a first custom version delivers more.",
    },

    faq: {
      title: "FAQ",
      kicker: "FAQ",
      intro: "The questions you probably have first. Is your question not listed? Feel free to email or call.",
      items: [
        {
          q: "Is my client data safe?",
          short: "Short answer: Yes. Security and privacy are part of the design and delivery.",
          long:
            "Applications from IDEX Praxis are built on a professional foundation (Java Spring Boot + Spring Security) and set up to process client data safely and carefully. By default we ensure, among other things: roles & permissions (RBAC), secure authentication (passwords hashed), encrypted connections (HTTPS/TLS), protected data storage, logging (where appropriate) and backup/recovery agreements. GDPR aspects such as data minimization, transparency about hosting/access/retention periods and a data processing agreement (when needed) are defined in advance. No system is 100% risk-free; therefore we combine technology with working agreements (account management, strong passwords). If desired, additional measures such as 2FA or stricter logging can be agreed.",
        },
        {
          q: "Where is my data stored?",
          short: "Short answer: We clearly agree this in advance. Hosting can be in the EU, for example in Germany (Hetzner).",
          long:
            "Depending on your preference, hosting can be set up in an EU region - for example Germany (Hetzner) - with a protected database and clear management agreements. We also build with open-source components and deliver in a transferable way (documentation + source code), so you are not tied to a platform or supplier.",
          note:
            "Open source & EU hosting (what do we mean by that?) Transparently built and (optionally) hosted in Germany (Hetzner). Includes documentation and source code, so you are not tied to a supplier.",
        },
        {
          q: "Can this connect to my current way of working?",
          short: "Short answer: Yes. Praxis is intended to follow your way of working, not the other way around.",
          long:
            "Many practices work with their own method, templates and reporting style. That is why we start small: we choose a core workflow together (e.g. intake -> session -> report) that immediately brings calm and time savings. We build templates, fields and steps as you use them (questionnaires, models, charts/overviews) and you test along the way. This creates software that works well in practice - and later you can expand based on usage.",
        },
        {
          q: "What does it cost and how quickly can it go live?",
          short: "Short answer: You get clarity in advance. A first workable version is often between €2.500 and €6.000.",
          long:
            "The investment depends on scope, roles, templates and reporting. A first workable version for a core workflow is often between €2.500 and €6.000. Lead time is usually a few weeks, depending on scope and feedback moments. Want to start small with low risk? Then you can start with the Praxis Scan (€750) (credited if you continue building).",
        },
        {
          q: "What if I want to expand later?",
          short: "Short answer: Then we build step by step based on impact and usage.",
          long:
            "Praxis is designed to grow in a controlled way: first get a core workflow right, then expand with extra steps, templates, reports or (where sensible) integrations. New wishes go through change requests: we price and plan them separately, so scope, planning and costs remain predictable.",
        },
        {
          q: "Am I locked in to you?",
          short: "Short answer: No. You receive a transferable delivery and are not tied to a platform.",
          long:
            "No vendor lock-in: documentation, source code and a handover moment are standard parts of delivery. Aftercare and further development are on demand (no mandatory subscription). This way you keep ownership and freedom of choice.",
        },
        {
          q: "Why not just standard software?",
          short: "Short answer: Standard software is fine if your workflow is standard. Praxis is for custom work that follows your method.",
          long:
            "Standard software is often cheaper to start, but it can create hidden costs: adapting your way of working, workarounds, extra tools alongside or limited reporting. Praxis is for practices that prefer a coherent workflow. Standard/low-code often fits if: your process is largely standard, you use few custom models/templates and you can live with workarounds. Praxis fits better if: your method is leading, your templates/models are central, you want to expand in steps and ownership/transferability matters.",
        },
        {
          q: "Is low-code not the future?",
          short: "Short answer: Low-code is valuable, but not always the best fit with sensitive data and a specific way of working.",
          long:
            "Low-code is mainstream and can be a great choice in many situations. Praxis is not anti low-code; it is intended for situations where you need more freedom, a better fit, security/privacy and less lock-in - especially with client data and workflows that must be precise.",
        },
        {
          q: "What if the developer drops out?",
          short: "Short answer: Continuity is safeguarded with transferability and clear agreements.",
          long:
            "You work with one fixed specialist: short lines and speed. At the same time, continuity is important. That is why IDEX safeguards transferability with: 1) documentation and a clear repository structure 2) handover moment at delivery 3) reproducible builds and test/acceptance agreements 4) agreements about access to hosting and accounts. If needed, temporary extra capacity can be deployed from a small network of fixed freelancers/partners (only with approval).",
        },
        {
          q: "Pause or cancel?",
          short: "Short answer: Always possible; completed work is billed.",
          long:
            "Pausing or canceling is always possible: completed work is finished and billed; work not started is canceled; source code and documentation can be handed over.",
        },
      ],
      ctaTitle: "Still have a question?",
      ctaBody: "Feel free to message me. I will think it through with you and quickly tell you the best first step.",
    },

    contact: {
      title: "Contact",
      kicker: "Contact",
      intro: "Schedule an intro or send your question. I respond quickly (usually within 1 business day).",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Netherlands"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "Chamber of Commerce: 99623781",
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
      formError: "Something went wrong. Please try again later.",
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
      title: "IDEX Praxis - Software per lo studio che segue il tuo modo di lavorare",
      desc: "Un luogo sicuro per intake, percorsi e progressi - senza dover adattare il tuo metodo a un software standard.",
    },
    common: {
      brandName: "IDEX Praxis",
      logoAlt: "Logo IDEX Praxis",
      primaryNavLabel: "Menu principale",
      menuLabel: "Menu",
      languageSwitcherLabel: "Lingua",
    },
    nav: {
      home: "Home",
      werkwijze: "Metodo",
      vergelijking: "Confronto",
      aanbod: "Offerta",
      contact: "Contatto",
      cases: "Casi",
      faq: "FAQ",
    },
    cta: {
      kennismaking: "Pianifica una conoscenza (15 min)",
      scan: "Praxis Scan (€750)",
      aanbod: "Vedi l'offerta",
      cases: "Vedi i casi",
      faq: "Leggi le FAQ",
    },
    ctaPanel: {
      kicker: "Prossimo passo",
      badgeTitle: "Praxis",
      badgeSubtitle: "Prima versione",
      stats: [
        { n: "15", l: "min intake" },
        { n: "1", l: "workflow chiave" },
        { n: "0", l: "lock-in" },
      ],
    },
    footer: {
      blurb: "Praxis costruisce software per lo studio che segue il tuo modo di lavorare - sicuro, chiaro e trasferibile.",
      pagesLabel: "Pagine",
      contactLabel: "Contatto",
    },
    home: {
      heroKicker: "Software su misura per lo studio",
      heroTitle: "Software intelligente che segue il tuo modo di lavorare.",
      heroSub:
        "Un luogo sicuro per intake, percorsi e progressi - senza dover adattare il tuo metodo a un pacchetto standard.",
      heroForWho: "Per fisioterapia, psicologia, coaching e piccoli studi.",
      scanHint: "Praxis Scan: piano + roadmap in 1-2 settimane (scalabile).",
      heroOrbTitle: "Workflow - Calma - Risparmio di tempo",
      heroOrbBody: "Niente rumore, niente lock-in - un core flow chiaro che funziona.",
      heroOrbExample: "Intake -> piano -> sessioni -> resoconto -> export",
      heroOrbUi: {
        header: "Intake - Primo appuntamento",
        time: "Oggi 10:30",
        clientLabel: "Cliente",
        clientValue: "Nuovo cliente",
        goalLabel: "Obiettivo",
        goalValue: "Calma e panoramica nel percorso",
        statusLabel: "Stato",
        statusValue: "In trattamento",
        steps: ["Intake", "Piano", "Sessione", "Resoconto"],
      },
      promises: [
        { t: "Panoramica e calma", d: "Tutto rintracciabile, con ruoli e permessi." },
        { t: "Privacy-by-design", d: "Accordi chiari su archiviazione, accesso e tempi di conservazione." },
        { t: "Workflow su misura", d: "Intake -> obiettivi -> sessioni -> esercizi -> valutazione. Può anche essere diverso." },
      ],
      stats: [
        { n: "1", l: "prima il workflow chiave" },
        { n: "UE", l: "hosting possibile" },
        { n: "0", l: "lock-in" },
        { n: "100%", l: "trasferibile" },
      ],
      herkenbaarTitle: "Ti suona familiare?",
      herkenbaarBody:
        "Lavori con documenti, note e strumenti separati? Allora, senza accorgertene, molto tempo va all'amministrazione. IDEX Praxis porta struttura: informazioni cliente, passi del percorso ed esercizi in un unico posto, così hai più attenzione per il contatto.",
      watJeKrijgtTitle: "Cosa ottieni",
      watJeKrijgtIntro:
        "Il software standard è 'one size fits most'. Praxis è per 'one size fits il tuo studio'.",
      watJeKrijgtBullets: [
        "Prima versione funzionante di un workflow chiave (valore rapido).",
        "Template, questionari e schemi in linea con il tuo approccio.",
        "Reportistica ordinata ed export/report semplici.",
        "Trasferibile: documentazione + codice sorgente + passaggio (nessun vendor lock-in).",
        "Estendere quando serve, supporto su richiesta (nessun abbonamento).",
      ],
      tooltipTitle: "Open source & hosting UE (cosa intendiamo?)",
      tooltipBody:
        "Costruiamo con componenti open source e possiamo ospitare in Germania (Hetzner). Questo dà più trasparenza e meno dipendenza. Inoltre ricevi documentazione + codice sorgente, così non sei legato a un fornitore.",
      hoeWerktTitle: "Come funziona",
      hoeWerktSteps: [
        ["Conoscenza (15 min)", "Obiettivi, colli di bottiglia e modo di lavorare attuale."],
        ["Bozza di scope", "Scegliamo un workflow chiave con effetto immediato."],
        ["Offerta (prezzo fisso)", "Scope, pianificazione, criteri di accettazione e prezzo fisso."],
        ["Sviluppo per milestone", "Test e aggiustamenti entro lo scope."],
        ["Consegna + passaggio", "Documentazione + codice sorgente + passaggio. Supporto su richiesta."],
      ],
      prijsTitle: "Indicazione (prima versione funzionante)",
      prijsBody:
        "Una prima versione funzionante per un workflow chiave (ad es. intake + resoconto o appuntamenti + resoconto) è spesso tra €1.500 e €5.000, in base a ruoli, template e reportistica. Vuoi certezza prima? Allora c'è la Praxis Scan (€750) - che viene scalata se prosegui.",
      securityTitle: "Sicurezza e privacy",
      securityBody:
        "Privacy e sicurezza delle informazioni fanno parte dello scope. Minimo: accesso basato sui ruoli, logging, backup, gestione sicura delle password e accordi su hosting/sub-responsabili. Se applicabile, è disponibile un accordo di trattamento dati.",
      bottomCtaTitle: "Non sei sicuro di cosa faccia per te?",
      bottomCtaBody:
        "Pianifica una conoscenza gratuita di 15 minuti. Poi saprai rapidamente se basta un software standard o se una prima versione su misura ti fa risparmiare tempo e frustrazione.",
    },

    werkwijze: {
      title: "Metodo di lavoro e garanzie",
      kicker: "IDEX Praxis",
      intro:
        "Software che segue il tuo modo di lavorare - sicuro, chiaro e trasferibile. Non il maggior numero possibile di funzioni, ma un workflow chiaro che porta calma e risparmio di tempo. Parti in piccolo ed espandi solo quando serve davvero.",
      miniFlow: {
        title: "Milestone",
        steps: ["Conoscenza", "Bozza di scope", "Sviluppo e test", "Consegna"],
      },
      bullets: [
        ["Prima l'organizzazione", "Il tuo processo, i template e il modo di lavorare sono centrali - la tecnologia segue."],
        ["Percorso prevedibile", "Scope fisso/prezzo fisso, milestone con criteri di accettazione."],
        ["Privacy e sicurezza by design", "Adatto a dati cliente sensibili, con ruoli/permessi e accordi chiari."],
        ["Trasferibile, senza lock-in", "Documentazione, codice sorgente e momento di passaggio inclusi di default."],
        ["Supporto senza obblighi", "Manutenzione ed evoluzioni su richiesta, preventivate prima - nessun abbonamento."],
      ],
      continuityTitle: "Continuità (uno specialista, ben garantita)",
      continuityBody:
        "Lavori con uno specialista dedicato: comunicazione diretta e velocità. La continuità è garantita tramite trasferibilità: documentazione, struttura del repository, build riproducibili e accordi su hosting/account. Se necessario, può essere coinvolta temporaneamente capacità aggiuntiva, sempre previo accordo.",
      ctaTitle: "Scegliamo insieme il miglior primo workflow chiave.",
      ctaBody: "Pianifica una conoscenza (15 min). Poi è subito chiaro qual è il primo passo più intelligente.",
    },

    standaard: {
      title: "Software standard / low-code vs IDEX Praxis",
      kicker: "Confronto",
      intro:
        "Software standard per lo studio e strumenti low-code vanno bene se il tuo modo di lavorare è in gran parte standard. Praxis è per gli studi che vogliono un workflow che combaci davvero e si adatti alla realtà del lavoro quotidiano.",
      tableHeadings: ["Voce", "Standard / low-code", "IDEX Praxis"],
      whenStdTitle: "Quando va bene software standard o low-code?",
      whenStd: [
        "Il tuo processo segue in gran parte lo schema standard.",
        "Usi pochi template/modelli personali.",
        "Puoi convivere con workaround o strumenti separati extra.",
      ],
      whenIdexTitle: "Quando IDEX Praxis è più adatto?",
      whenIdex: [
        "Il tuo workflow di intake, sessione e resoconto deve essere centrale.",
        "Vuoi questionari/schemi/modelli esattamente come lavori tu.",
        "Vuoi meno strumenti separati e un flusso chiaro.",
        "Vuoi ownership e trasferibilità (niente lock-in).",
      ],
      tableTitle: "Confronto rapido",
      table: [
        ["Start", "Veloce, ma spesso come vuole lo strumento", "Parti in piccolo con il tuo workflow chiave"],
        ["Workflow", "Ti adatti allo strumento", "Il software segue il tuo modo di lavorare"],
        ["Template/modelli personali", "Limitato / workaround", "Esattamente come lavori tu"],
        ["Panoramica", "Spesso strumenti extra a lato", "Un flusso chiaro"],
        ["Estensioni", "Dipende dal fornitore/roadmap", "In base a uso/impatto"],
        ["Ownership", "Rischio lock-in", "Trasferibile (codice sorgente + documentazione + passaggio)"],
      ],
      ctaTitle: "Non sei sicuro di cosa faccia per te?",
      ctaBody:
        "Pianifica una conoscenza (15 min). Poi è subito chiaro se basta lo standard o se una prima versione su misura ti fa risparmiare tempo e frustrazione.",
    },

    aanbod: {
      title: "Offerta",
      intro:
        "Puoi partire subito in piccolo o iniziare con la certezza di una scan prima. Tutto è orientato a una prima versione che funzioni bene nella pratica quotidiana.",
      items: [
        {
          t: "Conoscenza (15 min)",
          d: "Gratis. Parliamo di obiettivi, colli di bottiglia e definiamo se basta lo standard o se il su misura è più intelligente.",
          price: "Gratis",
        },
        {
          t: "Praxis Scan",
          d: "Una scan breve che finisce con un piano chiaro: miglior primo workflow chiave, scope, rischi, pianificazione e prezzo fisso. Scalata se prosegui con lo sviluppo.",
          price: "?750 (scalabile)",
        },
        {
          t: "Praxis MVP (prima versione funzionante)",
          d: "Una prima versione attorno a un workflow chiave (ad es. intake -> sessione -> resoconto), con i tuoi template e ruoli/permessi. Estensioni possibili più avanti, in modo controllato.",
          price: "Spesso €2.500 - €6.000",
        },
      ],
      note: "",
    },

    cases: {
      title: "Casi",
      intro:
        "Software che funziona davvero nella routine quotidiana. Non un pacchetto tutto-in-uno, ma un workflow chiaro che porta subito calma e risparmio di tempo - e poi può crescere in modo controllato.",
      kicker: "Casi di studio",
      labels: {
        pain: "Problema",
        solution: "Soluzione",
        result: "Risultato",
      },
      items: [
        {
          t: "Caso 1 - Da note sparse a un flusso cliente chiaro",
          s: "Situazione: documenti separati, note ed Excel. Ritrovare l'overview richiede tempo.",
          k: [
            "Informazioni distribuite su più strumenti",
            "Resoconti e progressi non uniformi",
            "Nessuna struttura fissa da intake -> sessione -> valutazione",
            "Sviluppare i modelli richiede molto tempo",
          ],
          o: "Soluzione: Praxis MVP attorno a intake -> sessione -> resoconto -> panoramica, con campi e template personalizzati.",
          r: ["Una panoramica per percorso cliente", "Resoconti più rapidi grazie a una struttura fissa", "Base per espandere in futuro"],
        },
        {
          t: "Caso 2 - Template e metodologia propri, senza workaround",
          s: "Situazione: metodologia propria con modelli, questionari e valutazioni. Lo standard non calza del tutto.",
          k: ["I template non si adattano bene ai campi standard", "Workaround con export/documenti separati", "La reportistica richiede troppo lavoro manuale"],
          o: "Soluzione: template e questionari come lavora lo studio + workflow chiaro + export semplice.",
          r: ["Meno doppia amministrazione", "Struttura fissa per percorso", "Più calma: tutto in un flusso"],
        },
        {
          t: "Caso 3 - Privacy e accesso: dati cliente sicuri e ben organizzati",
          s: "Situazione: bisogno di gestione GDPR accurata, ruoli/permessi e ownership.",
          k: ["Incertezza su posizione dei dati e accessi", "Bisogno di ruoli/permessi (chi vede cosa)"],
          o: "Soluzione: RBAC + accordi su hosting/accessi + consegna trasferibile (codice sorgente + documentazione).",
          r: ["Accordi chiari (calma e fiducia)", "Base professionale per dati sensibili", "Nessun lock-in"],
        },
      ],
      ctaTitle: "Pronto a partire?",
      ctaBody:
        "Pianifica una conoscenza di 15 minuti. Poi definiamo se basta lo standard o se una prima versione su misura offre di più.",
    },

    faq: {
      title: "FAQ",
      kicker: "FAQ",
      intro: "Le domande che probabilmente hai per prime. La tua non c'è? Scrivi o chiama pure.",
      items: [
        {
          q: "I dati dei clienti sono sicuri?",
          short: "Risposta breve: Sì. Sicurezza e privacy fanno parte di progettazione e consegna.",
          long:
            "Le applicazioni di IDEX Praxis sono costruite su una base professionale (Java Spring Boot + Spring Security) e configurate per gestire i dati cliente in modo sicuro e accurato. Di default garantiamo, tra l'altro: ruoli e permessi (RBAC), autenticazione sicura (password hashate), connessioni cifrate (HTTPS/TLS), archiviazione protetta, logging (dove appropriato) e accordi di backup/ripristino. Aspetti GDPR come minimizzazione dei dati, trasparenza su hosting/accesso/tempi di conservazione e un accordo di trattamento (quando necessario) vengono definiti prima. Nessun sistema è privo di rischi al 100%; per questo uniamo misure tecniche e accordi operativi (gestione account, password robuste). Se desiderato, si possono concordare misure extra come 2FA o logging più rigoroso.",
        },
        {
          q: "Dove sono i miei dati?",
          short: "Risposta breve: Lo definiamo chiaramente in anticipo. Hosting UE possibile, ad esempio in Germania (Hetzner).",
          long:
            "In base alle tue preferenze, l'hosting può essere configurato in una regione UE - ad esempio Germania (Hetzner) - con database protetto e accordi di gestione chiari. Inoltre costruiamo con componenti open source e consegniamo in modo trasferibile (documentazione + codice sorgente), così non sei legato a una piattaforma o a un fornitore.",
          note:
            "Open source & hosting UE (cosa intendiamo?) Costruito in modo trasparente e (opzionalmente) ospitato in Germania (Hetzner). Include documentazione e codice sorgente, così non sei legato a un fornitore.",
        },
        {
          q: "Può collegarsi al mio modo di lavorare attuale?",
          short: "Risposta breve: Sì. Praxis è pensato per seguire il tuo modo di lavorare, non il contrario.",
          long:
            "Molti studi lavorano con una propria metodologia, template e stile di reportistica. Per questo partiamo in piccolo: scegliamo insieme un workflow chiave (ad es. intake -> sessione -> resoconto) che porta subito calma e risparmio di tempo. Costruiamo template, campi e passi come li usi tu (questionari, modelli, grafici/panoramiche) e testi lungo il percorso. Così nasce un software che funziona bene nella pratica - e poi potrai espandere in base all'uso.",
        },
        {
          q: "Quanto costa e quanto velocemente può andare live?",
          short: "Risposta breve: Hai chiarezza subito. Una prima versione funzionante è spesso tra €2.500 e €6.000.",
          long:
            "L'investimento dipende da scope, ruoli, template e reportistica. Una prima versione funzionante per un workflow chiave è spesso tra €2.500 e €6.000. I tempi sono di solito alcune settimane, in base a scope e momenti di feedback. Vuoi partire con basso rischio? Allora puoi iniziare con la Praxis Scan (€750) (scalata se prosegui).",
        },
        {
          q: "E se in futuro volessi espandere?",
          short: "Risposta breve: Espandiamo passo dopo passo in base a impatto e utilizzo.",
          long:
            "Praxis è progettato per crescere in modo controllato: prima un workflow chiave fatto bene, poi estensioni con passi aggiuntivi, template, report o (dove ha senso) integrazioni. Le nuove richieste passano tramite change request: le stimiamo e pianifichiamo a parte, così scope, tempi e costi restano prevedibili.",
        },
        {
          q: "Sono vincolato a voi?",
          short: "Risposta breve: No. Ricevi una consegna trasferibile e non sei legato a una piattaforma.",
          long:
            "Nessun vendor lock-in: documentazione, codice sorgente e un momento di passaggio sono parte standard della consegna. Supporto e sviluppo successivo sono su richiesta (nessun abbonamento obbligatorio). Così mantieni ownership e libertà di scelta.",
        },
        {
          q: "Perché non usare semplicemente software standard?",
          short: "Risposta breve: Lo standard va bene se il tuo workflow è standard. Praxis è per il su misura che segue la tua metodologia.",
          long:
            "Lo standard è spesso più economico all'inizio, ma può creare costi nascosti: adattare il modo di lavorare, workaround, strumenti extra a lato o reportistica limitata. Praxis è per gli studi che preferiscono un workflow che combaci davvero. Standard/low-code spesso va bene se: il processo è in gran parte standard, usi pochi modelli/template personali e puoi convivere con workaround. Praxis è più adatto se: la metodologia è centrale, i tuoi template/modelli sono importanti, vuoi crescere a step e ownership/trasferibilità contano.",
        },
        {
          q: "Il low-code non è il futuro?",
          short: "Risposta breve: Il low-code è utile, ma non sempre è la scelta migliore per dati sensibili e un modo di lavorare specifico.",
          long:
            "Il low-code è mainstream e in molte situazioni può essere un'ottima scelta. Praxis non è contro il low-code; è pensato per i casi in cui servono più libertà, migliore aderenza, sicurezza/privacy e meno lock-in - soprattutto con dati cliente e workflow che devono essere precisi.",
        },
        {
          q: "E se lo sviluppatore non fosse disponibile?",
          short: "Risposta breve: La continuità è garantita da trasferibilità e accordi chiari.",
          long:
            "Lavori con uno specialista dedicato: comunicazione diretta e velocità. Allo stesso tempo, la continuità è importante. Per questo IDEX garantisce trasferibilità con: 1) documentazione e struttura repository chiara 2) momento di passaggio alla consegna 3) build riproducibili e accordi di test/accettazione 4) accordi su accesso a hosting e account. Se necessario, può essere coinvolta temporaneamente capacità aggiuntiva da una piccola rete di freelancer/partner abituali (solo con approvazione).",
        },
        {
          q: "Pausa o annullamento?",
          short: "Risposta breve: Sempre possibile; il lavoro svolto viene fatturato.",
          long:
            "Mettere in pausa o annullare è sempre possibile: il lavoro svolto viene completato e fatturato; il lavoro non iniziato viene annullato; codice sorgente e documentazione possono essere consegnati.",
        },
      ],
      ctaTitle: "Hai ancora una domanda?",
      ctaBody: "Scrivimi pure. Ci penso con te e ti dico rapidamente qual è il primo passo migliore.",
    },

    contact: {
      title: "Contatto",
      kicker: "Contatto",
      intro: "Pianifica una conoscenza o invia la tua domanda. Rispondo rapidamente (di solito entro 1 giorno lavorativo).",
      company: "IDEX Praxis",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Paesi Bassi"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexpraxis.nl",
      kvk: "Registro imprese: 99623781",
      btw: "IVA: (compila)",
      formTitle: "Invia un messaggio",
      formPlaceholders: {
        name: "Nome",
        email: "Email",
        message: "Messaggio",
      },
      formSubmit: "Invia",
      formNote: "Il tuo messaggio viene inviato in modo sicuro a info@idexpraxis.nl.",
      formSuccess: "Grazie! Il tuo messaggio è stato inviato.",
      formError: "Qualcosa e andato storto. Riprova piu tardi.",
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
