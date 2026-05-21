import {
  amznkaWrriorSpeechSuflCategories,
  type AmznkaWrriorSpeechSuflCategoryId,
} from '../AmznkaWrriorSpeechSufl/AmznkaWrriorSpeechSuflData';

export type AmznkaWrriorSpeechWrkshCategoryId = AmznkaWrriorSpeechSuflCategoryId;

export type AmznkaWrriorSpeechWrkshText = {
  amznkaWrriorSpeechWrkshTextId: string;
  amznkaWrriorSpeechWrkshTextTitle: string;
  amznkaWrriorSpeechWrkshTextBody: string;
  amznkaWrriorSpeechWrkshTextCategoryId: AmznkaWrriorSpeechWrkshCategoryId;
  amznkaWrriorSpeechWrkshTextIsUser: boolean;
};

export type AmznkaWrriorSpeechWrkshCategory = {
  amznkaWrriorSpeechWrkshCategoryId: AmznkaWrriorSpeechWrkshCategoryId;
  amznkaWrriorSpeechWrkshCategoryTabLabel: string;
  amznkaWrriorSpeechWrkshCategoryFullTitle: string;
  amznkaWrriorSpeechWrkshCategoryEmoji: string;
};

export const amznkaWrriorSpeechWrkshCategories: AmznkaWrriorSpeechWrkshCategory[] =
  amznkaWrriorSpeechSuflCategories.map(amznkaWrriorSpeechSuflCategory => ({
    amznkaWrriorSpeechWrkshCategoryId:
      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId,
    amznkaWrriorSpeechWrkshCategoryTabLabel:
      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId === 'queen'
        ? "Queen's"
        : amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId ===
            'warrior'
          ? 'Warrior'
          : 'Jungle',
    amznkaWrriorSpeechWrkshCategoryFullTitle:
      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryTitle,
    amznkaWrriorSpeechWrkshCategoryEmoji:
      amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryEmoji,
  }));

const amznkaWrriorSpeechWrkshBuiltInPerCategory = 3;

export const amznkaWrriorSpeechWrkshBuiltInTexts: AmznkaWrriorSpeechWrkshText[] =
  amznkaWrriorSpeechSuflCategories.flatMap(amznkaWrriorSpeechSuflCategory =>
    amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryTexts
      .slice(0, amznkaWrriorSpeechWrkshBuiltInPerCategory)
      .map(amznkaWrriorSpeechSuflText => ({
        amznkaWrriorSpeechWrkshTextId: `builtin-${amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextId}`,
        amznkaWrriorSpeechWrkshTextTitle:
          amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextTitle,
        amznkaWrriorSpeechWrkshTextBody:
          amznkaWrriorSpeechSuflText.amznkaWrriorSpeechSuflTextBody,
        amznkaWrriorSpeechWrkshTextCategoryId:
          amznkaWrriorSpeechSuflCategory.amznkaWrriorSpeechSuflCategoryId,
        amznkaWrriorSpeechWrkshTextIsUser: false,
      })),
  );

export const amznkaWrriorSpeechWrkshGetCategory = (
  amznkaWrriorSpeechWrkshCategoryId: AmznkaWrriorSpeechWrkshCategoryId,
) =>
  amznkaWrriorSpeechWrkshCategories.find(
    amznkaWrriorSpeechWrkshCategory =>
      amznkaWrriorSpeechWrkshCategory.amznkaWrriorSpeechWrkshCategoryId ===
      amznkaWrriorSpeechWrkshCategoryId,
  );

export const amznkaWrriorSpeechWrkshGetPreview = (
  amznkaWrriorSpeechWrkshBody: string,
  amznkaWrriorSpeechWrkshMax = 90,
) => {
  const amznkaWrriorSpeechWrkshTrimmed = amznkaWrriorSpeechWrkshBody.trim();
  if (amznkaWrriorSpeechWrkshTrimmed.length <= amznkaWrriorSpeechWrkshMax) {
    return amznkaWrriorSpeechWrkshTrimmed;
  }
  return `${amznkaWrriorSpeechWrkshTrimmed.slice(0, amznkaWrriorSpeechWrkshMax)}...`;
};

export const amznkaWrriorSpeechWrkshMergeTexts = (
  amznkaWrriorSpeechWrkshUserTexts: AmznkaWrriorSpeechWrkshText[],
  amznkaWrriorSpeechWrkshCategoryId: AmznkaWrriorSpeechWrkshCategoryId,
  amznkaWrriorSpeechWrkshStoreTexts: AmznkaWrriorSpeechWrkshText[] = [],
) => {
  const amznkaWrriorSpeechWrkshBuiltIn = amznkaWrriorSpeechWrkshBuiltInTexts.filter(
    amznkaWrriorSpeechWrkshText =>
      amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextCategoryId ===
      amznkaWrriorSpeechWrkshCategoryId,
  );
  const amznkaWrriorSpeechWrkshStore = amznkaWrriorSpeechWrkshStoreTexts.filter(
    amznkaWrriorSpeechWrkshText =>
      amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextCategoryId ===
      amznkaWrriorSpeechWrkshCategoryId,
  );
  const amznkaWrriorSpeechWrkshUser = amznkaWrriorSpeechWrkshUserTexts.filter(
    amznkaWrriorSpeechWrkshText =>
      amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextCategoryId ===
      amznkaWrriorSpeechWrkshCategoryId,
  );
  return [
    ...amznkaWrriorSpeechWrkshBuiltIn,
    ...amznkaWrriorSpeechWrkshStore,
    ...amznkaWrriorSpeechWrkshUser,
  ];
};

export const amznkaWrriorSpeechWrkshCountForCategory = (
  amznkaWrriorSpeechWrkshUserTexts: AmznkaWrriorSpeechWrkshText[],
  amznkaWrriorSpeechWrkshCategoryId: AmznkaWrriorSpeechWrkshCategoryId,
  amznkaWrriorSpeechWrkshStoreTexts: AmznkaWrriorSpeechWrkshText[] = [],
) =>
  amznkaWrriorSpeechWrkshMergeTexts(
    amznkaWrriorSpeechWrkshUserTexts,
    amznkaWrriorSpeechWrkshCategoryId,
    amznkaWrriorSpeechWrkshStoreTexts,
  ).length;
