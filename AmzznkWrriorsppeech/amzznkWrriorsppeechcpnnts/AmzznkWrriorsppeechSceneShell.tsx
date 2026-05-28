import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function AmzznkWrriorsppeechSceneShell({
  children,
  amzznkWrriorsppeechBounce = true,
}: {
  children: React.ReactNode;
  amzznkWrriorsppeechSceneLayoutScroll?: boolean;
  amzznkWrriorsppeechBounce?: boolean;
}) {
  return (
    <LinearGradient
      colors={['rgb(67, 40, 24)', 'rgb(38, 20, 8)']}
      style={styles.amzznkWrriorsppeechSceneLayoutBackground}>
      <ScrollView
        bounces={amzznkWrriorsppeechBounce}
        contentContainerStyle={
          styles.amzznkWrriorsppeechSceneLayoutScrollContent
        }
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechSceneLayoutBackground: {
    flex: 1,
  },
  amzznkWrriorsppeechSceneLayoutScrollContent: {
    flexGrow: 1,
  },
  amzznkWrriorsppeechSceneLayoutFill: {
    flex: 1,
  },
});
