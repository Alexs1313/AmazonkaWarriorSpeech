export type AmznkaWrriorSpeechRddlsOptionId = 'A' | 'B' | 'C' | 'D';

export type AmznkaWrriorSpeechRddlsOption = {
  amznkaWrriorSpeechRddlsOptionId: AmznkaWrriorSpeechRddlsOptionId;
  amznkaWrriorSpeechRddlsOptionLabel: string;
};

export type AmznkaWrriorSpeechRddlsRiddle = {
  amznkaWrriorSpeechRddlsRiddleId: string;
  amznkaWrriorSpeechRddlsRiddleTitle: string;
  amznkaWrriorSpeechRddlsRiddleQuestion: string;
  amznkaWrriorSpeechRddlsRiddleOptions: AmznkaWrriorSpeechRddlsOption[];
  amznkaWrriorSpeechRddlsRiddleCorrectId: AmznkaWrriorSpeechRddlsOptionId;
  amznkaWrriorSpeechRddlsRiddleExplanation: string;
};

export const amznkaWrriorSpeechRddlsPerSession = 3;
export const amznkaWrriorSpeechRddlsTimerSeconds = 30;
export const amznkaWrriorSpeechRddlsSwordsPerCorrect = 3;

export const amznkaWrriorSpeechRddlsAll: AmznkaWrriorSpeechRddlsRiddle[] = [
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-1',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Silent River',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I move through the jungle without feet, I speak without a mouth, And every Amazonka hears me at night. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Fire'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Wind'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'River'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Shadow'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'C',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'A river — moving silently through the jungle, heard by every warrior at night.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-2',
    amznkaWrriorSpeechRddlsRiddleTitle: "Warrior's Strength",
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'The more you train me, The stronger I become. Without me, even a queen sounds weak. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Voice'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Sword'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Shield'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Horse'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Your voice — trained daily, it grows stronger with every practice session.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-3',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Jungle Light',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I shine during darkness, I dance with the wind, And warriors gather around me before battle. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Moon'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Campfire'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'River'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Spear'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'B',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'A campfire — warriors gather around its light before every battle.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-4',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Hidden Sound',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'You cannot see me, But you can hear me during every speech. I help words sound strong and clear. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Breathing'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Rain'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Shadow'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Silence'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Breathing — invisible yet essential for clear, powerful speech.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-5',
    amznkaWrriorSpeechRddlsRiddleTitle: "Queen's Wisdom",
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'The less you rush me, The stronger your speech becomes. Good speakers always control me carefully. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Speed'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Armor'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Jungle'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Echo'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Speed — controlled pacing makes every word clearer and stronger.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-6',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Echo Forest',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I repeat every word you say, Deep inside the jungle trees. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Waterfall'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Echo'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Wind'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Thunder'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'B',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'An echo — repeating every word among the jungle trees.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-7',
    amznkaWrriorSpeechRddlsRiddleTitle: "Amazonka's Friend",
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I protect warriors in battle, But I also protect speakers from fear. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Confidence'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Fire'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'River'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Crown'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Confidence — protecting warriors in battle and speakers from fear.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-8',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Jungle Teacher',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I have no voice, But I teach patience every day As I slowly move through stone. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Tree'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Water'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Spear'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Sun'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'B',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Water — moving slowly through stone, teaching patience without a voice.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-9',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Calm Speaker',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'The more you control me, The calmer your voice becomes. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Emotion'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Breathing'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Footsteps'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Armor'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'B',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Breathing — the more you control it, the calmer your voice becomes.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-10',
    amznkaWrriorSpeechRddlsRiddleTitle: "Warrior's Pause",
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I am short and silent, But strong speakers use me often. Without me, speech sounds rushed. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Pause'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'River'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Arrow'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Helmet'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'A pause — short and silent, yet essential for powerful delivery.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-11',
    amznkaWrriorSpeechRddlsRiddleTitle: "The Queen's Tool",
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I am not a weapon, But I can inspire an entire tribe. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Voice'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Sword'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Bow'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Shield'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Your voice — not a weapon, yet it can inspire an entire tribe.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-12',
    amznkaWrriorSpeechRddlsRiddleTitle: 'Jungle Mystery',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I fall from the sky, I feed the jungle, And warriors hear me at night. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Thunder'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Rain'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Fire'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Smoke'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'B',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Rain — falling from the sky and feeding the jungle every night.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-13',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Brave Warrior',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'The more you face me, The smaller I become. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Fear'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Shadow'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Water'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Fire'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Fear — the more you face it, the smaller it becomes.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-14',
    amznkaWrriorSpeechRddlsRiddleTitle: 'Ancient Temple',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I hold stories without speaking, And wisdom without a voice. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {
        amznkaWrriorSpeechRddlsOptionId: 'A',
        amznkaWrriorSpeechRddlsOptionLabel: 'Stone writings',
      },
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Waterfall'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Crown'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Spear'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Stone writings — holding stories and wisdom without a voice.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-15',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Jungle Path',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I guide warriors through darkness, But I disappear when the sun rises. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Torch'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Stars'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Moonlight'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Footprints'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'C',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Moonlight — guiding through darkness, gone when the sun rises.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-16',
    amznkaWrriorSpeechRddlsRiddleTitle: 'Voice of Power',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I become stronger when spoken clearly, And weaker when filled with fear. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Speech'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Fire'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Armor'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'River'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Speech — stronger when spoken clearly, weaker when fear takes over.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-17',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Amazonka Lesson',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I cannot be held in your hands, But every leader must learn me. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Communication'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Gold'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Strength'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Speed'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Communication — every leader must learn it, though it cannot be held.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-18',
    amznkaWrriorSpeechRddlsRiddleTitle: "Warrior's Training",
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'The more you practice me, The easier speaking becomes. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Discipline'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Silence'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Rain'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Battle'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'A',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Discipline — the more you practice, the easier speaking becomes.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-19',
    amznkaWrriorSpeechRddlsRiddleTitle: 'The Jungle Wind',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'I travel through trees, Carry sounds across rivers, And cool warriors after training. What am I?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Mist'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Wind'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Echo'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Shadow'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'B',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'Wind — traveling through trees and cooling warriors after training.',
  },
  {
    amznkaWrriorSpeechRddlsRiddleId: 'riddle-20',
    amznkaWrriorSpeechRddlsRiddleTitle: 'Queen of the Tribe',
    amznkaWrriorSpeechRddlsRiddleQuestion:
      'She leads without shouting, Speaks with calm confidence, And inspires every warrior. Who is she?',
    amznkaWrriorSpeechRddlsRiddleOptions: [
      {amznkaWrriorSpeechRddlsOptionId: 'A', amznkaWrriorSpeechRddlsOptionLabel: 'Hunter'},
      {amznkaWrriorSpeechRddlsOptionId: 'B', amznkaWrriorSpeechRddlsOptionLabel: 'Storyteller'},
      {amznkaWrriorSpeechRddlsOptionId: 'C', amznkaWrriorSpeechRddlsOptionLabel: 'Queen'},
      {amznkaWrriorSpeechRddlsOptionId: 'D', amznkaWrriorSpeechRddlsOptionLabel: 'Traveler'},
    ],
    amznkaWrriorSpeechRddlsRiddleCorrectId: 'C',
    amznkaWrriorSpeechRddlsRiddleExplanation:
      'The Queen — leading with calm confidence and inspiring every warrior.',
  },
];

export const amznkaWrriorSpeechRddlsPickSession = (): AmznkaWrriorSpeechRddlsRiddle[] => {
  const amznkaWrriorSpeechRddlsShuffled = [...amznkaWrriorSpeechRddlsAll].sort(
    () => Math.random() - 0.5,
  );
  return amznkaWrriorSpeechRddlsShuffled.slice(
    0,
    amznkaWrriorSpeechRddlsPerSession,
  );
};

export const amznkaWrriorSpeechRddlsGetOptionLabel = (
  amznkaWrriorSpeechRddlsRiddle: AmznkaWrriorSpeechRddlsRiddle,
  amznkaWrriorSpeechRddlsOptionId: AmznkaWrriorSpeechRddlsOptionId,
) =>
  amznkaWrriorSpeechRddlsRiddle.amznkaWrriorSpeechRddlsRiddleOptions.find(
    amznkaWrriorSpeechRddlsOption =>
      amznkaWrriorSpeechRddlsOption.amznkaWrriorSpeechRddlsOptionId ===
      amznkaWrriorSpeechRddlsOptionId,
  )?.amznkaWrriorSpeechRddlsOptionLabel ?? '';
