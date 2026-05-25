import React, {useCallback, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SceneShell from '../../components/Shell';
import StudioEditorSheet from '../../components/StudioEditorSheet';
import {
  studioBuiltInTexts,
  studioCategories,
  studioCountForCategory,
  studioGetCategory,
  studioGetPreview,
  studioMergeTexts,
  type StudioRealmId,
  type StudioPassage,
} from '../../data/studio';
import {vaultUnlockedStudioPassages} from '../../data/vault';
import {vaultLoadUnlockedIds} from '../../data/vaultStorage';
import {
  studioLoadUserPassages,
  studioSaveUserPassages,
} from '../../data/studioStorage';

const studioBtnGradient = [
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

const StudioHomeScreen = () => {
  const studioInsets = useSafeAreaInsets();
  const [studioCategory, setStudioRealm] =
    useState<StudioRealmId>('warrior');
  const [
    studioUserTexts,
    setStudioUserTexts,
  ] = useState<StudioPassage[]>([]);
  const [
    studioVaultPassages,
    setStudioStoreTexts,
  ] = useState<StudioPassage[]>([]);
  const [
    studioModalVisible,
    setStudioEditorSheetVisible,
  ] = useState(false);
  const [
    studioEditingId,
    setStudioEditingId,
  ] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      studioLoadUserPassages().then(
        setStudioUserTexts,
      );
      vaultLoadUnlockedIds().then(
        studioUnlockedIds =>
          setStudioStoreTexts(
            vaultUnlockedStudioPassages(
              studioUnlockedIds,
            ),
          ),
      );
    }, []),
  );

  const studioActiveCategory =
    studioGetCategory(studioCategory);

  const studioListTexts = studioMergeTexts(
    studioUserTexts,
    studioCategory,
    studioVaultPassages,
  );

  const studioEditingText = studioEditingId
    ? studioUserTexts.find(
        studioPassage =>
          studioPassage.studioPassageId ===
          studioEditingId,
      )
    : undefined;

  const studioOpenAdd = () => {
    setStudioEditingId(null);
    setStudioEditorSheetVisible(true);
  };

  const studioOpenEdit = (
    studioPassage: StudioPassage,
  ) => {
    setStudioEditingId(
      studioPassage.studioPassageId,
    );
    setStudioEditorSheetVisible(true);
  };

  const studioCloseModal = () => {
    setStudioEditorSheetVisible(false);
    setStudioEditingId(null);
  };

  const studioPersistUserTexts = async (
    studioNext: StudioPassage[],
  ) => {
    setStudioUserTexts(studioNext);
    await studioSaveUserPassages(studioNext);
  };

  const studioHandleSave = (
    studioTitle: string,
    studioBody: string,
  ) => {
    if (studioEditingId) {
      const studioNext = studioUserTexts.map(
        studioPassage =>
          studioPassage.studioPassageId ===
          studioEditingId
            ? {
                ...studioPassage,
                studioPassageTitle: studioTitle,
                studioPassageBody: studioBody,
              }
            : studioPassage,
      );
      void studioPersistUserTexts(studioNext);
    } else {
      const studioNewText: StudioPassage = {
        studioPassageId: `user-${Date.now()}`,
        studioPassageTitle: studioTitle,
        studioPassageBody: studioBody,
        studioPassageCategoryId: studioCategory,
        studioPassageIsUser: true,
      };
      void studioPersistUserTexts([
        ...studioUserTexts,
        studioNewText,
      ]);
    }
    studioCloseModal();
  };

  const studioHandleDelete = (
    studioPassage: StudioPassage,
  ) => {
    Alert.alert(
      'Delete Text',
      `Remove "${studioPassage.studioPassageTitle}"?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const studioNext =
              studioUserTexts.filter(
                studioItem =>
                  studioItem.studioPassageId !==
                  studioPassage.studioPassageId,
              );
            void studioPersistUserTexts(
              studioNext,
            );
          },
        },
      ],
    );
  };

  const studioTotalCount =
    studioBuiltInTexts.length +
    studioUserTexts.length;

  if (!studioActiveCategory) {
    return null;
  }

  return (
    <>
      <SceneShell>
        <View
          style={[
            styles.studioHomeContent,
            {paddingTop: studioInsets.top + 16},
          ]}>
          <View style={styles.studioHomeHeaderRow}>
            <View style={styles.studioHomeHeaderText}>
              <Text style={styles.studioHomeKicker}>
                Amazonka Voice
              </Text>
              <Text style={styles.studioHomeTitle}>
                Text Lab
              </Text>
              <Text style={styles.studioHomeSubtitle}>
                Your personal collection of practice texts
              </Text>
            </View>
            <View style={styles.studioHomeWrenchBtn}>
              <Text style={styles.studioHomeWrenchIcon}>
                🔧
              </Text>
            </View>
          </View>

          <View style={styles.studioHomeStatsRow}>
            <View style={styles.studioHomeStatCard}>
              <Text style={styles.studioHomeStatEmoji}>
                📜
              </Text>
              <Text style={styles.studioHomeStatValue}>
                {studioTotalCount}
              </Text>
              <Text style={styles.studioHomeStatLabel}>
                Total Texts
              </Text>
            </View>
            <View style={styles.studioHomeStatCard}>
              <Text style={styles.studioHomeStatEmoji}>
                ✍️
              </Text>
              <Text style={styles.studioHomeStatValue}>
                {studioUserTexts.length}
              </Text>
              <Text style={styles.studioHomeStatLabel}>
                Your Added
              </Text>
            </View>
            <View style={styles.studioHomeStatCard}>
              <Text style={styles.studioHomeStatEmoji}>
                📂
              </Text>
              <Text style={styles.studioHomeStatValue}>3</Text>
              <Text style={styles.studioHomeStatLabel}>
                Categories
              </Text>
            </View>
          </View>

          <View style={styles.studioTabsRow}>
            {studioCategories.map(
              studioCategoryItem => {
                const studioIsActive =
                  studioCategory ===
                  studioCategoryItem.studioCategoryId;
                const studioCount =
                  studioCountForCategory(
                    studioUserTexts,
                    studioCategoryItem.studioCategoryId,
                    studioVaultPassages,
                  );

                return (
                  <Pressable
                    key={
                      studioCategoryItem.studioCategoryId
                    }
                    onPress={() =>
                      setStudioRealm(
                        studioCategoryItem.studioCategoryId,
                      )
                    }
                    style={[
                      styles.studioTab,
                      studioIsActive &&
                        styles.studioTabActive,
                    ]}>
                    <Text style={styles.studioTabEmoji}>
                      {
                        studioCategoryItem.studioCategoryEmoji
                      }
                    </Text>
                    <Text
                      style={[
                        styles.studioTabLabel,
                        studioIsActive &&
                          styles.studioTabLabelActive,
                      ]}>
                      {
                        studioCategoryItem.studioCategoryTabLabel
                      }
                    </Text>
                    <Text
                      style={[
                        styles.studioTabCount,
                        studioIsActive &&
                          styles.studioTabCountActive,
                      ]}>
                      {studioCount} texts
                    </Text>
                  </Pressable>
                );
              },
            )}
          </View>

          {studioListTexts.map(studioPassage => {
            const studioCategoryMeta =
              studioGetCategory(
                studioPassage.studioPassageCategoryId,
              );

            return (
              <View
                key={studioPassage.studioPassageId}
                style={styles.studioPassageCard}>
                <View
                  style={[
                    styles.studioPassageIcon,
                    studioCategoryMeta && {
                      backgroundColor: 'rgba(255, 153, 0, 0.13)',
                      borderColor: 'rgba(255, 153, 0, 0.2)',
                    },
                  ]}>
                  <Text style={styles.studioPassageEmoji}>
                    {studioCategoryMeta?.studioCategoryEmoji ??
                      '⚔️'}
                  </Text>
                </View>

                <View style={styles.studioPassageBody}>
                  <View style={styles.studioPassageTitleRow}>
                    <Text
                      style={styles.studioPassageTitle}
                      numberOfLines={2}>
                      {studioPassage.studioPassageTitle.toUpperCase()}
                    </Text>
                    {studioPassage.studioPassageIsUser && (
                      <View style={styles.studioMineBadge}>
                        <Text
                          style={styles.studioMineBadgeText}>
                          MINE
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text
                    style={styles.studioPassagePreview}
                    numberOfLines={2}>
                    {studioGetPreview(
                      studioPassage.studioPassageBody,
                    )}
                  </Text>
                </View>

                {studioPassage.studioPassageIsUser && (
                  <View style={styles.studioPassageActions}>
                    <Pressable
                      onPress={() =>
                        studioOpenEdit(
                          studioPassage,
                        )
                      }
                      style={styles.studioActionBtn}>
                      <Image
                        source={require('../../../elements/images/studio-edit.png')}
                      />
                    </Pressable>
                    <Pressable
                      onPress={() =>
                        studioHandleDelete(
                          studioPassage,
                        )
                      }
                      style={[
                        styles.studioActionBtn,
                        styles.studioDeleteBtn,
                      ]}>
                      <Image
                        source={require('../../../elements/images/studio-delete.png')}
                      />
                    </Pressable>
                  </View>
                )}
              </View>
            );
          })}

          <Pressable
            onPress={studioOpenAdd}
            style={({pressed}) => [
              styles.studioAddBtnWrap,
              pressed && {opacity: 0.9},
            ]}>
            <LinearGradient
              colors={studioBtnGradient}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.studioAddBtn}>
              <Image source={require('../../../elements/images/studio-add.png')} />
              <Text style={styles.studioAddBtnText}>
                Add New Text
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </SceneShell>

      <StudioEditorSheet
        studioVisible={studioModalVisible}
        studioCategory={studioActiveCategory}
        studioEditTitle={
          studioEditingText?.studioPassageTitle
        }
        studioEditBody={
          studioEditingText?.studioPassageBody
        }
        studioIsEdit={!!studioEditingId}
        studioOnClose={studioCloseModal}
        studioOnSave={studioHandleSave}
      />
    </>
  );
};

export default StudioHomeScreen;

const styles = StyleSheet.create({
  studioHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  studioHomeHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  studioHomeHeaderText: {
    flex: 1,
    paddingRight: 12,
  },
  studioHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  studioHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  studioHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  studioHomeWrenchBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 153, 0, 0.15) ',
    borderWidth: 1.1,
    borderColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studioHomeWrenchIcon: {
    fontSize: 18,
  },
  studioHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  studioHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  studioHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  studioHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  studioHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  studioTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  studioTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  studioTabActive: {
    backgroundColor: '#FF9900',
    borderColor: '#FF9900',
  },
  studioTabEmoji: {
    fontSize: 18,
    marginBottom: 4,
  },
  studioTabLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 2,
  },
  studioTabLabelActive: {
    color: '#000000',
  },
  studioTabCount: {
    fontSize: 9,
    color: '#9B8E8F',
  },
  studioTabCountActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  studioPassageCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 14,
    marginBottom: 12,
  },
  studioPassageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  studioPassageEmoji: {
    fontSize: 18,
  },
  studioPassageBody: {
    flex: 1,
    paddingRight: 8,
  },
  studioPassageTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  studioPassageTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
    minWidth: '60%',
  },
  studioMineBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  studioMineBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#10B981',
  },
  studioPassagePreview: {
    fontSize: 11,
    lineHeight: 17,
    color: '#9B8E8F',
  },
  studioPassageActions: {
    gap: 8,
  },
  studioActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studioDeleteBtn: {
    borderColor: 'rgba(239, 68, 68, 0.3)',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },
  studioEditIcon: {
    fontSize: 14,
  },
  studioDeleteIcon: {
    fontSize: 14,
  },
  studioAddBtnWrap: {
    marginTop: 8,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  studioAddBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  studioAddBtnText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
});
