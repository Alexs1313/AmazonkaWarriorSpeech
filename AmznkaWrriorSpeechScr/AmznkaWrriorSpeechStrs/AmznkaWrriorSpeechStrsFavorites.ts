import AsyncStorage from '@react-native-async-storage/async-storage';

const amznkaWrriorSpeechStrsFavoritesKey =
  'amznkaWrriorSpeechStrsFavorites';

export const amznkaWrriorSpeechStrsLoadFavorites = async (): Promise<
  string[]
> => {
  try {
    const amznkaWrriorSpeechStrsRaw = await AsyncStorage.getItem(
      amznkaWrriorSpeechStrsFavoritesKey,
    );
    if (!amznkaWrriorSpeechStrsRaw) {
      return [];
    }
    const amznkaWrriorSpeechStrsParsed = JSON.parse(
      amznkaWrriorSpeechStrsRaw,
    ) as string[];
    if (!Array.isArray(amznkaWrriorSpeechStrsParsed)) {
      return [];
    }
    const amznkaWrriorSpeechStrsUnique = [
      ...new Set(amznkaWrriorSpeechStrsParsed),
    ];
    if (
      amznkaWrriorSpeechStrsUnique.length !==
      amznkaWrriorSpeechStrsParsed.length
    ) {
      await amznkaWrriorSpeechStrsSaveFavorites(amznkaWrriorSpeechStrsUnique);
    }
    return amznkaWrriorSpeechStrsUnique;
  } catch {
    return [];
  }
};

export const amznkaWrriorSpeechStrsSaveFavorites = async (
  amznkaWrriorSpeechStrsIds: string[],
) => {
  await AsyncStorage.setItem(
    amznkaWrriorSpeechStrsFavoritesKey,
    JSON.stringify(amznkaWrriorSpeechStrsIds),
  );
};

export const amznkaWrriorSpeechStrsToggleFavoriteIds = (
  amznkaWrriorSpeechStrsStoryId: string,
  amznkaWrriorSpeechStrsCurrent: string[],
): string[] => {
  const amznkaWrriorSpeechStrsNext = amznkaWrriorSpeechStrsCurrent.includes(
    amznkaWrriorSpeechStrsStoryId,
  )
    ? amznkaWrriorSpeechStrsCurrent.filter(
        amznkaWrriorSpeechStrsId =>
          amznkaWrriorSpeechStrsId !== amznkaWrriorSpeechStrsStoryId,
      )
    : [...amznkaWrriorSpeechStrsCurrent, amznkaWrriorSpeechStrsStoryId];
  return [...new Set(amznkaWrriorSpeechStrsNext)];
};

export const amznkaWrriorSpeechStrsToggleFavorite = async (
  amznkaWrriorSpeechStrsStoryId: string,
  amznkaWrriorSpeechStrsCurrent: string[],
): Promise<string[]> => {
  const amznkaWrriorSpeechStrsNext = amznkaWrriorSpeechStrsToggleFavoriteIds(
    amznkaWrriorSpeechStrsStoryId,
    amznkaWrriorSpeechStrsCurrent,
  );
  await amznkaWrriorSpeechStrsSaveFavorites(amznkaWrriorSpeechStrsNext);
  return amznkaWrriorSpeechStrsNext;
};
