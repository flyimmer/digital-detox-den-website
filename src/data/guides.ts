export type Guide = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string }[];
  tips: string[];
};

export const guides: Guide[] = [
  {
    slug: "digital-detox-fuer-anfaenger",
    title: "Digital Detox für Anfänger",
    description: "Ein ruhiger Einstieg, der nicht mit radikalem Verzicht beginnt.",
    readingTime: "4 Min.",
    metaDescription: "Digital Detox für Anfänger: einfache Regeln, mit denen du bewusster mit Handy und Social Media umgehst.",
    intro:
      "Digital Detox muss nicht heißen, dass du dein Handy wegschließt. Ein guter Anfang ist, eine einzige Situation zu erkennen, in der du oft automatisch öffnest.",
    sections: [
      {
        heading: "Starte mit einem Muster",
        body: "Viele nehmen sich zu viel auf einmal vor. Wähle lieber ein klares Scroll-Fenster, etwa abends im Bett, beim Warten oder kurz vor einer Aufgabe.",
      },
      {
        heading: "Baue Reibung ein",
        body: "Kleine Hürden helfen, den Autopilot zu unterbrechen. Das kann ein anderer App-Ort, ein Fokusmodus oder eine kurze Frage vor dem Öffnen sein.",
      },
      {
        heading: "Ersetze statt nur zu verbieten",
        body: "Wenn du nur etwas wegnimmst, entsteht schnell Leerlauf. Plane eine einfache Alternative, die in dieselbe Situation passt.",
      },
    ],
    tips: [
      "Lade dein Handy eine Nacht außerhalb des Betts.",
      "Lege deine stärkste App nicht auf den Homescreen.",
      "Nutze eine feste News- oder Chat-Zeit statt dauerndem Checken.",
      "Frage vor dem Öffnen: Was will ich gerade wirklich?",
    ],
  },
  {
    slug: "warum-wir-automatisch-zum-handy-greifen",
    title: "Warum wir automatisch zum Handy greifen",
    description: "Was vor dem Scrollen passiert und warum genau dieser Moment wichtig ist.",
    readingTime: "5 Min.",
    metaDescription: "Warum wir automatisch zum Handy greifen: typische Trigger erkennen und bewusster reagieren.",
    intro:
      "Automatisches Scrollen beginnt selten mit einer bewussten Entscheidung. Häufig startet es in einem kleinen Moment davor: Langeweile, Stress, Warten oder Müdigkeit.",
    sections: [
      {
        heading: "Der Auslöser kommt vor der App",
        body: "Die App ist sichtbar, aber der eigentliche Startpunkt ist oft eine Situation oder ein Gefühl. Wer diesen Startpunkt kennt, kann gezielter handeln.",
      },
      {
        heading: "Gewohnheiten sparen Energie",
        body: "Wiederholte Handlungen laufen leichter ab. Das ist normal und praktisch, kann aber dazu führen, dass du entsperrst, bevor du wirklich entschieden hast.",
      },
      {
        heading: "Eine kleine Pause reicht oft",
        body: "Du musst nicht jeden Impuls perfekt kontrollieren. Eine kurze Unterbrechung kann reichen, um aus dem Reflex wieder eine Wahl zu machen.",
      },
    ],
    tips: [
      "Notiere einmal am Tag, wann du automatisch geöffnet hast.",
      "Achte auf den Moment direkt vor dem Entsperren.",
      "Lege eine 10-Sekunden-Pause vor deine Problem-App.",
      "Formuliere eine Wenn-dann-Regel für deinen häufigsten Trigger.",
    ],
  },
  {
    slug: "abends-weniger-scrollen",
    title: "Abends weniger scrollen",
    description: "Praktische Abendregeln, die ohne strengen Verzicht funktionieren.",
    readingTime: "4 Min.",
    metaDescription: "Abends weniger scrollen: einfache Ideen für Handy, Sofa und Bett.",
    intro:
      "Abends ist Scrollen besonders leicht, weil der Tag lang war und schnelle Entlastung verlockend wirkt. Eine gute Regel muss deshalb sehr einfach sein.",
    sections: [
      {
        heading: "Mach das Bett weniger scroll-freundlich",
        body: "Wenn das Handy neben dem Kopf liegt, ist der Griff fast automatisch. Ein Ladeplatz außerhalb des Betts schafft Distanz, ohne dein Handy zu verbannen.",
      },
      {
        heading: "Plane einen weichen Übergang",
        body: "Viele scrollen, weil der Wechsel vom Tag in den Abend ungeplant ist. Eine kleine Routine gibt deinem Kopf einen anderen Abschluss.",
      },
      {
        heading: "Halte die Regel klein",
        body: "Eine komplette Offline-Nacht ist für den Start oft zu groß. Beginne lieber mit 20 bis 30 feedfreien Minuten.",
      },
    ],
    tips: [
      "Stelle das Ladegerät an einen Ort außerhalb des Betts.",
      "Lege ein Buch, Notizbuch oder Kopfhörer sichtbar bereit.",
      "Setze eine feste Uhrzeit für den letzten Feed.",
      "Nutze einen Fokusmodus mit nur wichtigen Kontakten.",
    ],
  },
  {
    slug: "doomscrolling-stoppen",
    title: "Doomscrolling stoppen",
    description: "Wie du News bewusst checkst, ohne dich dauerhaft hineinzuziehen.",
    readingTime: "5 Min.",
    metaDescription: "Doomscrolling stoppen: praktische Wege, News und Updates bewusster zu nutzen.",
    intro:
      "Doomscrolling fühlt sich oft wie informiert bleiben an, kann aber schnell unruhiger machen. Hilfreich ist nicht weniger Interesse, sondern ein klarerer Rahmen.",
    sections: [
      {
        heading: "Trenne Informieren von Beruhigen",
        body: "News können wichtig sein. Gleichzeitig wird ständiges Aktualisieren selten zu mehr Ruhe. Frage dich, ob du gerade Information suchst oder Sicherheit.",
      },
      {
        heading: "Nutze feste Fenster",
        body: "Zwei bewusste News-Zeiten sind oft hilfreicher als viele kleine Checks. So bleibt Information verfügbar, ohne den ganzen Tag zu übernehmen.",
      },
      {
        heading: "Schließe die Schleife",
        body: "Nach dem Lesen hilft ein bewusstes Ende: App schließen, Handy weglegen, einmal notieren, was du jetzt konkret tun kannst oder nicht tun musst.",
      },
    ],
    tips: [
      "Lege zwei feste News-Zeiten pro Tag fest.",
      "Entferne Push-Mitteilungen für News-Apps.",
      "Lies eine Zusammenfassung statt vieler Live-Updates.",
      "Beende jede News-Session mit einer klaren nächsten Handlung.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
