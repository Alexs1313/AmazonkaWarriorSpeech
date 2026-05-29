import type {
  AmzznkWrriorsppeechFluxLaneId,
  AmzznkWrriorsppeechFluxPassage,
} from './AmzznkWrriorsppeechfluxCatalog';
import type {AmzznkWrriorsppeechStudioPassage} from './AmzznkWrriorsppeechstudioCatalog';

export type AmzznkWrriorsppeechVaultRealmId =
  AmzznkWrriorsppeechFluxLaneId;

export type AmzznkWrriorsppeechVaultPiece = {
  amzznkWrriorsppeechVaultPieceId: string;
  amzznkWrriorsppeechVaultPieceTitle: string;
  amzznkWrriorsppeechVaultPiecePreview: string;
  amzznkWrriorsppeechVaultPieceBody: string;
  amzznkWrriorsppeechVaultPieceCategoryId: AmzznkWrriorsppeechVaultRealmId;
  amzznkWrriorsppeechVaultPiecePrice: number;
  amzznkWrriorsppeechVaultPieceEmoji: string;
};

export const amzznkWrriorsppeechVaultPieces: AmzznkWrriorsppeechVaultPiece[] = [
  {
    amzznkWrriorsppeechVaultPieceId: 'vault-warrior-oath',
    amzznkWrriorsppeechVaultPieceTitle: 'The Amazo Oath',
    amzznkWrriorsppeechVaultPiecePreview:
      'I swear by the fire that forged me and the river that remembers my name: I will not be silent when truth deman...',
    amzznkWrriorsppeechVaultPieceBody:
      'I swear by the fire that forged me and the river that remembers my name: I will not be silent when truth demands a voice. I will not flee when fear presses against my chest, for courage is practiced long before the battle begins. Every word I speak shall carry the weight of my ancestors and the clarity of my purpose. I train my breath as warriors train their shields — steady, ready, unbreakable. When the crowd listens, I will not rush; when the moment comes, I will stand tall and speak as one who has already won the war within. This is my oath to the Amazo, to my tribe, and to the voice I am still becoming.',
    amzznkWrriorsppeechVaultPieceCategoryId: 'warrior',
    amzznkWrriorsppeechVaultPiecePrice: 6,
    amzznkWrriorsppeechVaultPieceEmoji: '⚔️',
  },
  {
    amzznkWrriorsppeechVaultPieceId: 'vault-warrior-iron',
    amzznkWrriorsppeechVaultPieceTitle: 'The Iron Voice',
    amzznkWrriorsppeechVaultPiecePreview:
      'There are those who speak and there are those who are heard. The difference between them is not talent — it is...',
    amzznkWrriorsppeechVaultPieceBody:
      'There are those who speak and there are those who are heard. The difference between them is not talent — it is discipline. The iron voice is forged in solitude: reading aloud at dawn, pausing where others rush, breathing where others gasp. It does not shout to prove strength; it lowers itself to command attention. Warriors who master this voice can calm a camp with a single sentence and ignite it with the next. Practice until your words feel heavy with meaning and light with control. Let silence be your ally and precision your weapon. When you step before the tribe, they will not ask who you are — they will already be listening.',
    amzznkWrriorsppeechVaultPieceCategoryId: 'warrior',
    amzznkWrriorsppeechVaultPiecePrice: 9,
    amzznkWrriorsppeechVaultPieceEmoji: '⚔️',
  },
  {
    amzznkWrriorsppeechVaultPieceId: 'vault-jungle-whispers',
    amzznkWrriorsppeechVaultPieceTitle: 'Whispers of the Canopy',
    amzznkWrriorsppeechVaultPiecePreview:
      'Beneath the green roof of the jungle, every leaf learns to listen before it learns to fall...',
    amzznkWrriorsppeechVaultPieceBody:
      'Beneath the green roof of the jungle, every leaf learns to listen before it learns to fall. The canopy teaches speakers to soften the edges of their words without losing their edge. Here, volume is not power — placement is. Speak as the mist moves: low, patient, inevitable. Let your pauses echo like distant drums between the trees. When you address your tribe, imagine your voice traveling along vines — touching one heart, then another, until the whole forest understands. The jungle does not reward those who roar the loudest; it rewards those who are understood the first time.',
    amzznkWrriorsppeechVaultPieceCategoryId: 'jungle',
    amzznkWrriorsppeechVaultPiecePrice: 6,
    amzznkWrriorsppeechVaultPieceEmoji: '🌿',
  },
  {
    amzznkWrriorsppeechVaultPieceId: 'vault-jungle-river',
    amzznkWrriorsppeechVaultPieceTitle: 'River of Echoes',
    amzznkWrriorsppeechVaultPiecePreview:
      'The river carries sound farther than anger ever could. Stand beside moving water and practice until your voice...',
    amzznkWrriorsppeechVaultPieceBody:
      'The river carries sound farther than anger ever could. Stand beside moving water and practice until your voice flows with it — never fighting the current of your breath. Echoes return what you send; send clarity, receive trust. Amazo speakers who train by the river learn that repetition is not weakness but rhythm. Each phrase should arrive like a wave: built in silence, delivered with purpose, gone before it overwhelms. When night falls and the camp grows quiet, let your final words be the ones the river remembers. Tomorrow, the tribe will repeat them back to you.',
    amzznkWrriorsppeechVaultPieceCategoryId: 'jungle',
    amzznkWrriorsppeechVaultPiecePrice: 9,
    amzznkWrriorsppeechVaultPieceEmoji: '🌿',
  },
  {
    amzznkWrriorsppeechVaultPieceId: 'vault-queen-decree',
    amzznkWrriorsppeechVaultPieceTitle: "The Queen's Decree",
    amzznkWrriorsppeechVaultPiecePreview:
      'A queen does not raise her voice to raise her people. She speaks once, clearly, and the tribe moves as one...',
    amzznkWrriorsppeechVaultPieceBody:
      'A queen does not raise her voice to raise her people. She speaks once, clearly, and the tribe moves as one. Authority is not volume — it is certainty held calmly in the chest. Before every decree, breathe as if the whole kingdom depended on that breath, because in that moment it does. Choose words that can be carried by messengers and remembered by children. Let compassion sit behind command so that obedience feels like belonging. When you finish speaking, leave space for the tribe to feel the weight of what was said. A true queen is heard not because she shouts, but because she is never unclear.',
    amzznkWrriorsppeechVaultPieceCategoryId: 'queen',
    amzznkWrriorsppeechVaultPiecePrice: 6,
    amzznkWrriorsppeechVaultPieceEmoji: '👑',
  },
  {
    amzznkWrriorsppeechVaultPieceId: 'vault-queen-crown',
    amzznkWrriorsppeechVaultPieceTitle: 'Crown of Calm',
    amzznkWrriorsppeechVaultPiecePreview:
      'Panic is contagious; calm is contagious too. The crown of calm rests on a speaker who controls pace before...',
    amzznkWrriorsppeechVaultPieceBody:
      'Panic is contagious; calm is contagious too. The crown of calm rests on a speaker who controls pace before controlling people. When chaos rises, slow your first sentence — the tribe will mirror you. Name what is true, then name what is possible; hope without honesty is noise. Practice delivering difficult news as if you were placing a crown on someone’s head: deliberate, respectful, firm. Your hands may tremble in private, but your voice must be steady in public. Leaders who master calm do not erase fear — they give fear a direction. Wear that crown every time you speak.',
    amzznkWrriorsppeechVaultPieceCategoryId: 'queen',
    amzznkWrriorsppeechVaultPiecePrice: 9,
    amzznkWrriorsppeechVaultPieceEmoji: '👑',
  },
];

export const amzznkWrriorsppeechVaultTotalCount =
  amzznkWrriorsppeechVaultPieces.length;

export const amzznkWrriorsppeechVaultCategories: {
  amzznkWrriorsppeechVaultCategoryId: AmzznkWrriorsppeechVaultRealmId;
  amzznkWrriorsppeechVaultCategoryTabLabel: string;
  amzznkWrriorsppeechVaultCategoryEmoji: string;
}[] = [
  {
    amzznkWrriorsppeechVaultCategoryId: 'warrior',
    amzznkWrriorsppeechVaultCategoryTabLabel: 'Warrior',
    amzznkWrriorsppeechVaultCategoryEmoji: '⚔️',
  },
  {
    amzznkWrriorsppeechVaultCategoryId: 'jungle',
    amzznkWrriorsppeechVaultCategoryTabLabel: 'Jungle',
    amzznkWrriorsppeechVaultCategoryEmoji: '🌿',
  },
  {
    amzznkWrriorsppeechVaultCategoryId: 'queen',
    amzznkWrriorsppeechVaultCategoryTabLabel: "Queen's",
    amzznkWrriorsppeechVaultCategoryEmoji: '👑',
  },
];

export const amzznkWrriorsppeechVaultPiecesForRealm = (
  amzznkWrriorsppeechVaultCategoryId: AmzznkWrriorsppeechVaultRealmId,
) =>
  amzznkWrriorsppeechVaultPieces.filter(
    amzznkWrriorsppeechVaultPiece =>
      amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceCategoryId ===
      amzznkWrriorsppeechVaultCategoryId,
  );

export const amzznkWrriorsppeechVaultGetItem = (
  amzznkWrriorsppeechVaultPieceId: string,
) =>
  amzznkWrriorsppeechVaultPieces.find(
    amzznkWrriorsppeechVaultPiece =>
      amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId ===
      amzznkWrriorsppeechVaultPieceId,
  );

export const amzznkWrriorsppeechVaultCountOwnedInRealm = (
  vaultUnlockedIds: string[],
  amzznkWrriorsppeechVaultCategoryId: AmzznkWrriorsppeechVaultRealmId,
) =>
  amzznkWrriorsppeechVaultPiecesForRealm(
    amzznkWrriorsppeechVaultCategoryId,
  ).filter(amzznkWrriorsppeechVaultPiece =>
    vaultUnlockedIds.includes(
      amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
    ),
  ).length;

export const amzznkWrriorsppeechVaultToStudioPassage = (
  amzznkWrriorsppeechVaultPiece: AmzznkWrriorsppeechVaultPiece,
): AmzznkWrriorsppeechStudioPassage => ({
  amzznkWrriorsppeechStudioPassageId:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
  amzznkWrriorsppeechStudioPassageTitle:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceTitle,
  amzznkWrriorsppeechStudioPassageBody:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceBody,
  amzznkWrriorsppeechStudioPassageCategoryId:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceCategoryId,
  amzznkWrriorsppeechStudioPassageIsUser: false,
});

export const amzznkWrriorsppeechVaultToFluxPassage = (
  amzznkWrriorsppeechVaultPiece: AmzznkWrriorsppeechVaultPiece,
): AmzznkWrriorsppeechFluxPassage => ({
  amzznkWrriorsppeechFluxPassageId:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
  amzznkWrriorsppeechFluxPassageTitle:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceTitle,
  amzznkWrriorsppeechFluxPassageBody:
    amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceBody,
});

export const amzznkWrriorsppeechVaultUnlockedStudioPassages = (
  vaultUnlockedIds: string[],
): AmzznkWrriorsppeechStudioPassage[] =>
  amzznkWrriorsppeechVaultPieces
    .filter(amzznkWrriorsppeechVaultPiece =>
      vaultUnlockedIds.includes(
        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
      ),
    )
    .map(amzznkWrriorsppeechVaultToStudioPassage);

export const amzznkWrriorsppeechVaultUnlockedFluxPassagesForRealm = (
  vaultUnlockedIds: string[],
  amzznkWrriorsppeechVaultCategoryId: AmzznkWrriorsppeechVaultRealmId,
): AmzznkWrriorsppeechFluxPassage[] =>
  amzznkWrriorsppeechVaultPiecesForRealm(amzznkWrriorsppeechVaultCategoryId)
    .filter(amzznkWrriorsppeechVaultPiece =>
      vaultUnlockedIds.includes(
        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
      ),
    )
    .map(amzznkWrriorsppeechVaultToFluxPassage);
