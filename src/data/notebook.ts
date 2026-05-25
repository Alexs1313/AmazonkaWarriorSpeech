export type NotebookTopicId =
  | 'voice'
  | 'speech'
  | 'confidence';

export type NotebookNote = {
  notebookNoteId: string;
  notebookNoteTitle: string;
  notebookNoteBody: string;
  notebookNoteCategoryId: NotebookTopicId;
  notebookNoteFooter: string;
};

export type NotebookTopic = {
  notebookCategoryId: NotebookTopicId;
  notebookCategoryLabel: string;
  notebookCategoryTabLabel: string;
  notebookCategoryEmoji: string;
};

export const notebookTopics: NotebookTopic[] =
  [
    {
      notebookCategoryId: 'voice',
      notebookCategoryLabel: 'Voice Power',
      notebookCategoryTabLabel: 'Voice',
      notebookCategoryEmoji: '🎙️',
    },
    {
      notebookCategoryId: 'speech',
      notebookCategoryLabel: 'Speech Control',
      notebookCategoryTabLabel: 'Speech',
      notebookCategoryEmoji: '🗣️',
    },
    {
      notebookCategoryId: 'confidence',
      notebookCategoryLabel: 'Speaker Confidence',
      notebookCategoryTabLabel: 'Confidence',
      notebookCategoryEmoji: '👑',
    },
  ];

export const notebookNotes: NotebookNote[] = [
  {
    notebookNoteId: 'voice-1',
    notebookNoteTitle: 'Strong Morning Voice',
    notebookNoteBody:
      'Start every morning with slow breathing and clear reading practice for at least five minutes. The Amazonka warriors believed the voice becomes stronger when trained early in the day while the mind is calm and focused. Speak clearly and avoid rushing through words.',
    notebookNoteCategoryId: 'voice',
    notebookNoteFooter: '— Voice Power',
  },
  {
    notebookNoteId: 'voice-2',
    notebookNoteTitle: 'Speak From the Chest',
    notebookNoteBody:
      'Do not force your voice only from the throat. Try speaking while breathing deeply from the chest and stomach area. This method helps your voice sound fuller, calmer, and more confident during long conversations or public speeches.',
    notebookNoteCategoryId: 'voice',
    notebookNoteFooter: '— Voice Power',
  },
  {
    notebookNoteId: 'voice-3',
    notebookNoteTitle: 'Train With Loud Reading',
    notebookNoteBody:
      'Choose a text and read it out loud with strong emotion and energy. Amazonka leaders practiced speeches near waterfalls and rivers to strengthen vocal power. Reading loudly improves pronunciation, confidence, and speaking endurance.',
    notebookNoteCategoryId: 'voice',
    notebookNoteFooter: '— Voice Power',
  },
  {
    notebookNoteId: 'voice-4',
    notebookNoteTitle: 'Control Your Breathing',
    notebookNoteBody:
      'A weak breath creates a weak voice. Before speaking, inhale slowly through the nose and exhale calmly while talking. Proper breathing helps maintain vocal stability and prevents nervous pauses during presentations or performances.',
    notebookNoteCategoryId: 'voice',
    notebookNoteFooter: '— Voice Power',
  },
  {
    notebookNoteId: 'voice-5',
    notebookNoteTitle: 'Use Powerful Pauses',
    notebookNoteBody:
      'Do not fear silence while speaking. Short pauses between important ideas help listeners focus and understand your message more clearly. Amazonka queens often paused before powerful statements to create stronger emotional impact.',
    notebookNoteCategoryId: 'voice',
    notebookNoteFooter: '— Voice Power',
  },
  {
    notebookNoteId: 'voice-6',
    notebookNoteTitle: 'Practice Vocal Energy',
    notebookNoteBody:
      'Speak with intention and emotional energy instead of sounding flat or tired. Imagine you are guiding a group of warriors through the jungle. This mindset naturally adds strength, confidence, and expression to your voice.',
    notebookNoteCategoryId: 'voice',
    notebookNoteFooter: '— Voice Power',
  },
  {
    notebookNoteId: 'speech-1',
    notebookNoteTitle: 'Slow Down Your Speech',
    notebookNoteBody:
      'Many speakers lose clarity because they speak too quickly. Practice slowing down your sentences and pronouncing every word carefully. Controlled speech sounds more professional, confident, and easier to understand.',
    notebookNoteCategoryId: 'speech',
    notebookNoteFooter: '— Speech Control',
  },
  {
    notebookNoteId: 'speech-2',
    notebookNoteTitle: 'Focus on Difficult Sounds',
    notebookNoteBody:
      'Find letters or words that feel difficult to pronounce and repeat them several times daily. Amazonka storytellers trained difficult phrases repeatedly until their speech became smooth and natural.',
    notebookNoteCategoryId: 'speech',
    notebookNoteFooter: '— Speech Control',
  },
  {
    notebookNoteId: 'speech-3',
    notebookNoteTitle: 'Master Natural Pauses',
    notebookNoteBody:
      'Pauses help organize thoughts and improve rhythm during speech. Instead of filling silence with nervous sounds, learn to stop briefly between ideas. This technique makes communication calmer and more expressive.',
    notebookNoteCategoryId: 'speech',
    notebookNoteFooter: '— Speech Control',
  },
  {
    notebookNoteId: 'speech-4',
    notebookNoteTitle: 'Improve Mouth Movement',
    notebookNoteBody:
      'Clear speech depends on active mouth and tongue movement. Before reading or speaking, practice exaggerated pronunciation for a few minutes. This warms up the speaking muscles and improves diction quality.',
    notebookNoteCategoryId: 'speech',
    notebookNoteFooter: '— Speech Control',
  },
  {
    notebookNoteId: 'speech-5',
    notebookNoteTitle: 'Read With Emotion',
    notebookNoteBody:
      'Do not read texts with the same tone from beginning to end. Change emotion, speed, and intensity depending on the meaning of the sentence. Emotional reading improves both speech control and audience engagement.',
    notebookNoteCategoryId: 'speech',
    notebookNoteFooter: '— Speech Control',
  },
  {
    notebookNoteId: 'speech-6',
    notebookNoteTitle: 'Listen to Your Voice',
    notebookNoteBody:
      'Record yourself while speaking or reading stories aloud. Listening to your own voice helps identify unclear pronunciation, weak pauses, or rushed speech patterns. Awareness is an important step toward improvement.',
    notebookNoteCategoryId: 'speech',
    notebookNoteFooter: '— Speech Control',
  },
  {
    notebookNoteId: 'confidence-1',
    notebookNoteTitle: 'Stand Like a Leader',
    notebookNoteBody:
      'Your posture changes the way your voice sounds. Keep your shoulders relaxed, stand tall, and maintain a stable position while speaking. Amazonka queens believed confident posture creates confident communication.',
    notebookNoteCategoryId: 'confidence',
    notebookNoteFooter: '— Speaker Confidence',
  },
  {
    notebookNoteId: 'confidence-2',
    notebookNoteTitle: 'Maintain Eye Contact',
    notebookNoteBody:
      'When speaking with people, avoid constantly looking down or away. Eye contact creates trust and shows confidence. Even short moments of direct attention help your words sound stronger and more convincing.',
    notebookNoteCategoryId: 'confidence',
    notebookNoteFooter: '— Speaker Confidence',
  },
  {
    notebookNoteId: 'confidence-3',
    notebookNoteTitle: 'Accept Small Mistakes',
    notebookNoteBody:
      'Every great speaker makes mistakes sometimes. Do not panic if you forget a word or pause unexpectedly. Stay calm, continue speaking, and focus on communication instead of perfection.',
    notebookNoteCategoryId: 'confidence',
    notebookNoteFooter: '— Speaker Confidence',
  },
  {
    notebookNoteId: 'confidence-4',
    notebookNoteTitle: 'Practice Every Day',
    notebookNoteBody:
      'Confidence grows through repetition and discipline. Read stories, speeches, or advice texts aloud every day, even for a short time. Regular practice trains both your voice and your emotional control.',
    notebookNoteCategoryId: 'confidence',
    notebookNoteFooter: '— Speaker Confidence',
  },
  {
    notebookNoteId: 'confidence-5',
    notebookNoteTitle: 'Control Nervous Energy',
    notebookNoteBody:
      'Before speaking, take several slow breaths and relax your shoulders. Nervousness becomes smaller when breathing stays controlled. Calm breathing helps your voice sound stable and natural.',
    notebookNoteCategoryId: 'confidence',
    notebookNoteFooter: '— Speaker Confidence',
  },
  {
    notebookNoteId: 'confidence-6',
    notebookNoteTitle: 'Speak With Purpose',
    notebookNoteBody:
      'Imagine your words carry important meaning and value. Amazonka leaders spoke with clear intention because they believed every sentence could inspire courage or wisdom. Purpose naturally adds confidence to communication.',
    notebookNoteCategoryId: 'confidence',
    notebookNoteFooter: '— Speaker Confidence',
  },
];

export const notebookNotesByTopic = (
  notebookCategoryId: NotebookTopicId,
) =>
  notebookNotes.filter(
    notebookNote =>
      notebookNote.notebookNoteCategoryId ===
      notebookCategoryId,
  );

export const notebookGetCategory = (
  notebookCategoryId: NotebookTopicId,
) =>
  notebookTopics.find(
    notebookCategory =>
      notebookCategory.notebookCategoryId ===
      notebookCategoryId,
  );

export const notebookPickNote = () => {
  const notebookIndex = Math.floor(
    Math.random() * notebookNotes.length,
  );
  return notebookNotes[notebookIndex];
};
