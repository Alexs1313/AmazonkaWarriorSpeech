import AsyncStorage from '@react-native-async-storage/async-storage';
import type {StudioPassage} from './studio';

const studioStorageKey = 'studioUserTexts';

export const studioLoadUserPassages = async (): Promise<
  StudioPassage[]
> => {
  try {
    const studioRaw = await AsyncStorage.getItem(
      studioStorageKey,
    );
    if (!studioRaw) {
      return [];
    }
    const studioParsed = JSON.parse(
      studioRaw,
    ) as StudioPassage[];
    return Array.isArray(studioParsed)
      ? studioParsed
      : [];
  } catch {
    return [];
  }
};

export const studioSaveUserPassages = async (
  studioPassages: StudioPassage[],
) => {
  await AsyncStorage.setItem(
    studioStorageKey,
    JSON.stringify(studioPassages),
  );
};
