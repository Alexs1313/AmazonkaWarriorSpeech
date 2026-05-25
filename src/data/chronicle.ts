export type ChronicleRealmId =
  | 'legend'
  | 'myth'
  | 'history'
  | 'wisdom';

export type ChronicleEntry = {
  chronicleEntryId: string;
  chronicleEntryTitle: string;
  chronicleEntryDescription: string;
  chronicleEntryBody: string;
  chronicleEntryCategoryId: ChronicleRealmId;
  chronicleEntryEmoji: string;
  chronicleEntryReadMin: number;
  chronicleEntryFeatured?: boolean;
};

export type ChronicleRealm = {
  chronicleCategoryId: ChronicleRealmId;
  chronicleCategoryLabel: string;
  chronicleCategoryColor: string;
  chronicleCategoryBg: string;
  chronicleCategoryBorder: string;
};

export const chronicleRealms: ChronicleRealm[] =
  [
    {
      chronicleCategoryId: 'legend',
      chronicleCategoryLabel: 'Legend',
      chronicleCategoryColor: '#FF9900',
      chronicleCategoryBg: 'rgba(255, 153, 0, 0.13)',
      chronicleCategoryBorder: 'rgba(255, 153, 0, 0.27)',
    },
    {
      chronicleCategoryId: 'myth',
      chronicleCategoryLabel: 'Myth',
      chronicleCategoryColor: '#A855F7',
      chronicleCategoryBg: 'rgba(168, 85, 247, 0.13)',
      chronicleCategoryBorder: 'rgba(168, 85, 247, 0.27)',
    },
    {
      chronicleCategoryId: 'history',
      chronicleCategoryLabel: 'History',
      chronicleCategoryColor: '#3B82F6',
      chronicleCategoryBg: 'rgba(59, 130, 246, 0.13)',
      chronicleCategoryBorder: 'rgba(59, 130, 246, 0.27)',
    },
    {
      chronicleCategoryId: 'wisdom',
      chronicleCategoryLabel: 'Wisdom',
      chronicleCategoryColor: '#10B981',
      chronicleCategoryBg: 'rgba(16, 185, 129, 0.13)',
      chronicleCategoryBorder: 'rgba(16, 185, 129, 0.27)',
    },
  ];

export const chronicleEntries: ChronicleEntry[] = [
  {
    chronicleEntryId: 'entry-1',
    chronicleEntryTitle: 'The Queen Who Spoke Without Fear',
    chronicleEntryDescription:
      'Long ago, deep inside the jungle valley, there lived an Amazonka queen named Velara respected for the way she spoke to people.',
    chronicleEntryBody: `Long ago, deep inside the jungle valley, there lived an Amazonka queen named Velara. She was respected across many tribes not because she was the strongest warrior, but because of the way she spoke to people. Her voice sounded calm during danger, powerful during battle, and inspiring during difficult times. Young warriors often gathered near the fire to listen to her evening speeches.

One day, a frightened young warrior asked the queen how she learned to speak with such confidence. Velara explained that many years earlier, she had also feared speaking in front of others. During her first speech, her voice trembled and her words became confused. Instead of giving up, she practiced every morning beside the river while reading ancient stories aloud. She trained her breathing, pronunciation, and posture every single day.

Over time, her voice became stronger and more controlled. The queen taught her warriors that confidence is not something people are born with. It grows slowly through patience, repetition, and discipline. From that day forward, the young warrior practiced daily and slowly discovered the strength hidden inside her own voice.`,
    chronicleEntryCategoryId: 'legend',
    chronicleEntryEmoji: '⚔️',
    chronicleEntryReadMin: 4,
    chronicleEntryFeatured: true,
  },
  {
    chronicleEntryId: 'entry-2',
    chronicleEntryTitle: 'The Storyteller Near the Waterfall',
    chronicleEntryDescription:
      'Near the largest waterfall in the jungle lived an old Amazonka storyteller named Lina who trained warriors to control breathing and speech.',
    chronicleEntryBody: `Near the largest waterfall in the jungle lived an old Amazonka storyteller named Lina. She believed the sound of rushing water could teach people how to control their breathing and speech. Every week, young warriors traveled to the waterfall to train with her.

Lina asked each warrior to stand near the water and read stories loudly enough to rise above the sound of the waterfall. At first, many struggled because the water was extremely loud. Some spoke too quickly, while others lost confidence after making mistakes. Lina calmly explained that clear speech requires patience and emotional control.

One young warrior named Saria nearly gave up after several failed attempts. However, Lina encouraged her to slow down, breathe deeply, and focus carefully on every word. After many weeks of practice, Saria finally learned how to speak with clarity and strength even in difficult conditions.

The warriors later realized that strong communication is not only about volume. True speaking power comes from calm breathing, focus, rhythm, and confidence.`,
    chronicleEntryCategoryId: 'myth',
    chronicleEntryEmoji: '⭐',
    chronicleEntryReadMin: 3,
  },
  {
    chronicleEntryId: 'entry-3',
    chronicleEntryTitle: 'The Silent Warrior',
    chronicleEntryDescription:
      'A warrior named Elira was known for incredible fighting skills, but she rarely spoke — even when she had important ideas.',
    chronicleEntryBody: `A warrior named Elira was known across the tribe for her incredible fighting skills, but she rarely spoke to others. During meetings, she remained silent even when she had important ideas. Deep inside, she feared that her voice sounded weak and unimportant.

One evening, the queen invited Elira to join her during speech training near the ancient temple. The queen explained that leadership does not belong only to loud people. Sometimes the wisest voices remain hidden behind fear and self-doubt.

Every morning, Elira practiced reading ancient speeches aloud beside the temple walls. At first, her voice sounded nervous and uncertain. However, she slowly learned how to control her breathing and speak more clearly. Day after day, her confidence continued growing.

Months later, during an important gathering between tribes, Elira finally stood before everyone and shared her ideas calmly and confidently. The entire tribe listened carefully to her words. From that moment forward, Elira understood that true strength also lives inside communication.`,
    chronicleEntryCategoryId: 'history',
    chronicleEntryEmoji: '🏛️',
    chronicleEntryReadMin: 4,
  },
  {
    chronicleEntryId: 'entry-4',
    chronicleEntryTitle: 'The Jungle of Echoes',
    chronicleEntryDescription:
      'Far beyond the northern cliffs existed a mysterious place called the Jungle of Echoes that repeated every word spoken by travelers.',
    chronicleEntryBody: `Far beyond the northern cliffs existed a mysterious place called the Jungle of Echoes. According to ancient legends, the jungle repeated every word spoken by travelers. Some warriors feared the place because they believed the echoes revealed weakness and uncertainty hidden inside the speaker's voice.

A group of young Amazonka warriors decided to travel there as part of their speaking training. Their instructor explained that the jungle would help them hear every mistake in pronunciation, breathing, and rhythm. As the warriors spoke, their voices echoed loudly between the giant trees.

Some warriors discovered they were speaking too quickly. Others realized their words lacked confidence or emotional expression. One warrior named Talia became frustrated after hearing her nervous voice repeated again and again through the forest.

The instructor reminded her that improvement begins when people recognize their weaknesses without fear. Over several days, the warriors practiced controlling pauses, breathing, and vocal clarity. By the time they returned home, every warrior sounded more confident and expressive than before.`,
    chronicleEntryCategoryId: 'myth',
    chronicleEntryEmoji: '🌿',
    chronicleEntryReadMin: 4,
  },
  {
    chronicleEntryId: 'entry-5',
    chronicleEntryTitle: 'The Voice of the Golden Temple',
    chronicleEntryDescription:
      'Deep inside the jungle stood a golden temple where Amazonka leaders once trained future queens and speakers.',
    chronicleEntryBody: `Deep inside the jungle stood a golden temple where Amazonka leaders once trained future queens and speakers. The walls of the temple were covered with ancient writings about communication, leadership, and confidence.

A young student named Nira traveled there hoping to improve her speech before an important ceremony. Inside the temple, she discovered old lessons carved into stone. One message especially caught her attention: "A powerful voice begins with a calm mind."

Nira spent several days inside the temple practicing speeches aloud while listening carefully to the echoes around her. She learned how pauses create meaning, how breathing controls emotions, and how confidence changes the sound of every sentence.

Before leaving the temple, Nira gave one final speech inside the great hall. Her voice sounded calm, clear, and confident. At that moment, she understood that strong speaking is not about sounding perfect. It is about speaking honestly, clearly, and without fear.`,
    chronicleEntryCategoryId: 'legend',
    chronicleEntryEmoji: '✨',
    chronicleEntryReadMin: 4,
  },
  {
    chronicleEntryId: 'entry-6',
    chronicleEntryTitle: "The Queen's Evening Lessons",
    chronicleEntryDescription:
      'Every evening after training, the Amazonka queen gathered young warriors around a large fire to share lessons about leadership.',
    chronicleEntryBody: `Every evening after training, the Amazonka queen gathered young warriors around a large fire near the center of the camp. While the jungle slowly became darker around them, she shared lessons about leadership and communication.

The queen explained that many warriors focus only on physical strength while ignoring the power of words. According to her wisdom, a strong voice can inspire courage, calm fear, and unite people during difficult moments.

One night, she asked every warrior to tell a short story in front of the group. Some spoke confidently, while others struggled with nervousness. Instead of criticizing mistakes, the queen encouraged everyone to continue practicing patiently.

She reminded the warriors that fear becomes weaker every time people continue speaking despite discomfort. Over time, the evening lessons transformed many shy warriors into calm and expressive speakers who could confidently communicate during battles, meetings, and ceremonies.`,
    chronicleEntryCategoryId: 'wisdom',
    chronicleEntryEmoji: '👑',
    chronicleEntryReadMin: 3,
  },
  {
    chronicleEntryId: 'entry-7',
    chronicleEntryTitle: 'The Warrior Who Learned to Listen',
    chronicleEntryDescription:
      'A talented warrior named Kaela dreamed of becoming the greatest speaker in the tribe, but she often interrupted others.',
    chronicleEntryBody: `A talented warrior named Kaela dreamed of becoming the greatest speaker in the tribe. She practiced speeches daily and always tried to sound powerful during conversations. However, she often interrupted others and focused more on speaking than listening.

One day, the queen invited Kaela to attend an important meeting between several tribes. During the meeting, the queen spent most of the time quietly listening instead of speaking immediately. Kaela became confused because she expected strong speeches and dramatic commands.

After the meeting ended, the queen explained an important lesson. Great speakers first learn how to listen carefully before trying to control a conversation. Listening helps people understand emotions, ideas, and problems more deeply.

Kaela slowly realized that communication is not only about sounding confident. True communication also requires patience, understanding, and respect for others. From that day forward, she practiced becoming both a better speaker and a better listener.`,
    chronicleEntryCategoryId: 'history',
    chronicleEntryEmoji: '🎧',
    chronicleEntryReadMin: 4,
  },
];

export const chronicleGetRealm = (
  chronicleCategoryId: ChronicleRealmId,
) =>
  chronicleRealms.find(
    chronicleCategory =>
      chronicleCategory.chronicleCategoryId ===
      chronicleCategoryId,
  );

export const chronicleGetEntry = (
  chronicleEntryId: string,
) =>
  chronicleEntries.find(
    chronicleEntry =>
      chronicleEntry.chronicleEntryId ===
      chronicleEntryId,
  );

export const chronicleFeaturedEntry =
  chronicleEntries.find(
    chronicleEntry =>
      chronicleEntry.chronicleEntryFeatured,
  ) ?? chronicleEntries[0];

export const chronicleListEntries =
  chronicleEntries.filter(
    chronicleEntry =>
      !chronicleEntry.chronicleEntryFeatured,
  );
