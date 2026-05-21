export type AmznkaWrriorSpeechTpsCategoryId =
  | 'voice'
  | 'speech'
  | 'confidence';

export type AmznkaWrriorSpeechTpsTip = {
  amznkaWrriorSpeechTpsTipId: string;
  amznkaWrriorSpeechTpsTipTitle: string;
  amznkaWrriorSpeechTpsTipBody: string;
  amznkaWrriorSpeechTpsTipCategoryId: AmznkaWrriorSpeechTpsCategoryId;
  amznkaWrriorSpeechTpsTipFooter: string;
};

export type AmznkaWrriorSpeechTpsCategory = {
  amznkaWrriorSpeechTpsCategoryId: AmznkaWrriorSpeechTpsCategoryId;
  amznkaWrriorSpeechTpsCategoryLabel: string;
  amznkaWrriorSpeechTpsCategoryTabLabel: string;
  amznkaWrriorSpeechTpsCategoryEmoji: string;
};

export const amznkaWrriorSpeechTpsCategories: AmznkaWrriorSpeechTpsCategory[] =
  [
    {
      amznkaWrriorSpeechTpsCategoryId: 'voice',
      amznkaWrriorSpeechTpsCategoryLabel: 'Voice Power',
      amznkaWrriorSpeechTpsCategoryTabLabel: 'Voice',
      amznkaWrriorSpeechTpsCategoryEmoji: '🎙️',
    },
    {
      amznkaWrriorSpeechTpsCategoryId: 'speech',
      amznkaWrriorSpeechTpsCategoryLabel: 'Speech Control',
      amznkaWrriorSpeechTpsCategoryTabLabel: 'Speech',
      amznkaWrriorSpeechTpsCategoryEmoji: '🗣️',
    },
    {
      amznkaWrriorSpeechTpsCategoryId: 'confidence',
      amznkaWrriorSpeechTpsCategoryLabel: 'Speaker Confidence',
      amznkaWrriorSpeechTpsCategoryTabLabel: 'Confidence',
      amznkaWrriorSpeechTpsCategoryEmoji: '👑',
    },
  ];

export const amznkaWrriorSpeechTpsTips: AmznkaWrriorSpeechTpsTip[] = [
  {
    amznkaWrriorSpeechTpsTipId: 'voice-1',
    amznkaWrriorSpeechTpsTipTitle: 'Strong Morning Voice',
    amznkaWrriorSpeechTpsTipBody:
      'Start every morning with slow breathing and clear reading practice for at least five minutes. The Amazonka warriors believed the voice becomes stronger when trained early in the day while the mind is calm and focused. Speak clearly and avoid rushing through words.',
    amznkaWrriorSpeechTpsTipCategoryId: 'voice',
    amznkaWrriorSpeechTpsTipFooter: '— Voice Power',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'voice-2',
    amznkaWrriorSpeechTpsTipTitle: 'Speak From the Chest',
    amznkaWrriorSpeechTpsTipBody:
      'Do not force your voice only from the throat. Try speaking while breathing deeply from the chest and stomach area. This method helps your voice sound fuller, calmer, and more confident during long conversations or public speeches.',
    amznkaWrriorSpeechTpsTipCategoryId: 'voice',
    amznkaWrriorSpeechTpsTipFooter: '— Voice Power',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'voice-3',
    amznkaWrriorSpeechTpsTipTitle: 'Train With Loud Reading',
    amznkaWrriorSpeechTpsTipBody:
      'Choose a text and read it out loud with strong emotion and energy. Amazonka leaders practiced speeches near waterfalls and rivers to strengthen vocal power. Reading loudly improves pronunciation, confidence, and speaking endurance.',
    amznkaWrriorSpeechTpsTipCategoryId: 'voice',
    amznkaWrriorSpeechTpsTipFooter: '— Voice Power',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'voice-4',
    amznkaWrriorSpeechTpsTipTitle: 'Control Your Breathing',
    amznkaWrriorSpeechTpsTipBody:
      'A weak breath creates a weak voice. Before speaking, inhale slowly through the nose and exhale calmly while talking. Proper breathing helps maintain vocal stability and prevents nervous pauses during presentations or performances.',
    amznkaWrriorSpeechTpsTipCategoryId: 'voice',
    amznkaWrriorSpeechTpsTipFooter: '— Voice Power',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'voice-5',
    amznkaWrriorSpeechTpsTipTitle: 'Use Powerful Pauses',
    amznkaWrriorSpeechTpsTipBody:
      'Do not fear silence while speaking. Short pauses between important ideas help listeners focus and understand your message more clearly. Amazonka queens often paused before powerful statements to create stronger emotional impact.',
    amznkaWrriorSpeechTpsTipCategoryId: 'voice',
    amznkaWrriorSpeechTpsTipFooter: '— Voice Power',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'voice-6',
    amznkaWrriorSpeechTpsTipTitle: 'Practice Vocal Energy',
    amznkaWrriorSpeechTpsTipBody:
      'Speak with intention and emotional energy instead of sounding flat or tired. Imagine you are guiding a group of warriors through the jungle. This mindset naturally adds strength, confidence, and expression to your voice.',
    amznkaWrriorSpeechTpsTipCategoryId: 'voice',
    amznkaWrriorSpeechTpsTipFooter: '— Voice Power',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'speech-1',
    amznkaWrriorSpeechTpsTipTitle: 'Slow Down Your Speech',
    amznkaWrriorSpeechTpsTipBody:
      'Many speakers lose clarity because they speak too quickly. Practice slowing down your sentences and pronouncing every word carefully. Controlled speech sounds more professional, confident, and easier to understand.',
    amznkaWrriorSpeechTpsTipCategoryId: 'speech',
    amznkaWrriorSpeechTpsTipFooter: '— Speech Control',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'speech-2',
    amznkaWrriorSpeechTpsTipTitle: 'Focus on Difficult Sounds',
    amznkaWrriorSpeechTpsTipBody:
      'Find letters or words that feel difficult to pronounce and repeat them several times daily. Amazonka storytellers trained difficult phrases repeatedly until their speech became smooth and natural.',
    amznkaWrriorSpeechTpsTipCategoryId: 'speech',
    amznkaWrriorSpeechTpsTipFooter: '— Speech Control',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'speech-3',
    amznkaWrriorSpeechTpsTipTitle: 'Master Natural Pauses',
    amznkaWrriorSpeechTpsTipBody:
      'Pauses help organize thoughts and improve rhythm during speech. Instead of filling silence with nervous sounds, learn to stop briefly between ideas. This technique makes communication calmer and more expressive.',
    amznkaWrriorSpeechTpsTipCategoryId: 'speech',
    amznkaWrriorSpeechTpsTipFooter: '— Speech Control',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'speech-4',
    amznkaWrriorSpeechTpsTipTitle: 'Improve Mouth Movement',
    amznkaWrriorSpeechTpsTipBody:
      'Clear speech depends on active mouth and tongue movement. Before reading or speaking, practice exaggerated pronunciation for a few minutes. This warms up the speaking muscles and improves diction quality.',
    amznkaWrriorSpeechTpsTipCategoryId: 'speech',
    amznkaWrriorSpeechTpsTipFooter: '— Speech Control',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'speech-5',
    amznkaWrriorSpeechTpsTipTitle: 'Read With Emotion',
    amznkaWrriorSpeechTpsTipBody:
      'Do not read texts with the same tone from beginning to end. Change emotion, speed, and intensity depending on the meaning of the sentence. Emotional reading improves both speech control and audience engagement.',
    amznkaWrriorSpeechTpsTipCategoryId: 'speech',
    amznkaWrriorSpeechTpsTipFooter: '— Speech Control',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'speech-6',
    amznkaWrriorSpeechTpsTipTitle: 'Listen to Your Voice',
    amznkaWrriorSpeechTpsTipBody:
      'Record yourself while speaking or reading stories aloud. Listening to your own voice helps identify unclear pronunciation, weak pauses, or rushed speech patterns. Awareness is an important step toward improvement.',
    amznkaWrriorSpeechTpsTipCategoryId: 'speech',
    amznkaWrriorSpeechTpsTipFooter: '— Speech Control',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'confidence-1',
    amznkaWrriorSpeechTpsTipTitle: 'Stand Like a Leader',
    amznkaWrriorSpeechTpsTipBody:
      'Your posture changes the way your voice sounds. Keep your shoulders relaxed, stand tall, and maintain a stable position while speaking. Amazonka queens believed confident posture creates confident communication.',
    amznkaWrriorSpeechTpsTipCategoryId: 'confidence',
    amznkaWrriorSpeechTpsTipFooter: '— Speaker Confidence',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'confidence-2',
    amznkaWrriorSpeechTpsTipTitle: 'Maintain Eye Contact',
    amznkaWrriorSpeechTpsTipBody:
      'When speaking with people, avoid constantly looking down or away. Eye contact creates trust and shows confidence. Even short moments of direct attention help your words sound stronger and more convincing.',
    amznkaWrriorSpeechTpsTipCategoryId: 'confidence',
    amznkaWrriorSpeechTpsTipFooter: '— Speaker Confidence',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'confidence-3',
    amznkaWrriorSpeechTpsTipTitle: 'Accept Small Mistakes',
    amznkaWrriorSpeechTpsTipBody:
      'Every great speaker makes mistakes sometimes. Do not panic if you forget a word or pause unexpectedly. Stay calm, continue speaking, and focus on communication instead of perfection.',
    amznkaWrriorSpeechTpsTipCategoryId: 'confidence',
    amznkaWrriorSpeechTpsTipFooter: '— Speaker Confidence',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'confidence-4',
    amznkaWrriorSpeechTpsTipTitle: 'Practice Every Day',
    amznkaWrriorSpeechTpsTipBody:
      'Confidence grows through repetition and discipline. Read stories, speeches, or advice texts aloud every day, even for a short time. Regular practice trains both your voice and your emotional control.',
    amznkaWrriorSpeechTpsTipCategoryId: 'confidence',
    amznkaWrriorSpeechTpsTipFooter: '— Speaker Confidence',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'confidence-5',
    amznkaWrriorSpeechTpsTipTitle: 'Control Nervous Energy',
    amznkaWrriorSpeechTpsTipBody:
      'Before speaking, take several slow breaths and relax your shoulders. Nervousness becomes smaller when breathing stays controlled. Calm breathing helps your voice sound stable and natural.',
    amznkaWrriorSpeechTpsTipCategoryId: 'confidence',
    amznkaWrriorSpeechTpsTipFooter: '— Speaker Confidence',
  },
  {
    amznkaWrriorSpeechTpsTipId: 'confidence-6',
    amznkaWrriorSpeechTpsTipTitle: 'Speak With Purpose',
    amznkaWrriorSpeechTpsTipBody:
      'Imagine your words carry important meaning and value. Amazonka leaders spoke with clear intention because they believed every sentence could inspire courage or wisdom. Purpose naturally adds confidence to communication.',
    amznkaWrriorSpeechTpsTipCategoryId: 'confidence',
    amznkaWrriorSpeechTpsTipFooter: '— Speaker Confidence',
  },
];

export const amznkaWrriorSpeechTpsGetTipsByCategory = (
  amznkaWrriorSpeechTpsCategoryId: AmznkaWrriorSpeechTpsCategoryId,
) =>
  amznkaWrriorSpeechTpsTips.filter(
    amznkaWrriorSpeechTpsTip =>
      amznkaWrriorSpeechTpsTip.amznkaWrriorSpeechTpsTipCategoryId ===
      amznkaWrriorSpeechTpsCategoryId,
  );

export const amznkaWrriorSpeechTpsGetCategory = (
  amznkaWrriorSpeechTpsCategoryId: AmznkaWrriorSpeechTpsCategoryId,
) =>
  amznkaWrriorSpeechTpsCategories.find(
    amznkaWrriorSpeechTpsCategory =>
      amznkaWrriorSpeechTpsCategory.amznkaWrriorSpeechTpsCategoryId ===
      amznkaWrriorSpeechTpsCategoryId,
  );

export const amznkaWrriorSpeechTpsGetRandomTip = () => {
  const amznkaWrriorSpeechTpsIndex = Math.floor(
    Math.random() * amznkaWrriorSpeechTpsTips.length,
  );
  return amznkaWrriorSpeechTpsTips[amznkaWrriorSpeechTpsIndex];
};
