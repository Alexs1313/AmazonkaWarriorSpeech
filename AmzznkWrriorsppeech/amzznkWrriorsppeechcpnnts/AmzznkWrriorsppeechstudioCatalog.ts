import {
  amzznkWrriorsppeechFluxLanes,
  type AmzznkWrriorsppeechFluxLaneId,
} from './AmzznkWrriorsppeechfluxCatalog';

export type AmzznkWrriorsppeechStudioRealmId = AmzznkWrriorsppeechFluxLaneId;

export type AmzznkWrriorsppeechStudioPassage = {
  amzznkWrriorsppeechStudioPassageId: string;
  amzznkWrriorsppeechStudioPassageTitle: string;
  amzznkWrriorsppeechStudioPassageBody: string;
  amzznkWrriorsppeechStudioPassageCategoryId: AmzznkWrriorsppeechStudioRealmId;
  amzznkWrriorsppeechStudioPassageIsUser: boolean;
};

export type AmzznkWrriorsppeechStudioRealm = {
  amzznkWrriorsppeechStudioCategoryId: AmzznkWrriorsppeechStudioRealmId;
  amzznkWrriorsppeechStudioCategoryTabLabel: string;
  amzznkWrriorsppeechStudioCategoryFullTitle: string;
  amzznkWrriorsppeechStudioCategoryEmoji: string;
};

export const amzznkWrriorsppeechStudioCategories: AmzznkWrriorsppeechStudioRealm[] =
  amzznkWrriorsppeechFluxLanes.map(amzznkWrriorsppeechFluxCategory => ({
    amzznkWrriorsppeechStudioCategoryId:
      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryId,
    amzznkWrriorsppeechStudioCategoryTabLabel:
      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryId === 'queen'
        ? "Queen's"
        : amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryId ===
            'warrior'
          ? 'Warrior'
          : 'Jungle',
    amzznkWrriorsppeechStudioCategoryFullTitle:
      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryTitle,
    amzznkWrriorsppeechStudioCategoryEmoji:
      amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryEmoji,
  }));

const amzznkWrriorsppeechStudioBuiltInPerCategory = 3;

export const amzznkWrriorsppeechStudioBuiltInTexts: AmzznkWrriorsppeechStudioPassage[] =
  amzznkWrriorsppeechFluxLanes.flatMap(amzznkWrriorsppeechFluxCategory =>
    amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryTexts
      .slice(0, amzznkWrriorsppeechStudioBuiltInPerCategory)
      .map(amzznkWrriorsppeechFluxPassage => ({
        amzznkWrriorsppeechStudioPassageId: `builtin-${amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageId}`,
        amzznkWrriorsppeechStudioPassageTitle:
          amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageTitle,
        amzznkWrriorsppeechStudioPassageBody:
          amzznkWrriorsppeechFluxPassage.amzznkWrriorsppeechFluxPassageBody,
        amzznkWrriorsppeechStudioPassageCategoryId:
          amzznkWrriorsppeechFluxCategory.amzznkWrriorsppeechFluxCategoryId,
        amzznkWrriorsppeechStudioPassageIsUser: false,
      })),
  );

export const amzznkWrriorsppeechStudioGetCategory = (
  amzznkWrriorsppeechStudioCategoryId: AmzznkWrriorsppeechStudioRealmId,
) =>
  amzznkWrriorsppeechStudioCategories.find(
    studioCategory =>
      studioCategory.amzznkWrriorsppeechStudioCategoryId ===
      amzznkWrriorsppeechStudioCategoryId,
  );

export const amzznkWrriorsppeechStudioGetPreview = (
  studioBody: string,
  amzznkWrriorsppeechStudioMax = 90,
) => {
  const amzznkWrriorsppeechStudioTrimmed = studioBody.trim();
  if (amzznkWrriorsppeechStudioTrimmed.length <= amzznkWrriorsppeechStudioMax) {
    return amzznkWrriorsppeechStudioTrimmed;
  }
  return `${amzznkWrriorsppeechStudioTrimmed.slice(0, amzznkWrriorsppeechStudioMax)}...`;
};

export const amzznkWrriorsppeechStudioMergeTexts = (
  studioUserTexts: AmzznkWrriorsppeechStudioPassage[],
  amzznkWrriorsppeechStudioCategoryId: AmzznkWrriorsppeechStudioRealmId,
  studioVaultPassages: AmzznkWrriorsppeechStudioPassage[] = [],
) => {
  const amzznkWrriorsppeechStudioBuiltIn = amzznkWrriorsppeechStudioBuiltInTexts.filter(
    amzznkWrriorsppeechStudioPassage =>
      amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageCategoryId ===
      amzznkWrriorsppeechStudioCategoryId,
  );
  const amzznkWrriorsppeechStudioStore = studioVaultPassages.filter(
    amzznkWrriorsppeechStudioPassage =>
      amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageCategoryId ===
      amzznkWrriorsppeechStudioCategoryId,
  );
  const amzznkWrriorsppeechStudioUser = studioUserTexts.filter(
    amzznkWrriorsppeechStudioPassage =>
      amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageCategoryId ===
      amzznkWrriorsppeechStudioCategoryId,
  );
  return [
    ...amzznkWrriorsppeechStudioBuiltIn,
    ...amzznkWrriorsppeechStudioStore,
    ...amzznkWrriorsppeechStudioUser,
  ];
};

export const amzznkWrriorsppeechStudioCountForCategory = (
  studioUserTexts: AmzznkWrriorsppeechStudioPassage[],
  amzznkWrriorsppeechStudioCategoryId: AmzznkWrriorsppeechStudioRealmId,
  studioVaultPassages: AmzznkWrriorsppeechStudioPassage[] = [],
) =>
  amzznkWrriorsppeechStudioMergeTexts(
    studioUserTexts,
    amzznkWrriorsppeechStudioCategoryId,
    studioVaultPassages,
  ).length;
