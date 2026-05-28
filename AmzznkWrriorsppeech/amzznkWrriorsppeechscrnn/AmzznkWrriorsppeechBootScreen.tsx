import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const amzznkWrriorsppeechWelcomeLoaderHtml = `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            overflow: hidden;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .loader {
            display: block;
            --height-of-loader: 4px;
            --loader-color: #0071e2;
            width: 130px;
            height: var(--height-of-loader);
            border-radius: 30px;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }

          .loader::before {
            content: "";
            position: absolute;
            background: var(--loader-color);
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            border-radius: 30px;
            animation: moving 1s ease-in-out infinite;
          }

          @keyframes moving {
            50% {
              width: 100%;
            }

            100% {
              width: 0;
              right: 0;
              left: unset;
            }
          }
        </style>
      </head>

      <body>
        <div class="loader"></div>
      </body>
    </html>`;

export function AmzznkWrriorsppeechBootScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const amzznkWrriorsppeechWelcomeLoaderTimer = setTimeout(() => {
      navigation.navigate('Walk' as never);
    }, 6113);

    return () => {
      clearTimeout(amzznkWrriorsppeechWelcomeLoaderTimer);
    };
  }, [navigation]);

  return (
    <View style={styles.amzznkWrriorsppeechBackgroundImg}>
      <ScrollView
        contentContainerStyle={styles.amzznkWrriorsppeechScrollWrapp}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/amzznkWrriorsppeechSplashLogo.png')}
            style={{width: 200, height: 200, borderRadius: 50}}
          />
        </View>
        <View style={styles.amzznkWrriorsppeechBottomLoaderWrap}>
          <WebView
            source={{html: amzznkWrriorsppeechWelcomeLoaderHtml}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{width: 260, height: 90, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  amzznkWrriorsppeechBackgroundImg: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  amzznkWrriorsppeechScrollWrapp: {
    flexGrow: 1,
  },

  amzznkWrriorsppeechBottomLoaderWrap: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 40,
  },
});
