import AsyncStorage from '@react-native-async-storage/async-storage';

const amznkaWrriorSpeechStoreBalanceKey = 'amznkaWrriorSpeechStoreBalance';
const amznkaWrriorSpeechStoreUnlockedKey = 'amznkaWrriorSpeechStoreUnlocked';

export const amznkaWrriorSpeechStoreLoadBalance = async (): Promise<number> => {
  try {
    const amznkaWrriorSpeechStoreRaw = await AsyncStorage.getItem(
      amznkaWrriorSpeechStoreBalanceKey,
    );
    if (!amznkaWrriorSpeechStoreRaw) {
      return 0;
    }
    const amznkaWrriorSpeechStoreParsed = Number(amznkaWrriorSpeechStoreRaw);
    return Number.isFinite(amznkaWrriorSpeechStoreParsed)
      ? Math.max(0, amznkaWrriorSpeechStoreParsed)
      : 0;
  } catch {
    return 0;
  }
};

export const amznkaWrriorSpeechStoreSaveBalance = async (
  amznkaWrriorSpeechStoreBalance: number,
) => {
  await AsyncStorage.setItem(
    amznkaWrriorSpeechStoreBalanceKey,
    String(Math.max(0, amznkaWrriorSpeechStoreBalance)),
  );
};

export const amznkaWrriorSpeechStoreAddSwords = async (
  amznkaWrriorSpeechStoreAmount: number,
) => {
  if (amznkaWrriorSpeechStoreAmount <= 0) {
    return amznkaWrriorSpeechStoreLoadBalance();
  }
  const amznkaWrriorSpeechStoreCurrent =
    await amznkaWrriorSpeechStoreLoadBalance();
  const amznkaWrriorSpeechStoreNext =
    amznkaWrriorSpeechStoreCurrent + amznkaWrriorSpeechStoreAmount;
  await amznkaWrriorSpeechStoreSaveBalance(amznkaWrriorSpeechStoreNext);
  return amznkaWrriorSpeechStoreNext;
};

export const amznkaWrriorSpeechStoreLoadUnlockedIds = async (): Promise<
  string[]
> => {
  try {
    const amznkaWrriorSpeechStoreRaw = await AsyncStorage.getItem(
      amznkaWrriorSpeechStoreUnlockedKey,
    );
    if (!amznkaWrriorSpeechStoreRaw) {
      return [];
    }
    const amznkaWrriorSpeechStoreParsed = JSON.parse(
      amznkaWrriorSpeechStoreRaw,
    ) as string[];
    return Array.isArray(amznkaWrriorSpeechStoreParsed)
      ? amznkaWrriorSpeechStoreParsed
      : [];
  } catch {
    return [];
  }
};

export const amznkaWrriorSpeechStoreSaveUnlockedIds = async (
  amznkaWrriorSpeechStoreUnlockedIds: string[],
) => {
  await AsyncStorage.setItem(
    amznkaWrriorSpeechStoreUnlockedKey,
    JSON.stringify(amznkaWrriorSpeechStoreUnlockedIds),
  );
};

export const amznkaWrriorSpeechStoreUnlockItem = async (
  amznkaWrriorSpeechStoreItemId: string,
  amznkaWrriorSpeechStorePrice: number,
): Promise<{ok: boolean; balance: number}> => {
  const amznkaWrriorSpeechStoreUnlocked =
    await amznkaWrriorSpeechStoreLoadUnlockedIds();
  if (amznkaWrriorSpeechStoreUnlocked.includes(amznkaWrriorSpeechStoreItemId)) {
    const amznkaWrriorSpeechStoreBalance =
      await amznkaWrriorSpeechStoreLoadBalance();
    return {ok: true, balance: amznkaWrriorSpeechStoreBalance};
  }

  const amznkaWrriorSpeechStoreBalance =
    await amznkaWrriorSpeechStoreLoadBalance();
  if (amznkaWrriorSpeechStoreBalance < amznkaWrriorSpeechStorePrice) {
    return {ok: false, balance: amznkaWrriorSpeechStoreBalance};
  }

  const amznkaWrriorSpeechStoreNextBalance =
    amznkaWrriorSpeechStoreBalance - amznkaWrriorSpeechStorePrice;
  await amznkaWrriorSpeechStoreSaveBalance(amznkaWrriorSpeechStoreNextBalance);
  await amznkaWrriorSpeechStoreSaveUnlockedIds([
    ...amznkaWrriorSpeechStoreUnlocked,
    amznkaWrriorSpeechStoreItemId,
  ]);
  return {ok: true, balance: amznkaWrriorSpeechStoreNextBalance};
};
