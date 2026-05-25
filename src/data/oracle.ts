export type OracleChoiceId = 'A' | 'B' | 'C' | 'D';

export type OracleChoice = {
  oracleChoiceId: OracleChoiceId;
  oracleChoiceLabel: string;
};

export type OraclePrompt = {
  oraclePromptId: string;
  oraclePromptTitle: string;
  oraclePromptQuestion: string;
  oraclePromptChoices: OracleChoice[];
  oraclePromptCorrectId: OracleChoiceId;
  oraclePromptExplanation: string;
};

export const oracleTrialsPerSession = 3;
export const oracleTimerSeconds = 30;
export const oracleTokensPerCorrect = 3;

export const oraclePromptsAll: OraclePrompt[] = [
  {
    oraclePromptId: 'prompt-1',
    oraclePromptTitle: 'The Silent River',
    oraclePromptQuestion:
      'I move through the jungle without feet, I speak without a mouth, And every Amazonka hears me at night. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Fire'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Wind'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'River'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Shadow'},
    ],
    oraclePromptCorrectId: 'C',
    oraclePromptExplanation:
      'A river — moving silently through the jungle, heard by every warrior at night.',
  },
  {
    oraclePromptId: 'prompt-2',
    oraclePromptTitle: "Warrior's Strength",
    oraclePromptQuestion:
      'The more you train me, The stronger I become. Without me, even a queen sounds weak. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Voice'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Spear'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Shield'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Horse'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Your voice — trained daily, it grows stronger with every practice session.',
  },
  {
    oraclePromptId: 'prompt-3',
    oraclePromptTitle: 'The Jungle Light',
    oraclePromptQuestion:
      'I shine during darkness, I dance with the wind, And warriors gather around me before battle. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Moon'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Campfire'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'River'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Spear'},
    ],
    oraclePromptCorrectId: 'B',
    oraclePromptExplanation:
      'A campfire — warriors gather around its light before every battle.',
  },
  {
    oraclePromptId: 'prompt-4',
    oraclePromptTitle: 'The Hidden Sound',
    oraclePromptQuestion:
      'You cannot see me, But you can hear me during every speech. I help words sound strong and clear. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Breathing'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Rain'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Shadow'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Silence'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Breathing — invisible yet essential for clear, powerful speech.',
  },
  {
    oraclePromptId: 'prompt-5',
    oraclePromptTitle: "Queen's Wisdom",
    oraclePromptQuestion:
      'The less you rush me, The stronger your speech becomes. Good speakers always control me carefully. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Speed'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Armor'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Jungle'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Echo'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Speed — controlled pacing makes every word clearer and stronger.',
  },
  {
    oraclePromptId: 'prompt-6',
    oraclePromptTitle: 'The Echo Forest',
    oraclePromptQuestion:
      'I repeat every word you say, Deep inside the jungle trees. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Waterfall'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Echo'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Wind'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Thunder'},
    ],
    oraclePromptCorrectId: 'B',
    oraclePromptExplanation:
      'An echo — repeating every word among the jungle trees.',
  },
  {
    oraclePromptId: 'prompt-7',
    oraclePromptTitle: "Amazonka's Friend",
    oraclePromptQuestion:
      'I protect warriors in battle, But I also protect speakers from fear. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Confidence'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Fire'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'River'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Crown'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Confidence — protecting warriors in battle and speakers from fear.',
  },
  {
    oraclePromptId: 'prompt-8',
    oraclePromptTitle: 'The Jungle Teacher',
    oraclePromptQuestion:
      'I have no voice, But I teach patience every day As I slowly move through stone. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Tree'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Water'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Spear'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Sun'},
    ],
    oraclePromptCorrectId: 'B',
    oraclePromptExplanation:
      'Water — moving slowly through stone, teaching patience without a voice.',
  },
  {
    oraclePromptId: 'prompt-9',
    oraclePromptTitle: 'The Calm Speaker',
    oraclePromptQuestion:
      'The more you control me, The calmer your voice becomes. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Emotion'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Breathing'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Footsteps'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Armor'},
    ],
    oraclePromptCorrectId: 'B',
    oraclePromptExplanation:
      'Breathing — the more you control it, the calmer your voice becomes.',
  },
  {
    oraclePromptId: 'prompt-10',
    oraclePromptTitle: "Warrior's Pause",
    oraclePromptQuestion:
      'I am short and silent, But strong speakers use me often. Without me, speech sounds rushed. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Pause'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'River'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Arrow'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Helmet'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'A pause — short and silent, yet essential for powerful delivery.',
  },
  {
    oraclePromptId: 'prompt-11',
    oraclePromptTitle: "The Queen's Tool",
    oraclePromptQuestion:
      'I am not a weapon, But I can inspire an entire tribe. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Voice'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Spear'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Bow'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Shield'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Your voice — not a weapon, yet it can inspire an entire tribe.',
  },
  {
    oraclePromptId: 'prompt-12',
    oraclePromptTitle: 'Jungle Mystery',
    oraclePromptQuestion:
      'I fall from the sky, I feed the jungle, And warriors hear me at night. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Thunder'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Rain'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Fire'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Smoke'},
    ],
    oraclePromptCorrectId: 'B',
    oraclePromptExplanation:
      'Rain — falling from the sky and feeding the jungle every night.',
  },
  {
    oraclePromptId: 'prompt-13',
    oraclePromptTitle: 'The Brave Warrior',
    oraclePromptQuestion:
      'The more you face me, The smaller I become. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Fear'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Shadow'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Water'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Fire'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Fear — the more you face it, the smaller it becomes.',
  },
  {
    oraclePromptId: 'prompt-14',
    oraclePromptTitle: 'Ancient Temple',
    oraclePromptQuestion:
      'I hold stories without speaking, And wisdom without a voice. What am I?',
    oraclePromptChoices: [
      {
        oracleChoiceId: 'A',
        oracleChoiceLabel: 'Stone writings',
      },
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Waterfall'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Crown'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Spear'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Stone writings — holding stories and wisdom without a voice.',
  },
  {
    oraclePromptId: 'prompt-15',
    oraclePromptTitle: 'The Jungle Path',
    oraclePromptQuestion:
      'I guide warriors through darkness, But I disappear when the sun rises. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Torch'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Stars'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Moonlight'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Footprints'},
    ],
    oraclePromptCorrectId: 'C',
    oraclePromptExplanation:
      'Moonlight — guiding through darkness, gone when the sun rises.',
  },
  {
    oraclePromptId: 'prompt-16',
    oraclePromptTitle: 'Voice of Power',
    oraclePromptQuestion:
      'I become stronger when spoken clearly, And weaker when filled with fear. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Speech'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Fire'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Armor'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'River'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Speech — stronger when spoken clearly, weaker when fear takes over.',
  },
  {
    oraclePromptId: 'prompt-17',
    oraclePromptTitle: 'The Amazonka Lesson',
    oraclePromptQuestion:
      'I cannot be held in your hands, But every leader must learn me. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Communication'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Gold'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Strength'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Speed'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Communication — every leader must learn it, though it cannot be held.',
  },
  {
    oraclePromptId: 'prompt-18',
    oraclePromptTitle: "Warrior's Training",
    oraclePromptQuestion:
      'The more you practice me, The easier speaking becomes. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Discipline'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Silence'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Rain'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Battle'},
    ],
    oraclePromptCorrectId: 'A',
    oraclePromptExplanation:
      'Discipline — the more you practice, the easier speaking becomes.',
  },
  {
    oraclePromptId: 'prompt-19',
    oraclePromptTitle: 'The Jungle Wind',
    oraclePromptQuestion:
      'I travel through trees, Carry sounds across rivers, And cool warriors after training. What am I?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Mist'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Wind'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Echo'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Shadow'},
    ],
    oraclePromptCorrectId: 'B',
    oraclePromptExplanation:
      'Wind — traveling through trees and cooling warriors after training.',
  },
  {
    oraclePromptId: 'prompt-20',
    oraclePromptTitle: 'Queen of the Tribe',
    oraclePromptQuestion:
      'She leads without shouting, Speaks with calm confidence, And inspires every warrior. Who is she?',
    oraclePromptChoices: [
      {oracleChoiceId: 'A', oracleChoiceLabel: 'Hunter'},
      {oracleChoiceId: 'B', oracleChoiceLabel: 'Storyteller'},
      {oracleChoiceId: 'C', oracleChoiceLabel: 'Queen'},
      {oracleChoiceId: 'D', oracleChoiceLabel: 'Traveler'},
    ],
    oraclePromptCorrectId: 'C',
    oraclePromptExplanation:
      'The Queen — leading with calm confidence and inspiring every warrior.',
  },
];

export const oraclePickSession = (): OraclePrompt[] => {
  const oracleSessionPrompts = [...oraclePromptsAll].sort(
    () => Math.random() - 0.5,
  );
  return oracleSessionPrompts.slice(
    0,
    oracleTrialsPerSession,
  );
};

export const oracleGetChoiceLabel = (
  oraclePrompt: OraclePrompt,
  oracleChoiceId: OracleChoiceId,
) =>
  oraclePrompt.oraclePromptChoices.find(
    oracleChoice =>
      oracleChoice.oracleChoiceId ===
      oracleChoiceId,
  )?.oracleChoiceLabel ?? '';
