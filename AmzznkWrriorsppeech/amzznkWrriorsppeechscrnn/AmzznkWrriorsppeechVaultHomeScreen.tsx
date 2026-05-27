import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';
import {
  amzznkWrriorsppeechVaultCategories,
  amzznkWrriorsppeechVaultCountOwnedInRealm,
  amzznkWrriorsppeechVaultPiecesForRealm,
  amzznkWrriorsppeechVaultTotalCount,
  type AmzznkWrriorsppeechVaultRealmId,
  type AmzznkWrriorsppeechVaultPiece,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultCatalog';
import {
  amzznkWrriorsppeechVaultLoadBalance,
  amzznkWrriorsppeechVaultLoadUnlockedIds,
  amzznkWrriorsppeechVaultUnlockItem,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultStorage';

const amzznkWrriorsppeechVaultBtnGradient = [
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

const amzznkWrriorsppeechVaultBalanceGradient = [
  'rgba(255, 153, 0, 0.2)',
  'rgba(255, 107, 53, 0.1)',
];

export function AmzznkWrriorsppeechVaultHomeScreen() {
  const amzznkWrriorsppeechVaultInsets = useSafeAreaInsets();
  const [vaultCategory, setVaultCategory] =
    useState<AmzznkWrriorsppeechVaultRealmId>('warrior');
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

  const amzznkWrriorsppeechVaultReload = useCallback(async () => {
    const [amzznkWrriorsppeechVaultBal, amzznkWrriorsppeechVaultIds] =
      await Promise.all([
        amzznkWrriorsppeechVaultLoadBalance(),
        amzznkWrriorsppeechVaultLoadUnlockedIds(),
      ]);
    setVaultBalance(amzznkWrriorsppeechVaultBal);
    setVaultUnlockedIds(amzznkWrriorsppeechVaultIds);
  }, []);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechVaultReload();
    }, [amzznkWrriorsppeechVaultReload]),
  );

  const amzznkWrriorsppeechVaultUnlockedCount =
    vaultUnlockedIds.length;
  const amzznkWrriorsppeechVaultProgress =
    amzznkWrriorsppeechVaultTotalCount > 0
      ? amzznkWrriorsppeechVaultUnlockedCount / amzznkWrriorsppeechVaultTotalCount
      : 0;

  const amzznkWrriorsppeechVaultCategoryItems =
    amzznkWrriorsppeechVaultPiecesForRealm(vaultCategory);

  const amzznkWrriorsppeechVaultHandleUnlock = async (
    amzznkWrriorsppeechVaultPiece: AmzznkWrriorsppeechVaultPiece,
  ) => {
    if (
      vaultUnlockedIds.includes(
        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
      )
    ) {
      return;
    }
    if (
      vaultBalance <
      amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPiecePrice
    ) {
      return;
    }

    const amzznkWrriorsppeechVaultResult =
      await amzznkWrriorsppeechVaultUnlockItem(
        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPiecePrice,
      );

    if (amzznkWrriorsppeechVaultResult.ok) {
      setVaultBalance(amzznkWrriorsppeechVaultResult.balance);
      const amzznkWrriorsppeechVaultIds =
        await amzznkWrriorsppeechVaultLoadUnlockedIds();
      setVaultUnlockedIds(amzznkWrriorsppeechVaultIds);
      Alert.alert(
        'Unlocked!',
        `${amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceTitle} is now available in Lab & Flow.`,
      );
    }
  };

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechVaultContent,
          {paddingTop: amzznkWrriorsppeechVaultInsets.top + 16},
        ]}>
        <Text style={styles.amzznkWrriorsppeechVaultKicker}>Amazonka Voice</Text>
        <Text style={styles.amzznkWrriorsppeechVaultTitle}>Text Vault</Text>
        <Text style={styles.amzznkWrriorsppeechVaultSubtitle}>
          Trade your collected swords for bonus warrior texts
        </Text>

        <LinearGradient
          colors={amzznkWrriorsppeechVaultBalanceGradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.amzznkWrriorsppeechVaultBalanceCard}>
          <View style={{padding: 16}}>
            <View style={styles.amzznkWrriorsppeechVaultBalanceTop}>
              <View>
                <Text style={styles.amzznkWrriorsppeechVaultBalanceLabel}>
                  Your Balance
                </Text>
                <View style={styles.amzznkWrriorsppeechVaultBalanceRow}>
                  <Text style={styles.amzznkWrriorsppeechVaultBalanceToken}>
                    ✦
                  </Text>
                  <Text style={styles.amzznkWrriorsppeechVaultBalanceValue}>
                    {vaultBalance}
                  </Text>
                  <Text style={styles.amzznkWrriorsppeechVaultBalanceUnit}>
                    swords
                  </Text>
                </View>
              </View>
              <View style={styles.amzznkWrriorsppeechVaultUnlockedCol}>
                <Text style={styles.amzznkWrriorsppeechVaultBalanceLabel}>
                  Unlocked
                </Text>
                <Text style={styles.amzznkWrriorsppeechVaultUnlockedValue}>
                  {amzznkWrriorsppeechVaultUnlockedCount}/
                  {amzznkWrriorsppeechVaultTotalCount}
                </Text>
                <Text style={styles.amzznkWrriorsppeechVaultUnlockedUnit}>
                  texts
                </Text>
              </View>
            </View>
            <View style={styles.amzznkWrriorsppeechVaultProgressTrack}>
              <LinearGradient
                colors={amzznkWrriorsppeechVaultBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                  styles.amzznkWrriorsppeechVaultProgressFill,
                  {
                    width: `${Math.max(
                      4,
                      amzznkWrriorsppeechVaultProgress * 100,
                    )}%`,
                  },
                ]}
              />
            </View>
            {vaultHintVisible && (
              <Pressable
                onPress={() => setVaultHintVisible(false)}
                style={styles.amzznkWrriorsppeechVaultHintRow}>
                <Text style={styles.amzznkWrriorsppeechVaultHint}>
                  Collect swords by answering trials ✦
                </Text>
              </Pressable>
            )}
          </View>
        </LinearGradient>

        <View style={styles.amzznkWrriorsppeechVaultTabsRow}>
          {amzznkWrriorsppeechVaultCategories.map(
            amzznkWrriorsppeechVaultCategoryItem => {
              const amzznkWrriorsppeechVaultIsActive =
                amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryId ===
                vaultCategory;
              const amzznkWrriorsppeechVaultOwned =
                amzznkWrriorsppeechVaultCountOwnedInRealm(
                  vaultUnlockedIds,
                  amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryId,
                );
              const amzznkWrriorsppeechVaultCategoryTotal =
                amzznkWrriorsppeechVaultPiecesForRealm(
                  amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryId,
                ).length;

              return (
                <Pressable
                  key={
                    amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryId
                  }
                  onPress={() =>
                    setVaultCategory(
                      amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryId,
                    )
                  }
                  style={[
                    styles.amzznkWrriorsppeechVaultTab,
                    amzznkWrriorsppeechVaultIsActive &&
                      styles.amzznkWrriorsppeechVaultTabActive,
                  ]}>
                  <Text
                    style={[
                      styles.amzznkWrriorsppeechVaultTabEmoji,
                      amzznkWrriorsppeechVaultIsActive &&
                        styles.amzznkWrriorsppeechVaultTabEmojiActive,
                    ]}>
                    {
                      amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryEmoji
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amzznkWrriorsppeechVaultTabLabel,
                      amzznkWrriorsppeechVaultIsActive &&
                        styles.amzznkWrriorsppeechVaultTabLabelActive,
                    ]}>
                    {
                      amzznkWrriorsppeechVaultCategoryItem.amzznkWrriorsppeechVaultCategoryTabLabel
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amzznkWrriorsppeechVaultTabOwned,
                      amzznkWrriorsppeechVaultIsActive &&
                        styles.amzznkWrriorsppeechVaultTabOwnedActive,
                    ]}>
                    {amzznkWrriorsppeechVaultOwned}/
                    {amzznkWrriorsppeechVaultCategoryTotal} owned
                  </Text>
                </Pressable>
              );
            },
          )}
        </View>

        {amzznkWrriorsppeechVaultCategoryItems.map(
          amzznkWrriorsppeechVaultPiece => {
            const amzznkWrriorsppeechVaultIsOwned =
              vaultUnlockedIds.includes(
                amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId,
              );
            const amzznkWrriorsppeechVaultCanAfford =
              vaultBalance >=
              amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPiecePrice;
            const amzznkWrriorsppeechVaultShortfall = Math.max(
              0,
              amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPiecePrice -
                vaultBalance,
            );

            return (
              <View
                key={amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceId}
                style={[
                  styles.amzznkWrriorsppeechVaultPieceCard,
                  amzznkWrriorsppeechVaultIsOwned &&
                    styles.amzznkWrriorsppeechVaultPieceCardOwned,
                ]}>
                {amzznkWrriorsppeechVaultIsOwned && (
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
                <View style={styles.amzznkWrriorsppeechVaultPieceHeader}>
                  <View style={styles.amzznkWrriorsppeechVaultPieceIconWrap}>
                    <Text style={styles.amzznkWrriorsppeechVaultPieceIcon}>
                      {
                        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceEmoji
                      }
                    </Text>
                  </View>
                  <View style={styles.amzznkWrriorsppeechVaultPieceTitleCol}>
                    <View style={styles.amzznkWrriorsppeechVaultPieceTitleRow}>
                      <Text
                        style={styles.amzznkWrriorsppeechVaultPieceTitle}
                        numberOfLines={1}>
                        {amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPieceTitle.toUpperCase()}
                      </Text>
                      {amzznkWrriorsppeechVaultIsOwned && (
                        <View style={styles.amzznkWrriorsppeechVaultOwnedBadge}>
                          <Text
                            style={
                              styles.amzznkWrriorsppeechVaultOwnedBadgeText
                            }>
                            ✓ Owned
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text
                      style={styles.amzznkWrriorsppeechVaultPiecePreview}
                      numberOfLines={3}>
                      {
                        amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPiecePreview
                      }
                    </Text>
                  </View>
                </View>

                <View style={styles.amzznkWrriorsppeechVaultPieceFooter}>
                  <View style={styles.amzznkWrriorsppeechVaultPriceRow}>
                    <View style={styles.amzznkWrriorsppeechVaultPricePill}>
                      <Text style={styles.amzznkWrriorsppeechVaultPriceToken}>
                        ✦
                      </Text>
                      <Text style={styles.amzznkWrriorsppeechVaultPriceValue}>
                        {
                          amzznkWrriorsppeechVaultPiece.amzznkWrriorsppeechVaultPiecePrice
                        }
                      </Text>
                    </View>
                    <Text style={styles.amzznkWrriorsppeechVaultPriceUnit}>
                      swords
                    </Text>
                  </View>

                  {amzznkWrriorsppeechVaultIsOwned ? (
                    <Text style={styles.amzznkWrriorsppeechVaultAddedNote}>
                      Added to Lab & Flow
                    </Text>
                  ) : amzznkWrriorsppeechVaultCanAfford ? (
                    <Pressable
                      onPress={() =>
                        amzznkWrriorsppeechVaultHandleUnlock(
                          amzznkWrriorsppeechVaultPiece,
                        )
                      }
                      style={({pressed}) => [
                        styles.amzznkWrriorsppeechVaultUnlockWrap,
                        pressed && {opacity: 0.9},
                      ]}>
                      <LinearGradient
                        colors={amzznkWrriorsppeechVaultBtnGradient}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.amzznkWrriorsppeechVaultUnlockBtn}>
                        <Text style={styles.amzznkWrriorsppeechVaultUnlockText}>
                          Unlock with swords
                        </Text>
                      </LinearGradient>
                    </Pressable>
                  ) : (
                    <View style={styles.amzznkWrriorsppeechVaultLockedBtn}>
                      <Image
                        source={require('../../assets/images/amzznkWrriorsppeechVaultUnlock.png')}
                      />
                      <Text style={styles.amzznkWrriorsppeechVaultLockedText}>
                        {amzznkWrriorsppeechVaultShortfall} more
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        )}
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechVaultContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amzznkWrriorsppeechVaultKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amzznkWrriorsppeechVaultTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechVaultSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amzznkWrriorsppeechVaultBalanceCard: {
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.3)',
    marginBottom: 20,
    overflow: 'hidden',
  },
  amzznkWrriorsppeechVaultBalanceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  amzznkWrriorsppeechVaultBalanceLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  amzznkWrriorsppeechVaultBalanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  amzznkWrriorsppeechVaultBalanceToken: {
    fontSize: 18,
  },
  amzznkWrriorsppeechVaultBalanceValue: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF9900',
  },
  amzznkWrriorsppeechVaultBalanceUnit: {
    fontSize: 14,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechVaultUnlockedCol: {
    alignItems: 'flex-end',
  },
  amzznkWrriorsppeechVaultUnlockedValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechVaultUnlockedUnit: {
    fontSize: 10,
    color: '#9B8E8F',
    textAlign: 'right',
  },
  amzznkWrriorsppeechVaultProgressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(35, 31, 32, 0.6)',
    overflow: 'hidden',
    marginBottom: 8,
  },
  amzznkWrriorsppeechVaultProgressFill: {
    height: '100%',
    borderRadius: 3,
    minWidth: 4,
  },
  amzznkWrriorsppeechVaultHintRow: {
    marginTop: 4,
  },
  amzznkWrriorsppeechVaultHint: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechVaultTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amzznkWrriorsppeechVaultTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  amzznkWrriorsppeechVaultTabActive: {
    backgroundColor: '#FF6B35',
    borderColor: 'transparent',
  },
  amzznkWrriorsppeechVaultTabEmoji: {
    fontSize: 16,
    color: '#9B8E8F',
    marginBottom: 2,
  },
  amzznkWrriorsppeechVaultTabEmojiActive: {
    color: '#000000',
  },
  amzznkWrriorsppeechVaultTabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechVaultTabLabelActive: {
    color: '#000000',
  },
  amzznkWrriorsppeechVaultTabOwned: {
    fontSize: 9,
    color: 'rgba(155, 142, 143, 0.6)',
    marginTop: 2,
  },
  amzznkWrriorsppeechVaultTabOwnedActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  amzznkWrriorsppeechVaultPieceCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  amzznkWrriorsppeechVaultPieceCardOwned: {
    borderColor: 'rgba(255, 153, 0, 0.5)',
  },
  amzznkWrriorsppeechVaultPieceHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  amzznkWrriorsppeechVaultPieceIconWrap: {
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
  amzznkWrriorsppeechVaultPieceIcon: {
    fontSize: 24,
  },
  amzznkWrriorsppeechVaultPieceTitleCol: {
    flex: 1,
  },
  amzznkWrriorsppeechVaultPieceTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 6,
  },
  amzznkWrriorsppeechVaultPieceTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechVaultOwnedBadge: {
    backgroundColor: 'rgba(13, 84, 43, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  amzznkWrriorsppeechVaultOwnedBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#05DF72',
  },
  amzznkWrriorsppeechVaultPiecePreview: {
    fontSize: 11,
    lineHeight: 18,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechVaultPieceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1.1,
    borderTopColor: 'rgba(255, 153, 0, 0.07)',
    paddingTop: 12,
    gap: 8,
  },
  amzznkWrriorsppeechVaultPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  amzznkWrriorsppeechVaultPricePill: {
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
  amzznkWrriorsppeechVaultPriceToken: {
    fontSize: 10,
  },
  amzznkWrriorsppeechVaultPriceValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF9900',
  },
  amzznkWrriorsppeechVaultPriceUnit: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechVaultAddedNote: {
    flex: 1,
    fontSize: 10,
    fontStyle: 'italic',
    color: '#9B8E8F',
    textAlign: 'right',
  },
  amzznkWrriorsppeechVaultUnlockWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  amzznkWrriorsppeechVaultUnlockBtn: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 110,
    alignItems: 'center',
  },
  amzznkWrriorsppeechVaultUnlockText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    color: '#000000',
  },
  amzznkWrriorsppeechVaultLockedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#3A3435',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    opacity: 0.6,
  },
  amzznkWrriorsppeechVaultLockedIcon: {
    fontSize: 10,
  },
  amzznkWrriorsppeechVaultLockedText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
  },
});
