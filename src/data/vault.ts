import type {
  FluxLaneId,
  FluxPassage,
} from './flux';
import type {StudioPassage} from './studio';

export type VaultRealmId =
  FluxLaneId;

export type VaultPiece = {
  vaultPieceId: string;
  vaultPieceTitle: string;
  vaultPiecePreview: string;
  vaultPieceBody: string;
  vaultPieceCategoryId: VaultRealmId;
  vaultPiecePrice: number;
  vaultPieceEmoji: string;
};

export const vaultPieces: VaultPiece[] = [
  {
    vaultPieceId: 'vault-warrior-oath',
    vaultPieceTitle: 'The Amazonka Oath',
    vaultPiecePreview:
      'I swear by the fire that forged me and the river that remembers my name: I will not be silent when truth deman...',
    vaultPieceBody:
      'I swear by the fire that forged me and the river that remembers my name: I will not be silent when truth demands a voice. I will not flee when fear presses against my chest, for courage is practiced long before the battle begins. Every word I speak shall carry the weight of my ancestors and the clarity of my purpose. I train my breath as warriors train their shields — steady, ready, unbreakable. When the crowd listens, I will not rush; when the moment comes, I will stand tall and speak as one who has already won the war within. This is my oath to the Amazonka, to my tribe, and to the voice I am still becoming.',
    vaultPieceCategoryId: 'warrior',
    vaultPiecePrice: 6,
    vaultPieceEmoji: '⚔️',
  },
  {
    vaultPieceId: 'vault-warrior-iron',
    vaultPieceTitle: 'The Iron Voice',
    vaultPiecePreview:
      'There are those who speak and there are those who are heard. The difference between them is not talent — it is...',
    vaultPieceBody:
      'There are those who speak and there are those who are heard. The difference between them is not talent — it is discipline. The iron voice is forged in solitude: reading aloud at dawn, pausing where others rush, breathing where others gasp. It does not shout to prove strength; it lowers itself to command attention. Warriors who master this voice can calm a camp with a single sentence and ignite it with the next. Practice until your words feel heavy with meaning and light with control. Let silence be your ally and precision your weapon. When you step before the tribe, they will not ask who you are — they will already be listening.',
    vaultPieceCategoryId: 'warrior',
    vaultPiecePrice: 9,
    vaultPieceEmoji: '⚔️',
  },
  {
    vaultPieceId: 'vault-jungle-whispers',
    vaultPieceTitle: 'Whispers of the Canopy',
    vaultPiecePreview:
      'Beneath the green roof of the jungle, every leaf learns to listen before it learns to fall...',
    vaultPieceBody:
      'Beneath the green roof of the jungle, every leaf learns to listen before it learns to fall. The canopy teaches speakers to soften the edges of their words without losing their edge. Here, volume is not power — placement is. Speak as the mist moves: low, patient, inevitable. Let your pauses echo like distant drums between the trees. When you address your tribe, imagine your voice traveling along vines — touching one heart, then another, until the whole forest understands. The jungle does not reward those who roar the loudest; it rewards those who are understood the first time.',
    vaultPieceCategoryId: 'jungle',
    vaultPiecePrice: 6,
    vaultPieceEmoji: '🌿',
  },
  {
    vaultPieceId: 'vault-jungle-river',
    vaultPieceTitle: 'River of Echoes',
    vaultPiecePreview:
      'The river carries sound farther than anger ever could. Stand beside moving water and practice until your voice...',
    vaultPieceBody:
      'The river carries sound farther than anger ever could. Stand beside moving water and practice until your voice flows with it — never fighting the current of your breath. Echoes return what you send; send clarity, receive trust. Amazonka speakers who train by the river learn that repetition is not weakness but rhythm. Each phrase should arrive like a wave: built in silence, delivered with purpose, gone before it overwhelms. When night falls and the camp grows quiet, let your final words be the ones the river remembers. Tomorrow, the tribe will repeat them back to you.',
    vaultPieceCategoryId: 'jungle',
    vaultPiecePrice: 9,
    vaultPieceEmoji: '🌿',
  },
  {
    vaultPieceId: 'vault-queen-decree',
    vaultPieceTitle: "The Queen's Decree",
    vaultPiecePreview:
      'A queen does not raise her voice to raise her people. She speaks once, clearly, and the tribe moves as one...',
    vaultPieceBody:
      'A queen does not raise her voice to raise her people. She speaks once, clearly, and the tribe moves as one. Authority is not volume — it is certainty held calmly in the chest. Before every decree, breathe as if the whole kingdom depended on that breath, because in that moment it does. Choose words that can be carried by messengers and remembered by children. Let compassion sit behind command so that obedience feels like belonging. When you finish speaking, leave space for the tribe to feel the weight of what was said. A true queen is heard not because she shouts, but because she is never unclear.',
    vaultPieceCategoryId: 'queen',
    vaultPiecePrice: 6,
    vaultPieceEmoji: '👑',
  },
  {
    vaultPieceId: 'vault-queen-crown',
    vaultPieceTitle: 'Crown of Calm',
    vaultPiecePreview:
      'Panic is contagious; calm is contagious too. The crown of calm rests on a speaker who controls pace before...',
    vaultPieceBody:
      'Panic is contagious; calm is contagious too. The crown of calm rests on a speaker who controls pace before controlling people. When chaos rises, slow your first sentence — the tribe will mirror you. Name what is true, then name what is possible; hope without honesty is noise. Practice delivering difficult news as if you were placing a crown on someone’s head: deliberate, respectful, firm. Your hands may tremble in private, but your voice must be steady in public. Leaders who master calm do not erase fear — they give fear a direction. Wear that crown every time you speak.',
    vaultPieceCategoryId: 'queen',
    vaultPiecePrice: 9,
    vaultPieceEmoji: '👑',
  },
];

export const vaultTotalCount =
  vaultPieces.length;

export const vaultCategories: {
  vaultCategoryId: VaultRealmId;
  vaultCategoryTabLabel: string;
  vaultCategoryEmoji: string;
}[] = [
  {
    vaultCategoryId: 'warrior',
    vaultCategoryTabLabel: 'Warrior',
    vaultCategoryEmoji: '⚔️',
  },
  {
    vaultCategoryId: 'jungle',
    vaultCategoryTabLabel: 'Jungle',
    vaultCategoryEmoji: '🌿',
  },
  {
    vaultCategoryId: 'queen',
    vaultCategoryTabLabel: "Queen's",
    vaultCategoryEmoji: '👑',
  },
];

export const vaultPiecesForRealm = (
  vaultCategoryId: VaultRealmId,
) =>
  vaultPieces.filter(
    vaultPiece =>
      vaultPiece.vaultPieceCategoryId ===
      vaultCategoryId,
  );

export const vaultGetItem = (
  vaultPieceId: string,
) =>
  vaultPieces.find(
    vaultPiece =>
      vaultPiece.vaultPieceId ===
      vaultPieceId,
  );

export const vaultCountOwnedInRealm = (
  vaultUnlockedIds: string[],
  vaultCategoryId: VaultRealmId,
) =>
  vaultPiecesForRealm(
    vaultCategoryId,
  ).filter(vaultPiece =>
    vaultUnlockedIds.includes(
      vaultPiece.vaultPieceId,
    ),
  ).length;

export const vaultToStudioPassage = (
  vaultPiece: VaultPiece,
): StudioPassage => ({
  studioPassageId:
    vaultPiece.vaultPieceId,
  studioPassageTitle:
    vaultPiece.vaultPieceTitle,
  studioPassageBody:
    vaultPiece.vaultPieceBody,
  studioPassageCategoryId:
    vaultPiece.vaultPieceCategoryId,
  studioPassageIsUser: false,
});

export const vaultToFluxPassage = (
  vaultPiece: VaultPiece,
): FluxPassage => ({
  fluxPassageId:
    vaultPiece.vaultPieceId,
  fluxPassageTitle:
    vaultPiece.vaultPieceTitle,
  fluxPassageBody:
    vaultPiece.vaultPieceBody,
});

export const vaultUnlockedStudioPassages = (
  vaultUnlockedIds: string[],
): StudioPassage[] =>
  vaultPieces
    .filter(vaultPiece =>
      vaultUnlockedIds.includes(
        vaultPiece.vaultPieceId,
      ),
    )
    .map(vaultToStudioPassage);

export const vaultUnlockedFluxPassagesForRealm = (
  vaultUnlockedIds: string[],
  vaultCategoryId: VaultRealmId,
): FluxPassage[] =>
  vaultPiecesForRealm(vaultCategoryId)
    .filter(vaultPiece =>
      vaultUnlockedIds.includes(
        vaultPiece.vaultPieceId,
      ),
    )
    .map(vaultToFluxPassage);
