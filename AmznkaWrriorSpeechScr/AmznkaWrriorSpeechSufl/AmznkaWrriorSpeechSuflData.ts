export type AmznkaWrriorSpeechSuflCategoryId = 'warrior' | 'jungle' | 'queen';

export type AmznkaWrriorSpeechSuflScrollSpeed = 'slow' | 'medium' | 'fast';

export type AmznkaWrriorSpeechSuflTextSize = 'small' | 'medium' | 'large';

export type AmznkaWrriorSpeechSuflText = {
  amznkaWrriorSpeechSuflTextId: string;
  amznkaWrriorSpeechSuflTextTitle: string;
  amznkaWrriorSpeechSuflTextBody: string;
};

export type AmznkaWrriorSpeechSuflCategory = {
  amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId;
  amznkaWrriorSpeechSuflCategoryEmoji: string;
  amznkaWrriorSpeechSuflCategoryTitle: string;
  amznkaWrriorSpeechSuflCategoryDescription: string;
  amznkaWrriorSpeechSuflCategoryIconBg: string;
  amznkaWrriorSpeechSuflCategoryIconBorder: string;
  amznkaWrriorSpeechSuflCategoryBadgeColor: string;
  amznkaWrriorSpeechSuflCategoryBadgeBg: string;
  amznkaWrriorSpeechSuflCategoryBadgeBorder: string;
  amznkaWrriorSpeechSuflCategoryTexts: AmznkaWrriorSpeechSuflText[];
};

export const amznkaWrriorSpeechSuflScrollSpeedPx: Record<
  AmznkaWrriorSpeechSuflScrollSpeed,
  number
> = {
  slow: 22,
  medium: 44,
  fast: 72,
};

export const amznkaWrriorSpeechSuflTextSizeStyle: Record<
  AmznkaWrriorSpeechSuflTextSize,
  {fontSize: number; lineHeight: number}
> = {
  small: {fontSize: 16, lineHeight: 26},
  medium: {fontSize: 20, lineHeight: 32},
  large: {fontSize: 24, lineHeight: 38},
};

export const amznkaWrriorSpeechSuflCategories: AmznkaWrriorSpeechSuflCategory[] =
  [
    {
      amznkaWrriorSpeechSuflCategoryId: 'warrior',
      amznkaWrriorSpeechSuflCategoryEmoji: '⚔️',
      amznkaWrriorSpeechSuflCategoryTitle: 'Warrior Speeches',
      amznkaWrriorSpeechSuflCategoryDescription:
        'Battle speeches for voice power & confident delivery',
      amznkaWrriorSpeechSuflCategoryIconBg: 'rgba(255, 107, 53, 0.13)',
      amznkaWrriorSpeechSuflCategoryIconBorder: 'rgba(255, 107, 53, 0.27)',
      amznkaWrriorSpeechSuflCategoryBadgeColor: '#FF6B35',
      amznkaWrriorSpeechSuflCategoryBadgeBg: 'rgba(255, 107, 53, 0.08)',
      amznkaWrriorSpeechSuflCategoryBadgeBorder: 'rgba(255, 107, 53, 0.27)',
      amznkaWrriorSpeechSuflCategoryTexts: [
        {
          amznkaWrriorSpeechSuflTextId: 'warrior-1',
          amznkaWrriorSpeechSuflTextTitle: 'The Voice Before Battle',
          amznkaWrriorSpeechSuflTextBody:
            'The warriors stood in complete silence while the cold morning fog slowly moved through the jungle valley. Every shield reflected the orange light of the rising sun, and the sound of distant drums echoed between the trees. The leader of the Amazonka tribe stepped forward with confidence and raised her spear high above her head. Her eyes moved across the camp as every warrior focused on her voice. She spoke calmly, but every sentence carried power and discipline. She reminded the tribe that fear controls only those who refuse to face it directly. True strength begins inside the mind long before the battle starts. A focused voice can guide people through darkness, confusion, and danger. She explained that every command must sound clear, strong, and fearless because hesitation weakens both the speaker and the listener. The warriors repeated her final words together while the jungle wind moved around the campfire. Their united voices became louder and stronger with every sentence until the sound echoed through the entire valley.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'warrior-2',
          amznkaWrriorSpeechSuflTextTitle: 'Fire of the Jungle',
          amznkaWrriorSpeechSuflTextBody:
            'The giant fire in the center of the camp burned brightly as the Amazonka warriors prepared for the difficult journey waiting ahead of them. Sparks floated into the dark night sky while the sound of the jungle surrounded the camp from every direction. The queen slowly walked around the fire and looked carefully at every warrior standing beside it. She told them that victory does not always belong to the fastest or strongest fighter. Sometimes victory belongs to the person who remains calm while everyone else loses control. She explained that a strong and confident voice can calm fear during moments of chaos. A clear command can guide people through danger and help a team survive difficult situations. The warriors practiced speaking loudly toward the trees while maintaining control of their breathing and emotions. The queen reminded them to pause between important sentences and to pronounce every word clearly. By the end of the night, the warriors sounded stronger, calmer, and far more confident than before.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'warrior-3',
          amznkaWrriorSpeechSuflTextTitle: 'Strength of the Shield',
          amznkaWrriorSpeechSuflTextBody:
            'A young Amazonka warrior once believed that true power existed only inside weapons, armor, and physical strength. She trained every day with heavy shields and sharp spears, hoping to become the strongest fighter in the tribe. One evening, an older warrior invited her to watch the leaders speak during an important meeting near the river. The young warrior noticed that every person listened carefully when the queen began to speak. The queen did not shout or threaten anyone. Instead, her calm and controlled voice immediately captured attention and created respect. After the meeting ended, the older warrior explained that the strongest leaders first learn how to control their words before controlling a battlefield. During the next training session, the young warrior practiced reading ancient speeches out loud while standing tall and breathing slowly. At first her voice sounded nervous and uneven, but with practice it became stronger and clearer. Over time, she learned that a confident voice can protect people just as powerfully as a shield.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'warrior-4',
          amznkaWrriorSpeechSuflTextTitle: 'Storm Across the River',
          amznkaWrriorSpeechSuflTextBody:
            'Dark clouds covered the sky while heavy rain began falling across the jungle river. The Amazonka warriors stood together under the storm and waited for instructions from their commander. The situation was dangerous because the river water continued rising higher every minute. Some younger warriors became nervous after hearing thunder crash through the valley. The commander stepped onto a large stone beside the river and began speaking with a calm but powerful voice. She reminded everyone that panic spreads quickly when leaders lose confidence. She ordered the warriors to breathe slowly, stand close together, and focus carefully on every command. Her voice remained steady even as the storm grew louder around them. The warriors listened closely and repeated her instructions one by one until the entire group moved together with discipline and control. Hours later, after the storm finally passed, the younger warriors understood the importance of confident speech during moments of fear and uncertainty.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'warrior-5',
          amznkaWrriorSpeechSuflTextTitle: 'Words of the Golden Queen',
          amznkaWrriorSpeechSuflTextBody:
            'The Golden Queen of the Amazonka tribe was respected not only because of her victories in battle, but also because of the wisdom inside her speeches. Warriors from distant lands traveled across forests and rivers just to hear her speak beside the ancient temple. One evening, she gathered the tribe around a circle of burning torches and shared an important lesson about communication. She explained that words have the power to inspire courage, build trust, and unite people during difficult times. A careless voice can create fear, but a disciplined voice can bring confidence and hope. She asked every warrior to practice speaking slowly and clearly while maintaining eye contact with the people around them. The queen believed that strong communication creates stronger teams and better leaders. Before the gathering ended, every warrior stood proudly and repeated a powerful promise together. Their voices filled the night air with strength, unity, and determination.',
        },
      ],
    },
    {
      amznkaWrriorSpeechSuflCategoryId: 'jungle',
      amznkaWrriorSpeechSuflCategoryEmoji: '🌿',
      amznkaWrriorSpeechSuflCategoryTitle: 'Jungle Stories',
      amznkaWrriorSpeechSuflCategoryDescription:
        'Legends for smooth reading & emotional expression',
      amznkaWrriorSpeechSuflCategoryIconBg: 'rgba(92, 184, 92, 0.13)',
      amznkaWrriorSpeechSuflCategoryIconBorder: 'rgba(92, 184, 92, 0.27)',
      amznkaWrriorSpeechSuflCategoryBadgeColor: '#5CB85C',
      amznkaWrriorSpeechSuflCategoryBadgeBg: 'rgba(92, 184, 92, 0.08)',
      amznkaWrriorSpeechSuflCategoryBadgeBorder: 'rgba(92, 184, 92, 0.27)',
      amznkaWrriorSpeechSuflCategoryTexts: [
        {
          amznkaWrriorSpeechSuflTextId: 'jungle-1',
          amznkaWrriorSpeechSuflTextTitle: 'The Hidden River Path',
          amznkaWrriorSpeechSuflTextBody:
            'Deep inside the endless jungle, a young Amazonka named Saria traveled alone through a narrow path covered by giant green leaves and ancient trees. The morning air felt heavy after the night rain, and the sounds of birds echoed across the riverbanks. Saria carried an old map given to her by the queen before sunrise. According to the legends of the tribe, a hidden river path existed somewhere beyond the mountains, and only warriors with patience and courage could find it. As she walked deeper into the jungle, she practiced reading ancient messages out loud to keep her voice calm and focused. Every sentence echoed softly between the trees while the river flowed beside her. Hours later, she discovered strange symbols carved into a giant stone near the water. Saria carefully read every symbol aloud, improving her pronunciation and confidence with each word. By sunset, she finally found the hidden river path and returned home with a stronger voice and greater self-belief.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'jungle-2',
          amznkaWrriorSpeechSuflTextTitle: 'The Night of Whispering Trees',
          amznkaWrriorSpeechSuflTextBody:
            'The jungle became strangely quiet after sunset as the Amazonka warriors gathered around a small fire near the center of the camp. An older storyteller named Lina warned the younger warriors about the Whispering Trees that stood far beyond the northern cliffs. According to the old legends, the trees repeated the voices of travelers who entered the forest during the night. Curious and fearless, a small group of warriors decided to visit the mysterious place before midnight. As they walked through the darkness, they practiced speaking slowly and clearly to avoid sounding nervous. Suddenly, soft whispers began moving through the trees around them. At first the warriors became frightened, but Lina reminded them to stay calm and control their breathing. She explained that fear weakens the voice and clouds the mind. The group continued speaking confidently while moving deeper into the forest. When they finally returned to camp before sunrise, every warrior noticed that their speech sounded stronger, calmer, and more expressive than before.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'jungle-3',
          amznkaWrriorSpeechSuflTextTitle: 'The Eagle Above the Jungle',
          amznkaWrriorSpeechSuflTextBody:
            'Every morning before training, the Amazonka tribe watched a giant eagle circle high above the jungle valley. The elders believed the bird protected the tribe and listened carefully to the voices of the warriors below. One young warrior named Nira dreamed of becoming a powerful speaker like the queen herself. However, whenever she spoke in front of others, her voice became quiet and uncertain. One day, an elder warrior invited Nira to stand alone near the cliffs and read stories loudly toward the open sky. At first her words disappeared into the jungle wind, but she continued practicing every day without giving up. She focused on breathing slowly, speaking clearly, and pausing naturally between sentences. Weeks later, while reading another ancient story, the giant eagle suddenly appeared above the cliffs and cried loudly across the valley. The sound inspired Nira to speak with confidence and strength. From that moment forward, she no longer feared speaking in front of the tribe.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'jungle-4',
          amznkaWrriorSpeechSuflTextTitle: 'The Temple Beyond the Trees',
          amznkaWrriorSpeechSuflTextBody:
            'Far beyond the deepest part of the jungle stood an ancient stone temple forgotten by most travelers and warriors. Only the oldest Amazonka storytellers remembered the path leading toward the mysterious ruins. A young explorer named Talia decided to search for the temple after hearing stories about hidden knowledge stored inside its walls. During the long journey, she spent hours reading ancient speeches aloud while walking beside rivers and waterfalls. She believed that strong speech required daily practice and complete focus. After several difficult days, Talia finally discovered the giant temple gates covered with symbols and carvings. She slowly read the ancient writings out loud, carefully pronouncing every word while listening to her own voice echo inside the empty halls. The temple seemed alive with history and wisdom. By the time she returned home, Talia realized that the journey had not only improved her confidence but also transformed the way she spoke and expressed her thoughts.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'jungle-5',
          amznkaWrriorSpeechSuflTextTitle: 'The Voice Near the Waterfall',
          amznkaWrriorSpeechSuflTextBody:
            'A beautiful waterfall hidden deep inside the jungle became one of the most important training places for the Amazonka tribe. The warriors believed the sound of rushing water helped strengthen breathing, focus, and vocal control. Every week, groups of young warriors traveled there to practice speeches and storytelling exercises. One evening, a shy warrior named Elira struggled to speak loudly enough for the others to hear her. She became frustrated and wanted to leave the training early. The instructor calmly explained that powerful speech develops slowly through patience and repetition. Elira stood near the waterfall and began reading a long story about ancient jungle explorers. At first her voice disappeared beneath the sound of the water, but she continued speaking with determination. Gradually, her pronunciation became clearer and her breathing more controlled. By the end of the lesson, her voice rose strongly above the waterfall itself. The other warriors smiled proudly as Elira finally discovered her confidence.',
        },
      ],
    },
    {
      amznkaWrriorSpeechSuflCategoryId: 'queen',
      amznkaWrriorSpeechSuflCategoryEmoji: '👑',
      amznkaWrriorSpeechSuflCategoryTitle: "Queen's Advice",
      amznkaWrriorSpeechSuflCategoryDescription:
        'Wisdom for calm, expressive & persuasive speech',
      amznkaWrriorSpeechSuflCategoryIconBg: 'rgba(255, 153, 0, 0.13)',
      amznkaWrriorSpeechSuflCategoryIconBorder: 'rgba(255, 153, 0, 0.27)',
      amznkaWrriorSpeechSuflCategoryBadgeColor: '#FF9900',
      amznkaWrriorSpeechSuflCategoryBadgeBg: 'rgba(255, 153, 0, 0.08)',
      amznkaWrriorSpeechSuflCategoryBadgeBorder: 'rgba(255, 153, 0, 0.27)',
      amznkaWrriorSpeechSuflCategoryTexts: [
        {
          amznkaWrriorSpeechSuflTextId: 'queen-1',
          amznkaWrriorSpeechSuflTextTitle: 'Speak Like a Leader',
          amznkaWrriorSpeechSuflTextBody:
            'The Queen of the Amazonka tribe often reminded her warriors that leadership begins with the voice before it begins with action. Every morning she gathered the young warriors near the training grounds and asked them to practice speaking slowly and clearly. She explained that rushed speech creates confusion, while calm speech creates trust and confidence. A true speaker does not try to sound louder than everyone else. Instead, they learn how to control breathing, pronunciation, and emotion during every sentence. The queen advised her warriors to stand tall while speaking because posture changes both confidence and vocal strength. She also taught them to pause naturally between important ideas so listeners could fully understand every word. According to her wisdom, people remember not only what was said, but also how the speaker made them feel. Strong communication, patience, and confidence were considered just as important as physical training inside the tribe.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'queen-2',
          amznkaWrriorSpeechSuflTextTitle: 'The Power of Calm Words',
          amznkaWrriorSpeechSuflTextBody:
            'One evening, the queen noticed two warriors arguing loudly near the campfire after a difficult training session. Instead of shouting to stop the conflict, she walked calmly between them and began speaking in a controlled and peaceful voice. Almost immediately, the argument became quieter. Later that night, the queen explained to the tribe that calm speech is one of the strongest tools a leader can possess. When emotions become uncontrolled, words lose their meaning and power. She encouraged every warrior to practice speaking slowly during stressful moments and to focus carefully on pronunciation and breathing. The queen believed that confident communication should never depend on anger or fear. A calm voice can guide people through chaos, while an uncontrolled voice often creates even more problems. From that day forward, the warriors practiced controlling their emotions before speaking during difficult situations.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'queen-3',
          amznkaWrriorSpeechSuflTextTitle: 'Confidence Grows Through Practice',
          amznkaWrriorSpeechSuflTextBody:
            'A young warrior once asked the queen how great speakers become so confident in front of large crowds. The queen smiled and explained that confidence does not appear overnight like magic. It grows slowly through daily repetition, patience, and discipline. She told the warrior about her own struggles when she first began speaking before the tribe many years earlier. At that time, her voice often sounded nervous and uncertain. Instead of giving up, she practiced reading speeches aloud every morning near the river while focusing on breathing and posture. Over time, her pronunciation became clearer and her pauses sounded more natural. The queen explained that mistakes are an important part of growth because every strong speaker once struggled with fear and doubt. She encouraged the warriors to continue practicing even when progress feels slow. According to her wisdom, discipline creates confidence far more effectively than talent alone.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'queen-4',
          amznkaWrriorSpeechSuflTextTitle: 'Listen Before You Speak',
          amznkaWrriorSpeechSuflTextBody:
            'During an important meeting between several Amazonka tribes, the queen spent most of the evening listening carefully instead of speaking immediately. The younger warriors became confused because they expected her to dominate the conversation with powerful speeches. After the meeting ended, the queen explained an important lesson about communication. A wise speaker first learns how to listen carefully before trying to control a conversation. Listening helps people understand emotions, ideas, and problems more clearly. Without understanding the audience, even the strongest speech can lose its impact. The queen taught her warriors to maintain eye contact, observe reactions, and remain patient during discussions. She believed that silence can sometimes become more powerful than unnecessary words. By listening first, a speaker gains confidence, respect, and better control over communication. The younger warriors realized that true leadership depends not only on speaking well, but also on understanding others deeply.',
        },
        {
          amznkaWrriorSpeechSuflTextId: 'queen-5',
          amznkaWrriorSpeechSuflTextTitle: 'The Strength Inside Your Voice',
          amznkaWrriorSpeechSuflTextBody:
            'Before sunrise, the queen gathered the warriors near the edge of the jungle where the morning mist covered the valley below. She asked every warrior to close their eyes and speak a single sentence with confidence and clarity. Some voices sounded strong, while others trembled with uncertainty. The queen explained that every person carries hidden strength inside their voice, but fear often prevents it from fully appearing. She encouraged the warriors to stop comparing themselves to others and instead focus on improving step by step every day. According to the queen, a confident voice is built through breathing control, clear pronunciation, patience, and emotional balance. She reminded them that communication is not about perfection, but about connection and honesty. As the sun slowly rose above the jungle, the warriors repeated their sentences once again. This time their voices sounded stronger, calmer, and far more confident than before.',
        },
      ],
    },
  ];

export const amznkaWrriorSpeechSuflTotalTexts =
  amznkaWrriorSpeechSuflCategories.reduce(
    (amznkaWrriorSpeechSuflSum, amznkaWrriorSpeechSuflCategory) =>
      amznkaWrriorSpeechSuflSum +
      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryTexts.length,
    0,
  );

export const amznkaWrriorSpeechSuflGetCategory = (
  amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId,
) =>
  amznkaWrriorSpeechSuflCategories.find(
    amznkaWrriorSpeechSuflCategory =>
      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId ===
      amznkaWrriorSpeechSuflCategoryId,
  );

export const amznkaWrriorSpeechSuflGetCategoryTexts = (
  amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId,
  amznkaWrriorSpeechSuflExtraTexts: AmznkaWrriorSpeechSuflText[] = [],
) => {
  const amznkaWrriorSpeechSuflCategory = amznkaWrriorSpeechSuflGetCategory(
    amznkaWrriorSpeechSuflCategoryId,
  );
  if (!amznkaWrriorSpeechSuflCategory) {
    return amznkaWrriorSpeechSuflExtraTexts;
  }
  return [
    ...amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryTexts,
    ...amznkaWrriorSpeechSuflExtraTexts,
  ];
};

export const amznkaWrriorSpeechSuflGetText = (
  amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId,
  amznkaWrriorSpeechSuflTextId: string,
  amznkaWrriorSpeechSuflExtraTexts: AmznkaWrriorSpeechSuflText[] = [],
) => {
  return amznkaWrriorSpeechSuflGetCategoryTexts(
    amznkaWrriorSpeechSuflCategoryId,
    amznkaWrriorSpeechSuflExtraTexts,
  ).find(
    amznkaWrriorSpeechSuflText =>
      amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextId ===
      amznkaWrriorSpeechSuflTextId,
  );
};
