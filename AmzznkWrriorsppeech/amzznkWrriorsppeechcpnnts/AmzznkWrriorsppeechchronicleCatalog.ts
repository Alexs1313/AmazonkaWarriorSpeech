export type AmzznkWrriorsppeechChronicleRealmId =
  | 'legend'
  | 'myth'
  | 'history'
  | 'wisdom';

export type AmzznkWrriorsppeechChronicleEntry = {
  amzznkWrriorsppeechChronicleEntryId: string;
  amzznkWrriorsppeechChronicleEntryTitle: string;
  amzznkWrriorsppeechChronicleEntryDescription: string;
  amzznkWrriorsppeechChronicleEntryBody: string;
  amzznkWrriorsppeechChronicleEntryCategoryId: AmzznkWrriorsppeechChronicleRealmId;
  amzznkWrriorsppeechChronicleEntryEmoji: string;
  amzznkWrriorsppeechChronicleEntryReadMin: number;
  amzznkWrriorsppeechChronicleEntryFeatured?: boolean;
};

export type AmzznkWrriorsppeechChronicleRealm = {
  amzznkWrriorsppeechChronicleCategoryId: AmzznkWrriorsppeechChronicleRealmId;
  amzznkWrriorsppeechChronicleCategoryLabel: string;
  amzznkWrriorsppeechChronicleCategoryColor: string;
  amzznkWrriorsppeechChronicleCategoryBg: string;
  amzznkWrriorsppeechChronicleCategoryBorder: string;
};

export const amzznkWrriorsppeechChronicleRealms: AmzznkWrriorsppeechChronicleRealm[] =
  [
    {
      amzznkWrriorsppeechChronicleCategoryId: 'legend',
      amzznkWrriorsppeechChronicleCategoryLabel: 'Legend',
      amzznkWrriorsppeechChronicleCategoryColor: '#FF9900',
      amzznkWrriorsppeechChronicleCategoryBg: 'rgba(255, 153, 0, 0.13)',
      amzznkWrriorsppeechChronicleCategoryBorder: 'rgba(255, 153, 0, 0.27)',
    },
    {
      amzznkWrriorsppeechChronicleCategoryId: 'myth',
      amzznkWrriorsppeechChronicleCategoryLabel: 'Myth',
      amzznkWrriorsppeechChronicleCategoryColor: '#A855F7',
      amzznkWrriorsppeechChronicleCategoryBg: 'rgba(168, 85, 247, 0.13)',
      amzznkWrriorsppeechChronicleCategoryBorder: 'rgba(168, 85, 247, 0.27)',
    },
    {
      amzznkWrriorsppeechChronicleCategoryId: 'history',
      amzznkWrriorsppeechChronicleCategoryLabel: 'History',
      amzznkWrriorsppeechChronicleCategoryColor: '#3B82F6',
      amzznkWrriorsppeechChronicleCategoryBg: 'rgba(59, 130, 246, 0.13)',
      amzznkWrriorsppeechChronicleCategoryBorder: 'rgba(59, 130, 246, 0.27)',
    },
    {
      amzznkWrriorsppeechChronicleCategoryId: 'wisdom',
      amzznkWrriorsppeechChronicleCategoryLabel: 'Wisdom',
      amzznkWrriorsppeechChronicleCategoryColor: '#10B981',
      amzznkWrriorsppeechChronicleCategoryBg: 'rgba(16, 185, 129, 0.13)',
      amzznkWrriorsppeechChronicleCategoryBorder: 'rgba(16, 185, 129, 0.27)',
    },
  ];

export const amzznkWrriorsppeechChronicleEntries: AmzznkWrriorsppeechChronicleEntry[] = [
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-1',
    amzznkWrriorsppeechChronicleEntryTitle: 'The Queen Who Spoke Without Fear',
    amzznkWrriorsppeechChronicleEntryDescription:
      'Long ago, deep inside the jungle valley, there lived an Amazo queen named Velara respected for the way she spoke to people.',
    amzznkWrriorsppeechChronicleEntryBody: `Long ago, deep inside the jungle valley, there lived an Amazo queen named Velara. She was respected across many tribes not because she was the strongest warrior, but because of the way she spoke to people. Her voice sounded calm during danger, powerful during battle, and inspiring during difficult times. Young warriors often gathered near the fire to listen to her evening speeches.

One day, a frightened young warrior asked the queen how she learned to speak with such confidence. Velara explained that many years earlier, she had also feared speaking in front of others. During her first speech, her voice trembled and her words became confused. Instead of giving up, she practiced every morning beside the river while reading ancient stories aloud. She trained her breathing, pronunciation, and posture every single day.

Over time, her voice became stronger and more controlled. The queen taught her warriors that confidence is not something people are born with. It grows slowly through patience, repetition, and discipline. From that day forward, the young warrior practiced daily and slowly discovered the strength hidden inside her own voice.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'legend',
    amzznkWrriorsppeechChronicleEntryEmoji: '⚔️',
    amzznkWrriorsppeechChronicleEntryReadMin: 4,
    amzznkWrriorsppeechChronicleEntryFeatured: true,
  },
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-2',
    amzznkWrriorsppeechChronicleEntryTitle: 'The Storyteller Near the Waterfall',
    amzznkWrriorsppeechChronicleEntryDescription:
      'Near the largest waterfall in the jungle lived an old Amazo storyteller named Lina who trained warriors to control breathing and speech.',
    amzznkWrriorsppeechChronicleEntryBody: `Near the largest waterfall in the jungle lived an old Amazo storyteller named Lina. She believed the sound of rushing water could teach people how to control their breathing and speech. Every week, young warriors traveled to the waterfall to train with her.

Lina asked each warrior to stand near the water and read stories loudly enough to rise above the sound of the waterfall. At first, many struggled because the water was extremely loud. Some spoke too quickly, while others lost confidence after making mistakes. Lina calmly explained that clear speech requires patience and emotional control.

One young warrior named Saria nearly gave up after several failed attempts. However, Lina encouraged her to slow down, breathe deeply, and focus carefully on every word. After many weeks of practice, Saria finally learned how to speak with clarity and strength even in difficult conditions.

The warriors later realized that strong communication is not only about volume. True speaking power comes from calm breathing, focus, rhythm, and confidence.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'myth',
    amzznkWrriorsppeechChronicleEntryEmoji: '⭐',
    amzznkWrriorsppeechChronicleEntryReadMin: 3,
  },
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-3',
    amzznkWrriorsppeechChronicleEntryTitle: 'The Silent Warrior',
    amzznkWrriorsppeechChronicleEntryDescription:
      'A warrior named Elira was known for incredible fighting skills, but she rarely spoke — even when she had important ideas.',
    amzznkWrriorsppeechChronicleEntryBody: `A warrior named Elira was known across the tribe for her incredible fighting skills, but she rarely spoke to others. During meetings, she remained silent even when she had important ideas. Deep inside, she feared that her voice sounded weak and unimportant.

One evening, the queen invited Elira to join her during speech training near the ancient temple. The queen explained that leadership does not belong only to loud people. Sometimes the wisest voices remain hidden behind fear and self-doubt.

Every morning, Elira practiced reading ancient speeches aloud beside the temple walls. At first, her voice sounded nervous and uncertain. However, she slowly learned how to control her breathing and speak more clearly. Day after day, her confidence continued growing.

Months later, during an important gathering between tribes, Elira finally stood before everyone and shared her ideas calmly and confidently. The entire tribe listened carefully to her words. From that moment forward, Elira understood that true strength also lives inside communication.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'history',
    amzznkWrriorsppeechChronicleEntryEmoji: '🏛️',
    amzznkWrriorsppeechChronicleEntryReadMin: 4,
  },
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-4',
    amzznkWrriorsppeechChronicleEntryTitle: 'The Jungle of Echoes',
    amzznkWrriorsppeechChronicleEntryDescription:
      'Far beyond the northern cliffs existed a mysterious place called the Jungle of Echoes that repeated every word spoken by travelers.',
    amzznkWrriorsppeechChronicleEntryBody: `Far beyond the northern cliffs existed a mysterious place called the Jungle of Echoes. According to ancient legends, the jungle repeated every word spoken by travelers. Some warriors feared the place because they believed the echoes revealed weakness and uncertainty hidden inside the speaker's voice.

A group of young Amazo warriors decided to travel there as part of their speaking training. Their instructor explained that the jungle would help them hear every mistake in pronunciation, breathing, and rhythm. As the warriors spoke, their voices echoed loudly between the giant trees.

Some warriors discovered they were speaking too quickly. Others realized their words lacked confidence or emotional expression. One warrior named Talia became frustrated after hearing her nervous voice repeated again and again through the forest.

The instructor reminded her that improvement begins when people recognize their weaknesses without fear. Over several days, the warriors practiced controlling pauses, breathing, and vocal clarity. By the time they returned home, every warrior sounded more confident and expressive than before.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'myth',
    amzznkWrriorsppeechChronicleEntryEmoji: '🌿',
    amzznkWrriorsppeechChronicleEntryReadMin: 4,
  },
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-5',
    amzznkWrriorsppeechChronicleEntryTitle: 'The Voice of the Golden Temple',
    amzznkWrriorsppeechChronicleEntryDescription:
      'Deep inside the jungle stood a golden temple where Amazo leaders once trained future queens and speakers.',
    amzznkWrriorsppeechChronicleEntryBody: `Deep inside the jungle stood a golden temple where Amazo leaders once trained future queens and speakers. The walls of the temple were covered with ancient writings about communication, leadership, and confidence.

A young student named Nira traveled there hoping to improve her speech before an important ceremony. Inside the temple, she discovered old lessons carved into stone. One message especially caught her attention: "A powerful voice begins with a calm mind."

Nira spent several days inside the temple practicing speeches aloud while listening carefully to the echoes around her. She learned how pauses create meaning, how breathing controls emotions, and how confidence changes the sound of every sentence.

Before leaving the temple, Nira gave one final speech inside the great hall. Her voice sounded calm, clear, and confident. At that moment, she understood that strong speaking is not about sounding perfect. It is about speaking honestly, clearly, and without fear.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'legend',
    amzznkWrriorsppeechChronicleEntryEmoji: '✨',
    amzznkWrriorsppeechChronicleEntryReadMin: 4,
  },
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-6',
    amzznkWrriorsppeechChronicleEntryTitle: "The Queen's Evening Lessons",
    amzznkWrriorsppeechChronicleEntryDescription:
      'Every evening after training, the Amazo queen gathered young warriors around a large fire to share lessons about leadership.',
    amzznkWrriorsppeechChronicleEntryBody: `Every evening after training, the Amazo queen gathered young warriors around a large fire near the center of the camp. While the jungle slowly became darker around them, she shared lessons about leadership and communication.

The queen explained that many warriors focus only on physical strength while ignoring the power of words. According to her wisdom, a strong voice can inspire courage, calm fear, and unite people during difficult moments.

One night, she asked every warrior to tell a short story in front of the group. Some spoke confidently, while others struggled with nervousness. Instead of criticizing mistakes, the queen encouraged everyone to continue practicing patiently.

She reminded the warriors that fear becomes weaker every time people continue speaking despite discomfort. Over time, the evening lessons transformed many shy warriors into calm and expressive speakers who could confidently communicate during battles, meetings, and ceremonies.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'wisdom',
    amzznkWrriorsppeechChronicleEntryEmoji: '👑',
    amzznkWrriorsppeechChronicleEntryReadMin: 3,
  },
  {
    amzznkWrriorsppeechChronicleEntryId: 'entry-7',
    amzznkWrriorsppeechChronicleEntryTitle: 'The Warrior Who Learned to Listen',
    amzznkWrriorsppeechChronicleEntryDescription:
      'A talented warrior named Kaela dreamed of becoming the greatest speaker in the tribe, but she often interrupted others.',
    amzznkWrriorsppeechChronicleEntryBody: `A talented warrior named Kaela dreamed of becoming the greatest speaker in the tribe. She practiced speeches daily and always tried to sound powerful during conversations. However, she often interrupted others and focused more on speaking than listening.

One day, the queen invited Kaela to attend an important meeting between several tribes. During the meeting, the queen spent most of the time quietly listening instead of speaking immediately. Kaela became confused because she expected strong speeches and dramatic commands.

After the meeting ended, the queen explained an important lesson. Great speakers first learn how to listen carefully before trying to control a conversation. Listening helps people understand emotions, ideas, and problems more deeply.

Kaela slowly realized that communication is not only about sounding confident. True communication also requires patience, understanding, and respect for others. From that day forward, she practiced becoming both a better speaker and a better listener.`,
    amzznkWrriorsppeechChronicleEntryCategoryId: 'history',
    amzznkWrriorsppeechChronicleEntryEmoji: '🎧',
    amzznkWrriorsppeechChronicleEntryReadMin: 4,
  },
];

export const amzznkWrriorsppeechChronicleGetRealm = (
  amzznkWrriorsppeechChronicleCategoryId: AmzznkWrriorsppeechChronicleRealmId,
) =>
  amzznkWrriorsppeechChronicleRealms.find(
    amzznkWrriorsppeechChronicleCategory =>
      amzznkWrriorsppeechChronicleCategory.amzznkWrriorsppeechChronicleCategoryId ===
      amzznkWrriorsppeechChronicleCategoryId,
  );

export const amzznkWrriorsppeechChronicleGetEntry = (
  amzznkWrriorsppeechChronicleEntryId: string,
) =>
  amzznkWrriorsppeechChronicleEntries.find(
    amzznkWrriorsppeechChronicleEntry =>
      amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryId ===
      amzznkWrriorsppeechChronicleEntryId,
  );

export const amzznkWrriorsppeechChronicleFeaturedEntry =
  amzznkWrriorsppeechChronicleEntries.find(
    amzznkWrriorsppeechChronicleEntry =>
      amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryFeatured,
  ) ?? amzznkWrriorsppeechChronicleEntries[0];

export const amzznkWrriorsppeechChronicleListEntries =
  amzznkWrriorsppeechChronicleEntries.filter(
    amzznkWrriorsppeechChronicleEntry =>
      !amzznkWrriorsppeechChronicleEntry.amzznkWrriorsppeechChronicleEntryFeatured,
  );
