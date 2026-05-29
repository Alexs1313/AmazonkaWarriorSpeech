export type AmzznkWrriorsppeechOracleChoiceId = 'A' | 'B' | 'C' | 'D';

export type AmzznkWrriorsppeechOracleChoice = {
  amzznkWrriorsppeechOracleChoiceId: AmzznkWrriorsppeechOracleChoiceId;
  amzznkWrriorsppeechOracleChoiceLabel: string;
};

export type AmzznkWrriorsppeechOraclePrompt = {
  amzznkWrriorsppeechOraclePromptId: string;
  amzznkWrriorsppeechOraclePromptTitle: string;
  amzznkWrriorsppeechOraclePromptQuestion: string;
  amzznkWrriorsppeechOraclePromptChoices: AmzznkWrriorsppeechOracleChoice[];
  amzznkWrriorsppeechOraclePromptCorrectId: AmzznkWrriorsppeechOracleChoiceId;
  amzznkWrriorsppeechOraclePromptExplanation: string;
};

export const amzznkWrriorsppeechOracleTrialsPerSession = 3;
export const amzznkWrriorsppeechOracleTimerSeconds = 30;
export const amzznkWrriorsppeechOracleTokensPerCorrect = 3;

export const amzznkWrriorsppeechOraclePromptsAll: AmzznkWrriorsppeechOraclePrompt[] = [
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-1',
    amzznkWrriorsppeechOraclePromptTitle: 'The Silent River',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I move through the jungle without feet, I speak without a mouth, And every Amazo hears me at night. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Fire'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Wind'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'River'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Shadow'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'C',
    amzznkWrriorsppeechOraclePromptExplanation:
      'A river — moving silently through the jungle, heard by every warrior at night.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-2',
    amzznkWrriorsppeechOraclePromptTitle: "Warrior's Strength",
    amzznkWrriorsppeechOraclePromptQuestion:
      'The more you train me, The stronger I become. Without me, even a queen sounds weak. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Voice'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Spear'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Shield'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Horse'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Your voice — trained daily, it grows stronger with every practice session.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-3',
    amzznkWrriorsppeechOraclePromptTitle: 'The Jungle Light',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I shine during darkness, I dance with the wind, And warriors gather around me before battle. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Moon'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Campfire'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'River'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Spear'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'B',
    amzznkWrriorsppeechOraclePromptExplanation:
      'A campfire — warriors gather around its light before every battle.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-4',
    amzznkWrriorsppeechOraclePromptTitle: 'The Hidden Sound',
    amzznkWrriorsppeechOraclePromptQuestion:
      'You cannot see me, But you can hear me during every speech. I help words sound strong and clear. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Breathing'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Rain'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Shadow'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Silence'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Breathing — invisible yet essential for clear, powerful speech.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-5',
    amzznkWrriorsppeechOraclePromptTitle: "Queen's Wisdom",
    amzznkWrriorsppeechOraclePromptQuestion:
      'The less you rush me, The stronger your speech becomes. Good speakers always control me carefully. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Speed'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Armor'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Jungle'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Echo'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Speed — controlled pacing makes every word clearer and stronger.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-6',
    amzznkWrriorsppeechOraclePromptTitle: 'The Echo Forest',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I repeat every word you say, Deep inside the jungle trees. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Waterfall'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Echo'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Wind'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Thunder'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'B',
    amzznkWrriorsppeechOraclePromptExplanation:
      'An echo — repeating every word among the jungle trees.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-7',
    amzznkWrriorsppeechOraclePromptTitle: "Amazo's Friend",
    amzznkWrriorsppeechOraclePromptQuestion:
      'I protect warriors in battle, But I also protect speakers from fear. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Confidence'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Fire'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'River'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Crown'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Confidence — protecting warriors in battle and speakers from fear.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-8',
    amzznkWrriorsppeechOraclePromptTitle: 'The Jungle Teacher',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I have no voice, But I teach patience every day As I slowly move through stone. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Tree'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Water'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Spear'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Sun'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'B',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Water — moving slowly through stone, teaching patience without a voice.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-9',
    amzznkWrriorsppeechOraclePromptTitle: 'The Calm Speaker',
    amzznkWrriorsppeechOraclePromptQuestion:
      'The more you control me, The calmer your voice becomes. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Emotion'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Breathing'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Footsteps'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Armor'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'B',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Breathing — the more you control it, the calmer your voice becomes.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-10',
    amzznkWrriorsppeechOraclePromptTitle: "Warrior's Pause",
    amzznkWrriorsppeechOraclePromptQuestion:
      'I am short and silent, But strong speakers use me often. Without me, speech sounds rushed. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Pause'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'River'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Arrow'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Helmet'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'A pause — short and silent, yet essential for powerful delivery.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-11',
    amzznkWrriorsppeechOraclePromptTitle: "The Queen's Tool",
    amzznkWrriorsppeechOraclePromptQuestion:
      'I am not a weapon, But I can inspire an entire tribe. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Voice'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Spear'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Bow'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Shield'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Your voice — not a weapon, yet it can inspire an entire tribe.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-12',
    amzznkWrriorsppeechOraclePromptTitle: 'Jungle Mystery',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I fall from the sky, I feed the jungle, And warriors hear me at night. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Thunder'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Rain'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Fire'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Smoke'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'B',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Rain — falling from the sky and feeding the jungle every night.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-13',
    amzznkWrriorsppeechOraclePromptTitle: 'The Brave Warrior',
    amzznkWrriorsppeechOraclePromptQuestion:
      'The more you face me, The smaller I become. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Fear'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Shadow'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Water'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Fire'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Fear — the more you face it, the smaller it becomes.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-14',
    amzznkWrriorsppeechOraclePromptTitle: 'Ancient Temple',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I hold stories without speaking, And wisdom without a voice. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {
        amzznkWrriorsppeechOracleChoiceId: 'A',
        amzznkWrriorsppeechOracleChoiceLabel: 'Stone writings',
      },
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Waterfall'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Crown'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Spear'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Stone writings — holding stories and wisdom without a voice.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-15',
    amzznkWrriorsppeechOraclePromptTitle: 'The Jungle Path',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I guide warriors through darkness, But I disappear when the sun rises. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Torch'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Stars'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Moonlight'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Footprints'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'C',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Moonlight — guiding through darkness, gone when the sun rises.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-16',
    amzznkWrriorsppeechOraclePromptTitle: 'Voice of Power',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I become stronger when spoken clearly, And weaker when filled with fear. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Speech'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Fire'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Armor'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'River'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Speech — stronger when spoken clearly, weaker when fear takes over.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-17',
    amzznkWrriorsppeechOraclePromptTitle: 'The Amazo Lesson',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I cannot be held in your hands, But every leader must learn me. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Communication'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Gold'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Strength'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Speed'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Communication — every leader must learn it, though it cannot be held.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-18',
    amzznkWrriorsppeechOraclePromptTitle: "Warrior's Training",
    amzznkWrriorsppeechOraclePromptQuestion:
      'The more you practice me, The easier speaking becomes. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Discipline'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Silence'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Rain'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Battle'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'A',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Discipline — the more you practice, the easier speaking becomes.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-19',
    amzznkWrriorsppeechOraclePromptTitle: 'The Jungle Wind',
    amzznkWrriorsppeechOraclePromptQuestion:
      'I travel through trees, Carry sounds across rivers, And cool warriors after training. What am I?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Mist'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Wind'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Echo'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Shadow'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'B',
    amzznkWrriorsppeechOraclePromptExplanation:
      'Wind — traveling through trees and cooling warriors after training.',
  },
  {
    amzznkWrriorsppeechOraclePromptId: 'prompt-20',
    amzznkWrriorsppeechOraclePromptTitle: 'Queen of the Tribe',
    amzznkWrriorsppeechOraclePromptQuestion:
      'She leads without shouting, Speaks with calm confidence, And inspires every warrior. Who is she?',
    amzznkWrriorsppeechOraclePromptChoices: [
      {amzznkWrriorsppeechOracleChoiceId: 'A', amzznkWrriorsppeechOracleChoiceLabel: 'Hunter'},
      {amzznkWrriorsppeechOracleChoiceId: 'B', amzznkWrriorsppeechOracleChoiceLabel: 'Storyteller'},
      {amzznkWrriorsppeechOracleChoiceId: 'C', amzznkWrriorsppeechOracleChoiceLabel: 'Queen'},
      {amzznkWrriorsppeechOracleChoiceId: 'D', amzznkWrriorsppeechOracleChoiceLabel: 'Traveler'},
    ],
    amzznkWrriorsppeechOraclePromptCorrectId: 'C',
    amzznkWrriorsppeechOraclePromptExplanation:
      'The Queen — leading with calm confidence and inspiring every warrior.',
  },
];

export const amzznkWrriorsppeechOraclePickSession = (): AmzznkWrriorsppeechOraclePrompt[] => {
  const amzznkWrriorsppeechOracleSessionPrompts = [...amzznkWrriorsppeechOraclePromptsAll].sort(
    () => Math.random() - 0.5,
  );
  return amzznkWrriorsppeechOracleSessionPrompts.slice(
    0,
    amzznkWrriorsppeechOracleTrialsPerSession,
  );
};

export const amzznkWrriorsppeechOracleGetChoiceLabel = (
  amzznkWrriorsppeechOraclePrompt: AmzznkWrriorsppeechOraclePrompt,
  amzznkWrriorsppeechOracleChoiceId: AmzznkWrriorsppeechOracleChoiceId,
) =>
  amzznkWrriorsppeechOraclePrompt.amzznkWrriorsppeechOraclePromptChoices.find(
    amzznkWrriorsppeechOracleChoice =>
      amzznkWrriorsppeechOracleChoice.amzznkWrriorsppeechOracleChoiceId ===
      amzznkWrriorsppeechOracleChoiceId,
  )?.amzznkWrriorsppeechOracleChoiceLabel ?? '';
