export type AmzznkWrriorsppeechNotebookTopicId =
  | 'voice'
  | 'speech'
  | 'confidence';

export type AmzznkWrriorsppeechNotebookNote = {
  amzznkWrriorsppeechNotebookNoteId: string;
  amzznkWrriorsppeechNotebookNoteTitle: string;
  amzznkWrriorsppeechNotebookNoteBody: string;
  amzznkWrriorsppeechNotebookNoteCategoryId: AmzznkWrriorsppeechNotebookTopicId;
  amzznkWrriorsppeechNotebookNoteFooter: string;
};

export type AmzznkWrriorsppeechNotebookTopic = {
  amzznkWrriorsppeechNotebookCategoryId: AmzznkWrriorsppeechNotebookTopicId;
  amzznkWrriorsppeechNotebookCategoryLabel: string;
  amzznkWrriorsppeechNotebookCategoryTabLabel: string;
  amzznkWrriorsppeechNotebookCategoryEmoji: string;
};

export const amzznkWrriorsppeechNotebookTopics: AmzznkWrriorsppeechNotebookTopic[] =
  [
    {
      amzznkWrriorsppeechNotebookCategoryId: 'voice',
      amzznkWrriorsppeechNotebookCategoryLabel: 'Voice Power',
      amzznkWrriorsppeechNotebookCategoryTabLabel: 'Voice',
      amzznkWrriorsppeechNotebookCategoryEmoji: '🎙️',
    },
    {
      amzznkWrriorsppeechNotebookCategoryId: 'speech',
      amzznkWrriorsppeechNotebookCategoryLabel: 'Speech Control',
      amzznkWrriorsppeechNotebookCategoryTabLabel: 'Speech',
      amzznkWrriorsppeechNotebookCategoryEmoji: '🗣️',
    },
    {
      amzznkWrriorsppeechNotebookCategoryId: 'confidence',
      amzznkWrriorsppeechNotebookCategoryLabel: 'Speaker Confidence',
      amzznkWrriorsppeechNotebookCategoryTabLabel: 'Confidence',
      amzznkWrriorsppeechNotebookCategoryEmoji: '👑',
    },
  ];

export const amzznkWrriorsppeechNotebookNotes: AmzznkWrriorsppeechNotebookNote[] = [
  {
    amzznkWrriorsppeechNotebookNoteId: 'voice-1',
    amzznkWrriorsppeechNotebookNoteTitle: 'Strong Morning Voice',
    amzznkWrriorsppeechNotebookNoteBody:
      'Start every morning with slow breathing and clear reading practice for at least five minutes. The Amazo warriors believed the voice becomes stronger when trained early in the day while the mind is calm and focused. Speak clearly and avoid rushing through words.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'voice',
    amzznkWrriorsppeechNotebookNoteFooter: '— Voice Power',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'voice-2',
    amzznkWrriorsppeechNotebookNoteTitle: 'Speak From the Chest',
    amzznkWrriorsppeechNotebookNoteBody:
      'Do not force your voice only from the throat. Try speaking while breathing deeply from the chest and stomach area. This method helps your voice sound fuller, calmer, and more confident during long conversations or public speeches.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'voice',
    amzznkWrriorsppeechNotebookNoteFooter: '— Voice Power',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'voice-3',
    amzznkWrriorsppeechNotebookNoteTitle: 'Train With Loud Reading',
    amzznkWrriorsppeechNotebookNoteBody:
      'Choose a text and read it out loud with strong emotion and energy. Amazo leaders practiced speeches near waterfalls and rivers to strengthen vocal power. Reading loudly improves pronunciation, confidence, and speaking endurance.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'voice',
    amzznkWrriorsppeechNotebookNoteFooter: '— Voice Power',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'voice-4',
    amzznkWrriorsppeechNotebookNoteTitle: 'Control Your Breathing',
    amzznkWrriorsppeechNotebookNoteBody:
      'A weak breath creates a weak voice. Before speaking, inhale slowly through the nose and exhale calmly while talking. Proper breathing helps maintain vocal stability and prevents nervous pauses during presentations or performances.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'voice',
    amzznkWrriorsppeechNotebookNoteFooter: '— Voice Power',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'voice-5',
    amzznkWrriorsppeechNotebookNoteTitle: 'Use Powerful Pauses',
    amzznkWrriorsppeechNotebookNoteBody:
      'Do not fear silence while speaking. Short pauses between important ideas help listeners focus and understand your message more clearly. Amazo queens often paused before powerful statements to create stronger emotional impact.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'voice',
    amzznkWrriorsppeechNotebookNoteFooter: '— Voice Power',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'voice-6',
    amzznkWrriorsppeechNotebookNoteTitle: 'Practice Vocal Energy',
    amzznkWrriorsppeechNotebookNoteBody:
      'Speak with intention and emotional energy instead of sounding flat or tired. Imagine you are guiding a group of warriors through the jungle. This mindset naturally adds strength, confidence, and expression to your voice.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'voice',
    amzznkWrriorsppeechNotebookNoteFooter: '— Voice Power',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'speech-1',
    amzznkWrriorsppeechNotebookNoteTitle: 'Slow Down Your Speech',
    amzznkWrriorsppeechNotebookNoteBody:
      'Many speakers lose clarity because they speak too quickly. Practice slowing down your sentences and pronouncing every word carefully. Controlled speech sounds more professional, confident, and easier to understand.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'speech',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speech Control',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'speech-2',
    amzznkWrriorsppeechNotebookNoteTitle: 'Focus on Difficult Sounds',
    amzznkWrriorsppeechNotebookNoteBody:
      'Find letters or words that feel difficult to pronounce and repeat them several times daily. Amazo storytellers trained difficult phrases repeatedly until their speech became smooth and natural.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'speech',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speech Control',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'speech-3',
    amzznkWrriorsppeechNotebookNoteTitle: 'Master Natural Pauses',
    amzznkWrriorsppeechNotebookNoteBody:
      'Pauses help organize thoughts and improve rhythm during speech. Instead of filling silence with nervous sounds, learn to stop briefly between ideas. This technique makes communication calmer and more expressive.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'speech',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speech Control',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'speech-4',
    amzznkWrriorsppeechNotebookNoteTitle: 'Improve Mouth Movement',
    amzznkWrriorsppeechNotebookNoteBody:
      'Clear speech depends on active mouth and tongue movement. Before reading or speaking, practice exaggerated pronunciation for a few minutes. This warms up the speaking muscles and improves diction quality.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'speech',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speech Control',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'speech-5',
    amzznkWrriorsppeechNotebookNoteTitle: 'Read With Emotion',
    amzznkWrriorsppeechNotebookNoteBody:
      'Do not read texts with the same tone from beginning to end. Change emotion, speed, and intensity depending on the meaning of the sentence. Emotional reading improves both speech control and audience engagement.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'speech',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speech Control',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'speech-6',
    amzznkWrriorsppeechNotebookNoteTitle: 'Listen to Your Voice',
    amzznkWrriorsppeechNotebookNoteBody:
      'Record yourself while speaking or reading stories aloud. Listening to your own voice helps identify unclear pronunciation, weak pauses, or rushed speech patterns. Awareness is an important step toward improvement.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'speech',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speech Control',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'confidence-1',
    amzznkWrriorsppeechNotebookNoteTitle: 'Stand Like a Leader',
    amzznkWrriorsppeechNotebookNoteBody:
      'Your posture changes the way your voice sounds. Keep your shoulders relaxed, stand tall, and maintain a stable position while speaking. Amazo queens believed confident posture creates confident communication.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'confidence',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speaker Confidence',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'confidence-2',
    amzznkWrriorsppeechNotebookNoteTitle: 'Maintain Eye Contact',
    amzznkWrriorsppeechNotebookNoteBody:
      'When speaking with people, avoid constantly looking down or away. Eye contact creates trust and shows confidence. Even short moments of direct attention help your words sound stronger and more convincing.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'confidence',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speaker Confidence',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'confidence-3',
    amzznkWrriorsppeechNotebookNoteTitle: 'Accept Small Mistakes',
    amzznkWrriorsppeechNotebookNoteBody:
      'Every great speaker makes mistakes sometimes. Do not panic if you forget a word or pause unexpectedly. Stay calm, continue speaking, and focus on communication instead of perfection.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'confidence',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speaker Confidence',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'confidence-4',
    amzznkWrriorsppeechNotebookNoteTitle: 'Practice Every Day',
    amzznkWrriorsppeechNotebookNoteBody:
      'Confidence grows through repetition and discipline. Read stories, speeches, or advice texts aloud every day, even for a short time. Regular practice trains both your voice and your emotional control.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'confidence',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speaker Confidence',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'confidence-5',
    amzznkWrriorsppeechNotebookNoteTitle: 'Control Nervous Energy',
    amzznkWrriorsppeechNotebookNoteBody:
      'Before speaking, take several slow breaths and relax your shoulders. Nervousness becomes smaller when breathing stays controlled. Calm breathing helps your voice sound stable and natural.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'confidence',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speaker Confidence',
  },
  {
    amzznkWrriorsppeechNotebookNoteId: 'confidence-6',
    amzznkWrriorsppeechNotebookNoteTitle: 'Speak With Purpose',
    amzznkWrriorsppeechNotebookNoteBody:
      'Imagine your words carry important meaning and value. Amazo leaders spoke with clear intention because they believed every sentence could inspire courage or wisdom. Purpose naturally adds confidence to communication.',
    amzznkWrriorsppeechNotebookNoteCategoryId: 'confidence',
    amzznkWrriorsppeechNotebookNoteFooter: '— Speaker Confidence',
  },
];

export const amzznkWrriorsppeechNotebookNotesByTopic = (
  amzznkWrriorsppeechNotebookCategoryId: AmzznkWrriorsppeechNotebookTopicId,
) =>
  amzznkWrriorsppeechNotebookNotes.filter(
    amzznkWrriorsppeechNotebookNote =>
      amzznkWrriorsppeechNotebookNote.amzznkWrriorsppeechNotebookNoteCategoryId ===
      amzznkWrriorsppeechNotebookCategoryId,
  );

export const amzznkWrriorsppeechNotebookGetCategory = (
  amzznkWrriorsppeechNotebookCategoryId: AmzznkWrriorsppeechNotebookTopicId,
) =>
  amzznkWrriorsppeechNotebookTopics.find(
    notebookCategory =>
      notebookCategory.amzznkWrriorsppeechNotebookCategoryId ===
      amzznkWrriorsppeechNotebookCategoryId,
  );

export const amzznkWrriorsppeechNotebookPickNote = () => {
  const amzznkWrriorsppeechNotebookIndex = Math.floor(
    Math.random() * amzznkWrriorsppeechNotebookNotes.length,
  );
  return amzznkWrriorsppeechNotebookNotes[amzznkWrriorsppeechNotebookIndex];
};
