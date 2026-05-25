import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SceneShell from '../../components/Shell';
import {
  vaultCategories,
  vaultCountOwnedInRealm,
  vaultPiecesForRealm,
  vaultTotalCount,
  type VaultRealmId,
  type VaultPiece,
} from '../../data/vault';
import {
  vaultLoadBalance,
  vaultLoadUnlockedIds,
  vaultUnlockItem,
} from '../../data/vaultStorage';

const vaultBtnGradient = [
  '#FF9900',
  '#FF960A',
  '#FF9311',
  '#FF9017',
  '#FF8D1C',
  '#FF8A21',
  '#FF8726',
  '#FF842B',
  '#FF8130',
  '#FF7E34',
  '#FF7B38',
  '#FF783C',
  '#FF7540',
  '#FF7244',
  '#FF6B35',
];

const vaultBalanceGradient = [
  'rgba(255, 153, 0, 0.2)',
  'rgba(255, 107, 53, 0.1)',
];

const VaultHomeScreen = () => {
  const vaultInsets = useSafeAreaInsets();
  const [vaultCategory, setVaultCategory] =
    useState<VaultRealmId>('warrior');
  const [vaultBalance, setVaultBalance] =
    useState(0);
  const [
    vaultUnlockedIds,
    setVaultUnlockedIds,
  ] = useState<string[]>([]);
  const [
    vaultHintVisible,
    setVaultHintVisible,
  ] = useState(true);

  const vaultReload = useCallback(async () => {
    const [vaultBal, vaultIds] =
      await Promise.all([
        vaultLoadBalance(),
        vaultLoadUnlockedIds(),
      ]);
    setVaultBalance(vaultBal);
    setVaultUnlockedIds(vaultIds);
  }, []);

  useFocusEffect(
    useCallback(() => {
      vaultReload();
    }, [vaultReload]),
  );

  const vaultUnlockedCount =
    vaultUnlockedIds.length;
  const vaultProgress =
    vaultTotalCount > 0
      ? vaultUnlockedCount / vaultTotalCount
      : 0;

  const vaultCategoryItems =
    vaultPiecesForRealm(vaultCategory);

  const vaultHandleUnlock = async (
    vaultPiece: VaultPiece,
  ) => {
    if (
      vaultUnlockedIds.includes(
        vaultPiece.vaultPieceId,
      )
    ) {
      return;
    }
    if (
      vaultBalance <
      vaultPiece.vaultPiecePrice
    ) {
      return;
    }

    const vaultResult =
      await vaultUnlockItem(
        vaultPiece.vaultPieceId,
        vaultPiece.vaultPiecePrice,
      );

    if (vaultResult.ok) {
      setVaultBalance(vaultResult.balance);
      const vaultIds =
        await vaultLoadUnlockedIds();
      setVaultUnlockedIds(vaultIds);
      Alert.alert(
        'Unlocked!',
        `${vaultPiece.vaultPieceTitle} is now available in Lab & Flow.`,
      );
    }
  };

  return (
    <SceneShell>
      <View
        style={[
          styles.vaultContent,
          {paddingTop: vaultInsets.top + 16},
        ]}>
        <Text style={styles.vaultKicker}>Amazonka Voice</Text>
        <Text style={styles.vaultTitle}>Text Vault</Text>
        <Text style={styles.vaultSubtitle}>
          Trade your collected tokens for premium warrior texts
        </Text>

        <LinearGradient
          colors={vaultBalanceGradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.vaultBalanceCard}>
          <View style={{padding: 16}}>
            <View style={styles.vaultBalanceTop}>
              <View>
                <Text style={styles.vaultBalanceLabel}>
                  Your Balance
                </Text>
                <View style={styles.vaultBalanceRow}>
                  <Text style={styles.vaultBalanceToken}>
                    ✦
                  </Text>
                  <Text style={styles.vaultBalanceValue}>
                    {vaultBalance}
                  </Text>
                  <Text style={styles.vaultBalanceUnit}>
                    tokens
                  </Text>
                </View>
              </View>
              <View style={styles.vaultUnlockedCol}>
                <Text style={styles.vaultBalanceLabel}>
                  Unlocked
                </Text>
                <Text style={styles.vaultUnlockedValue}>
                  {vaultUnlockedCount}/
                  {vaultTotalCount}
                </Text>
                <Text style={styles.vaultUnlockedUnit}>
                  texts
                </Text>
              </View>
            </View>
            <View style={styles.vaultProgressTrack}>
              <LinearGradient
                colors={vaultBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                  styles.vaultProgressFill,
                  {
                    width: `${Math.max(
                      4,
                      vaultProgress * 100,
                    )}%`,
                  },
                ]}
              />
            </View>
            {vaultHintVisible && (
              <Pressable
                onPress={() => setVaultHintVisible(false)}
                style={styles.vaultHintRow}>
                <Text style={styles.vaultHint}>
                  Collect tokens by answering trials ✦
                </Text>
              </Pressable>
            )}
          </View>
        </LinearGradient>

        <View style={styles.vaultTabsRow}>
          {vaultCategories.map(
            vaultCategoryItem => {
              const vaultIsActive =
                vaultCategoryItem.vaultCategoryId ===
                vaultCategory;
              const vaultOwned =
                vaultCountOwnedInRealm(
                  vaultUnlockedIds,
                  vaultCategoryItem.vaultCategoryId,
                );
              const vaultCategoryTotal =
                vaultPiecesForRealm(
                  vaultCategoryItem.vaultCategoryId,
                ).length;

              return (
                <Pressable
                  key={
                    vaultCategoryItem.vaultCategoryId
                  }
                  onPress={() =>
                    setVaultCategory(
                      vaultCategoryItem.vaultCategoryId,
                    )
                  }
                  style={[
                    styles.vaultTab,
                    vaultIsActive &&
                      styles.vaultTabActive,
                  ]}>
                  <Text
                    style={[
                      styles.vaultTabEmoji,
                      vaultIsActive &&
                        styles.vaultTabEmojiActive,
                    ]}>
                    {
                      vaultCategoryItem.vaultCategoryEmoji
                    }
                  </Text>
                  <Text
                    style={[
                      styles.vaultTabLabel,
                      vaultIsActive &&
                        styles.vaultTabLabelActive,
                    ]}>
                    {
                      vaultCategoryItem.vaultCategoryTabLabel
                    }
                  </Text>
                  <Text
                    style={[
                      styles.vaultTabOwned,
                      vaultIsActive &&
                        styles.vaultTabOwnedActive,
                    ]}>
                    {vaultOwned}/
                    {vaultCategoryTotal} owned
                  </Text>
                </Pressable>
              );
            },
          )}
        </View>

        {vaultCategoryItems.map(
          vaultPiece => {
            const vaultIsOwned =
              vaultUnlockedIds.includes(
                vaultPiece.vaultPieceId,
              );
            const vaultCanAfford =
              vaultBalance >=
              vaultPiece.vaultPiecePrice;
            const vaultShortfall = Math.max(
              0,
              vaultPiece.vaultPiecePrice -
                vaultBalance,
            );

            return (
              <View
                key={vaultPiece.vaultPieceId}
                style={[
                  styles.vaultPieceCard,
                  vaultIsOwned &&
                    styles.vaultPieceCardOwned,
                ]}>
                {vaultIsOwned && (
                  <LinearGradient
                    colors={[
                      'rgba(255, 153, 0, 0.1)',
                      'rgba(255, 107, 53, 0.05)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={StyleSheet.absoluteFillObject}
                  />
                )}
                <View style={styles.vaultPieceHeader}>
                  <View style={styles.vaultPieceIconWrap}>
                    <Text style={styles.vaultPieceIcon}>
                      {
                        vaultPiece.vaultPieceEmoji
                      }
                    </Text>
                  </View>
                  <View style={styles.vaultPieceTitleCol}>
                    <View style={styles.vaultPieceTitleRow}>
                      <Text
                        style={styles.vaultPieceTitle}
                        numberOfLines={1}>
                        {vaultPiece.vaultPieceTitle.toUpperCase()}
                      </Text>
                      {vaultIsOwned && (
                        <View style={styles.vaultOwnedBadge}>
                          <Text
                            style={
                              styles.vaultOwnedBadgeText
                            }>
                            ✓ Owned
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text
                      style={styles.vaultPiecePreview}
                      numberOfLines={3}>
                      {
                        vaultPiece.vaultPiecePreview
                      }
                    </Text>
                  </View>
                </View>

                <View style={styles.vaultPieceFooter}>
                  <View style={styles.vaultPriceRow}>
                    <View style={styles.vaultPricePill}>
                      <Text style={styles.vaultPriceToken}>
                        ✦
                      </Text>
                      <Text style={styles.vaultPriceValue}>
                        {
                          vaultPiece.vaultPiecePrice
                        }
                      </Text>
                    </View>
                    <Text style={styles.vaultPriceUnit}>
                      tokens
                    </Text>
                  </View>

                  {vaultIsOwned ? (
                    <Text style={styles.vaultAddedNote}>
                      Added to Lab & Flow
                    </Text>
                  ) : vaultCanAfford ? (
                    <Pressable
                      onPress={() =>
                        vaultHandleUnlock(
                          vaultPiece,
                        )
                      }
                      style={({pressed}) => [
                        styles.vaultUnlockWrap,
                        pressed && {opacity: 0.9},
                      ]}>
                      <LinearGradient
                        colors={vaultBtnGradient}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.vaultUnlockBtn}>
                        <Text style={styles.vaultUnlockText}>
                          Unlock Now
                        </Text>
                      </LinearGradient>
                    </Pressable>
                  ) : (
                    <View style={styles.vaultLockedBtn}>
                      <Image
                        source={require('../../../elements/images/vault-unlock.png')}
                      />
                      <Text style={styles.vaultLockedText}>
                        {vaultShortfall} more
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        )}
      </View>
    </SceneShell>
  );
};

export default VaultHomeScreen;

const styles = StyleSheet.create({
  vaultContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  vaultKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  vaultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  vaultSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  vaultBalanceCard: {
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.3)',
    marginBottom: 20,
    overflow: 'hidden',
  },
  vaultBalanceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  vaultBalanceLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  vaultBalanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  vaultBalanceToken: {
    fontSize: 18,
  },
  vaultBalanceValue: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF9900',
  },
  vaultBalanceUnit: {
    fontSize: 14,
    color: '#9B8E8F',
  },
  vaultUnlockedCol: {
    alignItems: 'flex-end',
  },
  vaultUnlockedValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  vaultUnlockedUnit: {
    fontSize: 10,
    color: '#9B8E8F',
    textAlign: 'right',
  },
  vaultProgressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(35, 31, 32, 0.6)',
    overflow: 'hidden',
    marginBottom: 8,
  },
  vaultProgressFill: {
    height: '100%',
    borderRadius: 3,
    minWidth: 4,
  },
  vaultHintRow: {
    marginTop: 4,
  },
  vaultHint: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  vaultTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  vaultTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  vaultTabActive: {
    backgroundColor: '#FF6B35',
    borderColor: 'transparent',
  },
  vaultTabEmoji: {
    fontSize: 16,
    color: '#9B8E8F',
    marginBottom: 2,
  },
  vaultTabEmojiActive: {
    color: '#000000',
  },
  vaultTabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#9B8E8F',
  },
  vaultTabLabelActive: {
    color: '#000000',
  },
  vaultTabOwned: {
    fontSize: 9,
    color: 'rgba(155, 142, 143, 0.6)',
    marginTop: 2,
  },
  vaultTabOwnedActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  vaultPieceCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  vaultPieceCardOwned: {
    borderColor: 'rgba(255, 153, 0, 0.5)',
  },
  vaultPieceHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  vaultPieceIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 107, 53, 0.13)',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 107, 53, 0.27)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  vaultPieceIcon: {
    fontSize: 24,
  },
  vaultPieceTitleCol: {
    flex: 1,
  },
  vaultPieceTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 6,
  },
  vaultPieceTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  vaultOwnedBadge: {
    backgroundColor: 'rgba(13, 84, 43, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  vaultOwnedBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#05DF72',
  },
  vaultPiecePreview: {
    fontSize: 11,
    lineHeight: 18,
    color: '#9B8E8F',
  },
  vaultPieceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1.1,
    borderTopColor: 'rgba(255, 153, 0, 0.07)',
    paddingTop: 12,
    gap: 8,
  },
  vaultPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  vaultPricePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 153, 0, 0.1)',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  vaultPriceToken: {
    fontSize: 10,
  },
  vaultPriceValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF9900',
  },
  vaultPriceUnit: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  vaultAddedNote: {
    flex: 1,
    fontSize: 10,
    fontStyle: 'italic',
    color: '#9B8E8F',
    textAlign: 'right',
  },
  vaultUnlockWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  vaultUnlockBtn: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 110,
    alignItems: 'center',
  },
  vaultUnlockText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    color: '#000000',
  },
  vaultLockedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#3A3435',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    opacity: 0.6,
  },
  vaultLockedIcon: {
    fontSize: 10,
  },
  vaultLockedText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
  },
});
