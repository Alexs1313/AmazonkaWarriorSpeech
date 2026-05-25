import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

const SceneShell = ({
  children,
  bounce = true,
}: {
  children: React.ReactNode;
  sceneLayoutScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <ImageBackground
      source={require('../../elements/images/scene-background.png')}
      style={styles.sceneLayoutBackground}>
      <ScrollView
        bounces={bounce}
        contentContainerStyle={styles.sceneLayoutScrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sceneLayoutBackground: {
    flex: 1,
  },
  sceneLayoutScrollContent: {
    flexGrow: 1,
  },
  sceneLayoutFill: {
    flex: 1,
  },
});

export default SceneShell;
