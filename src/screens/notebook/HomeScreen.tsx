import React, {useState} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SceneShell from '../../components/Shell';
import {
  notebookTopics,
  notebookPickNote,
  notebookNotesByTopic,
  notebookNotes,
  type NotebookTopicId,
  type NotebookNote,
} from '../../data/notebook';

const notebookBtnGradient = [
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

const NotebookHomeScreen = () => {
  const notebookInsets = useSafeAreaInsets();
  const [notebookCategory, setNotebookTopic] =
    useState<NotebookTopicId>('voice');
  const [notebookPickedNoteState, setNotebookPickedNoteState] =
    useState<NotebookNote | null>(null);

  const notebookFilteredNotes = notebookNotesByTopic(notebookCategory);

  const notebookShareNote = async (notebookNote: NotebookNote) => {
    await Share.share({
      message: `${notebookNote.notebookNoteTitle}\n\n${notebookNote.notebookNoteBody}`,
    });
  };

  return (
    <SceneShell>
      <View
        style={[
          styles.notebookHomeContent,
          {paddingTop: notebookInsets.top + 16},
        ]}>
        <Text style={styles.notebookHomeKicker}>Amazonka Voice</Text>
        <Text style={styles.notebookHomeTitle}>Diction Tips</Text>
        <Text style={styles.notebookHomeSubtitle}>
          Ancient Amazonka wisdom for modern speakers
        </Text>

        <View style={styles.notebookHomeStatsRow}>
          <View style={styles.notebookHomeStatCard}>
            <Text style={styles.notebookHomeStatEmoji}>💡</Text>
            <Text style={styles.notebookHomeStatValue}>
              {notebookNotes.length}
            </Text>
            <Text style={styles.notebookHomeStatLabel}>Total Tips</Text>
          </View>
          <View style={styles.notebookHomeStatCard}>
            <Text style={styles.notebookHomeStatEmoji}>📂</Text>
            <Text style={styles.notebookHomeStatValue}>3</Text>
            <Text style={styles.notebookHomeStatLabel}>Categories</Text>
          </View>
          <View style={styles.notebookHomeStatCard}>
            <Text style={styles.notebookHomeStatEmoji}>⚔️</Text>
            <Text style={styles.notebookHomeStatValue}>Amazonka</Text>
            <Text style={styles.notebookHomeStatLabel}>Methods</Text>
          </View>
        </View>

        <Pressable
          onPress={() => setNotebookPickedNoteState(notebookPickNote())}
          style={({pressed}) => [
            styles.notebookRandomBtnWrap,
            pressed && {opacity: 0.9},
          ]}>
          <LinearGradient
            colors={notebookBtnGradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.notebookRandomBtn}>
            <Image
              source={require('../../../elements/images/tip-pick.png')}
            />
            <Text style={styles.notebookRandomBtnText}>Pick a Tip</Text>
          </LinearGradient>
        </Pressable>

        {notebookPickedNoteState && (
          <View style={styles.notebookRandomCard}>
            <View style={styles.notebookRandomCardHeader}>
              <Text style={styles.notebookRandomCardLabel}>✨ Picked Tip</Text>
              <View style={styles.notebookRandomCardActions}>
                <Pressable
                  onPress={() => notebookShareNote(notebookPickedNoteState)}
                  style={styles.notebookRandomActionBtn}>
                  <Image
                    source={require('../../../elements/images/icon-share.png')}
                    style={styles.notebookShareIcon}
                  />
                </Pressable>
                <Pressable
                  onPress={() => setNotebookPickedNoteState(null)}
                  style={styles.notebookRandomActionBtn}>
                  <Text style={styles.notebookCloseIcon}>✕</Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.notebookRandomCardTitle}>
              {notebookPickedNoteState.notebookNoteTitle.toUpperCase()}
            </Text>
            <Text style={styles.notebookRandomCardBody}>
              {notebookPickedNoteState.notebookNoteBody}
            </Text>
            <Text style={styles.notebookRandomCardFooter}>
              {notebookPickedNoteState.notebookNoteFooter}
            </Text>
          </View>
        )}

        <View style={styles.notebookTabsRow}>
          {notebookTopics.map(notebookCategoryItem => {
            const notebookIsActive =
              notebookCategory === notebookCategoryItem.notebookCategoryId;
            const notebookCount = notebookNotesByTopic(
              notebookCategoryItem.notebookCategoryId,
            ).length;

            return (
              <Pressable
                key={notebookCategoryItem.notebookCategoryId}
                onPress={() =>
                  setNotebookTopic(notebookCategoryItem.notebookCategoryId)
                }
                style={[
                  styles.notebookTab,
                  notebookIsActive && styles.notebookTabActive,
                ]}>
                <Text style={styles.notebookTabEmoji}>
                  {notebookCategoryItem.notebookCategoryEmoji}
                </Text>
                <Text
                  style={[
                    styles.notebookTabLabel,
                    notebookIsActive && styles.notebookTabLabelActive,
                  ]}>
                  {notebookCategoryItem.notebookCategoryTabLabel}
                </Text>
                <Text
                  style={[
                    styles.notebookTabCount,
                    notebookIsActive && styles.notebookTabCountActive,
                  ]}>
                  {notebookCount} tips
                </Text>
              </Pressable>
            );
          })}
        </View>

        {notebookFilteredNotes.map((notebookNote, notebookIndex) => (
          <View
            key={notebookNote.notebookNoteId}
            style={styles.notebookNoteCard}>
            <View style={styles.notebookNoteCardTop}>
              <View style={styles.notebookNoteNumber}>
                <Text style={styles.notebookNoteNumberText}>
                  {notebookIndex + 1}
                </Text>
              </View>
              <Text style={styles.notebookNoteTitle} numberOfLines={2}>
                {notebookNote.notebookNoteTitle.toUpperCase()}
              </Text>
              <Pressable
                onPress={() => notebookShareNote(notebookNote)}
                style={styles.notebookNoteShareBtn}>
                <Image
                  source={require('../../../elements/images/icon-share.png')}
                  style={styles.notebookShareIcon}
                />
              </Pressable>
            </View>
            <Text style={styles.notebookNoteBody}>
              {notebookNote.notebookNoteBody}
            </Text>
          </View>
        ))}
      </View>
    </SceneShell>
  );
};

export default NotebookHomeScreen;

const styles = StyleSheet.create({
  notebookHomeContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  notebookHomeKicker: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#FF9900',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  notebookHomeTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  notebookHomeSubtitle: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 20,
  },
  notebookHomeStatsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  notebookHomeStatCard: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 18,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  notebookHomeStatEmoji: {
    fontSize: 16,
    marginBottom: 4,
  },
  notebookHomeStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  notebookHomeStatLabel: {
    fontSize: 9,
    color: '#9B8E8F',
    marginTop: 2,
  },
  notebookRandomBtnWrap: {
    marginBottom: 16,
    shadowColor: '#FF9900',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  notebookRandomBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 52,
    gap: 8,
  },
  notebookRandomBtnIcon: {
    fontSize: 16,
  },
  notebookRandomBtnText: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  notebookRandomCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: '#FF9900',
    padding: 16,
    marginBottom: 16,
  },
  notebookRandomCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  notebookRandomCardLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF9900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  notebookRandomCardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  notebookRandomActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notebookCloseIcon: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  notebookRandomCardTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  notebookRandomCardBody: {
    fontSize: 12,
    lineHeight: 20,
    color: '#9B8E8F',
    marginBottom: 8,
  },
  notebookRandomCardFooter: {
    fontSize: 10,
    color: '#9B8E8F',
  },
  notebookTabsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  notebookTab: {
    flex: 1,
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  notebookTabActive: {
    backgroundColor: '#FF9900',
    borderColor: '#FF9900',
  },
  notebookTabEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  notebookTabLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B8E8F',
    marginBottom: 2,
  },
  notebookTabLabelActive: {
    color: '#000000',
  },
  notebookTabCount: {
    fontSize: 9,
    color: '#9B8E8F',
  },
  notebookTabCountActive: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  notebookNoteCard: {
    backgroundColor: '#2D2829',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    padding: 16,
    marginBottom: 12,
  },
  notebookNoteCardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  notebookNoteNumber: {
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
  notebookNoteNumberText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF9900',
  },
  notebookNoteTitle: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    paddingRight: 8,
  },
  notebookNoteShareBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notebookShareIcon: {
    width: 14,
    height: 14,
    tintColor: '#9B8E8F',
  },
  notebookNoteBody: {
    fontSize: 12,
    lineHeight: 20,
    color: '#9B8E8F',
    paddingLeft: 38,
  },
});
