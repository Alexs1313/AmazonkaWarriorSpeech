import AsyncStorage from '@react-native-async-storage/async-storage';

const vaultBalanceKey = 'vaultBalance';
const vaultUnlockedKey = 'vaultUnlocked';

export const vaultLoadBalance = async (): Promise<number> => {
  try {
    const vaultRaw = await AsyncStorage.getItem(
      vaultBalanceKey,
    );
    if (!vaultRaw) {
      return 0;
    }
    const vaultParsed = Number(vaultRaw);
    return Number.isFinite(vaultParsed)
      ? Math.max(0, vaultParsed)
      : 0;
  } catch {
    return 0;
  }
};

export const vaultSaveBalance = async (
  vaultBalance: number,
) => {
  await AsyncStorage.setItem(
    vaultBalanceKey,
    String(Math.max(0, vaultBalance)),
  );
};

export const vaultAddTokens = async (
  vaultAmount: number,
) => {
  if (vaultAmount <= 0) {
    return vaultLoadBalance();
  }
  const vaultCurrent =
    await vaultLoadBalance();
  const vaultNext =
    vaultCurrent + vaultAmount;
  await vaultSaveBalance(vaultNext);
  return vaultNext;
};

export const vaultLoadUnlockedIds = async (): Promise<
  string[]
> => {
  try {
    const vaultRaw = await AsyncStorage.getItem(
      vaultUnlockedKey,
    );
    if (!vaultRaw) {
      return [];
    }
    const vaultParsed = JSON.parse(
      vaultRaw,
    ) as string[];
    return Array.isArray(vaultParsed)
      ? vaultParsed
      : [];
  } catch {
    return [];
  }
};

export const vaultSaveUnlockedIds = async (
  vaultUnlockedIds: string[],
) => {
  await AsyncStorage.setItem(
    vaultUnlockedKey,
    JSON.stringify(vaultUnlockedIds),
  );
};

export const vaultUnlockItem = async (
  vaultPieceId: string,
  vaultPrice: number,
): Promise<{ok: boolean; balance: number}> => {
  const vaultUnlocked =
    await vaultLoadUnlockedIds();
  if (vaultUnlocked.includes(vaultPieceId)) {
    const vaultBalance =
      await vaultLoadBalance();
    return {ok: true, balance: vaultBalance};
  }

  const vaultBalance =
    await vaultLoadBalance();
  if (vaultBalance < vaultPrice) {
    return {ok: false, balance: vaultBalance};
  }

  const vaultNextBalance =
    vaultBalance - vaultPrice;
  await vaultSaveBalance(vaultNextBalance);
  await vaultSaveUnlockedIds([
    ...vaultUnlocked,
    vaultPieceId,
  ]);
  return {ok: true, balance: vaultNextBalance};
};
