import React, {useState} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AmznkaWrriorSpeechLay from '../AmznkaWrriorSpeechCmp/AmznkaWrriorSpeechLay';
import {
  amznkaWrriorSpeechTpsCategories,
  amznkaWrriorSpeechTpsGetRandomTip,
  amznkaWrriorSpeechTpsGetTipsByCategory,
  amznkaWrriorSpeechTpsTips,
  type AmznkaWrriorSpeechTpsCategoryId,
  type AmznkaWrriorSpeechTpsTip,
} from './AmznkaWrriorSpeechTpsData';

const amznkaWrriorSpeechTpsBtnGradient = [
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

const AmznkaWrriorSpeechTpsHome = () => {
  const amznkaWrriorSpeechTpsInsets = useSafeAreaInsets();
  const [amznkaWrriorSpeechTpsCategory, setAmznkaWrriorSpeechTpsCategory] =
    useState<AmznkaWrriorSpeechTpsCategoryId>('voice');
  const [amznkaWrriorSpeechTpsRandomTip, setAmznkaWrriorSpeechTpsRandomTip] =
    useState<AmznkaWrriorSpeechTpsTip | null>(null);

  const amznkaWrriorSpeechTpsFilteredTips =
    amznkaWrriorSpeechTpsGetTipsByCategory(amznkaWrriorSpeechTpsCategory);

  const amznkaWrriorSpeechTpsShareTip = async (
    amznkaWrriorSpeechTpsTip: AmznkaWrriorSpeechTpsTip,
  ) => {
    await Share.share({
      message: `${amznkaWrriorSpeechTpsTip.amznkaWrriorSpeechTpsTipTitle}\n\n${amznkaWrriorSpeechTpsTip.amznkaWrriorSpeechTpsTipBody}`,
    });
  };

  return (
    <AmznkaWrriorSpeechLay>
      <View
        style={[
          styles.amznkaWrriorSpeechTpsHomeContent,
          {paddingTop: amznkaWrriorSpeechTpsInsets.top + 16},
        ]}>
        <Text style={styles.amznkaWrriorSpeechTpsHomeKicker}>Amazon Voice</Text>
        <Text style={styles.amznkaWrriorSpeechTpsHomeTitle}>Diction Tips</Text>
        <Text style={styles.amznkaWrriorSpeechTpsHomeSubtitle}>
          Ancient Amazon wisdom for modern speakers
        </Text>

        <View style={styles.amznkaWrriorSpeechTpsHomeStatsRow}>
          <View style={styles.amznkaWrriorSpeechTpsHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatEmoji}>💡</Text>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatValue}>
              {amznkaWrriorSpeechTpsTips.length}
            </Text>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatLabel}>
              Total Tips
            </Text>
          </View>
          <View style={styles.amznkaWrriorSpeechTpsHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatEmoji}>📂</Text>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatValue}>3</Text>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatLabel}>
              Categories
            </Text>
          </View>
          <View style={styles.amznkaWrriorSpeechTpsHomeStatCard}>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatEmoji}>⚔️</Text>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatValue}>
              Amazon
            </Text>
            <Text style={styles.amznkaWrriorSpeechTpsHomeStatLabel}>
              Methods
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() =>
            setAmznkaWrriorSpeechTpsRandomTip(
              amznkaWrriorSpeechTpsGetRandomTip(),
            )
          }
          style={({pressed}) => [
            styles.amznkaWrriorSpeechTpsRandomBtnWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amznkaWrriorSpeechTpsBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amznkaWrriorSpeechTpsRandomBtn}>
            <Image source={require('../../assets/i/amznkawrrand.png')} />
            <Text style={styles.amznkaWrriorSpeechTpsRandomBtnText}>
              Random Amazon Tip
            </Text>
          </LinearGradient>
        </Pressable>

        {amznkaWrriorSpeechTpsRandomTip && (
          <View style={styles.amznkaWrriorSpeechTpsRandomCard}>
            <View style={styles.amznkaWrriorSpeechTpsRandomCardHeader}>
              <Text style={styles.amznkaWrriorSpeechTpsRandomCardLabel}>
                ✨ Random Tip
              </Text>
              <View style={styles.amznkaWrriorSpeechTpsRandomCardActions}>
                <Pressable
                  onPress={() =>
                    amznkaWrriorSpeechTpsShareTip(
                      amznkaWrriorSpeechTpsRandomTip,
                    )
                  }
                  style={styles.amznkaWrriorSpeechTpsRandomActionBtn}>
                  <Image
                    source={require('../../assets/i/amznkawrshare.png')}
                    style={styles.amznkaWrriorSpeechTpsShareIcon}
                  />
                </Pressable>
                <Pressable
                  onPress={() => setAmznkaWrriorSpeechTpsRandomTip(null)}
                  style={styles.amznkaWrriorSpeechTpsRandomActionBtn}>
                  <Text style={styles.amznkaWrriorSpeechTpsCloseIcon}>✕</Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.amznkaWrriorSpeechTpsRandomCardTitle}>
              {amznkaWrriorSpeechTpsRandomTip.amznkaWrriorSpeechTpsTipTitle.toUpperCase()}
            </Text>
            <Text style={styles.amznkaWrriorSpeechTpsRandomCardBody}>
              {amznkaWrriorSpeechTpsRandomTip.amznkaWrriorSpeechTpsTipBody}
            </Text>
            <Text style={styles.amznkaWrriorSpeechTpsRandomCardFooter}>
              {amznkaWrriorSpeechTpsRandomTip.amznkaWrriorSpeechTpsTipFooter}
            </Text>
          </View>
        )}

        <View style={styles.amznkaWrriorSpeechTpsTabsRow}>
          {amznkaWrriorSpeechTpsCategories.map(
            amznkaWrriorSpeechTpsCategoryItem => {
              const amznkaWrriorSpeechTpsIsActive =
                amznkaWrriorSpeechTpsCategory ===
                amznkaWrriorSpeechTpsCategoryItem.amznkaWrriorSpeechTpsCategoryId;
              const amznkaWrriorSpeechTpsCount =
                amznkaWrriorSpeechTpsGetTipsByCategory(
                  amznkaWrriorSpeechTpsCategoryItem.amznkaWrriorSpeechTpsCategoryId,
                ).length;

              return (
                <Pressable
                  key={
                    amznkaWrriorSpeechTpsCategoryItem.amznkaWrriorSpeechTpsCategoryId
                  }
                  onPress={() =>
                    setAmznkaWrriorSpeechTpsCategory(
                      amznkaWrriorSpeechTpsCategoryItem.amznkaWrriorSpeechTpsCategoryId,
                    )
                  }
                  style={[
                    styles.amznkaWrriorSpeechTpsTab,
                    amznkaWrriorSpeechTpsIsActive &&
                      styles.amznkaWrriorSpeechTpsTabActive,
                  ]}>
                  <Text style={styles.amznkaWrriorSpeechTpsTabEmoji}>
                    {
                      amznkaWrriorSpeechTpsCategoryItem.amznkaWrriorSpeechTpsCategoryEmoji
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amznkaWrriorSpeechTpsTabLabel,
                      amznkaWrriorSpeechTpsIsActive &&
                        styles.amznkaWrriorSpeechTpsTabLabelActive,
                    ]}>
                    {
                      amznkaWrriorSpeechTpsCategoryItem.amznkaWrriorSpeechTpsCategoryTabLabel
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amznkaWrriorSpeechTpsTabCount,
                      amznkaWrriorSpeechTpsIsActive &&
                        styles.amznkaWrriorSpeechTpsTabCountActive,
                    ]}>
                    {amznkaWrriorSpeechTpsCount} tips
                  </Text>
                </Pressable>
              );
            },
          )}
        </View>

        {amznkaWrriorSpeechTpsFilteredTips.map(
          (amznkaWrriorSpeechTpsTip, amznkaWrriorSpeechTpsIndex) => (
            <View
              key={amznkaWrriorSpeechTpsTip.amznkaWrriorSpeechTpsTipId}
              style={styles.amznkaWrriorSpeechTpsTipCard}>
              <View style={styles.amznkaWrriorSpeechTpsTipCardTop}>
                <View style={styles.amznkaWrriorSpeechTpsTipNumber}>
                  <Text style={styles.amznkaWrriorSpeechTpsTipNumberText}>
                    {amznkaWrriorSpeechTpsIndex + 1}
                  </Text>
                </View>
                <Text
                  style={styles.amznkaWrriorSpeechTpsTipTitle}
                  numberOfLines={2}>
                  {amznkaWrriorSpeechTpsTip.amznkaWrriorSpeechTpsTipTitle.toUpperCase()}
                </Text>
                <Pressable
                  onPress={() =>
                    amznkaWrriorSpeechTpsShareTip(amznkaWrriorSpeechTpsTip)
                  }
                  style={styles.amznkaWrriorSpeechTpsTipShareBtn}>
                  <Image
                    source={require('../../assets/i/amznkawrshare.png')}
                    style={styles.amznkaWrriorSpeechTpsShareIcon}
                  />
                </Pressable>
              </View>
              <Text style={styles.amznkaWrriorSpeechTpsTipBody}>
                {amznkaWrriorSpeechTpsTip.amznkaWrriorSpeechTpsTipBody}
              </Text>
            </View>
          ),
        )}
      </View>
    </AmznkaWrriorSpeechLay>
  );
};

export default AmznkaWrriorSpeechTpsHome;

const styles = StyleSheet.create({
  amznkaWrriorSpeechTpsHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amznkaWrriorSpeechTpsHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amznkaWrriorSpeechTpsHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amznkaWrriorSpeechTpsHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amznkaWrriorSpeechTpsHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amznkaWrriorSpeechTpsHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechTpsHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  amznkaWrriorSpeechTpsHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amznkaWrriorSpeechTpsHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amznkaWrriorSpeechTpsRandomBtnWrap: {
    marginBottom: 16,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amznkaWrriorSpeechTpsRandomBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 52,
    gap: 8,
  },
  amznkaWrriorSpeechTpsRandomBtnIcon: {
    fontSize: 16,
  },
  amznkaWrriorSpeechTpsRandomBtnText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechTpsRandomCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: '#FF9900',
    padding: 16,
    marginBottom: 16,
  },
  amznkaWrriorSpeechTpsRandomCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  amznkaWrriorSpeechTpsRandomCardLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF9900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechTpsRandomCardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  amznkaWrriorSpeechTpsRandomActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechTpsCloseIcon: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechTpsRandomCardTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  amznkaWrriorSpeechTpsRandomCardBody: {
    fontSize: 12,
    lineHeight: 20,
    color: '#9B8E8F',
    marginBottom: 8,
  },
  amznkaWrriorSpeechTpsRandomCardFooter: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechTpsTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amznkaWrriorSpeechTpsTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechTpsTabActive: {
    backgroundColor: '#FF9900',
    borderColor: '#FF9900',
  },
  amznkaWrriorSpeechTpsTabEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  amznkaWrriorSpeechTpsTabLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 2,
  },
  amznkaWrriorSpeechTpsTabLabelActive: {
    color: '#000000',
  },
  amznkaWrriorSpeechTpsTabCount: {
    fontSize: 9,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechTpsTabCountActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  amznkaWrriorSpeechTpsTipCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
  },
  amznkaWrriorSpeechTpsTipCardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  amznkaWrriorSpeechTpsTipNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF990026',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 2,
    borderWidth: 1.1,
    borderColor: '#FF99004D',
  },
  amznkaWrriorSpeechTpsTipNumberText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF9900',
  },
  amznkaWrriorSpeechTpsTipTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    paddingRight: 8,
  },
  amznkaWrriorSpeechTpsTipShareBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechTpsShareIcon: {
    width: 14,
    height: 14,
    tintColor: '#9B8E8F',
  },
  amznkaWrriorSpeechTpsTipBody: {
    fontSize: 12,
    lineHeight: 20,
    color: '#9B8E8F',
    paddingLeft: 38,
  },
});
