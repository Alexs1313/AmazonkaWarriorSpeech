import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';
import {
  amznkaWrriorSpeechStoreCategories,
  amznkaWrriorSpeechStoreCountOwnedInCategory,
  amznkaWrriorSpeechStoreGetItemsForCategory,
  amznkaWrriorSpeechStoreTotalCount,
  type AmznkaWrriorSpeechStoreCategoryId,
  type AmznkaWrriorSpeechStoreItem,
} from './AmznkaWrriorSpeechStoreData';
import {
  amznkaWrriorSpeechStoreLoadBalance,
  amznkaWrriorSpeechStoreLoadUnlockedIds,
  amznkaWrriorSpeechStoreUnlockItem,
} from './AmznkaWrriorSpeechStoreStorage';

const amznkaWrriorSpeechStoreBtnGradient = [
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

const amznkaWrriorSpeechStoreBalanceGradient = [
  'rgba(255, 153, 0, 0.2)',
  'rgba(255, 107, 53, 0.1)',
];

const AmznkaWrriorSpeechStoreHome = () => {
  const amznkaWrriorSpeechStoreInsets = useSafeAreaInsets();
  const [amznkaWrriorSpeechStoreCategory, setAmznkaWrriorSpeechStoreCategory] =
    useState<AmznkaWrriorSpeechStoreCategoryId>('warrior');
  const [amznkaWrriorSpeechStoreBalance, setAmznkaWrriorSpeechStoreBalance] =
    useState(0);
  const [
    amznkaWrriorSpeechStoreUnlockedIds,
    setAmznkaWrriorSpeechStoreUnlockedIds,
  ] = useState<string[]>([]);
  const [
    amznkaWrriorSpeechStoreHintVisible,
    setAmznkaWrriorSpeechStoreHintVisible,
  ] = useState(true);

  const amznkaWrriorSpeechStoreReload = useCallback(async () => {
    const [amznkaWrriorSpeechStoreBal, amznkaWrriorSpeechStoreIds] =
      await Promise.all([
        amznkaWrriorSpeechStoreLoadBalance(),
        amznkaWrriorSpeechStoreLoadUnlockedIds(),
      ]);
    setAmznkaWrriorSpeechStoreBalance(amznkaWrriorSpeechStoreBal);
    setAmznkaWrriorSpeechStoreUnlockedIds(amznkaWrriorSpeechStoreIds);
  }, []);

  useFocusEffect(
    useCallback(() => {
      amznkaWrriorSpeechStoreReload();
    }, [amznkaWrriorSpeechStoreReload]),
  );

  const amznkaWrriorSpeechStoreUnlockedCount =
    amznkaWrriorSpeechStoreUnlockedIds.length;
  const amznkaWrriorSpeechStoreProgress =
    amznkaWrriorSpeechStoreTotalCount > 0
      ? amznkaWrriorSpeechStoreUnlockedCount / amznkaWrriorSpeechStoreTotalCount
      : 0;

  const amznkaWrriorSpeechStoreCategoryItems =
    amznkaWrriorSpeechStoreGetItemsForCategory(amznkaWrriorSpeechStoreCategory);

  const amznkaWrriorSpeechStoreHandleUnlock = async (
    amznkaWrriorSpeechStoreItem: AmznkaWrriorSpeechStoreItem,
  ) => {
    if (
      amznkaWrriorSpeechStoreUnlockedIds.includes(
        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
      )
    ) {
      return;
    }
    if (
      amznkaWrriorSpeechStoreBalance <
      amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemPrice
    ) {
      return;
    }

    const amznkaWrriorSpeechStoreResult =
      await amznkaWrriorSpeechStoreUnlockItem(
        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemPrice,
      );

    if (amznkaWrriorSpeechStoreResult.ok) {
      setAmznkaWrriorSpeechStoreBalance(amznkaWrriorSpeechStoreResult.balance);
      const amznkaWrriorSpeechStoreIds =
        await amznkaWrriorSpeechStoreLoadUnlockedIds();
      setAmznkaWrriorSpeechStoreUnlockedIds(amznkaWrriorSpeechStoreIds);
      Alert.alert(
        'Unlocked!',
        `${amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemTitle} is now available in Workshop & Sufleur.`,
      );
    }
  };

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechStoreContent,
          {paddingTop: amznkaWrriorSpeechStoreInsets.top + 16},
        ]}>
        <Text style={styles.amznkaWrriorSpeechStoreKicker}>Amazon Voice</Text>
        <Text style={styles.amznkaWrriorSpeechStoreTitle}>Text Store</Text>
        <Text style={styles.amznkaWrriorSpeechStoreSubtitle}>
          Exchange your earned swords for premium warrior texts
        </Text>

        <LinearGradient
          colors={amznkaWrriorSpeechStoreBalanceGradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.amznkaWrriorSpeechStoreBalanceCard}>
          <View style={{padding: 16}}>
            <View style={styles.amznkaWrriorSpeechStoreBalanceTop}>
              <View>
                <Text style={styles.amznkaWrriorSpeechStoreBalanceLabel}>
                  Your Balance
                </Text>
                <View style={styles.amznkaWrriorSpeechStoreBalanceRow}>
                  <Text style={styles.amznkaWrriorSpeechStoreBalanceSword}>
                    🗡️
                  </Text>
                  <Text style={styles.amznkaWrriorSpeechStoreBalanceValue}>
                    {amznkaWrriorSpeechStoreBalance}
                  </Text>
                  <Text style={styles.amznkaWrriorSpeechStoreBalanceUnit}>
                    swords
                  </Text>
                </View>
              </View>
              <View style={styles.amznkaWrriorSpeechStoreUnlockedCol}>
                <Text style={styles.amznkaWrriorSpeechStoreBalanceLabel}>
                  Unlocked
                </Text>
                <Text style={styles.amznkaWrriorSpeechStoreUnlockedValue}>
                  {amznkaWrriorSpeechStoreUnlockedCount}/
                  {amznkaWrriorSpeechStoreTotalCount}
                </Text>
                <Text style={styles.amznkaWrriorSpeechStoreUnlockedUnit}>
                  texts
                </Text>
              </View>
            </View>
            <View style={styles.amznkaWrriorSpeechStoreProgressTrack}>
              <LinearGradient
                colors={amznkaWrriorSpeechStoreBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                  styles.amznkaWrriorSpeechStoreProgressFill,
                  {
                    width: `${Math.max(
                      4,
                      amznkaWrriorSpeechStoreProgress * 100,
                    )}%`,
                  },
                ]}
              />
            </View>
            {amznkaWrriorSpeechStoreHintVisible && (
              <Pressable
                onPress={() => setAmznkaWrriorSpeechStoreHintVisible(false)}
                style={styles.amznkaWrriorSpeechStoreHintRow}>
                <Text style={styles.amznkaWrriorSpeechStoreHint}>
                  Earn swords by answering riddles ⚔️
                </Text>
              </Pressable>
            )}
          </View>
        </LinearGradient>

        <View style={styles.amznkaWrriorSpeechStoreTabsRow}>
          {amznkaWrriorSpeechStoreCategories.map(
            amznkaWrriorSpeechStoreCategoryItem => {
              const amznkaWrriorSpeechStoreIsActive =
                amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryId ===
                amznkaWrriorSpeechStoreCategory;
              const amznkaWrriorSpeechStoreOwned =
                amznkaWrriorSpeechStoreCountOwnedInCategory(
                  amznkaWrriorSpeechStoreUnlockedIds,
                  amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryId,
                );
              const amznkaWrriorSpeechStoreCategoryTotal =
                amznkaWrriorSpeechStoreGetItemsForCategory(
                  amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryId,
                ).length;

              return (
                <Pressable
                  key={
                    amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryId
                  }
                  onPress={() =>
                    setAmznkaWrriorSpeechStoreCategory(
                      amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryId,
                    )
                  }
                  style={[
                    styles.amznkaWrriorSpeechStoreTab,
                    amznkaWrriorSpeechStoreIsActive &&
                      styles.amznkaWrriorSpeechStoreTabActive,
                  ]}>
                  <Text
                    style={[
                      styles.amznkaWrriorSpeechStoreTabEmoji,
                      amznkaWrriorSpeechStoreIsActive &&
                        styles.amznkaWrriorSpeechStoreTabEmojiActive,
                    ]}>
                    {
                      amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryEmoji
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amznkaWrriorSpeechStoreTabLabel,
                      amznkaWrriorSpeechStoreIsActive &&
                        styles.amznkaWrriorSpeechStoreTabLabelActive,
                    ]}>
                    {
                      amznkaWrriorSpeechStoreCategoryItem.amznkaWrriorSpeechStoreCategoryTabLabel
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amznkaWrriorSpeechStoreTabOwned,
                      amznkaWrriorSpeechStoreIsActive &&
                        styles.amznkaWrriorSpeechStoreTabOwnedActive,
                    ]}>
                    {amznkaWrriorSpeechStoreOwned}/
                    {amznkaWrriorSpeechStoreCategoryTotal} owned
                  </Text>
                </Pressable>
              );
            },
          )}
        </View>

        {amznkaWrriorSpeechStoreCategoryItems.map(
          amznkaWrriorSpeechStoreItem => {
            const amznkaWrriorSpeechStoreIsOwned =
              amznkaWrriorSpeechStoreUnlockedIds.includes(
                amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId,
              );
            const amznkaWrriorSpeechStoreCanAfford =
              amznkaWrriorSpeechStoreBalance >=
              amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemPrice;
            const amznkaWrriorSpeechStoreShortfall = Math.max(
              0,
              amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemPrice -
                amznkaWrriorSpeechStoreBalance,
            );

            return (
              <View
                key={amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemId}
                style={[
                  styles.amznkaWrriorSpeechStoreItemCard,
                  amznkaWrriorSpeechStoreIsOwned &&
                    styles.amznkaWrriorSpeechStoreItemCardOwned,
                ]}>
                {amznkaWrriorSpeechStoreIsOwned && (
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
                <View style={styles.amznkaWrriorSpeechStoreItemHeader}>
                  <View style={styles.amznkaWrriorSpeechStoreItemIconWrap}>
                    <Text style={styles.amznkaWrriorSpeechStoreItemIcon}>
                      {
                        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemEmoji
                      }
                    </Text>
                  </View>
                  <View style={styles.amznkaWrriorSpeechStoreItemTitleCol}>
                    <View style={styles.amznkaWrriorSpeechStoreItemTitleRow}>
                      <Text
                        style={styles.amznkaWrriorSpeechStoreItemTitle}
                        numberOfLines={1}>
                        {amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemTitle.toUpperCase()}
                      </Text>
                      {amznkaWrriorSpeechStoreIsOwned && (
                        <View style={styles.amznkaWrriorSpeechStoreOwnedBadge}>
                          <Text
                            style={
                              styles.amznkaWrriorSpeechStoreOwnedBadgeText
                            }>
                            ✓ Owned
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text
                      style={styles.amznkaWrriorSpeechStoreItemPreview}
                      numberOfLines={3}>
                      {
                        amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemPreview
                      }
                    </Text>
                  </View>
                </View>

                <View style={styles.amznkaWrriorSpeechStoreItemFooter}>
                  <View style={styles.amznkaWrriorSpeechStorePriceRow}>
                    <View style={styles.amznkaWrriorSpeechStorePricePill}>
                      <Text style={styles.amznkaWrriorSpeechStorePriceSword}>
                        🗡️
                      </Text>
                      <Text style={styles.amznkaWrriorSpeechStorePriceValue}>
                        {
                          amznkaWrriorSpeechStoreItem.amznkaWrriorSpeechStoreItemPrice
                        }
                      </Text>
                    </View>
                    <Text style={styles.amznkaWrriorSpeechStorePriceUnit}>
                      swords
                    </Text>
                  </View>

                  {amznkaWrriorSpeechStoreIsOwned ? (
                    <Text style={styles.amznkaWrriorSpeechStoreAddedNote}>
                      Added to Workshop & Sufleur
                    </Text>
                  ) : amznkaWrriorSpeechStoreCanAfford ? (
                    <Pressable
                      onPress={() =>
                        amznkaWrriorSpeechStoreHandleUnlock(
                          amznkaWrriorSpeechStoreItem,
                        )
                      }
                      style={({pressed}) => [
                        styles.amznkaWrriorSpeechStoreUnlockWrap,
                        pressed && {opacity: 0.9},
                      ]}>
                      <LinearGradient
                        colors={amznkaWrriorSpeechStoreBtnGradient}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.amznkaWrriorSpeechStoreUnlockBtn}>
                        <Text style={styles.amznkaWrriorSpeechStoreUnlockText}>
                          Unlock Now
                        </Text>
                      </LinearGradient>
                    </Pressable>
                  ) : (
                    <View style={styles.amznkaWrriorSpeechStoreLockedBtn}>
                      <Image
                        source={require('../../assets/i/amznkawrtloc.png')}
                      />
                      <Text style={styles.amznkaWrriorSpeechStoreLockedText}>
                        {amznkaWrriorSpeechStoreShortfall} more
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        )}
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechStoreHome;

const styles = StyleSheet.create({
  amznkaWrriorSpeechStoreContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amznkaWrriorSpeechStoreKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amznkaWrriorSpeechStoreTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechStoreSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amznkaWrriorSpeechStoreBalanceCard: {
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.3)',
    marginBottom: 20,
    overflow: 'hidden',
  },
  amznkaWrriorSpeechStoreBalanceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  amznkaWrriorSpeechStoreBalanceLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#9B8E8F',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  amznkaWrriorSpeechStoreBalanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  amznkaWrriorSpeechStoreBalanceSword: {
    fontSize: 18,
  },
  amznkaWrriorSpeechStoreBalanceValue: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF9900',
  },
  amznkaWrriorSpeechStoreBalanceUnit: {
    fontSize: 14,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStoreUnlockedCol: {
    alignItems: 'flex-end',
  },
  amznkaWrriorSpeechStoreUnlockedValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechStoreUnlockedUnit: {
    fontSize: 10,
    color: '#9B8E8F',
    textAlign: 'right',
  },
  amznkaWrriorSpeechStoreProgressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(35, 31, 32, 0.6)',
    overflow: 'hidden',
    marginBottom: 8,
  },
  amznkaWrriorSpeechStoreProgressFill: {
    height: '100%',
    borderRadius: 3,
    minWidth: 4,
  },
  amznkaWrriorSpeechStoreHintRow: {
    marginTop: 4,
  },
  amznkaWrriorSpeechStoreHint: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStoreTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amznkaWrriorSpeechStoreTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  amznkaWrriorSpeechStoreTabActive: {
    backgroundColor: '#FF6B35',
    borderColor: 'transparent',
  },
  amznkaWrriorSpeechStoreTabEmoji: {
    fontSize: 16,
    color: '#9B8E8F',
    marginBottom: 2,
  },
  amznkaWrriorSpeechStoreTabEmojiActive: {
    color: '#000000',
  },
  amznkaWrriorSpeechStoreTabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStoreTabLabelActive: {
    color: '#000000',
  },
  amznkaWrriorSpeechStoreTabOwned: {
    fontSize: 9,
    color: 'rgba(155, 142, 143, 0.6)',
    marginTop: 2,
  },
  amznkaWrriorSpeechStoreTabOwnedActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  amznkaWrriorSpeechStoreItemCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  amznkaWrriorSpeechStoreItemCardOwned: {
    borderColor: 'rgba(255, 153, 0, 0.5)',
  },
  amznkaWrriorSpeechStoreItemHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  amznkaWrriorSpeechStoreItemIconWrap: {
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
  amznkaWrriorSpeechStoreItemIcon: {
    fontSize: 24,
  },
  amznkaWrriorSpeechStoreItemTitleCol: {
    flex: 1,
  },
  amznkaWrriorSpeechStoreItemTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 6,
  },
  amznkaWrriorSpeechStoreItemTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechStoreOwnedBadge: {
    backgroundColor: 'rgba(13, 84, 43, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  amznkaWrriorSpeechStoreOwnedBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#05DF72',
  },
  amznkaWrriorSpeechStoreItemPreview: {
    fontSize: 11,
    lineHeight: 18,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStoreItemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1.1,
    borderTopColor: 'rgba(255, 153, 0, 0.07)',
    paddingTop: 12,
    gap: 8,
  },
  amznkaWrriorSpeechStorePriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  amznkaWrriorSpeechStorePricePill: {
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
  amznkaWrriorSpeechStorePriceSword: {
    fontSize: 10,
  },
  amznkaWrriorSpeechStorePriceValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF9900',
  },
  amznkaWrriorSpeechStorePriceUnit: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechStoreAddedNote: {
    flex: 1,
    fontSize: 10,
    fontStyle: 'italic',
    color: '#9B8E8F',
    textAlign: 'right',
  },
  amznkaWrriorSpeechStoreUnlockWrap: {
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  amznkaWrriorSpeechStoreUnlockBtn: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 110,
    alignItems: 'center',
  },
  amznkaWrriorSpeechStoreUnlockText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    color: '#000000',
  },
  amznkaWrriorSpeechStoreLockedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#3A3435',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    opacity: 0.6,
  },
  amznkaWrriorSpeechStoreLockedIcon: {
    fontSize: 10,
  },
  amznkaWrriorSpeechStoreLockedText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
  },
});
