import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StudioRealm} from '../data/studio';

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

type StudioEditorSheetProps = {
  studioVisible: boolean;
  studioCategory: StudioRealm;
  studioEditTitle?: string;
  studioEditBody?: string;
  studioIsEdit?: boolean;
  studioOnClose: () => void;
  studioOnSave: (
    studioTitle: string,
    studioBody: string,
  ) => void;
};

const StudioEditorSheet = ({
  studioVisible,
  studioCategory,
  studioEditTitle = '',
  studioEditBody = '',
  studioIsEdit,
  studioOnClose,
  studioOnSave,
}: StudioEditorSheetProps) => {
  const studioInsets = useSafeAreaInsets();
  const [studioTitle, setStudioTitle] =
    useState('');
  const [studioBody, setStudioBody] =
    useState('');

  useEffect(() => {
    if (studioVisible) {
      setStudioTitle(studioEditTitle);
      setStudioBody(studioEditBody);
    }
  }, [
    studioVisible,
    studioEditTitle,
    studioEditBody,
  ]);

  const studioCanSave =
    studioTitle.trim().length > 0 &&
    studioBody.trim().length > 0;

  return (
    <Modal
      visible={studioVisible}
      transparent
      animationType="slide"
      onRequestClose={studioOnClose}>
      <Pressable
        style={styles.studioModalOverlay}
        onPress={studioOnClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.studioModalKeyboard}>
          <Pressable
            style={[
              styles.studioModalSheet,
              {
                paddingBottom: Math.max(
                  studioInsets.bottom,
                  16,
                ),
              },
            ]}
            onPress={studioEvent =>
              studioEvent.stopPropagation()
            }>
            <View style={styles.studioModalHandle} />

            <View style={styles.studioModalHeader}>
              <Text style={styles.studioModalTitle}>
                {studioIsEdit ? 'Edit Text' : 'Add New Text'}
              </Text>
              <Pressable
                onPress={studioOnClose}
                style={styles.studioModalCloseBtn}>
                <Text style={styles.studioModalCloseIcon}>
                  ✕
                </Text>
              </Pressable>
            </View>

            <Text style={styles.studioModalContext}>
              Adding to:{' '}
              <Text style={styles.studioModalContextAccent}>
                {
                  studioCategory.studioCategoryEmoji
                }{' '}
                {
                  studioCategory.studioCategoryFullTitle
                }
              </Text>
            </Text>

            <TextInput
              value={studioTitle}
              onChangeText={setStudioTitle}
              placeholder="Text title *"
              placeholderTextColor="#9B8E8F"
              style={styles.studioModalInput}
            />

            <TextInput
              value={studioBody}
              onChangeText={setStudioBody}
              placeholder="Your text content *"
              placeholderTextColor="#9B8E8F"
              multiline
              textAlignVertical="top"
              style={[
                styles.studioModalInput,
                styles.studioModalInputBody,
              ]}
            />

            <Pressable
              disabled={!studioCanSave}
              onPress={() => {
                if (!studioCanSave) {
                  return;
                }
                studioOnSave(
                  studioTitle.trim(),
                  studioBody.trim(),
                );
              }}
              style={({pressed}) => [
                styles.studioModalSaveWrap,
                pressed && studioCanSave && {opacity: 0.9},
              ]}>
              {studioCanSave ? (
                <LinearGradient
                  colors={studioBtnGradient}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.studioModalSaveBtn}>
                  <Text
                    style={styles.studioModalSaveTextActive}>
                    {studioIsEdit
                      ? 'Save Text ✓'
                      : 'Add Text ✓'}
                  </Text>
                </LinearGradient>
              ) : (
                <View
                  style={styles.studioModalSaveBtnDisabled}>
                  <Text
                    style={styles.studioModalSaveTextDisabled}>
                    Add Text ✓
                  </Text>
                </View>
              )}
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
};

export default StudioEditorSheet;

const styles = StyleSheet.create({
  studioModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  studioModalKeyboard: {
    justifyContent: 'flex-end',
  },
  studioModalSheet: {
    backgroundColor: '#2D2829',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    borderBottomWidth: 0,
  },
  studioModalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9B8E8F',
    alignSelf: 'center',
    marginBottom: 16,
  },
  studioModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  studioModalTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  studioModalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studioModalCloseIcon: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  studioModalContext: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 16,
  },
  studioModalContextAccent: {
    color: '#FF9900',
    fontWeight: '600',
  },
  studioModalInput: {
    backgroundColor: '#3A3435',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  studioModalInputBody: {
    minHeight: 120,
    maxHeight: 160,
  },
  studioModalSaveWrap: {
    marginTop: 4,
  },
  studioModalSaveBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studioModalSaveBtnDisabled: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3435',
  },
  studioModalSaveTextActive: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  studioModalSaveTextDisabled: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#9B8E8F',
    textTransform: 'uppercase',
  },
});
