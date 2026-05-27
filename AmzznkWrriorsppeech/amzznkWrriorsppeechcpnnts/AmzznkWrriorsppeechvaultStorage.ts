import AsyncStorage from '@react-native-async-storage/async-storage';

const amzznkWrriorsppeechVaultBalanceKey = 'vaultBalance';
const amzznkWrriorsppeechVaultUnlockedKey = 'vaultUnlocked';

export const amzznkWrriorsppeechVaultLoadBalance = async (): Promise<number> => {
  try {
    const amzznkWrriorsppeechVaultRaw = await AsyncStorage.getItem(
      amzznkWrriorsppeechVaultBalanceKey,
    );
    if (!amzznkWrriorsppeechVaultRaw) {
      return 0;
    }
    const amzznkWrriorsppeechVaultParsed = Number(amzznkWrriorsppeechVaultRaw);
    return Number.isFinite(amzznkWrriorsppeechVaultParsed)
      ? Math.max(0, amzznkWrriorsppeechVaultParsed)
      : 0;
  } catch {
    return 0;
  }
};

export const amzznkWrriorsppeechVaultSaveBalance = async (
  vaultBalance: number,
) => {
  await AsyncStorage.setItem(
    amzznkWrriorsppeechVaultBalanceKey,
    String(Math.max(0, vaultBalance)),
  );
};

export const amzznkWrriorsppeechVaultAddTokens = async (
  amzznkWrriorsppeechVaultAmount: number,
) => {
  if (amzznkWrriorsppeechVaultAmount <= 0) {
    return amzznkWrriorsppeechVaultLoadBalance();
  }
  const amzznkWrriorsppeechVaultCurrent =
    await amzznkWrriorsppeechVaultLoadBalance();
  const amzznkWrriorsppeechVaultNext =
    amzznkWrriorsppeechVaultCurrent + amzznkWrriorsppeechVaultAmount;
  await amzznkWrriorsppeechVaultSaveBalance(amzznkWrriorsppeechVaultNext);
  return amzznkWrriorsppeechVaultNext;
};

export const amzznkWrriorsppeechVaultLoadUnlockedIds = async (): Promise<
  string[]
> => {
  try {
    const amzznkWrriorsppeechVaultRaw = await AsyncStorage.getItem(
      amzznkWrriorsppeechVaultUnlockedKey,
    );
    if (!amzznkWrriorsppeechVaultRaw) {
      return [];
    }
    const amzznkWrriorsppeechVaultParsed = JSON.parse(
      amzznkWrriorsppeechVaultRaw,
    ) as string[];
    return Array.isArray(amzznkWrriorsppeechVaultParsed)
      ? amzznkWrriorsppeechVaultParsed
      : [];
  } catch {
    return [];
  }
};

export const amzznkWrriorsppeechVaultSaveUnlockedIds = async (
  vaultUnlockedIds: string[],
) => {
  await AsyncStorage.setItem(
    amzznkWrriorsppeechVaultUnlockedKey,
    JSON.stringify(vaultUnlockedIds),
  );
};

export const amzznkWrriorsppeechVaultUnlockItem = async (
  amzznkWrriorsppeechVaultPieceId: string,
  amzznkWrriorsppeechVaultPrice: number,
): Promise<{ok: boolean; balance: number}> => {
  const amzznkWrriorsppeechVaultUnlocked =
    await amzznkWrriorsppeechVaultLoadUnlockedIds();
  if (amzznkWrriorsppeechVaultUnlocked.includes(amzznkWrriorsppeechVaultPieceId)) {
    const vaultBalance =
      await amzznkWrriorsppeechVaultLoadBalance();
    return {ok: true, balance: vaultBalance};
  }

  const vaultBalance =
    await amzznkWrriorsppeechVaultLoadBalance();
  if (vaultBalance < amzznkWrriorsppeechVaultPrice) {
    return {ok: false, balance: vaultBalance};
  }

  const amzznkWrriorsppeechVaultNextBalance =
    vaultBalance - amzznkWrriorsppeechVaultPrice;
  await amzznkWrriorsppeechVaultSaveBalance(amzznkWrriorsppeechVaultNextBalance);
  await amzznkWrriorsppeechVaultSaveUnlockedIds([
    ...amzznkWrriorsppeechVaultUnlocked,
    amzznkWrriorsppeechVaultPieceId,
  ]);
  return {ok: true, balance: amzznkWrriorsppeechVaultNextBalance};
};
