import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';
import {AmzznkWrriorsppeechStudioEditorSheet} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechStudioEditorSheet';
import {
  amzznkWrriorsppeechStudioBuiltInTexts,
  amzznkWrriorsppeechStudioCategories,
  amzznkWrriorsppeechStudioCountForCategory,
  amzznkWrriorsppeechStudioGetCategory,
  amzznkWrriorsppeechStudioGetPreview,
  amzznkWrriorsppeechStudioMergeTexts,
  type AmzznkWrriorsppeechStudioRealmId,
  type AmzznkWrriorsppeechStudioPassage,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechstudioCatalog';
import {amzznkWrriorsppeechVaultUnlockedStudioPassages} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultCatalog';
import {amzznkWrriorsppeechVaultLoadUnlockedIds} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechvaultStorage';
import {
  amzznkWrriorsppeechStudioLoadUserPassages,
  amzznkWrriorsppeechStudioSaveUserPassages,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechstudioStorage';
import Orientation from 'react-native-orientation-locker';

const amzznkWrriorsppeechStudioBtnGradient = [
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

export function AmzznkWrriorsppeechStudioHomeScreen() {
  const amzznkWrriorsppeechStudioInsets = useSafeAreaInsets();
  const [studioCategory, setStudioRealm] =
    useState<AmzznkWrriorsppeechStudioRealmId>('warrior');
  const [studioUserTexts, setStudioUserTexts] = useState<
    AmzznkWrriorsppeechStudioPassage[]
  >([]);
  const [studioVaultPassages, setStudioStoreTexts] = useState<
    AmzznkWrriorsppeechStudioPassage[]
  >([]);
  const [studioModalVisible, setStudioEditorSheetVisible] = useState(false);
  const [studioEditingId, setStudioEditingId] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      amzznkWrriorsppeechStudioLoadUserPassages().then(setStudioUserTexts);
      amzznkWrriorsppeechVaultLoadUnlockedIds().then(
        amzznkWrriorsppeechStudioUnlockedIds =>
          setStudioStoreTexts(
            amzznkWrriorsppeechVaultUnlockedStudioPassages(
              amzznkWrriorsppeechStudioUnlockedIds,
            ),
          ),
      );
    }, []),
  );

  const amzznkWrriorsppeechStudioActiveCategory =
    amzznkWrriorsppeechStudioGetCategory(studioCategory);

  const amzznkWrriorsppeechStudioListTexts =
    amzznkWrriorsppeechStudioMergeTexts(
      studioUserTexts,
      studioCategory,
      studioVaultPassages,
    );

  const amzznkWrriorsppeechStudioEditingText = studioEditingId
    ? studioUserTexts.find(
        amzznkWrriorsppeechStudioPassage =>
          amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageId ===
          studioEditingId,
      )
    : undefined;

  const amzznkWrriorsppeechStudioOpenAdd = () => {
    setStudioEditingId(null);
    setStudioEditorSheetVisible(true);
  };

  const amzznkWrriorsppeechStudioOpenEdit = (
    amzznkWrriorsppeechStudioPassage: AmzznkWrriorsppeechStudioPassage,
  ) => {
    setStudioEditingId(
      amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageId,
    );
    setStudioEditorSheetVisible(true);
  };

  const amzznkWrriorsppeechStudioCloseModal = () => {
    setStudioEditorSheetVisible(false);
    setStudioEditingId(null);
  };

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const amzznkWrriorsppeechStudioPersistUserTexts = async (
    amzznkWrriorsppeechStudioNext: AmzznkWrriorsppeechStudioPassage[],
  ) => {
    setStudioUserTexts(amzznkWrriorsppeechStudioNext);
    await amzznkWrriorsppeechStudioSaveUserPassages(
      amzznkWrriorsppeechStudioNext,
    );
  };

  const amzznkWrriorsppeechStudioHandleSave = (
    studioTitle: string,
    studioBody: string,
  ) => {
    if (studioEditingId) {
      const amzznkWrriorsppeechStudioNext = studioUserTexts.map(
        amzznkWrriorsppeechStudioPassage =>
          amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageId ===
          studioEditingId
            ? {
                ...amzznkWrriorsppeechStudioPassage,
                amzznkWrriorsppeechStudioPassageTitle: studioTitle,
                amzznkWrriorsppeechStudioPassageBody: studioBody,
              }
            : amzznkWrriorsppeechStudioPassage,
      );
      void amzznkWrriorsppeechStudioPersistUserTexts(
        amzznkWrriorsppeechStudioNext,
      );
    } else {
      const amzznkWrriorsppeechStudioNewText: AmzznkWrriorsppeechStudioPassage =
        {
          amzznkWrriorsppeechStudioPassageId: `user-${Date.now()}`,
          amzznkWrriorsppeechStudioPassageTitle: studioTitle,
          amzznkWrriorsppeechStudioPassageBody: studioBody,
          amzznkWrriorsppeechStudioPassageCategoryId: studioCategory,
          amzznkWrriorsppeechStudioPassageIsUser: true,
        };
      void amzznkWrriorsppeechStudioPersistUserTexts([
        ...studioUserTexts,
        amzznkWrriorsppeechStudioNewText,
      ]);
    }
    amzznkWrriorsppeechStudioCloseModal();
  };

  const amzznkWrriorsppeechStudioHandleDelete = (
    amzznkWrriorsppeechStudioPassage: AmzznkWrriorsppeechStudioPassage,
  ) => {
    Alert.alert(
      'Delete Text',
      `Remove "${amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageTitle}"?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const amzznkWrriorsppeechStudioNext = studioUserTexts.filter(
              amzznkWrriorsppeechStudioItem =>
                amzznkWrriorsppeechStudioItem.amzznkWrriorsppeechStudioPassageId !==
                amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageId,
            );
            void amzznkWrriorsppeechStudioPersistUserTexts(
              amzznkWrriorsppeechStudioNext,
            );
          },
        },
      ],
    );
  };

  const amzznkWrriorsppeechStudioTotalCount =
    amzznkWrriorsppeechStudioBuiltInTexts.length + studioUserTexts.length;

  if (!amzznkWrriorsppeechStudioActiveCategory) {
    return null;
  }

  return (
    <>
      <AmzznkWrriorsppeechSceneShell>
        <View
          style={[
            styles.amzznkWrriorsppeechStudioHomeContent,
            {paddingTop: amzznkWrriorsppeechStudioInsets.top + 16},
          ]}>
          <View style={styles.amzznkWrriorsppeechStudioHomeHeaderRow}>
            <View style={styles.amzznkWrriorsppeechStudioHomeHeaderText}>
              <Text style={styles.amzznkWrriorsppeechStudioHomeKicker}>
                Amazonka Voice
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeTitle}>
                Text Lab
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeSubtitle}>
                Your personal collection of practice texts
              </Text>
            </View>
            <View style={styles.amzznkWrriorsppeechStudioHomeWrenchBtn}>
              <Text style={styles.amzznkWrriorsppeechStudioHomeWrenchIcon}>
                🔧
              </Text>
            </View>
          </View>

          <View style={styles.amzznkWrriorsppeechStudioHomeStatsRow}>
            <View style={styles.amzznkWrriorsppeechStudioHomeStatCard}>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatEmoji}>
                📜
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatValue}>
                {amzznkWrriorsppeechStudioTotalCount}
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatLabel}>
                Total Texts
              </Text>
            </View>
            <View style={styles.amzznkWrriorsppeechStudioHomeStatCard}>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatEmoji}>
                ✍️
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatValue}>
                {studioUserTexts.length}
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatLabel}>
                Your Added
              </Text>
            </View>
            <View style={styles.amzznkWrriorsppeechStudioHomeStatCard}>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatEmoji}>
                📂
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatValue}>
                3
              </Text>
              <Text style={styles.amzznkWrriorsppeechStudioHomeStatLabel}>
                Categories
              </Text>
            </View>
          </View>

          <View style={styles.amzznkWrriorsppeechStudioTabsRow}>
            {amzznkWrriorsppeechStudioCategories.map(
              amzznkWrriorsppeechStudioCategoryItem => {
                const amzznkWrriorsppeechStudioIsActive =
                  studioCategory ===
                  amzznkWrriorsppeechStudioCategoryItem.amzznkWrriorsppeechStudioCategoryId;
                const amzznkWrriorsppeechStudioCount =
                  amzznkWrriorsppeechStudioCountForCategory(
                    studioUserTexts,
                    amzznkWrriorsppeechStudioCategoryItem.amzznkWrriorsppeechStudioCategoryId,
                    studioVaultPassages,
                  );

                return (
                  <Pressable
                    key={
                      amzznkWrriorsppeechStudioCategoryItem.amzznkWrriorsppeechStudioCategoryId
                    }
                    onPress={() =>
                      setStudioRealm(
                        amzznkWrriorsppeechStudioCategoryItem.amzznkWrriorsppeechStudioCategoryId,
                      )
                    }
                    style={[
                      styles.amzznkWrriorsppeechStudioTab,
                      amzznkWrriorsppeechStudioIsActive &&
                        styles.amzznkWrriorsppeechStudioTabActive,
                    ]}>
                    <Text style={styles.amzznkWrriorsppeechStudioTabEmoji}>
                      {
                        amzznkWrriorsppeechStudioCategoryItem.amzznkWrriorsppeechStudioCategoryEmoji
                      }
                    </Text>
                    <Text
                      style={[
                        styles.amzznkWrriorsppeechStudioTabLabel,
                        amzznkWrriorsppeechStudioIsActive &&
                          styles.amzznkWrriorsppeechStudioTabLabelActive,
                      ]}>
                      {
                        amzznkWrriorsppeechStudioCategoryItem.amzznkWrriorsppeechStudioCategoryTabLabel
                      }
                    </Text>
                    <Text
                      style={[
                        styles.amzznkWrriorsppeechStudioTabCount,
                        amzznkWrriorsppeechStudioIsActive &&
                          styles.amzznkWrriorsppeechStudioTabCountActive,
                      ]}>
                      {amzznkWrriorsppeechStudioCount} texts
                    </Text>
                  </Pressable>
                );
              },
            )}
          </View>

          {amzznkWrriorsppeechStudioListTexts.map(
            amzznkWrriorsppeechStudioPassage => {
              const amzznkWrriorsppeechStudioCategoryMeta =
                amzznkWrriorsppeechStudioGetCategory(
                  amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageCategoryId,
                );

              return (
                <View
                  key={
                    amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageId
                  }
                  style={styles.amzznkWrriorsppeechStudioPassageCard}>
                  <View
                    style={[
                      styles.amzznkWrriorsppeechStudioPassageIcon,
                      amzznkWrriorsppeechStudioCategoryMeta && {
                        backgroundColor: 'rgba(255, 153, 0, 0.13)',
                        borderColor: 'rgba(255, 153, 0, 0.2)',
                      },
                    ]}>
                    <Text style={styles.amzznkWrriorsppeechStudioPassageEmoji}>
                      {amzznkWrriorsppeechStudioCategoryMeta?.amzznkWrriorsppeechStudioCategoryEmoji ??
                        '⚔️'}
                    </Text>
                  </View>

                  <View style={styles.amzznkWrriorsppeechStudioPassageBody}>
                    <View
                      style={styles.amzznkWrriorsppeechStudioPassageTitleRow}>
                      <Text
                        style={styles.amzznkWrriorsppeechStudioPassageTitle}
                        numberOfLines={2}>
                        {amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageTitle.toUpperCase()}
                      </Text>
                      {amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageIsUser && (
                        <View style={styles.amzznkWrriorsppeechStudioMineBadge}>
                          <Text
                            style={
                              styles.amzznkWrriorsppeechStudioMineBadgeText
                            }>
                            MINE
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text
                      style={styles.amzznkWrriorsppeechStudioPassagePreview}
                      numberOfLines={2}>
                      {amzznkWrriorsppeechStudioGetPreview(
                        amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageBody,
                      )}
                    </Text>
                  </View>

                  {amzznkWrriorsppeechStudioPassage.amzznkWrriorsppeechStudioPassageIsUser && (
                    <View
                      style={styles.amzznkWrriorsppeechStudioPassageActions}>
                      <Pressable
                        onPress={() =>
                          amzznkWrriorsppeechStudioOpenEdit(
                            amzznkWrriorsppeechStudioPassage,
                          )
                        }
                        style={styles.amzznkWrriorsppeechStudioActionBtn}>
                        <Image
                          source={require('../../assets/images/amzznkWrriorsppeechStudioEdit.png')}
                        />
                      </Pressable>
                      <Pressable
                        onPress={() =>
                          amzznkWrriorsppeechStudioHandleDelete(
                            amzznkWrriorsppeechStudioPassage,
                          )
                        }
                        style={[
                          styles.amzznkWrriorsppeechStudioActionBtn,
                          styles.amzznkWrriorsppeechStudioDeleteBtn,
                        ]}>
                        <Image
                          source={require('../../assets/images/amzznkWrriorsppeechStudioDelete.png')}
                        />
                      </Pressable>
                    </View>
                  )}
                </View>
              );
            },
          )}

          <Pressable
            onPress={amzznkWrriorsppeechStudioOpenAdd}
            style={({pressed}) => [
              styles.amzznkWrriorsppeechStudioAddBtnWrap,
              pressed && {opacity: 0.9},
            ]}>
            <LinearGradient
              colors={amzznkWrriorsppeechStudioBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.amzznkWrriorsppeechStudioAddBtn}>
              <Image
                source={require('../../assets/images/amzznkWrriorsppeechStudioAdd.png')}
              />
              <Text style={styles.amzznkWrriorsppeechStudioAddBtnText}>
                Add New Text
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </AmzznkWrriorsppeechSceneShell>

      <AmzznkWrriorsppeechStudioEditorSheet
        amzznkWrriorsppeechStudioVisible={studioModalVisible}
        studioCategory={amzznkWrriorsppeechStudioActiveCategory}
        amzznkWrriorsppeechStudioEditTitle={
          amzznkWrriorsppeechStudioEditingText?.amzznkWrriorsppeechStudioPassageTitle
        }
        amzznkWrriorsppeechStudioEditBody={
          amzznkWrriorsppeechStudioEditingText?.amzznkWrriorsppeechStudioPassageBody
        }
        amzznkWrriorsppeechStudioIsEdit={!!studioEditingId}
        amzznkWrriorsppeechStudioOnClose={amzznkWrriorsppeechStudioCloseModal}
        amzznkWrriorsppeechStudioOnSave={amzznkWrriorsppeechStudioHandleSave}
      />
    </>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechStudioHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amzznkWrriorsppeechStudioHomeHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amzznkWrriorsppeechStudioHomeHeaderText: {
    flex: 1,
    paddingRight: 12,
  },
  amzznkWrriorsppeechStudioHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amzznkWrriorsppeechStudioHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechStudioHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechStudioHomeWrenchBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 153, 0, 0.15) ',
    borderWidth: 1.1,
    borderColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechStudioHomeWrenchIcon: {
    fontSize: 18,
  },
  amzznkWrriorsppeechStudioHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amzznkWrriorsppeechStudioHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechStudioHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  amzznkWrriorsppeechStudioHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechStudioHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amzznkWrriorsppeechStudioTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amzznkWrriorsppeechStudioTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechStudioTabActive: {
    backgroundColor: '#FF9900',
    borderColor: '#FF9900',
  },
  amzznkWrriorsppeechStudioTabEmoji: {
    fontSize: 18,
    marginBottom: 4,
  },
  amzznkWrriorsppeechStudioTabLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 2,
  },
  amzznkWrriorsppeechStudioTabLabelActive: {
    color: '#000000',
  },
  amzznkWrriorsppeechStudioTabCount: {
    fontSize: 9,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechStudioTabCountActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  amzznkWrriorsppeechStudioPassageCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 14,
    marginBottom: 12,
  },
  amzznkWrriorsppeechStudioPassageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  amzznkWrriorsppeechStudioPassageEmoji: {
    fontSize: 18,
  },
  amzznkWrriorsppeechStudioPassageBody: {
    flex: 1,
    paddingRight: 8,
  },
  amzznkWrriorsppeechStudioPassageTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  amzznkWrriorsppeechStudioPassageTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
    minWidth: '60%',
  },
  amzznkWrriorsppeechStudioMineBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  amzznkWrriorsppeechStudioMineBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#10B981',
  },
  amzznkWrriorsppeechStudioPassagePreview: {
    fontSize: 11,
    lineHeight: 17,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechStudioPassageActions: {
    gap: 8,
  },
  amzznkWrriorsppeechStudioActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechStudioDeleteBtn: {
    borderColor: 'rgba(239, 68, 68, 0.3)',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  amzznkWrriorsppeechStudioEditIcon: {
    fontSize: 14,
  },
  amzznkWrriorsppeechStudioDeleteIcon: {
    fontSize: 14,
  },
  amzznkWrriorsppeechStudioAddBtnWrap: {
    marginTop: 8,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amzznkWrriorsppeechStudioAddBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  amzznkWrriorsppeechStudioAddBtnText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
});
