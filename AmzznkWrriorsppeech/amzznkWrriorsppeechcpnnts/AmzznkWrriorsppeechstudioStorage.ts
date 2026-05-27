import AsyncStorage from '@react-native-async-storage/async-storage';
import type {AmzznkWrriorsppeechStudioPassage} from './AmzznkWrriorsppeechstudioCatalog';

const amzznkWrriorsppeechStudioStorageKey = 'studioUserTexts';

export const amzznkWrriorsppeechStudioLoadUserPassages = async (): Promise<
  AmzznkWrriorsppeechStudioPassage[]
> => {
  try {
    const amzznkWrriorsppeechStudioRaw = await AsyncStorage.getItem(
      amzznkWrriorsppeechStudioStorageKey,
    );
    if (!amzznkWrriorsppeechStudioRaw) {
      return [];
    }
    const amzznkWrriorsppeechStudioParsed = JSON.parse(
      amzznkWrriorsppeechStudioRaw,
    ) as AmzznkWrriorsppeechStudioPassage[];
    return Array.isArray(amzznkWrriorsppeechStudioParsed)
      ? amzznkWrriorsppeechStudioParsed
      : [];
  } catch {
    return [];
  }
};

export const amzznkWrriorsppeechStudioSaveUserPassages = async (
  amzznkWrriorsppeechStudioPassages: AmzznkWrriorsppeechStudioPassage[],
) => {
  await AsyncStorage.setItem(
    amzznkWrriorsppeechStudioStorageKey,
    JSON.stringify(amzznkWrriorsppeechStudioPassages),
  );
};
