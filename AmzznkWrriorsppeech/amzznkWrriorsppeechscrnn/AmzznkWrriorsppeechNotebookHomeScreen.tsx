import React, {useState} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AmzznkWrriorsppeechSceneShell} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechSceneShell';
import {
  amzznkWrriorsppeechNotebookTopics,
  amzznkWrriorsppeechNotebookPickNote,
  amzznkWrriorsppeechNotebookNotesByTopic,
  amzznkWrriorsppeechNotebookNotes,
  type AmzznkWrriorsppeechNotebookTopicId,
  type AmzznkWrriorsppeechNotebookNote,
} from '../amzznkWrriorsppeechcpnnts/AmzznkWrriorsppeechnotebookCatalog';

const amzznkWrriorsppeechNotebookBtnGradient = [
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

export function AmzznkWrriorsppeechNotebookHomeScreen() {
  const amzznkWrriorsppeechNotebookInsets = useSafeAreaInsets();
  const [notebookCategory, setNotebookTopic] =
    useState<AmzznkWrriorsppeechNotebookTopicId>('voice');
  const [notebookPickedNoteState, setNotebookPickedNoteState] =
    useState<AmzznkWrriorsppeechNotebookNote | null>(null);

  const amzznkWrriorsppeechNotebookFilteredNotes =
    amzznkWrriorsppeechNotebookNotesByTopic(notebookCategory);

  const amzznkWrriorsppeechNotebookShareNote = async (
    amzznkWrriorsppeechNotebookNote: AmzznkWrriorsppeechNotebookNote,
  ) => {
    await Share.share({
      message: `${amzznkWrriorsppeechNotebookNote.amzznkWrriorsppeechNotebookNoteTitle}\n\n${amzznkWrriorsppeechNotebookNote.amzznkWrriorsppeechNotebookNoteBody}`,
    });
  };

  return (
    <AmzznkWrriorsppeechSceneShell>
      <View
        style={[
          styles.amzznkWrriorsppeechNotebookHomeContent,
          {paddingTop: amzznkWrriorsppeechNotebookInsets.top + 16},
        ]}>
        <Text style={styles.amzznkWrriorsppeechNotebookHomeKicker}>
          Amazonka Voice
        </Text>
        <Text style={styles.amzznkWrriorsppeechNotebookHomeTitle}>
          Diction Tips
        </Text>
        <Text style={styles.amzznkWrriorsppeechNotebookHomeSubtitle}>
          Ancient Amazonka wisdom for modern speakers
        </Text>

        <View style={styles.amzznkWrriorsppeechNotebookHomeStatsRow}>
          <View style={styles.amzznkWrriorsppeechNotebookHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatEmoji}>
              💡
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatValue}>
              {amzznkWrriorsppeechNotebookNotes.length}
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatLabel}>
              Total Tips
            </Text>
          </View>
          <View style={styles.amzznkWrriorsppeechNotebookHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatEmoji}>
              📂
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatValue}>
              3
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatLabel}>
              Categories
            </Text>
          </View>
          <View style={styles.amzznkWrriorsppeechNotebookHomeStatCard}>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatEmoji}>
              ⚔️
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatValue}>
              Amazonka
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookHomeStatLabel}>
              Methods
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() =>
            setNotebookPickedNoteState(amzznkWrriorsppeechNotebookPickNote())
          }
          style={({pressed}) => [
            styles.amzznkWrriorsppeechNotebookRandomBtnWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={amzznkWrriorsppeechNotebookBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.amzznkWrriorsppeechNotebookRandomBtn}>
            <Image
              source={require('../../assets/images/amzznkWrriorsppeechTipPick.png')}
            />
            <Text style={styles.amzznkWrriorsppeechNotebookRandomBtnText}>
              Pick a Tip
            </Text>
          </LinearGradient>
        </Pressable>

        {notebookPickedNoteState && (
          <View style={styles.amzznkWrriorsppeechNotebookRandomCard}>
            <View style={styles.amzznkWrriorsppeechNotebookRandomCardHeader}>
              <Text style={styles.amzznkWrriorsppeechNotebookRandomCardLabel}>
                ✨Picked Amazonka Voice Tip
              </Text>
              <View style={styles.amzznkWrriorsppeechNotebookRandomCardActions}>
                <Pressable
                  onPress={() =>
                    amzznkWrriorsppeechNotebookShareNote(
                      notebookPickedNoteState,
                    )
                  }
                  style={styles.amzznkWrriorsppeechNotebookRandomActionBtn}>
                  <Image
                    source={require('../../assets/images/amzznkWrriorsppeechIconShare.png')}
                    style={styles.amzznkWrriorsppeechNotebookShareIcon}
                  />
                </Pressable>
                <Pressable
                  onPress={() => setNotebookPickedNoteState(null)}
                  style={styles.amzznkWrriorsppeechNotebookRandomActionBtn}>
                  <Text style={styles.amzznkWrriorsppeechNotebookCloseIcon}>
                    ✕
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.amzznkWrriorsppeechNotebookRandomCardTitle}>
              {notebookPickedNoteState.amzznkWrriorsppeechNotebookNoteTitle.toUpperCase()}
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookRandomCardBody}>
              {notebookPickedNoteState.amzznkWrriorsppeechNotebookNoteBody}
            </Text>
            <Text style={styles.amzznkWrriorsppeechNotebookRandomCardFooter}>
              {notebookPickedNoteState.amzznkWrriorsppeechNotebookNoteFooter}
            </Text>
          </View>
        )}

        <View style={styles.amzznkWrriorsppeechNotebookTabsRow}>
          {amzznkWrriorsppeechNotebookTopics.map(
            amzznkWrriorsppeechNotebookCategoryItem => {
              const amzznkWrriorsppeechNotebookIsActive =
                notebookCategory ===
                amzznkWrriorsppeechNotebookCategoryItem.amzznkWrriorsppeechNotebookCategoryId;
              const amzznkWrriorsppeechNotebookCount =
                amzznkWrriorsppeechNotebookNotesByTopic(
                  amzznkWrriorsppeechNotebookCategoryItem.amzznkWrriorsppeechNotebookCategoryId,
                ).length;

              return (
                <Pressable
                  key={
                    amzznkWrriorsppeechNotebookCategoryItem.amzznkWrriorsppeechNotebookCategoryId
                  }
                  onPress={() =>
                    setNotebookTopic(
                      amzznkWrriorsppeechNotebookCategoryItem.amzznkWrriorsppeechNotebookCategoryId,
                    )
                  }
                  style={[
                    styles.amzznkWrriorsppeechNotebookTab,
                    amzznkWrriorsppeechNotebookIsActive &&
                      styles.amzznkWrriorsppeechNotebookTabActive,
                  ]}>
                  <Text style={styles.amzznkWrriorsppeechNotebookTabEmoji}>
                    {
                      amzznkWrriorsppeechNotebookCategoryItem.amzznkWrriorsppeechNotebookCategoryEmoji
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amzznkWrriorsppeechNotebookTabLabel,
                      amzznkWrriorsppeechNotebookIsActive &&
                        styles.amzznkWrriorsppeechNotebookTabLabelActive,
                    ]}>
                    {
                      amzznkWrriorsppeechNotebookCategoryItem.amzznkWrriorsppeechNotebookCategoryTabLabel
                    }
                  </Text>
                  <Text
                    style={[
                      styles.amzznkWrriorsppeechNotebookTabCount,
                      amzznkWrriorsppeechNotebookIsActive &&
                        styles.amzznkWrriorsppeechNotebookTabCountActive,
                    ]}>
                    {amzznkWrriorsppeechNotebookCount} Tips
                  </Text>
                </Pressable>
              );
            },
          )}
        </View>

        {amzznkWrriorsppeechNotebookFilteredNotes.map(
          (
            amzznkWrriorsppeechNotebookNote,
            amzznkWrriorsppeechNotebookIndex,
          ) => (
            <View
              key={
                amzznkWrriorsppeechNotebookNote.amzznkWrriorsppeechNotebookNoteId
              }
              style={styles.amzznkWrriorsppeechNotebookNoteCard}>
              <View style={styles.amzznkWrriorsppeechNotebookNoteCardTop}>
                <View style={styles.amzznkWrriorsppeechNotebookNoteNumber}>
                  <Text
                    style={styles.amzznkWrriorsppeechNotebookNoteNumberText}>
                    {amzznkWrriorsppeechNotebookIndex + 1}
                  </Text>
                </View>
                <Text
                  style={styles.amzznkWrriorsppeechNotebookNoteTitle}
                  numberOfLines={2}>
                  {amzznkWrriorsppeechNotebookNote.amzznkWrriorsppeechNotebookNoteTitle.toUpperCase()}
                </Text>
                <Pressable
                  onPress={() =>
                    amzznkWrriorsppeechNotebookShareNote(
                      amzznkWrriorsppeechNotebookNote,
                    )
                  }
                  style={styles.amzznkWrriorsppeechNotebookNoteShareBtn}>
                  <Image
                    source={require('../../assets/images/amzznkWrriorsppeechIconShare.png')}
                    style={styles.amzznkWrriorsppeechNotebookShareIcon}
                  />
                </Pressable>
              </View>
              <Text style={styles.amzznkWrriorsppeechNotebookNoteBody}>
                {
                  amzznkWrriorsppeechNotebookNote.amzznkWrriorsppeechNotebookNoteBody
                }
              </Text>
            </View>
          ),
        )}
      </View>
    </AmzznkWrriorsppeechSceneShell>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechNotebookHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  amzznkWrriorsppeechNotebookHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  amzznkWrriorsppeechNotebookHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  amzznkWrriorsppeechNotebookHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  amzznkWrriorsppeechNotebookHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amzznkWrriorsppeechNotebookHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechNotebookHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  amzznkWrriorsppeechNotebookHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  amzznkWrriorsppeechNotebookHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  amzznkWrriorsppeechNotebookRandomBtnWrap: {
    marginBottom: 16,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  amzznkWrriorsppeechNotebookRandomBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 52,
    gap: 8,
  },
  amzznkWrriorsppeechNotebookRandomBtnIcon: {
    fontSize: 16,
  },
  amzznkWrriorsppeechNotebookRandomBtnText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechNotebookRandomCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: '#FF9900',
    padding: 16,
    marginBottom: 16,
  },
  amzznkWrriorsppeechNotebookRandomCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  amzznkWrriorsppeechNotebookRandomCardLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF9900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechNotebookRandomCardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  amzznkWrriorsppeechNotebookRandomActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechNotebookCloseIcon: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechNotebookRandomCardTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  amzznkWrriorsppeechNotebookRandomCardBody: {
    fontSize: 12,
    lineHeight: 20,
    color: '#9B8E8F',
    marginBottom: 8,
  },
  amzznkWrriorsppeechNotebookRandomCardFooter: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechNotebookTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  amzznkWrriorsppeechNotebookTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechNotebookTabActive: {
    backgroundColor: '#FF9900',
    borderColor: '#FF9900',
  },
  amzznkWrriorsppeechNotebookTabEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  amzznkWrriorsppeechNotebookTabLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 2,
  },
  amzznkWrriorsppeechNotebookTabLabelActive: {
    color: '#000000',
  },
  amzznkWrriorsppeechNotebookTabCount: {
    fontSize: 9,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechNotebookTabCountActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  amzznkWrriorsppeechNotebookNoteCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
  },
  amzznkWrriorsppeechNotebookNoteCardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  amzznkWrriorsppeechNotebookNoteNumber: {
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
  amzznkWrriorsppeechNotebookNoteNumberText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF9900',
  },
  amzznkWrriorsppeechNotebookNoteTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    paddingRight: 8,
  },
  amzznkWrriorsppeechNotebookNoteShareBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechNotebookShareIcon: {
    width: 14,
    height: 14,
    tintColor: '#9B8E8F',
  },
  amzznkWrriorsppeechNotebookNoteBody: {
    fontSize: 12,
    lineHeight: 20,
    color: '#9B8E8F',
    paddingLeft: 38,
  },
});
