import {
  fluxLanes,
  type FluxLaneId,
} from './flux';

export type StudioRealmId = FluxLaneId;

export type StudioPassage = {
  studioPassageId: string;
  studioPassageTitle: string;
  studioPassageBody: string;
  studioPassageCategoryId: StudioRealmId;
  studioPassageIsUser: boolean;
};

export type StudioRealm = {
  studioCategoryId: StudioRealmId;
  studioCategoryTabLabel: string;
  studioCategoryFullTitle: string;
  studioCategoryEmoji: string;
};

export const studioCategories: StudioRealm[] =
  fluxLanes.map(fluxCategory => ({
    studioCategoryId:
      fluxCategory.fluxCategoryId,
    studioCategoryTabLabel:
      fluxCategory.fluxCategoryId === 'queen'
        ? "Queen's"
        : fluxCategory.fluxCategoryId ===
            'warrior'
          ? 'Warrior'
          : 'Jungle',
    studioCategoryFullTitle:
      fluxCategory.fluxCategoryTitle,
    studioCategoryEmoji:
      fluxCategory.fluxCategoryEmoji,
  }));

const studioBuiltInPerCategory = 3;

export const studioBuiltInTexts: StudioPassage[] =
  fluxLanes.flatMap(fluxCategory =>
    fluxCategory.fluxCategoryTexts
      .slice(0, studioBuiltInPerCategory)
      .map(fluxPassage => ({
        studioPassageId: `builtin-${fluxPassage.fluxPassageId}`,
        studioPassageTitle:
          fluxPassage.fluxPassageTitle,
        studioPassageBody:
          fluxPassage.fluxPassageBody,
        studioPassageCategoryId:
          fluxCategory.fluxCategoryId,
        studioPassageIsUser: false,
      })),
  );

export const studioGetCategory = (
  studioCategoryId: StudioRealmId,
) =>
  studioCategories.find(
    studioCategory =>
      studioCategory.studioCategoryId ===
      studioCategoryId,
  );

export const studioGetPreview = (
  studioBody: string,
  studioMax = 90,
) => {
  const studioTrimmed = studioBody.trim();
  if (studioTrimmed.length <= studioMax) {
    return studioTrimmed;
  }
  return `${studioTrimmed.slice(0, studioMax)}...`;
};

export const studioMergeTexts = (
  studioUserTexts: StudioPassage[],
  studioCategoryId: StudioRealmId,
  studioVaultPassages: StudioPassage[] = [],
) => {
  const studioBuiltIn = studioBuiltInTexts.filter(
    studioPassage =>
      studioPassage.studioPassageCategoryId ===
      studioCategoryId,
  );
  const studioStore = studioVaultPassages.filter(
    studioPassage =>
      studioPassage.studioPassageCategoryId ===
      studioCategoryId,
  );
  const studioUser = studioUserTexts.filter(
    studioPassage =>
      studioPassage.studioPassageCategoryId ===
      studioCategoryId,
  );
  return [
    ...studioBuiltIn,
    ...studioStore,
    ...studioUser,
  ];
};

export const studioCountForCategory = (
  studioUserTexts: StudioPassage[],
  studioCategoryId: StudioRealmId,
  studioVaultPassages: StudioPassage[] = [],
) =>
  studioMergeTexts(
    studioUserTexts,
    studioCategoryId,
    studioVaultPassages,
  ).length;
