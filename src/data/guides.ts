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
    description: "Der Einstieg, der nicht wehtut - und trotzdem etwas verändert.",
    readingTime: "4 Min.",
    metaDescription: "Digital Detox für Anfänger: einfache Regeln, mit denen Du bewusster mit Handy und Social Media umgehst.",
    intro:
      "Digital Detox muss nicht radikal sein. Es reicht, eine einzige Situation zu erkennen, in der Du fast automatisch zum Handy greifst - und genau dort anzufangen.",
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
        body: "Wenn Du nur etwas wegnimmst, entsteht schnell Leerlauf. Plane eine einfache Alternative, die in dieselbe Situation passt.",
      },
    ],
    tips: [
      "Lade Dein Handy eine Nacht außerhalb des Betts.",
      "Lege Deine stärkste App nicht auf den Homescreen.",
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
      "Der Griff zum Handy passiert oft, bevor Du überhaupt gemerkt hast, dass Du es schon in der Hand hältst. Das ist kein Versagen - das ist ein Reflex. Und Reflexe lassen sich verändern.",
    sections: [
      {
        heading: "Der Auslöser kommt vor der App",
        body: "Die App ist sichtbar - aber der eigentliche Startpunkt ist oft ein Gefühl: Langeweile, Druck, Müdigkeit. Wer das erkennt, kann gezielter ansetzen.",
      },
      {
        heading: "Gewohnheiten sparen Energie",
        body: "Wiederholte Handlungen laufen irgendwann automatisch. Das ist normal - kann aber dazu führen, dass Du entsperrst, bevor Du wirklich entschieden hast.",
      },
      {
        heading: "Eine kleine Pause reicht oft",
        body: "Du musst nicht jeden Impuls perfekt kontrollieren. Eine kurze Unterbrechung kann reichen, um aus dem Reflex wieder eine Wahl zu machen.",
      },
    ],
    tips: [
      "Notiere einmal am Tag, wann Du automatisch geöffnet hast.",
      "Achte auf den Moment direkt vor dem Entsperren.",
      "Lege eine 10-Sekunden-Pause vor Deine Problem-App.",
      "Formuliere eine Wenn-dann-Regel für Deinen häufigsten Trigger.",
    ],
  },
  {
    slug: "abends-weniger-scrollen",
    title: "Abends weniger scrollen",
    description: "Einfache Abendregeln, die sich im Alltag wirklich halten lassen.",
    readingTime: "4 Min.",
    metaDescription: "Abends weniger scrollen: einfache Ideen für Handy, Sofa und Bett.",
    intro:
      "Abends ist der Autopilot am stärksten. Der Tag war lang, die Energie ist weg - und das Handy liegt einfach da. Genau deshalb braucht es keine strenge Regel, sondern eine sehr einfache.",
    sections: [
      {
        heading: "Mach das Bett weniger scroll-freundlich",
        body: "Wenn das Handy neben dem Kopf liegt, ist der Griff fast automatisch. Ein Ladeplatz außerhalb des Betts schafft Distanz, ohne Dein Handy zu verbannen.",
      },
      {
        heading: "Plane einen weichen Übergang",
        body: "Viele scrollen, weil der Wechsel vom Tag in den Abend ungeplant ist. Eine kleine Routine gibt Deinem Kopf einen anderen Abschluss - und dem Abend eine andere Richtung.",
      },
      {
        heading: "Halte die Regel klein",
        body: "Eine komplette Offline-Nacht ist für den Anfang meist zu viel. Beginne lieber mit 20 bis 30 Minuten ohne Feed - das ist klein genug, um wirklich zu starten.",
      },
    ],
    tips: [
      "Stelle das Ladegerät an einen Ort außerhalb des Betts.",
      "Lege ein Buch, Notizbuch oder Kopfhörer sichtbar bereit.",
      "Setze Dir eine feste Uhrzeit für den letzten Feed.",
      "Nutze einen Fokusmodus mit nur wichtigen Kontakten.",
    ],
  },
  {
    slug: "doomscrolling-stoppen",
    title: "Doomscrolling stoppen",
    description: "Wie Du News bewusst checkst, ohne Dich dauerhaft hineinziehen zu lassen.",
    readingTime: "5 Min.",
    metaDescription: "Doomscrolling stoppen: praktische Wege, News und Updates bewusster zu nutzen.",
    intro:
      "Du wolltest kurz die News checken - und 40 Minuten später bist Du noch immer drin, aber irgendwie unruhiger als vorher. Das kennen viele. Es liegt nicht daran, dass Du zu viel weißt, sondern daran, wie Du Information konsumierst.",
    sections: [
      {
        heading: "Trenne Informieren von Beruhigen",
        body: "News können wichtig sein. Aber ständiges Aktualisieren führt selten zu mehr Ruhe. Frage Dich ehrlich: Suchst Du gerade Information - oder Sicherheit?",
      },
      {
        heading: "Nutze feste Fenster",
        body: "Zwei feste News-Zeiten am Tag sind oft hilfreicher als zehn kleine Checks zwischendurch. Die Information bleibt verfügbar - aber sie übernimmt nicht mehr den ganzen Tag.",
      },
      {
        heading: "Schließe die Schleife",
        body: "Nach dem Lesen hilft ein bewusstes Ende: App schließen, Handy weglegen - und einmal kurz notieren, was Du jetzt konkret tun kannst oder getrost loslassen kannst.",
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
