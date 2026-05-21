import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';
import AmznkaWrriorSpeechWrkshModal from './AmznkaWrriorSpeechWrkshModal';
import {
  amznkaWrriorSpeechWrkshBuiltInTexts,
  amznkaWrriorSpeechWrkshCategories,
  amznkaWrriorSpeechWrkshCountForCategory,
  amznkaWrriorSpeechWrkshGetCategory,
  amznkaWrriorSpeechWrkshGetPreview,
  amznkaWrriorSpeechWrkshMergeTexts,
  type AmznkaWrriorSpeechWrkshCategoryId,
  type AmznkaWrriorSpeechWrkshText,
} from './AmznkaWrriorSpeechWrkshData';
import {amznkaWrriorSpeechStoreGetUnlockedWrkshTexts} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreData';
import {amznkaWrriorSpeechStoreLoadUnlockedIds} from '../AmznkaWrriorSpeechStore/AmznkaWrriorSpeechStoreStorage';
import {
  amznkaWrriorSpeechWrkshLoadUserTexts,
  amznkaWrriorSpeechWrkshSaveUserTexts,
} from './AmznkaWrriorSpeechWrkshStorage';

const amznkaWrriorSpeechWrkshBtnGradient = [
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

const AmznkaWrriorSpeechWrkshHome = () => {
  const amznkaWrriorSpeechWrkshInsets = useSafeAreaInsets();
  const [amznkaWrriorSpeechWrkshCategory, setAmznkaWrriorSpeechWrkshCategory] =
    useState<AmznkaWrriorSpeechWrkshCategoryId>('warrior');
  const [
    amznkaWrriorSpeechWrkshUserTexts,
    setAmznkaWrriorSpeechWrkshUserTexts,
  ] = useState<AmznkaWrriorSpeechWrkshText[]>([]);
  const [
    amznkaWrriorSpeechWrkshStoreTexts,
    setAmznkaWrriorSpeechWrkshStoreTexts,
  ] = useState<AmznkaWrriorSpeechWrkshText[]>([]);
  const [
    amznkaWrriorSpeechWrkshModalVisible,
    setAmznkaWrriorSpeechWrkshModalVisible,
  ] = useState(false);
  const [
    amznkaWrriorSpeechWrkshEditingId,
    setAmznkaWrriorSpeechWrkshEditingId,
  ] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      amznkaWrriorSpeechWrkshLoadUserTexts().then(
        setAmznkaWrriorSpeechWrkshUserTexts,
      );
      amznkaWrriorSpeechStoreLoadUnlockedIds().then(
        amznkaWrriorSpeechWrkshUnlockedIds =>
          setAmznkaWrriorSpeechWrkshStoreTexts(
            amznkaWrriorSpeechStoreGetUnlockedWrkshTexts(
              amznkaWrriorSpeechWrkshUnlockedIds,
            ),
          ),
      );
    }, []),
  );

  const amznkaWrriorSpeechWrkshActiveCategory =
    amznkaWrriorSpeechWrkshGetCategory(amznkaWrriorSpeechWrkshCategory);

  const amznkaWrriorSpeechWrkshListTexts = amznkaWrriorSpeechWrkshMergeTexts(
    amznkaWrriorSpeechWrkshUserTexts,
    amznkaWrriorSpeechWrkshCategory,
    amznkaWrriorSpeechWrkshStoreTexts,
  );

  const amznkaWrriorSpeechWrkshEditingText = amznkaWrriorSpeechWrkshEditingId
    ? amznkaWrriorSpeechWrkshUserTexts.find(
        amznkaWrriorSpeechWrkshText =>
          amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextId ===
          amznkaWrriorSpeechWrkshEditingId,
      )
    : undefined;

  const amznkaWrriorSpeechWrkshOpenAdd = () => {
    setAmznkaWrriorSpeechWrkshEditingId(null);
    setAmznkaWrriorSpeechWrkshModalVisible(true);
  };

  const amznkaWrriorSpeechWrkshOpenEdit = (
    amznkaWrriorSpeechWrkshText: AmznkaWrriorSpeechWrkshText,
  ) => {
    setAmznkaWrriorSpeechWrkshEditingId(
      amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextId,
    );
    setAmznkaWrriorSpeechWrkshModalVisible(true);
  };

  const amznkaWrriorSpeechWrkshCloseModal = () => {
    setAmznkaWrriorSpeechWrkshModalVisible(false);
    setAmznkaWrriorSpeechWrkshEditingId(null);
  };

  const amznkaWrriorSpeechWrkshPersistUserTexts = async (
    amznkaWrriorSpeechWrkshNext: AmznkaWrriorSpeechWrkshText[],
  ) => {
    setAmznkaWrriorSpeechWrkshUserTexts(amznkaWrriorSpeechWrkshNext);
    await amznkaWrriorSpeechWrkshSaveUserTexts(amznkaWrriorSpeechWrkshNext);
  };

  const amznkaWrriorSpeechWrkshHandleSave = (
    amznkaWrriorSpeechWrkshTitle: string,
    amznkaWrriorSpeechWrkshBody: string,
  ) => {
    if (amznkaWrriorSpeechWrkshEditingId) {
      const amznkaWrriorSpeechWrkshNext = amznkaWrriorSpeechWrkshUserTexts.map(
        amznkaWrriorSpeechWrkshText =>
          amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextId ===
          amznkaWrriorSpeechWrkshEditingId
            ? {
                ...amznkaWrriorSpeechWrkshText,
                amznkaWrriorSpeechWrkshTextTitle: amznkaWrriorSpeechWrkshTitle,
                amznkaWrriorSpeechWrkshTextBody: amznkaWrriorSpeechWrkshBody,
              }
            : amznkaWrriorSpeechWrkshText,
      );
      void amznkaWrriorSpeechWrkshPersistUserTexts(amznkaWrriorSpeechWrkshNext);
    } else {
      const amznkaWrriorSpeechWrkshNewText: AmznkaWrriorSpeechWrkshText = {
        amznkaWrriorSpeechWrkshTextId: `user-${Date.now()}`,
        amznkaWrriorSpeechWrkshTextTitle: amznkaWrriorSpeechWrkshTitle,
        amznkaWrriorSpeechWrkshTextBody: amznkaWrriorSpeechWrkshBody,
        amznkaWrriorSpeechWrkshTextCategoryId: amznkaWrriorSpeechWrkshCategory,
        amznkaWrriorSpeechWrkshTextIsUser: true,
      };
      void amznkaWrriorSpeechWrkshPersistUserTexts([
        ...amznkaWrriorSpeechWrkshUserTexts,
        amznkaWrriorSpeechWrkshNewText,
      ]);
    }
    amznkaWrriorSpeechWrkshCloseModal();
  };

  const amznkaWrriorSpeechWrkshHandleDelete = (
    amznkaWrriorSpeechWrkshText: AmznkaWrriorSpeechWrkshText,
  ) => {
    Alert.alert(
      'Delete Text',
      `Remove "${amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextTitle}"?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const amznkaWrriorSpeechWrkshNext =
              amznkaWrriorSpeechWrkshUserTexts.filter(
                amznkaWrriorSpeechWrkshItem =>
                  amznkaWrriorSpeechWrkshItem.amznkaWrriorSpeechWrkshTextId !==
                  amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextId,
              );
            void amznkaWrriorSpeechWrkshPersistUserTexts(
              amznkaWrriorSpeechWrkshNext,
            );
          },
        },
      ],
    );
  };

  const amznkaWrriorSpeechWrkshTotalCount =
    amznkaWrriorSpeechWrkshBuiltInTexts.length +
    amznkaWrriorSpeechWrkshUserTexts.length;

  if (!amznkaWrriorSpeechWrkshActiveCategory) {
    return null;
  }

  return (
    <>
      <AmznkaWrriorSpeechLay>
        <View
          style={[
            styles.amznkaWrriorSpeechWrkshHomeContent,
            {paddingTop: amznkaWrriorSpeechWrkshInsets.top + 16},
          ]}>
          <View style={styles.amznkaWrriorSpeechWrkshHomeHeaderRow}>
            <View style={styles.amznkaWrriorSpeechWrkshHomeHeaderText}>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeKicker}>
                Amazon Voice
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeTitle}>
                Text Workshop
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeSubtitle}>
                Your personal collection of practice texts
              </Text>
            </View>
            <View style={styles.amznkaWrriorSpeechWrkshHomeWrenchBtn}>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeWrenchIcon}>
                🔧
              </Text>
            </View>
          </View>

          <View style={styles.amznkaWrriorSpeechWrkshHomeStatsRow}>
            <View style={styles.amznkaWrriorSpeechWrkshHomeStatCard}>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatEmoji}>
                📜
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatValue}>
                {amznkaWrriorSpeechWrkshTotalCount}
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatLabel}>
                Total Texts
              </Text>
            </View>
            <View style={styles.amznkaWrriorSpeechWrkshHomeStatCard}>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatEmoji}>
                ✍️
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatValue}>
                {amznkaWrriorSpeechWrkshUserTexts.length}
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatLabel}>
                Your Added
              </Text>
            </View>
            <View style={styles.amznkaWrriorSpeechWrkshHomeStatCard}>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatEmoji}>
                📂
              </Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatValue}>3</Text>
              <Text style={styles.amznkaWrriorSpeechWrkshHomeStatLabel}>
                Categories
              </Text>
            </View>
          </View>

          <View style={styles.amznkaWrriorSpeechWrkshTabsRow}>
            {amznkaWrriorSpeechWrkshCategories.map(
              amznkaWrriorSpeechWrkshCategoryItem => {
                const amznkaWrriorSpeechWrkshIsActive =
                  amznkaWrriorSpeechWrkshCategory ===
                  amznkaWrriorSpeechWrkshCategoryItem.amznkaWrriorSpeechWrkshCategoryId;
                const amznkaWrriorSpeechWrkshCount =
                  amznkaWrriorSpeechWrkshCountForCategory(
                    amznkaWrriorSpeechWrkshUserTexts,
                    amznkaWrriorSpeechWrkshCategoryItem.amznkaWrriorSpeechWrkshCategoryId,
                    amznkaWrriorSpeechWrkshStoreTexts,
                  );

                return (
                  <Pressable
                    key={
                      amznkaWrriorSpeechWrkshCategoryItem.amznkaWrriorSpeechWrkshCategoryId
                    }
                    onPress={() =>
                      setAmznkaWrriorSpeechWrkshCategory(
                        amznkaWrriorSpeechWrkshCategoryItem.amznkaWrriorSpeechWrkshCategoryId,
                      )
                    }
                    style={[
                      styles.amznkaWrriorSpeechWrkshTab,
                      amznkaWrriorSpeechWrkshIsActive &&
                        styles.amznkaWrriorSpeechWrkshTabActive,
                    ]}>
                    <Text style={styles.amznkaWrriorSpeechWrkshTabEmoji}>
                      {
                        amznkaWrriorSpeechWrkshCategoryItem.amznkaWrriorSpeechWrkshCategoryEmoji
                      }
                    </Text>
                    <Text
                      style={[
                        styles.amznkaWrriorSpeechWrkshTabLabel,
                        amznkaWrriorSpeechWrkshIsActive &&
                          styles.amznkaWrriorSpeechWrkshTabLabelActive,
                      ]}>
                      {
                        amznkaWrriorSpeechWrkshCategoryItem.amznkaWrriorSpeechWrkshCategoryTabLabel
                      }
                    </Text>
                    <Text
                      style={[
                        styles.amznkaWrriorSpeechWrkshTabCount,
                        amznkaWrriorSpeechWrkshIsActive &&
                          styles.amznkaWrriorSpeechWrkshTabCountActive,
                      ]}>
                      {amznkaWrriorSpeechWrkshCount} texts
                    </Text>
                  </Pressable>
                );
              },
            )}
          </View>

          {amznkaWrriorSpeechWrkshListTexts.map(amznkaWrriorSpeechWrkshText => {
            const amznkaWrriorSpeechWrkshCategoryMeta =
              amznkaWrriorSpeechWrkshGetCategory(
                amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextCategoryId,
              );

            return (
              <View
                key={amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextId}
                style={styles.amznkaWrriorSpeechWrkshTextCard}>
                <View
                  style={[
                    styles.amznkaWrriorSpeechWrkshTextIcon,
                    amznkaWrriorSpeechWrkshCategoryMeta && {
                      backgroundColor: 'rgba(255, 153, 0, 0.13)',
                      borderColor: 'rgba(255, 153, 0, 0.2)',
                    },
                  ]}>
                  <Text style={styles.amznkaWrriorSpeechWrkshTextEmoji}>
                    {amznkaWrriorSpeechWrkshCategoryMeta?.amznkaWrriorSpeechWrkshCategoryEmoji ??
                      '⚔️'}
                  </Text>
                </View>

                <View style={styles.amznkaWrriorSpeechWrkshTextBody}>
                  <View style={styles.amznkaWrriorSpeechWrkshTextTitleRow}>
                    <Text
                      style={styles.amznkaWrriorSpeechWrkshTextTitle}
                      numberOfLines={2}>
                      {amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextTitle.toUpperCase()}
                    </Text>
                    {amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextIsUser && (
                      <View style={styles.amznkaWrriorSpeechWrkshMineBadge}>
                        <Text
                          style={styles.amznkaWrriorSpeechWrkshMineBadgeText}>
                          MINE
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text
                    style={styles.amznkaWrriorSpeechWrkshTextPreview}
                    numberOfLines={2}>
                    {amznkaWrriorSpeechWrkshGetPreview(
                      amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextBody,
                    )}
                  </Text>
                </View>

                {amznkaWrriorSpeechWrkshText.amznkaWrriorSpeechWrkshTextIsUser && (
                  <View style={styles.amznkaWrriorSpeechWrkshTextActions}>
                    <Pressable
                      onPress={() =>
                        amznkaWrriorSpeechWrkshOpenEdit(
                          amznkaWrriorSpeechWrkshText,
                        )
                      }
                      style={styles.amznkaWrriorSpeechWrkshActionBtn}>
                      <Image
                        source={require('../../assets/i/amznkawrredt.png')}
                      />
                    </Pressable>
                    <Pressable
                      onPress={() =>
                        amznkaWrriorSpeechWrkshHandleDelete(
                          amznkaWrriorSpeechWrkshText,
                        )
                      }
                      style={[
                        styles.amznkaWrriorSpeechWrkshActionBtn,
                        styles.amznkaWrriorSpeechWrkshDeleteBtn,
                      ]}>
                      <Image
                        source={require('../../assets/i/amznkawrradell.png')}
                      />
                    </Pressable>
                  </View>
                )}
              </View>
            );
          })}

          <Pressable
            onPress={amznkaWrriorSpeechWrkshOpenAdd}
            style={({pressed}) => [
              styles.amznkaWrriorSpeechWrkshAddBtnWrap,
              pressed && {opacity: 0.9},
            ]}>
            <LinearGradient
              colors={amznkaWrriorSpeechWrkshBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.amznkaWrriorSpeechWrkshAddBtn}>
              <Image source={require('../../assets/i/amznkawrradd.png')} />
              <Text style={styles.amznkaWrriorSpeechWrkshAddBtnText}>
                Add New Text
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </AmznkaWrriorSpeechLay>

      <AmznkaWrriorSpeechWrkshModal
        amznkaWrriorSpeechWrkshVisible={amznkaWrriorSpeechWrkshModalVisible}
        amznkaWrriorSpeechWrkshCategory={amznkaWrriorSpeechWrkshActiveCategory}
        amznkaWrriorSpeechWrkshEditTitle={
          amznkaWrriorSpeechWrkshEditingText?.amznkaWrriorSpeechWrkshTextTitle
        }
        amznkaWrriorSpeechWrkshEditBody={
          amznkaWrriorSpeechWrkshEditingText?.amznkaWrriorSpeechWrkshTextBody
        }
        amznkaWrriorSpeechWrkshIsEdit={!!amznkaWrriorSpeechWrkshEditingId}
        amznkaWrriorSpeechWrkshOnClose={amznkaWrriorSpeechWrkshCloseModal}
        amznkaWrriorSpeechWrkshOnSave={amznkaWrriorSpeechWrkshHandleSave}
      />
    </>
  );
};

export default AmznkaWrriorSpeechWrkshHome;

const styles = StyleSheet.create({
  amznkaWrriorSpeechWrkshHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amznkaWrriorSpeechWrkshHomeHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amznkaWrriorSpeechWrkshHomeHeaderText: {
    flex: 1,
    paddingRight: 12,
  },
  amznkaWrriorSpeechWrkshHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amznkaWrriorSpeechWrkshHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechWrkshHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechWrkshHomeWrenchBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 153, 0, 0.15) ',
    borderWidth: 1.1,
    borderColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechWrkshHomeWrenchIcon: {
    fontSize: 18,
  },
  amznkaWrriorSpeechWrkshHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amznkaWrriorSpeechWrkshHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechWrkshHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  amznkaWrriorSpeechWrkshHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechWrkshHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amznkaWrriorSpeechWrkshTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amznkaWrriorSpeechWrkshTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechWrkshTabActive: {
    backgroundColor: '#FF9900',
    borderColor: '#FF9900',
  },
  amznkaWrriorSpeechWrkshTabEmoji: {
    fontSize: 18,
    marginBottom: 4,
  },
  amznkaWrriorSpeechWrkshTabLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 2,
  },
  amznkaWrriorSpeechWrkshTabLabelActive: {
    color: '#000000',
  },
  amznkaWrriorSpeechWrkshTabCount: {
    fontSize: 9,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechWrkshTabCountActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  amznkaWrriorSpeechWrkshTextCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 14,
    marginBottom: 12,
  },
  amznkaWrriorSpeechWrkshTextIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  amznkaWrriorSpeechWrkshTextEmoji: {
    fontSize: 18,
  },
  amznkaWrriorSpeechWrkshTextBody: {
    flex: 1,
    paddingRight: 8,
  },
  amznkaWrriorSpeechWrkshTextTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  amznkaWrriorSpeechWrkshTextTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
    minWidth: '60%',
  },
  amznkaWrriorSpeechWrkshMineBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  amznkaWrriorSpeechWrkshMineBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#10B981',
  },
  amznkaWrriorSpeechWrkshTextPreview: {
    fontSize: 11,
    lineHeight: 17,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechWrkshTextActions: {
    gap: 8,
  },
  amznkaWrriorSpeechWrkshActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechWrkshDeleteBtn: {
    borderColor: 'rgba(239, 68, 68, 0.3)',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  amznkaWrriorSpeechWrkshEditIcon: {
    fontSize: 14,
  },
  amznkaWrriorSpeechWrkshDeleteIcon: {
    fontSize: 14,
  },
  amznkaWrriorSpeechWrkshAddBtnWrap: {
    marginTop: 8,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amznkaWrriorSpeechWrkshAddBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  amznkaWrriorSpeechWrkshAddBtnText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
});
