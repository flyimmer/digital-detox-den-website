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

type ResultTypeContent = {
  name: string;
  description: string;
  thought: string;
  trigger: string;
  rule: string;
};

export const resultOrder: ResultTypeId[] = [
  "evening_scroller",
  "stress_checker",
  "news_refresher",
  "shorts_loop",
  "work_procrastinator",
  "chat_checker",
];

export const resultTypesDe: Record<ResultTypeId, ResultTypeContent> = {
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

export const resultTypesEn: Record<ResultTypeId, ResultTypeContent> = {
  evening_scroller: {
    name: "The Evening Scroller",
    description:
      "You lose the most time in the evening, when your energy and self-control are already low. Your phone becomes a quick way to unwind, especially on the sofa or in bed.",
    thought: "I will just check for a minute, then I will sleep.",
    trigger: "Tiredness, the transition into the evening, being in bed, or not having a clear evening routine.",
    rule: "Charge your phone outside the bed tonight and plan a 10-minute replacement: reading, music, tea, stretching, or writing down a few thoughts.",
  },
  stress_checker: {
    name: "The Stress Checker",
    description:
      "You reach for your phone especially when you feel tense or overwhelmed. For you, scrolling is less about entertainment and more about escaping stress for a moment.",
    thought: "I need a quick pause.",
    trigger: "Overload, pressure, unpleasant tasks, or inner restlessness.",
    rule: 'Before opening your problem app, breathe out slowly once and ask yourself: "What do I actually need right now?"',
  },
  news_refresher: {
    name: "The News Refresher",
    description:
      "You often check news, updates, or fresh information because it feels like you might miss something important. Afterward, you may feel more informed, but not calmer.",
    thought: "I just want to see if there is anything new.",
    trigger: "Uncertainty, waiting, world events, or the need to feel in control.",
    rule: "Choose two fixed news windows per day and do not open news outside those windows.",
  },
  shorts_loop: {
    name: "The Shorts Loop Type",
    description:
      "You get pulled into short videos especially easily. The next clip is always only one swipe away, which makes stopping feel harder than starting.",
    thought: "Just one more video.",
    trigger: "Boredom, waiting, low energy, or wanting quick entertainment.",
    rule: 'Move the app into a folder called "Why now?" and only open it after a 10-second pause.',
  },
  work_procrastinator: {
    name: "The Work Procrastinator",
    description:
      "You often open your phone before or during tasks that require focus. Scrolling protects you from effort in the short term, but makes it harder to start afterward.",
    thought: "I will start in a second, just one more minute.",
    trigger: "Difficult tasks, an unclear starting point, boredom, or perfectionism.",
    rule: "Put your phone out of sight for the first 20 minutes of a task.",
  },
  chat_checker: {
    name: "The Chat Checker",
    description:
      "You often check messages because you want to respond quickly or are waiting for someone to reply. It feels social, but can quickly turn into constant checking.",
    thought: "Maybe someone wrote back.",
    trigger: "Waiting, social expectations, open conversations, or uncertainty.",
    rule: "Turn off notifications for one hour and check messages intentionally at one fixed time.",
  },
};

export const quizQuestionsDe: QuizQuestion[] = [
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

export const quizQuestionsEn: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "When do you most often lose time on your phone?",
    answers: [
      { id: "a", label: "In the evening on the sofa or in bed", scores: { evening_scroller: 2 } },
      { id: "b", label: "When I feel stressed or overwhelmed", scores: { stress_checker: 2 } },
      { id: "c", label: "When I should actually be working or studying", scores: { work_procrastinator: 2 } },
      { id: "d", label: "When I am waiting for messages, news, or updates", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "e", label: "When I am bored or want quick entertainment", scores: { shorts_loop: 2 } },
    ],
  },
  {
    id: "q2",
    prompt: "Which app pulls you in the most?",
    answers: [
      { id: "a", label: "Instagram", scores: { shorts_loop: 1, evening_scroller: 1 } },
      { id: "b", label: "TikTok or YouTube Shorts", scores: { shorts_loop: 2 } },
      { id: "c", label: "News app or browser", scores: { news_refresher: 2 } },
      { id: "d", label: "WhatsApp, Messenger, or email", scores: { chat_checker: 2 } },
      { id: "e", label: "Reddit, X, forums, or comment sections", scores: { news_refresher: 1, shorts_loop: 1 } },
      { id: "f", label: "Other", scores: {} },
    ],
  },
  {
    id: "q3",
    prompt: "What do you usually think right before opening the app?",
    answers: [
      { id: "a", label: "Just switch off for a moment.", scores: { evening_scroller: 1, shorts_loop: 1 } },
      { id: "b", label: "I need a pause right now.", scores: { stress_checker: 2 } },
      { id: "c", label: "I do not want to miss anything.", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "d", label: "I will start in a second, just one more minute.", scores: { work_procrastinator: 2 } },
      { id: "e", label: "I am tired, but not ready to sleep yet.", scores: { evening_scroller: 2 } },
    ],
  },
  {
    id: "q4",
    prompt: "How do you usually feel after 20 minutes of scrolling?",
    answers: [
      { id: "a", label: "Empty or restless", scores: { shorts_loop: 1, evening_scroller: 1 } },
      { id: "b", label: "Better for a moment, then stressed again", scores: { stress_checker: 2 } },
      { id: "c", label: "Guilty because I delayed something", scores: { work_procrastinator: 2 } },
      { id: "d", label: "Informed, but overloaded", scores: { news_refresher: 2 } },
      { id: "e", label: "More tired than before", scores: { evening_scroller: 2 } },
    ],
  },
  {
    id: "q5",
    prompt: "Where does it happen most often?",
    answers: [
      { id: "a", label: "In bed", scores: { evening_scroller: 2 } },
      { id: "b", label: "On the sofa", scores: { evening_scroller: 1, shorts_loop: 1 } },
      { id: "c", label: "At my desk", scores: { work_procrastinator: 2 } },
      { id: "d", label: "On public transport or while waiting", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "e", label: "During meals or breaks", scores: { shorts_loop: 1, stress_checker: 1 } },
    ],
  },
  {
    id: "q6",
    prompt: "What would help you the most?",
    answers: [
      { id: "a", label: "No social apps in bed", scores: { evening_scroller: 2 } },
      { id: "b", label: "A clear pause before opening an app", scores: { stress_checker: 2 } },
      { id: "c", label: "Clear focus periods without my phone", scores: { work_procrastinator: 2 } },
      { id: "d", label: "Fixed times for news or messages", scores: { news_refresher: 1, chat_checker: 1 } },
      { id: "e", label: "A concrete alternative when I am bored", scores: { shorts_loop: 2 } },
    ],
  },
  {
    id: "q7",
    prompt: "What is your biggest resistance to digital detox?",
    answers: [
      { id: "a", label: "I do not want to be completely offline.", scores: {} },
      { id: "b", label: "I need my phone for work, friends, or everyday life.", scores: {} },
      { id: "c", label: "I have tried before and slipped back.", scores: {} },
      { id: "d", label: "I do not know where to start.", scores: {} },
      { id: "e", label: "I do not want strict rules.", scores: {} },
    ],
  },
  {
    id: "q8",
    prompt: "Which small rule feels realistic for you?",
    answers: [
      { id: "a", label: "No feed 30 minutes before sleep", scores: { evening_scroller: 3 } },
      { id: "b", label: "A 10-second pause before my problem app", scores: { stress_checker: 3 } },
      { id: "c", label: "Remove my problem app from the home screen", scores: { shorts_loop: 2, work_procrastinator: 1 } },
      { id: "d", label: "News only twice a day", scores: { news_refresher: 3 } },
      { id: "e", label: "One phone-free meal per day", scores: { shorts_loop: 1, stress_checker: 1 } },
      { id: "f", label: "Check messages only at fixed times", scores: { chat_checker: 3 } },
    ],
  },
];

export const resultTypes = resultTypesDe;
export const quizQuestions = quizQuestionsDe;
