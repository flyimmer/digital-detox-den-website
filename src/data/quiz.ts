export type ResultTypeId =
  | "evening_scroller"
  | "stress_checker"
  | "news_refresher"
  | "shorts_loop"
  | "work_procrastinator"
  | "chat_checker";

export type ScoreMap = Partial<Record<ResultTypeId, number>>;

export type QuizAnswer = {
  id: string;
  label: string;
  scores: ScoreMap;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  answers: QuizAnswer[];
};

export const resultOrder: ResultTypeId[] = [
  "evening_scroller",
  "stress_checker",
  "news_refresher",
  "shorts_loop",
  "work_procrastinator",
  "chat_checker",
];

export const resultTypes: Record<
  ResultTypeId,
  {
    name: string;
    description: string;
    thought: string;
    trigger: string;
    rule: string;
  }
> = {
  evening_scroller: {
    name: "Der Abend-Scroller",
    description:
      "Du verlierst Deine Zeit vor allem abends, wenn Energie und Selbstkontrolle niedrig sind. Dein Handy wird dann zur schnellen Entlastung, besonders auf dem Sofa oder im Bett.",
    thought: "Ich schaue nur kurz rein, dann schlafe ich.",
    trigger: "Müdigkeit, Übergang in den Feierabend, Bett, fehlende Abendroutine.",
    rule: "Lade Dein Handy heute außerhalb des Betts und plane 10 Minuten Ersatz: Lesen, Musik, Tee oder Notizen.",
  },
  stress_checker: {
    name: "Der Stress-Checker",
    description:
      "Du greifst besonders dann zum Handy, wenn Du innerlich angespannt bist. Scrollen ist für Dich weniger Unterhaltung als schnelle Flucht aus Stress.",
    thought: "Ich brauche kurz eine Pause.",
    trigger: "Überforderung, Druck, unangenehme Aufgaben, innere Unruhe.",
    rule: 'Bevor Du Deine Problem-App öffnest, atme einmal tief aus und frage: "Was brauche ich gerade wirklich?"',
  },
  news_refresher: {
    name: "Der News-Refresher",
    description:
      "Du checkst oft News, Updates oder neue Informationen, weil Du das Gefühl hast, sonst etwas zu verpassen. Danach bist Du oft informierter, aber nicht ruhiger.",
    thought: "Ich will nur wissen, ob es etwas Neues gibt.",
    trigger: "Unsicherheit, Wartezeiten, Weltlage, Kontrollbedürfnis.",
    rule: "Wähle zwei feste News-Zeiten pro Tag und öffne News nicht außerhalb dieser Fenster.",
  },
  shorts_loop: {
    name: "Der Shorts-Loop-Typ",
    description:
      "Du bleibst besonders leicht in kurzen Videos hängen. Der nächste Clip ist immer nur einen Swipe entfernt, deshalb fühlt sich Aufhören schwerer an als Anfangen.",
    thought: "Ein Video noch.",
    trigger: "Langeweile, Warten, Erschöpfung, Suche nach schneller Unterhaltung.",
    rule: 'Lege die App in einen Ordner namens "Warum jetzt?" und öffne sie nur nach einer 10-Sekunden-Pause.',
  },
  work_procrastinator: {
    name: "Der Arbeits-Prokrastinierer",
    description:
      "Du öffnest Dein Handy oft kurz vor oder während Aufgaben, die Konzentration brauchen. Das Scrollen schützt Dich kurzfristig vor Anstrengung, macht den Einstieg danach aber schwerer.",
    thought: "Ich fange gleich an, nur noch kurz.",
    trigger: "Schwierige Aufgabe, unklarer Start, Langeweile, Perfektionismus.",
    rule: "Lege Dein Handy für die ersten 20 Minuten einer Aufgabe außer Sicht.",
  },
  chat_checker: {
    name: "Der Chat-Checker",
    description:
      "Du schaust oft nach Nachrichten, weil Du schnell reagieren willst oder auf Rückmeldung wartest. Das fühlt sich sozial an, wird aber schnell zum permanenten Checken.",
    thought: "Vielleicht hat jemand geschrieben.",
    trigger: "Warten, soziale Erwartung, offene Gespräche, Unsicherheit.",
    rule: "Stelle für eine Stunde Benachrichtigungen aus und prüfe Nachrichten bewusst zu einem festen Zeitpunkt.",
  },
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "Wann verlierst Du am ehesten Zeit am Handy?",
    answers: [
      { id: "a", label: "Abends auf dem Sofa oder im Bett", scores: { evening_scroller: 2 } },
      { id: "b", label: "Wenn ich gestresst oder überfordert bin", scores: { stress_checker: 2 } },
      { id: "c", label: "Wenn ich eigentlich arbeiten oder lernen sollte", scores: { work_procrastinator: 2 } },
      { id: "d", label: "Wenn ich auf Nachrichten, News oder Updates warte", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "e", label: "Wenn mir langweilig ist oder ich kurz Unterhaltung will", scores: { shorts_loop: 2 } },
    ],
  },
  {
    id: "q2",
    prompt: "Welche App zieht Dich am stärksten?",
    answers: [
      { id: "a", label: "Instagram", scores: { shorts_loop: 1, evening_scroller: 1 } },
      { id: "b", label: "TikTok oder YouTube Shorts", scores: { shorts_loop: 2 } },
      { id: "c", label: "News-App oder Browser", scores: { news_refresher: 2 } },
      { id: "d", label: "WhatsApp, Messenger oder E-Mail", scores: { chat_checker: 2 } },
      { id: "e", label: "Reddit, X, Foren oder Kommentarspalten", scores: { news_refresher: 1, shorts_loop: 1 } },
      { id: "f", label: "Andere", scores: {} },
    ],
  },
  {
    id: "q3",
    prompt: "Was denkst Du meistens kurz bevor Du die App öffnest?",
    answers: [
      { id: "a", label: "Nur kurz abschalten.", scores: { evening_scroller: 1, shorts_loop: 1 } },
      { id: "b", label: "Ich brauche gerade eine Pause.", scores: { stress_checker: 2 } },
      { id: "c", label: "Ich will nichts verpassen.", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "d", label: "Ich fange gleich an, nur noch kurz.", scores: { work_procrastinator: 2 } },
      { id: "e", label: "Ich bin müde, aber noch nicht bereit zu schlafen.", scores: { evening_scroller: 2 } },
    ],
  },
  {
    id: "q4",
    prompt: "Wie fühlst Du Dich meistens nach 20 Minuten Scrollen?",
    answers: [
      { id: "a", label: "Leer oder unruhig", scores: { shorts_loop: 1, evening_scroller: 1 } },
      { id: "b", label: "Kurz besser, dann wieder gestresst", scores: { stress_checker: 2 } },
      { id: "c", label: "Schuldig, weil ich etwas aufgeschoben habe", scores: { work_procrastinator: 2 } },
      { id: "d", label: "Informiert, aber überladen", scores: { news_refresher: 2 } },
      { id: "e", label: "Müder als vorher", scores: { evening_scroller: 2 } },
    ],
  },
  {
    id: "q5",
    prompt: "Wo passiert es am häufigsten?",
    answers: [
      { id: "a", label: "Im Bett", scores: { evening_scroller: 2 } },
      { id: "b", label: "Auf dem Sofa", scores: { evening_scroller: 1, shorts_loop: 1 } },
      { id: "c", label: "Am Schreibtisch", scores: { work_procrastinator: 2 } },
      { id: "d", label: "In der Bahn oder beim Warten", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "e", label: "Beim Essen oder in Pausen", scores: { shorts_loop: 1, stress_checker: 1 } },
    ],
  },
  {
    id: "q6",
    prompt: "Was würde Dir am meisten helfen?",
    answers: [
      { id: "a", label: "Keine Social Apps im Bett", scores: { evening_scroller: 2 } },
      { id: "b", label: "Eine klare Pause vor dem Öffnen", scores: { stress_checker: 2 } },
      { id: "c", label: "Bessere Fokuszeiten", scores: { work_procrastinator: 2 } },
      { id: "d", label: "Feste News- oder Nachrichtenzeiten", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "e", label: "Eine konkrete Alternative gegen Langeweile", scores: { shorts_loop: 2 } },
    ],
  },
  {
    id: "q7",
    prompt: "Was ist Dein größter Widerstand gegen Digital Detox?",
    answers: [
      { id: "a", label: "Ich will nicht komplett offline sein.", scores: {} },
      { id: "b", label: "Ich brauche mein Handy für Arbeit, Freunde oder Alltag.", scores: {} },
      { id: "c", label: "Ich habe es schon versucht und bin zurückgefallen.", scores: {} },
      { id: "d", label: "Ich weiß nicht, wo ich anfangen soll.", scores: {} },
      { id: "e", label: "Ich will keine strengen Regeln.", scores: {} },
    ],
  },
  {
    id: "q8",
    prompt: "Welche kleine Regel klingt für Dich machbar?",
    answers: [
      { id: "a", label: "30 Minuten vor dem Schlafen kein Feed", scores: { evening_scroller: 3 } },
      { id: "b", label: "10 Sekunden Pause vor meiner Problem-App", scores: { stress_checker: 3 } },
      { id: "c", label: "Problem-App vom Homescreen entfernen", scores: { shorts_loop: 2, work_procrastinator: 1 } },
      { id: "d", label: "News nur zweimal am Tag", scores: { news_refresher: 3 } },
      { id: "e", label: "Eine handyfreie Mahlzeit pro Tag", scores: { shorts_loop: 1, stress_checker: 1 } },
      { id: "f", label: "Nachrichten nur zu festen Zeiten checken", scores: { chat_checker: 3 } },
    ],
  },
];
