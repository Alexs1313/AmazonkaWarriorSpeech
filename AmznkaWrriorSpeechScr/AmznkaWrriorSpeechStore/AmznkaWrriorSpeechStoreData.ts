import type {
  AmznkaWrriorSpeechSuflCategoryId,
  AmznkaWrriorSpeechSuflText,
} from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflData';
import type {AmznkaWrriorSpeechWrkshText} from '../AmznkaWrriorSpeechWrksh/AmznkaWrriorSpeechWrkshData';

export type AmznkaWrriorSpeechStoreCategoryId =
  AmznkaWrriorSpeechSuflCategoryId;

export type AmznkaWrriorSpeechStoreItem = {
  amznkaWrriorSpeechStoreItemId: string;
  amznkaWrriorSpeechStoreItemTitle: string;
  amznkaWrriorSpeechStoreItemPreview: string;
  amznkaWrriorSpeechStoreItemBody: string;
  amznkaWrriorSpeechStoreItemCategoryId: AmznkaWrriorSpeechStoreCategoryId;
  amznkaWrriorSpeechStoreItemPrice: number;
  amznkaWrriorSpeechStoreItemEmoji: string;
};

export const amznkaWrriorSpeechStoreItems: AmznkaWrriorSpeechStoreItem[] = [
  {
    amznkaWrriorSpeechStoreItemId: 'store-warrior-oath',
    amznkaWrriorSpeechStoreItemTitle: 'The Amazon Oath',
    amznkaWrriorSpeechStoreItemPreview:
      'I swear by the fire that forged me and the river that remembers my name: I will not be silent when truth deman...',
    amznkaWrriorSpeechStoreItemBody:
      'I swear by the fire that forged me and the river that remembers my name: I will not be silent when truth demands a voice. I will not flee when fear presses against my chest, for courage is practiced long before the battle begins. Every word I speak shall carry the weight of my ancestors and the clarity of my purpose. I train my breath as warriors train their shields — steady, ready, unbreakable. When the crowd listens, I will not rush; when the moment comes, I will stand tall and speak as one who has already won the war within. This is my oath to the Amazon, to my tribe, and to the voice I am still becoming.',
    amznkaWrriorSpeechStoreItemCategoryId: 'warrior',
    amznkaWrriorSpeechStoreItemPrice: 6,
    amznkaWrriorSpeechStoreItemEmoji: '⚔️',
  },
  {
    amznkaWrriorSpeechStoreItemId: 'store-warrior-iron',
    amznkaWrriorSpeechStoreItemTitle: 'The Iron Voice',
    amznkaWrriorSpeechStoreItemPreview:
      'There are those who speak and there are those who are heard. The difference between them is not talent — it is...',
    amznkaWrriorSpeechStoreItemBody:
      'There are those who speak and there are those who are heard. The difference between them is not talent — it is discipline. The iron voice is forged in solitude: reading aloud at dawn, pausing where others rush, breathing where others gasp. It does not shout to prove strength; it lowers itself to command attention. Warriors who master this voice can calm a camp with a single sentence and ignite it with the next. Practice until your words feel heavy with meaning and light with control. Let silence be your ally and precision your weapon. When you step before the tribe, they will not ask who you are — they will already be listening.',
    amznkaWrriorSpeechStoreItemCategoryId: 'warrior',
    amznkaWrriorSpeechStoreItemPrice: 9,
    amznkaWrriorSpeechStoreItemEmoji: '⚔️',
  },
  {
    amznkaWrriorSpeechStoreItemId: 'store-jungle-whispers',
    amznkaWrriorSpeechStoreItemTitle: 'Whispers of the Canopy',
    amznkaWrriorSpeechStoreItemPreview:
      'Beneath the green roof of the jungle, every leaf learns to listen before it learns to fall...',
    amznkaWrriorSpeechStoreItemBody:
      'Beneath the green roof of the jungle, every leaf learns to listen before it learns to fall. The canopy teaches speakers to soften the edges of their words without losing their edge. Here, volume is not power — placement is. Speak as the mist moves: low, patient, inevitable. Let your pauses echo like distant drums between the trees. When you address your tribe, imagine your voice traveling along vines — touching one heart, then another, until the whole forest understands. The jungle does not reward those who roar the loudest; it rewards those who are understood the first time.',
    amznkaWrriorSpeechStoreItemCategoryId: 'jungle',
    amznkaWrriorSpeechStoreItemPrice: 6,
    amznkaWrriorSpeechStoreItemEmoji: '🌿',
  },
  {
    amznkaWrriorSpeechStoreItemId: 'store-jungle-river',
    amznkaWrriorSpeechStoreItemTitle: 'River of Echoes',
    amznkaWrriorSpeechStoreItemPreview:
      'The river carries sound farther than anger ever could. Stand beside moving water and practice until your voice...',
    amznkaWrriorSpeechStoreItemBody:
      'The river carries sound farther than anger ever could. Stand beside moving water and practice until your voice flows with it — never fighting the current of your breath. Echoes return what you send; send clarity, receive trust. Amazonka speakers who train by the river learn that repetition is not weakness but rhythm. Each phrase should arrive like a wave: built in silence, delivered with purpose, gone before it overwhelms. When night falls and the camp grows quiet, let your final words be the ones the river remembers. Tomorrow, the tribe will repeat them back to you.',
    amznkaWrriorSpeechStoreItemCategoryId: 'jungle',
    amznkaWrriorSpeechStoreItemPrice: 9,
    amznkaWrriorSpeechStoreItemEmoji: '🌿',
  },
  {
    amznkaWrriorSpeechStoreItemId: 'store-queen-decree',
    amznkaWrriorSpeechStoreItemTitle: "The Queen's Decree",
    amznkaWrriorSpeechStoreItemPreview:
      'A queen does not raise her voice to raise her people. She speaks once, clearly, and the tribe moves as one...',
    amznkaWrriorSpeechStoreItemBody:
      'A queen does not raise her voice to raise her people. She speaks once, clearly, and the tribe moves as one. Authority is not volume — it is certainty held calmly in the chest. Before every decree, breathe as if the whole kingdom depended on that breath, because in that moment it does. Choose words that can be carried by messengers and remembered by children. Let compassion sit behind command so that obedience feels like belonging. When you finish speaking, leave space for the tribe to feel the weight of what was said. A true queen is heard not because she shouts, but because she is never unclear.',
    amznkaWrriorSpeechStoreItemCategoryId: 'queen',
    amznkaWrriorSpeechStoreItemPrice: 6,
    amznkaWrriorSpeechStoreItemEmoji: '👑',
  },
  {
    amznkaWrriorSpeechStoreItemId: 'store-queen-crown',
    amznkaWrriorSpeechStoreItemTitle: 'Crown of Calm',
    amznkaWrriorSpeechStoreItemPreview:
      'Panic is contagious; calm is contagious too. The crown of calm rests on a speaker who controls pace before...',
    amznkaWrriorSpeechStoreItemBody:
      'Panic is contagious; calm is contagious too. The crown of calm rests on a speaker who controls pace before controlling people. When chaos rises, slow your first sentence — the tribe will mirror you. Name what is true, then name what is possible; hope without honesty is noise. Practice delivering difficult news as if you were placing a crown on someone’s head: deliberate, respectful, firm. Your hands may tremble in private, but your voice must be steady in public. Leaders who master calm do not erase fear — they give fear a direction. Wear that crown every time you speak.',
    amznkaWrriorSpeechStoreItemCategoryId: 'queen',
    amznkaWrriorSpeechStoreItemPrice: 9,
    amznkaWrriorSpeechStoreItemEmoji: '👑',
  },
];

export const amznkaWrriorSpeechStoreTotalCount =
  amznkaWrriorSpeechStoreItems.length;

export const amznkaWrriorSpeechStoreCategories: {
  amznkaWrriorSpeechStoreCategoryId: AmznkaWrriorSpeechStoreCategoryId;
  amznkaWrriorSpeechStoreCategoryTabLabel: string;
  amznkaWrriorSpeechStoreCategoryEmoji: string;
}[] = [
  {
    amznkaWrriorSpeechStoreCategoryId: 'warrior',
    amznkaWrriorSpeechStoreCategoryTabLabel: 'Warrior',
    amznkaWrriorSpeechStoreCategoryEmoji: '⚔️',
  },
  {
    amznkaWrriorSpeechStoreCategoryId: 'jungle',
    amznkaWrriorSpeechStoreCategoryTabLabel: 'Jungle',
    amznkaWrriorSpeechStoreCategoryEmoji: '🌿',
  },
  {
    amznkaWrriorSpeechStoreCategoryId: 'queen',
    amznkaWrriorSpeechStoreCategoryTabLabel: "Queen's",
    amznkaWrriorSpeechStoreCategoryEmoji: '👑',
  },
];

export const amznkaWrriorSpeechStoreGetItemsForCategory = (
  amznkaWrriorSpeechStoreCategoryId: AmznkaWrriorSpeechStoreCategoryId,
) =>
  amznkaWrriorSpeechStoreItems.filter(
    amznkaWrriorSpeechStoreItem =>
      amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemCategoryId ===
      amznkaWrriorSpeechStoreCategoryId,
  );

export const amznkaWrriorSpeechStoreGetItem = (
  amznkaWrriorSpeechStoreItemId: string,
) =>
  amznkaWrriorSpeechStoreItems.find(
    amznkaWrriorSpeechStoreItem =>
      amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId ===
      amznkaWrriorSpeechStoreItemId,
  );

export const amznkaWrriorSpeechStoreCountOwnedInCategory = (
  amznkaWrriorSpeechStoreUnlockedIds: string[],
  amznkaWrriorSpeechStoreCategoryId: AmznkaWrriorSpeechStoreCategoryId,
) =>
  amznkaWrriorSpeechStoreGetItemsForCategory(
    amznkaWrriorSpeechStoreCategoryId,
  ).filter(amznkaWrriorSpeechStoreItem =>
    amznkaWrriorSpeechStoreUnlockedIds.includes(
      amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
    ),
  ).length;

export const amznkaWrriorSpeechStoreToWrkshText = (
  amznkaWrriorSpeechStoreItem: AmznkaWrriorSpeechStoreItem,
): AmznkaWrriorSpeechWrkshText => ({
  amznkaWrriorSpeechWrkshTextId:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
  amznkaWrriorSpeechWrkshTextTitle:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemTitle,
  amznkaWrriorSpeechWrkshTextBody:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemBody,
  amznkaWrriorSpeechWrkshTextCategoryId:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemCategoryId,
  amznkaWrriorSpeechWrkshTextIsUser: false,
});

export const amznkaWrriorSpeechStoreToSuflText = (
  amznkaWrriorSpeechStoreItem: AmznkaWrriorSpeechStoreItem,
): AmznkaWrriorSpeechSuflText => ({
  amznkaWrriorSpeechSuflTextId:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
  amznkaWrriorSpeechSuflTextTitle:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemTitle,
  amznkaWrriorSpeechSuflTextBody:
    amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemBody,
});

export const amznkaWrriorSpeechStoreGetUnlockedWrkshTexts = (
  amznkaWrriorSpeechStoreUnlockedIds: string[],
): AmznkaWrriorSpeechWrkshText[] =>
  amznkaWrriorSpeechStoreItems
    .filter(amznkaWrriorSpeechStoreItem =>
      amznkaWrriorSpeechStoreUnlockedIds.includes(
        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
      ),
    )
    .map(amznkaWrriorSpeechStoreToWrkshText);

export const amznkaWrriorSpeechStoreGetUnlockedSuflTextsForCategory = (
  amznkaWrriorSpeechStoreUnlockedIds: string[],
  amznkaWrriorSpeechStoreCategoryId: AmznkaWrriorSpeechStoreCategoryId,
): AmznkaWrriorSpeechSuflText[] =>
  amznkaWrriorSpeechStoreGetItemsForCategory(amznkaWrriorSpeechStoreCategoryId)
    .filter(amznkaWrriorSpeechStoreItem =>
      amznkaWrriorSpeechStoreUnlockedIds.includes(
        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
      ),
    )
    .map(amznkaWrriorSpeechStoreToSuflText);
