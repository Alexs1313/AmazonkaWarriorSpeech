import AsyncStorage from '@react-native-async-storage/async-storage';

const amzznkWrriorsppeechChronicleFavoritesKey =
  'chronicleFavorites';

export const amzznkWrriorsppeechChronicleLoadFavorites = async (): Promise<
  string[]
> => {
  try {
    const amzznkWrriorsppeechChronicleRaw = await AsyncStorage.getItem(
      amzznkWrriorsppeechChronicleFavoritesKey,
    );
    if (!amzznkWrriorsppeechChronicleRaw) {
      return [];
    }
    const amzznkWrriorsppeechChronicleParsed = JSON.parse(
      amzznkWrriorsppeechChronicleRaw,
    ) as string[];
    if (!Array.isArray(amzznkWrriorsppeechChronicleParsed)) {
      return [];
    }
    const amzznkWrriorsppeechChronicleUnique = [
      ...new Set(amzznkWrriorsppeechChronicleParsed),
    ];
    if (
      amzznkWrriorsppeechChronicleUnique.length !==
      amzznkWrriorsppeechChronicleParsed.length
    ) {
      await amzznkWrriorsppeechChronicleSaveFavorites(amzznkWrriorsppeechChronicleUnique);
    }
    return amzznkWrriorsppeechChronicleUnique;
  } catch {
    return [];
  }
};

export const amzznkWrriorsppeechChronicleSaveFavorites = async (
  amzznkWrriorsppeechChronicleIds: string[],
) => {
  await AsyncStorage.setItem(
    amzznkWrriorsppeechChronicleFavoritesKey,
    JSON.stringify(amzznkWrriorsppeechChronicleIds),
  );
};

export const amzznkWrriorsppeechChronicleToggleFavoriteIds = (
  amzznkWrriorsppeechChronicleEntryId: string,
  amzznkWrriorsppeechChronicleCurrent: string[],
): string[] => {
  const amzznkWrriorsppeechChronicleNext = amzznkWrriorsppeechChronicleCurrent.includes(
    amzznkWrriorsppeechChronicleEntryId,
  )
    ? amzznkWrriorsppeechChronicleCurrent.filter(
        amzznkWrriorsppeechChronicleId =>
          amzznkWrriorsppeechChronicleId !== amzznkWrriorsppeechChronicleEntryId,
      )
    : [...amzznkWrriorsppeechChronicleCurrent, amzznkWrriorsppeechChronicleEntryId];
  return [...new Set(amzznkWrriorsppeechChronicleNext)];
};

export const amzznkWrriorsppeechChronicleToggleFavorite = async (
  amzznkWrriorsppeechChronicleEntryId: string,
  amzznkWrriorsppeechChronicleCurrent: string[],
): Promise<string[]> => {
  const amzznkWrriorsppeechChronicleNext = amzznkWrriorsppeechChronicleToggleFavoriteIds(
    amzznkWrriorsppeechChronicleEntryId,
    amzznkWrriorsppeechChronicleCurrent,
  );
  await amzznkWrriorsppeechChronicleSaveFavorites(amzznkWrriorsppeechChronicleNext);
  return amzznkWrriorsppeechChronicleNext;
};
