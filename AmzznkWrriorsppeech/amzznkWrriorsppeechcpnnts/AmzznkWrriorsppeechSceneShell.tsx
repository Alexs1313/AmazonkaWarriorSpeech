import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

export function AmzznkWrriorsppeechSceneShell({
  children,
  amzznkWrriorsppeechBounce = true,
}: {
  children: React.ReactNode;
  amzznkWrriorsppeechSceneLayoutScroll?: boolean;
  amzznkWrriorsppeechBounce?: boolean;
}) {
  return (
    <ImageBackground
      source={require('../../assets/images/amzznkWrriorsppeechSceneBackground.png')}
      style={styles.amzznkWrriorsppeechSceneLayoutBackground}>
      <ScrollView
        bounces={amzznkWrriorsppeechBounce}
        contentContainerStyle={styles.amzznkWrriorsppeechSceneLayoutScrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
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


