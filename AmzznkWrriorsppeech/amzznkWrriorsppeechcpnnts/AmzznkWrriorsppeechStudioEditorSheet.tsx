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
import type {AmzznkWrriorsppeechStudioRealm} from './AmzznkWrriorsppeechstudioCatalog';

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

type AmzznkWrriorsppeechStudioEditorSheetProps = {
  amzznkWrriorsppeechStudioVisible: boolean;
  studioCategory: AmzznkWrriorsppeechStudioRealm;
  amzznkWrriorsppeechStudioEditTitle?: string;
  amzznkWrriorsppeechStudioEditBody?: string;
  amzznkWrriorsppeechStudioIsEdit?: boolean;
  amzznkWrriorsppeechStudioOnClose: () => void;
  amzznkWrriorsppeechStudioOnSave: (
    studioTitle: string,
    studioBody: string,
  ) => void;
};

export function AmzznkWrriorsppeechStudioEditorSheet({
  amzznkWrriorsppeechStudioVisible,
  studioCategory,
  amzznkWrriorsppeechStudioEditTitle = '',
  amzznkWrriorsppeechStudioEditBody = '',
  amzznkWrriorsppeechStudioIsEdit,
  amzznkWrriorsppeechStudioOnClose,
  amzznkWrriorsppeechStudioOnSave,
}: AmzznkWrriorsppeechStudioEditorSheetProps) {
  const amzznkWrriorsppeechStudioInsets = useSafeAreaInsets();
  const [studioTitle, setStudioTitle] =
    useState('');
  const [studioBody, setStudioBody] =
    useState('');

  useEffect(() => {
    if (amzznkWrriorsppeechStudioVisible) {
      setStudioTitle(amzznkWrriorsppeechStudioEditTitle);
      setStudioBody(amzznkWrriorsppeechStudioEditBody);
    }
  }, [
    amzznkWrriorsppeechStudioVisible,
    amzznkWrriorsppeechStudioEditTitle,
    amzznkWrriorsppeechStudioEditBody,
  ]);

  const amzznkWrriorsppeechStudioCanSave =
    studioTitle.trim().length > 0 &&
    amzznkWrriorsppeechStudioEditBody.trim().length > 0;

  return (
    <Modal
      visible={amzznkWrriorsppeechStudioVisible}
      transparent
      animationType="slide"
      onRequestClose={amzznkWrriorsppeechStudioOnClose}>
      <Pressable
        style={styles.amzznkWrriorsppeechStudioModalOverlay}
        onPress={amzznkWrriorsppeechStudioOnClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.amzznkWrriorsppeechStudioModalKeyboard}>
          <Pressable
            style={[
              styles.amzznkWrriorsppeechStudioModalSheet,
              {
                paddingBottom: Math.max(
                  amzznkWrriorsppeechStudioInsets.bottom,
                  16,
                ),
              },
            ]}
            onPress={amzznkWrriorsppeechStudioEvent =>
              amzznkWrriorsppeechStudioEvent.stopPropagation()
            }>
            <View style={styles.amzznkWrriorsppeechStudioModalHandle} />

            <View style={styles.amzznkWrriorsppeechStudioModalHeader}>
              <Text style={styles.amzznkWrriorsppeechStudioModalTitle}>
                {amzznkWrriorsppeechStudioIsEdit ? 'Edit Text' : 'Add New Text'}
              </Text>
              <Pressable
                onPress={amzznkWrriorsppeechStudioOnClose}
                style={styles.amzznkWrriorsppeechStudioModalCloseBtn}>
                <Text style={styles.amzznkWrriorsppeechStudioModalCloseIcon}>
                  ✕
                </Text>
              </Pressable>
            </View>

            <Text style={styles.amzznkWrriorsppeechStudioModalContext}>
              Adding to:{' '}
              <Text style={styles.amzznkWrriorsppeechStudioModalContextAccent}>
                {
                  studioCategory.amzznkWrriorsppeechStudioCategoryEmoji
                }{' '}
                {
                  studioCategory.amzznkWrriorsppeechStudioCategoryFullTitle
                }
              </Text>
            </Text>

            <TextInput
              value={studioTitle}
              onChangeText={setStudioTitle}
              placeholder="Text title *"
              placeholderTextColor="#9B8E8F"
              style={styles.amzznkWrriorsppeechStudioModalInput}
            />

            <TextInput
              value={studioBody}
              onChangeText={setStudioBody}
              placeholder="Your text content *"
              placeholderTextColor="#9B8E8F"
              multiline
              textAlignVertical="top"
              style={[
                styles.amzznkWrriorsppeechStudioModalInput,
                styles.amzznkWrriorsppeechStudioModalInputBody,
              ]}
            />

            <Pressable
              disabled={!amzznkWrriorsppeechStudioCanSave}
              onPress={() => {
                if (!amzznkWrriorsppeechStudioCanSave) {
                  return;
                }
                amzznkWrriorsppeechStudioOnSave(
                  studioTitle.trim(),
                  studioBody.trim(),
                );
              }}
              style={({pressed}) => [
                styles.amzznkWrriorsppeechStudioModalSaveWrap,
                pressed && amzznkWrriorsppeechStudioCanSave && {opacity: 0.9},
              ]}>
              {amzznkWrriorsppeechStudioCanSave ? (
                <LinearGradient
                  colors={amzznkWrriorsppeechStudioBtnGradient}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.amzznkWrriorsppeechStudioModalSaveBtn}>
                  <Text
                    style={styles.amzznkWrriorsppeechStudioModalSaveTextActive}>
                    {amzznkWrriorsppeechStudioIsEdit
                      ? 'Save Text ✓'
                      : 'Add Text ✓'}
                  </Text>
                </LinearGradient>
              ) : (
                <View
                  style={styles.amzznkWrriorsppeechStudioModalSaveBtnDisabled}>
                  <Text
                    style={styles.amzznkWrriorsppeechStudioModalSaveTextDisabled}>
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
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechStudioModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  amzznkWrriorsppeechStudioModalKeyboard: {
    justifyContent: 'flex-end',
  },
  amzznkWrriorsppeechStudioModalSheet: {
    backgroundColor: '#2D2829',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    borderBottomWidth: 0,
  },
  amzznkWrriorsppeechStudioModalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9B8E8F',
    alignSelf: 'center',
    marginBottom: 16,
  },
  amzznkWrriorsppeechStudioModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  amzznkWrriorsppeechStudioModalTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechStudioModalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechStudioModalCloseIcon: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  amzznkWrriorsppeechStudioModalContext: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 16,
  },
  amzznkWrriorsppeechStudioModalContextAccent: {
    color: '#FF9900',
    fontWeight: '600',
  },
  amzznkWrriorsppeechStudioModalInput: {
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
  amzznkWrriorsppeechStudioModalInputBody: {
    minHeight: 120,
    maxHeight: 160,
  },
  amzznkWrriorsppeechStudioModalSaveWrap: {
    marginTop: 4,
  },
  amzznkWrriorsppeechStudioModalSaveBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechStudioModalSaveBtnDisabled: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3435',
  },
  amzznkWrriorsppeechStudioModalSaveTextActive: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechStudioModalSaveTextDisabled: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#9B8E8F',
    textTransform: 'uppercase',
  },
});
