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
import type {AmznkaWrriorSpeechWrkshCategory} from './AmznkaWrriorSpeechWrkshData';

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

type AmznkaWrriorSpeechWrkshModalProps = {
  amznkaWrriorSpeechWrkshVisible: boolean;
  amznkaWrriorSpeechWrkshCategory: AmznkaWrriorSpeechWrkshCategory;
  amznkaWrriorSpeechWrkshEditTitle?: string;
  amznkaWrriorSpeechWrkshEditBody?: string;
  amznkaWrriorSpeechWrkshIsEdit?: boolean;
  amznkaWrriorSpeechWrkshOnClose: () => void;
  amznkaWrriorSpeechWrkshOnSave: (
    amznkaWrriorSpeechWrkshTitle: string,
    amznkaWrriorSpeechWrkshBody: string,
  ) => void;
};

const AmznkaWrriorSpeechWrkshModal = ({
  amznkaWrriorSpeechWrkshVisible,
  amznkaWrriorSpeechWrkshCategory,
  amznkaWrriorSpeechWrkshEditTitle = '',
  amznkaWrriorSpeechWrkshEditBody = '',
  amznkaWrriorSpeechWrkshIsEdit,
  amznkaWrriorSpeechWrkshOnClose,
  amznkaWrriorSpeechWrkshOnSave,
}: AmznkaWrriorSpeechWrkshModalProps) => {
  const amznkaWrriorSpeechWrkshInsets = useSafeAreaInsets();
  const [amznkaWrriorSpeechWrkshTitle, setAmznkaWrriorSpeechWrkshTitle] =
    useState('');
  const [amznkaWrriorSpeechWrkshBody, setAmznkaWrriorSpeechWrkshBody] =
    useState('');

  useEffect(() => {
    if (amznkaWrriorSpeechWrkshVisible) {
      setAmznkaWrriorSpeechWrkshTitle(amznkaWrriorSpeechWrkshEditTitle);
      setAmznkaWrriorSpeechWrkshBody(amznkaWrriorSpeechWrkshEditBody);
    }
  }, [
    amznkaWrriorSpeechWrkshVisible,
    amznkaWrriorSpeechWrkshEditTitle,
    amznkaWrriorSpeechWrkshEditBody,
  ]);

  const amznkaWrriorSpeechWrkshCanSave =
    amznkaWrriorSpeechWrkshTitle.trim().length > 0 &&
    amznkaWrriorSpeechWrkshBody.trim().length > 0;

  return (
    <Modal
      visible={amznkaWrriorSpeechWrkshVisible}
      transparent
      animationType="slide"
      onRequestClose={amznkaWrriorSpeechWrkshOnClose}>
      <Pressable
        style={styles.amznkaWrriorSpeechWrkshModalOverlay}
        onPress={amznkaWrriorSpeechWrkshOnClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.amznkaWrriorSpeechWrkshModalKeyboard}>
          <Pressable
            style={[
              styles.amznkaWrriorSpeechWrkshModalSheet,
              {
                paddingBottom: Math.max(
                  amznkaWrriorSpeechWrkshInsets.bottom,
                  16,
                ),
              },
            ]}
            onPress={amznkaWrriorSpeechWrkshEvent =>
              amznkaWrriorSpeechWrkshEvent.stopPropagation()
            }>
            <View style={styles.amznkaWrriorSpeechWrkshModalHandle} />

            <View style={styles.amznkaWrriorSpeechWrkshModalHeader}>
              <Text style={styles.amznkaWrriorSpeechWrkshModalTitle}>
                {amznkaWrriorSpeechWrkshIsEdit ? 'Edit Text' : 'Add New Text'}
              </Text>
              <Pressable
                onPress={amznkaWrriorSpeechWrkshOnClose}
                style={styles.amznkaWrriorSpeechWrkshModalCloseBtn}>
                <Text style={styles.amznkaWrriorSpeechWrkshModalCloseIcon}>
                  ✕
                </Text>
              </Pressable>
            </View>

            <Text style={styles.amznkaWrriorSpeechWrkshModalContext}>
              Adding to:{' '}
              <Text style={styles.amznkaWrriorSpeechWrkshModalContextAccent}>
                {
                  amznkaWrriorSpeechWrkshCategory.amznkaWrriorSpeechWrkshCategoryEmoji
                }{' '}
                {
                  amznkaWrriorSpeechWrkshCategory.amznkaWrriorSpeechWrkshCategoryFullTitle
                }
              </Text>
            </Text>

            <TextInput
              value={amznkaWrriorSpeechWrkshTitle}
              onChangeText={setAmznkaWrriorSpeechWrkshTitle}
              placeholder="Text title *"
              placeholderTextColor="#9B8E8F"
              style={styles.amznkaWrriorSpeechWrkshModalInput}
            />

            <TextInput
              value={amznkaWrriorSpeechWrkshBody}
              onChangeText={setAmznkaWrriorSpeechWrkshBody}
              placeholder="Your text content *"
              placeholderTextColor="#9B8E8F"
              multiline
              textAlignVertical="top"
              style={[
                styles.amznkaWrriorSpeechWrkshModalInput,
                styles.amznkaWrriorSpeechWrkshModalInputBody,
              ]}
            />

            <Pressable
              disabled={!amznkaWrriorSpeechWrkshCanSave}
              onPress={() => {
                if (!amznkaWrriorSpeechWrkshCanSave) {
                  return;
                }
                amznkaWrriorSpeechWrkshOnSave(
                  amznkaWrriorSpeechWrkshTitle.trim(),
                  amznkaWrriorSpeechWrkshBody.trim(),
                );
              }}
              style={({pressed}) => [
                styles.amznkaWrriorSpeechWrkshModalSaveWrap,
                pressed && amznkaWrriorSpeechWrkshCanSave && {opacity: 0.9},
              ]}>
              {amznkaWrriorSpeechWrkshCanSave ? (
                <LinearGradient
                  colors={amznkaWrriorSpeechWrkshBtnGradient}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  style={styles.amznkaWrriorSpeechWrkshModalSaveBtn}>
                  <Text
                    style={styles.amznkaWrriorSpeechWrkshModalSaveTextActive}>
                    {amznkaWrriorSpeechWrkshIsEdit
                      ? 'Save Text ✓'
                      : 'Add Text ✓'}
                  </Text>
                </LinearGradient>
              ) : (
                <View
                  style={styles.amznkaWrriorSpeechWrkshModalSaveBtnDisabled}>
                  <Text
                    style={styles.amznkaWrriorSpeechWrkshModalSaveTextDisabled}>
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

export default AmznkaWrriorSpeechWrkshModal;

const styles = StyleSheet.create({
  amznkaWrriorSpeechWrkshModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  amznkaWrriorSpeechWrkshModalKeyboard: {
    justifyContent: 'flex-end',
  },
  amznkaWrriorSpeechWrkshModalSheet: {
    backgroundColor: '#2D2829',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    borderBottomWidth: 0,
  },
  amznkaWrriorSpeechWrkshModalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9B8E8F',
    alignSelf: 'center',
    marginBottom: 16,
  },
  amznkaWrriorSpeechWrkshModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  amznkaWrriorSpeechWrkshModalTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechWrkshModalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3A3435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechWrkshModalCloseIcon: {
    fontSize: 12,
    color: '#9B8E8F',
  },
  amznkaWrriorSpeechWrkshModalContext: {
    fontSize: 12,
    color: '#9B8E8F',
    marginBottom: 16,
  },
  amznkaWrriorSpeechWrkshModalContextAccent: {
    color: '#FF9900',
    fontWeight: '600',
  },
  amznkaWrriorSpeechWrkshModalInput: {
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
  amznkaWrriorSpeechWrkshModalInputBody: {
    minHeight: 120,
    maxHeight: 160,
  },
  amznkaWrriorSpeechWrkshModalSaveWrap: {
    marginTop: 4,
  },
  amznkaWrriorSpeechWrkshModalSaveBtn: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechWrkshModalSaveBtnDisabled: {
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A3435',
  },
  amznkaWrriorSpeechWrkshModalSaveTextActive: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechWrkshModalSaveTextDisabled: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#9B8E8F',
    textTransform: 'uppercase',
  },
});
