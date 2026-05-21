import AsyncStorage from '@react-native-async-storage/async-storage';
import type {AmznkaWrriorSpeechWrkshText} from './AmznkaWrriorSpeechWrkshData';

const amznkaWrriorSpeechWrkshStorageKey = 'amznkaWrriorSpeechWrkshUserTexts';

export const amznkaWrriorSpeechWrkshLoadUserTexts = async (): Promise<
  AmznkaWrriorSpeechWrkshText[]
> => {
  try {
    const amznkaWrriorSpeechWrkshRaw = await AsyncStorage.getItem(
      amznkaWrriorSpeechWrkshStorageKey,
    );
    if (!amznkaWrriorSpeechWrkshRaw) {
      return [];
    }
    const amznkaWrriorSpeechWrkshParsed = JSON.parse(
      amznkaWrriorSpeechWrkshRaw,
    ) as AmznkaWrriorSpeechWrkshText[];
    return Array.isArray(amznkaWrriorSpeechWrkshParsed)
      ? amznkaWrriorSpeechWrkshParsed
      : [];
  } catch {
    return [];
  }
};

export const amznkaWrriorSpeechWrkshSaveUserTexts = async (
  amznkaWrriorSpeechWrkshTexts: AmznkaWrriorSpeechWrkshText[],
) => {
  await AsyncStorage.setItem(
    amznkaWrriorSpeechWrkshStorageKey,
    JSON.stringify(amznkaWrriorSpeechWrkshTexts),
  );
};
