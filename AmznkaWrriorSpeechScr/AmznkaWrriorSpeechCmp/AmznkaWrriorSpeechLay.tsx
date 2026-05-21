import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

const AmznkaWrriorSpeechLay = ({
  children,
  bounce = true,
}: {
  children: React.ReactNode;
  wudlanndvildexplorrlayScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <ImageBackground
      source={require('../../assets/i/amznkawrriorspeebgg.png')}
      style={styles.wudlanndvildexplorrlayBackground}>
      <ScrollView
        bounces={bounce}
        contentContainerStyle={styles.wudlanndvildexplorrlayScrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wudlanndvildexplorrlayBackground: {
    flex: 1,
  },
  wudlanndvildexplorrlayScrollContent: {
    flexGrow: 1,
  },
  wudlanndvildexplorrlayFill: {
    flex: 1,
  },
});

export default AmznkaWrriorSpeechLay;
