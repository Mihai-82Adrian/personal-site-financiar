export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  description: string[];
  logo: string;
  darkLogo?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  description: string[];
  logo: string;
  darkLogo?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  social: {
    linkedin: string;
    instagram: string[];
    facebook: string;
  };
  about: string;
}

export const personalInfo: PersonalInfo = {
  name: "Mihai Adrian Mateescu",
  title: "Finanzbuchhalter",
  phone: "+49170 474 0121",
  email: "mihai.mateescu@web.de",
  address: "Bahnhofstr.65b, 21218 Seevetal",
  social: {
    linkedin: "https://www.linkedin.com/in/mateescu-mihai-922b3169",
    instagram: ["@mindsprofit", "@mateescu.mihai"],
    facebook: "https://www.facebook.com/ProfitMinds.de",
  },
  about: "Engagierter Finanzbuchhalter mit Erfahrung in der Buchhaltung und Finanzverwaltung, spezialisiert auf die detaillierte Analyse von Geschäftsvorfällen und die steuerliche Berichterstattung. Mit einer ausgeprägten Leidenschaft für Zahlen und einem scharfen Auge für Details suche ich stets nach Möglichkeiten, meine beruflichen Fähigkeiten weiterzuentwickeln. Meine vielseitige Erfahrung, die von der Buchhaltung bis hin zum Management von Teams reicht, empfiehlt mich als einen flexiblen Fachmann, der in jeder finanziellen Umgebung einen Mehrwert schafft."
};

export const workExperience: WorkExperience[] = [
  {
    id: "modal3",
    position: "Finanzbuchhalter",
    company: "Modal 3 Logistik GmbH",
    location: "Hamburg",
    period: "05/2025 - zurzeit",
    startDate: new Date("2025-05-01"),
    endDate: null,
    current: true,
    description: [
      "Eigenständige Führung der Kreditoren- und Debitorenbuchhaltung: Umfassende Bearbeitung des gesamten Rechnungseingangs- und -ausgangsprozesses, von der Prüfung der Eingangsrechnungen bis zur Überwachung offener Posten.",
      "Verbuchung logistikspezifischer Geschäftsvorfälle: Verantwortlich für die korrekte Erfassung und Zuordnung von Kosten.",
      "Abwicklung des Zahlungsverkehrs und Bankenbuchhaltung: Durchführung des elektronischen Zahlungsverkehrs, Buchung aller Bankbewegungen sowie regelmäßige Abstimmung der Bankkonten zur Sicherstellung der Finanzintegrität.",
      "Vorbereitung und Meldung der Umsatzsteuervoranmeldungen: Termingerechte Erstellung und elektronische Übermittlung der monatlichen USt-VA an das Finanzamt.",
      "Aktive Mitwirkung bei den Monats- und Jahresabschlüssen: Unterstützung bei der Vorbereitung der Abschlüsse nach HGB durch die Erstellung von Abgrenzungsbuchungen und die Kontenklärung in enger Zusammenarbeit mit der Geschäftsführung und dem Steuerberater.",
      "Schnittstellenfunktion und Reporting: Dient als Ansprechpartner für die Disposition zur Klärung abrechnungsrelevanter Sachverhalte und erstellt regelmäßig Reports für das Management."
    ],
    logo: "/images/logos/modal3.webp",
    darkLogo: "/images/logos/d_modal3.webp"
  },
  {
    id: "kesen",
    position: "Finanzbuchhalter",
    company: "Kesen Steuerberatungsgesellschaft mbh",
    location: "Hamburg",
    period: "02/2024 - 04/2025",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2025-04-30"),
    current: false,
    description: [
      "Prüfung und Verbuchung von Geschäftsvorfällen: Sorgfältige Prüfung, Kontierung und Buchung laufender Geschäftsvorfälle unter Einhaltung der geltenden Buchführungsstandards und -richtlinien.",
      "Steuerliche Meldungen: Verantwortlich für die Vorbereitung und elektronische Übermittlung der monatlichen oder vierteljährlichen Umsatzsteuervoranmeldungen, individuell abgestimmt auf die Bedürfnisse der Mandanten."
    ],
    logo: "/images/logos/kesen.webp",
    darkLogo: "/images/logos/d_kesen.webp"
  },
  {
    id: "herrmann",
    position: "Finanzbuchhalter",
    company: "Dipl.oec. Gerolf Herrmann",
    location: "Hamburg",
    period: "08/2023 - 12/2023",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-12-31"),
    current: false,
    description: [
      "Kontierung und Buchung: Fachgerechte Prüfung und Verbuchung von Geschäftsvorfällen zur Sicherstellung einer korrekten Buchführung und Vorbereitung für den Jahresabschluss.",
      "Umsatzsteuerliche Verpflichtungen: Effiziente Vorbereitung und fristgerechte elektronische Einreichung der Umsatzsteuervoranmeldungen, angepasst an die Anforderungen der Mandanten."
    ],
    logo: "/images/logos/herrmann.webp",
    darkLogo: "/images/logos/d_herrmann.webp"
  },
  {
    id: "quadriga",
    position: "Auszubildender Steuerfachangestellter",
    company: "Quadriga Steuerberatungsgesellschaft OHG",
    location: "Buchholz in der Nordheide",
    period: "08/2022 - 11/2022",
    startDate: new Date("2022-08-01"),
    endDate: new Date("2022-11-30"),
    current: false,
    description: [
      "Unterstützung in der Steuerberatung und Buchführung: Durchführung grundlegender Aufgaben in der Steuerberatung und Buchhaltung, einschließlich der Vorbereitung von Steuererklärungen und der Bearbeitung von Buchungsvorgängen unter Anleitung erfahrener Fachleute."
    ],
    logo: "/images/logos/quadriga.webp",
    darkLogo: "/images/logos/d_quadriga.webp"
  },
  {
    id: "amazon",
    position: "Versandmitarbeiter",
    company: "Amazon Logistik Winsen GmbH",
    location: "Winsen Luhe",
    period: "10/2020 - 12/2020",
    startDate: new Date("2020-10-01"),
    endDate: new Date("2020-12-31"),
    current: false,
    description: [
      "Auftragsabwicklung und Verpackung: Verantwortlich für das sorgfältige Abholen und Verpacken von Bestellungen, um eine effiziente und fehlerfreie Abwicklung der Kundenaufträge zu gewährleisten."
    ],
    logo: "/images/logos/amazon.webp",
    darkLogo: "/images/logos/d_amazon.webp"
  },
  {
    id: "tobusch",
    position: "Anlagenmechaniker SHK",
    company: "ToBusch Fußbodenheizung",
    location: "Rosengarten",
    period: "08/2018 - 09/2020",
    startDate: new Date("2018-08-01"),
    endDate: new Date("2020-09-30"),
    current: false,
    description: [
      "Installation von Fußbodenheizungssystemen: Fachgerechte Verlegung und Installation von Fußbodenheizungssystemen unter Einhaltung der technischen Standards und Sicherheitsvorschriften."
    ],
    logo: "/images/logos/tobusch.webp",
    darkLogo: "/images/logos/d_tobusch.webp"
  },
  {
    id: "smc-lead",
    position: "Gebietsverkaufsleiter",
    company: "SMC Rumänien",
    location: "Bukarest",
    period: "01/2017 - 08/2018",
    startDate: new Date("2017-01-01"),
    endDate: new Date("2018-08-31"),
    current: false,
    description: [
      "Aufbau und Pflege von Kundenbeziehungen: Diente als zentrale Anlaufstelle zwischen Technik und Kunden, um effektive Kommunikationswege sicherzustellen und technische Lösungen kundengerecht zu präsentieren.",
      "Führung und Motivation des Verkaufsteams: Leitete ein Team von drei Handelsvertretern, um Verkaufsziele zu erreichen und die Leistung des Teams kontinuierlich zu steigern.",
      "Strategische Zusammenarbeit mit dem Country Manager: Verantwortlich für die enge Zusammenarbeit mit dem Country Manager, einschließlich der Teilnahme an strategischen Verkaufsbesprechungen zur Optimierung der Vertriebsergebnisse."
    ],
    logo: "/images/logos/smc.webp",
    darkLogo: "/images/logos/d_smc.webp"
  },
  {
    id: "smc-sales",
    position: "Handelsvertreter - Industrieller Vertrieb",
    company: "SMC Rumänien",
    location: "Bukarest",
    period: "02/2013 - 12/2016",
    startDate: new Date("2013-02-01"),
    endDate: new Date("2016-12-31"),
    current: false,
    description: [
      "Kundendialog und technische Beratung: Sicherstellung einer nahtlosen Kommunikation zwischen Technik und Kunden sowie aktive Teilnahme an Branchenmessen und Ausstellungen zur Förderung der Produktbekanntheit."
    ],
    logo: "/images/logos/smc.webp",
    darkLogo: "/images/logos/d_smc.webp"
  },
  {
    id: "guess",
    position: "Kassierer (Handel)",
    company: "GUESS Rumänien",
    location: "Bukarest",
    period: "05/2011 - 02/2013",
    startDate: new Date("2011-05-01"),
    endDate: new Date("2013-02-28"),
    current: false,
    description: [
      "Kundenservice und Zahlungsabwicklung: Kompetente Beratung der Kunden in Modefragen, Abwicklung von Zahlungen und Erstellung von Rechnungen.",
      "Berichtswesen: Erstellung und Analyse täglicher Verkaufsberichte zur Unterstützung des Managements bei der Entscheidungsfindung."
    ],
    logo: "/images/logos/guess.webp",
    darkLogo: "/images/logos/d_guess.webp"
  },
  {
    id: "zara",
    position: "Verkaufsberater",
    company: "ZARA Rumänien",
    location: "Bukarest",
    period: "02/2010 - 04/2011",
    startDate: new Date("2010-02-01"),
    endDate: new Date("2011-04-30"),
    current: false,
    description: [
      "Kundenberatung und Produktempfehlung: Kompetente Beratung der Kunden bei der Produktauswahl und Sicherstellung einer ansprechenden Präsentation der Waren im Geschäft.",
      "Mitarbeiter des Monats: Anerkennung als 'Mitarbeiter des Monats' im Juni und Juli 2010 für herausragende Leistungen im Kundenservice."
    ],
    logo: "/images/logos/zara.webp",
    darkLogo: "/images/logos/d_zara.webp"
  },
  {
    id: "germanos",
    position: "Verkaufsberater",
    company: "Germanos Telekom Rumänien SRL",
    location: "Bukarest",
    period: "09/2008 - 01/2010",
    startDate: new Date("2008-09-01"),
    endDate: new Date("2010-01-31"),
    current: false,
    description: [
      "Kundenberatung und Transaktionsabwicklung: Fachkundige Beratung der Kunden und zuverlässige Abwicklung von Zahlungen und Warenannahme."
    ],
    logo: "/images/logos/germanos.webp",
    darkLogo: "/images/logos/d_germanos.webp"
  },
  {
    id: "azali",
    position: "Verkaufsberater",
    company: "Azali Trading SA",
    location: "Bukarest",
    period: "04/2008 - 09/2008",
    startDate: new Date("2008-04-01"),
    endDate: new Date("2008-09-30"),
    current: false,
    description: [
      "Kundenbetreuung und Kassiertätigkeiten: Beratung der Kunden und verantwortungsvolle Bearbeitung von Zahlungen und Warenannahmen."
    ],
    logo: "/images/logos/azali.webp",
    darkLogo: "/images/logos/d_azali.webp"
  },
  {
    id: "exclusiv",
    position: "Filialleiter (eigenes Geschäft - Bekleidungsgeschäft)",
    company: "Exclusiv Fashion Design SRL",
    location: "Bukarest",
    period: "03/2006 - 04/2008",
    startDate: new Date("2006-03-01"),
    endDate: new Date("2008-04-30"),
    current: false,
    description: [
      "Geschäftsführung und Finanzmanagement: Leitung des Bekleidungsgeschäfts, Pflege der Beziehungen zu Banken, Kunden und Lieferanten sowie Sicherstellung einer effizienten Filialversorgung.",
      "Buchhaltung und Gehaltsabrechnung: Verantwortlich für das Rechnungswesen, einschließlich der Erstellung der Gehaltsabrechnungen und Durchführung der Wareninventur."
    ],
    logo: "/images/logos/exclusiv.webp",
    darkLogo: "/images/logos/d_exclusiv.webp"
  },
  {
    id: "onsat",
    position: "Buchhalter",
    company: "SC Onsat It SRL",
    location: "Bukarest",
    period: "11/2003 - 03/2006",
    startDate: new Date("2003-11-01"),
    endDate: new Date("2006-03-31"),
    current: false,
    description: [
      "Finanzbuchhaltung: Durchführung der Buchhaltung und Erstellung von Gehaltsabrechnungen für die Mitarbeiter des Unternehmens.",
      "Kunden- und Lieferantenmanagement: Pflege der Geschäftsbeziehungen zu Banken, Kunden und Lieferanten sowie Erstellung von Verkaufs- und Buchhaltungsberichten zur Unterstützung der Geschäftsführung."
    ],
    logo: "/images/logos/onsat.webp",
    darkLogo: "/images/logos/d_onsat.webp"
  }
];

export const education: Education[] = [
  {
    id: "bilanzbuchhalter",
    degree: "Weiterbildung: Bilanzbuchhalter (IHK)",
    institution: "Steuer-Fachschule Dr. Endriss GmbH & Co.KG",
    location: "Hamburg",
    period: "10.2024 - laufend (03.2026)",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2026-03-31"),
    current: true,
    description: [
      "Finanzmanagement",
      "Kosten- und Leistungsrechnung",
      "Rechtliche Grundlagen",
      "Buchführung & Buchhaltungsorganisation",
      "Kommunikation, Führung und Zusammenarbeit",
      "Abgabenordnung",
      "Jahresabschluss nach Handels- und Steuerrecht",
      "Umsatzsteuer",
      "Lohnsteuer",
      "Internes Kontrollsystem",
      "Einkommensteuer",
      "Körperschaftsteuer",
      "Internationale Rechnungslegung",
      "Gewerbesteuer",
      "Internationales Steuerrecht"
    ],
    logo: "/images/logos/Endriss.webp",
    darkLogo: "/images/logos/d_Endriss.webp"
  },
  {
    id: "fachkraft",
    degree: "Fortbildung: IHK - Fachkraft für Buchführung",
    institution: "Grone Wirtschaftsakademie GmbH",
    location: "Hamburg",
    period: "02.2023 - 07.2023",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-07-31"),
    current: false,
    description: [
      "Buchführung/Finanzbuchhaltung am PC mit Datev",
      "Lohn- und Gehaltsrechnung"
    ],
    logo: "/images/logos/ihkf.webp",
    darkLogo: "/images/logos/d_ihkf.webp"
  },
  {
    id: "uni",
    degree: "Universitätsstudium: Finanzmanagement - Buchhaltung",
    institution: "Spiru Haret Universität",
    location: "Bukarest, Rumänien",
    period: "2001 - 2004",
    startDate: new Date("2001-10-01"),
    endDate: new Date("2004-07-31"),
    current: false,
    description: [
      "Buchhaltung und Finanzmanagement",
      "ohne Abschlusszeugnis"
    ],
    logo: "/images/logos/haret.webp",
    darkLogo: "/images/logos/d_haret.webp"
  },
  {
    id: "ausbildung",
    degree: "Ausbildungsanerkennung: IHK FOSA - Kaufmann im Einzelhandel",
    institution: "A.D. Xenopol Wirtschaftsgymnasium",
    location: "Bukarest, Rumänien",
    period: "1998 - 2001",
    startDate: new Date("1998-09-01"),
    endDate: new Date("2001-07-31"),
    current: false,
    description: [
      "Die Ausbildung als Fachmann für Finanz und Handelstätigkeiten wurde in Rumänien im Jahr 2001, nach 4 Jahren Ausbildungszeit, abgeschlossen."
    ],
    logo: "/images/logos/ihk.webp",
    darkLogo: "/images/logos/d_ihk.webp"
  }
];

export const skills = {
  technical: [
    "Finanz- und Lohnbuchhaltung",
    "MS Office Kenntnisse",
    "DATEV / Agenda / Simba",
    "Schnelles Schreiben",
    "Gute Kommunikationsfähigkeiten"
  ],
  leadership: {
    type: "Kaufmännische Leitung mit Schwerpunkt auf betriebswirtschaftlicher Steuerung und operativer Umsetzung",
    experience: "Bis zu 2 Jahre Erfahrung in der Leitung und Koordination von Geschäftsprozessen",
    teamSize: "Verantwortlich für die Führung und Entwicklung von bis zu 9 Mitarbeiter/innen"
  },
  languages: [
    { name: "Deutsch", level: "telc B2 Zertifikat - Sehr gute Kenntnisse" },
    { name: "Englisch", level: "Sehr gute Kenntnisse" },
    { name: "Rumänisch", level: "Muttersprache" }
  ],
  drivingLicense: "Klasse B"
};

export const hobbies = [
  {
    title: "Fotografie",
    description: "Ich fotografiere leidenschaftlich gerne Landschaften, Porträts und städtische Szenen. Mit Adobe Photoshop bearbeite ich meine Aufnahmen, um einzigartige visuelle Darstellungen zu schaffen.",
    icon: "📷"
  },
  {
    title: "Technik & Innovation",
    description: "Ich begeistere mich für neue Technologien, besonders im Bereich Finanztechnologie. Das Ausprobieren neuer Gadgets und die Verfolgung der neuesten Trends in der Tech-Welt sind für mich sowohl Hobby als auch Inspiration für berufliche Innovationen.",
    details: [
      "Verfolgen der neuesten Entwicklungen im Bereich FinTech",
      "Testen neuer digitaler Tools für Buchhaltung und Finanzmanagement",
      "Interesse an KI-gestützten Lösungen für Finanzprozesse"
    ],
    icon: "💻"
  },
  {
    title: "Mein E-Commerce-Projekt: Profit Minds",
    description: "Profit Minds ist meine eigene Marke für nachhaltige, personalisierte Kleidung und Accessoires. Dieses Projekt vereint meine Interessen an Design, E-Commerce und Marketing und ermöglicht mir, meine kreativen Ideen umzusetzen.",
    details: [
      "Der Shop wurde auf einer modernen E-Commerce-Plattform entwickelt und verbindet ansprechendes Design mit benutzerfreundlicher Navigation."
    ],
    logo: "/images/logos/profit-minds-logo.webp",
    icon: "🛍️"
  }
];