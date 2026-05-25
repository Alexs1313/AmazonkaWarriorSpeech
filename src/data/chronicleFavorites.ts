import AsyncStorage from '@react-native-async-storage/async-storage';

const chronicleFavoritesKey =
  'chronicleFavorites';

export const chronicleLoadFavorites = async (): Promise<
  string[]
> => {
  try {
    const chronicleRaw = await AsyncStorage.getItem(
      chronicleFavoritesKey,
    );
    if (!chronicleRaw) {
      return [];
    }
    const chronicleParsed = JSON.parse(
      chronicleRaw,
    ) as string[];
    if (!Array.isArray(chronicleParsed)) {
      return [];
    }
    const chronicleUnique = [
      ...new Set(chronicleParsed),
    ];
    if (
      chronicleUnique.length !==
      chronicleParsed.length
    ) {
      await chronicleSaveFavorites(chronicleUnique);
    }
    return chronicleUnique;
  } catch {
    return [];
  }
};

export const chronicleSaveFavorites = async (
  chronicleIds: string[],
) => {
  await AsyncStorage.setItem(
    chronicleFavoritesKey,
    JSON.stringify(chronicleIds),
  );
};

export const chronicleToggleFavoriteIds = (
  chronicleEntryId: string,
  chronicleCurrent: string[],
): string[] => {
  const chronicleNext = chronicleCurrent.includes(
    chronicleEntryId,
  )
    ? chronicleCurrent.filter(
        chronicleId =>
          chronicleId !== chronicleEntryId,
      )
    : [...chronicleCurrent, chronicleEntryId];
  return [...new Set(chronicleNext)];
};

export const chronicleToggleFavorite = async (
  chronicleEntryId: string,
  chronicleCurrent: string[],
): Promise<string[]> => {
  const chronicleNext = chronicleToggleFavoriteIds(
    chronicleEntryId,
    chronicleCurrent,
  );
  await chronicleSaveFavorites(chronicleNext);
  return chronicleNext;
};
