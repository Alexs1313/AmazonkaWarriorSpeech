import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const amzznkWrriorsppeechWalkBgDark = '#231F20';
const amzznkWrriorsppeechWalkOrange = '#FF9900';
const amzznkWrriorsppeechWalkOrangeEnd = '#FF6B35';
const amzznkWrriorsppeechWalkFrameBorder = 'rgba(255, 153, 0, 0.3)';
const amzznkWrriorsppeechWalkFrameBgColors: [string, string] = [
  'rgba(255, 153, 0, 0.2)',
  'rgba(255, 107, 53, 0.1)',
];

const amzznkWrriorsppeechWalkCinzelBold = 'Cinzel-Bold';
const amzznkWrriorsppeechWalkCinzelRegular = 'Cinzel-Regular';

type AmzznkWrriorsppeechWalkScreenStep = {
  amzznkWrriorsppeechWalkTitle: string;
  amzznkWrriorsppeechWalkBody: string;
  amzznkWrriorsppeechWalkQuote: string;
  amzznkWrriorsppeechWalkBgColors: [string, string, string];
  amzznkWrriorsppeechWalkImage: ImageSourcePropType;
}

const amzznkWrriorsppeechWalkSteps: AmzznkWrriorsppeechWalkScreenStep[] = [
  {
    amzznkWrriorsppeechWalkTitle: 'I Am Lyra, Amazonka Warrior',
    amzznkWrriorsppeechWalkBody:
      'Greetings, seeker. I am Lyra — warrior, orator, keeper of the ancient voice traditions of the Amazonka sisterhood. I have come to guide you on a journey that will transform not just your words, but your entire presence.',
    amzznkWrriorsppeechWalkQuote:
      '"Your voice is a weapon. Let us forge it together."',
    amzznkWrriorsppeechWalkBgColors: [
      '#3D1A00',
      '#2C2018',
      amzznkWrriorsppeechWalkBgDark,
    ],
    amzznkWrriorsppeechWalkImage: require('../../assets/images/amzznkWrriorsppeechWalkSlide1.png'),
  },
  {
    amzznkWrriorsppeechWalkTitle: 'Master the Teleprompter',
    amzznkWrriorsppeechWalkBody:
      'In ancient times, we memorized speeches under the stars. Today, I give you the Flow Reader — a sacred scroll that moves before your eyes. Choose your passage, set your pace, and read with the power of a warrior.',
    amzznkWrriorsppeechWalkQuote:
      '"Three categories of warrior wisdom await your voice."',
    amzznkWrriorsppeechWalkBgColors: [
      '#1A2A0A',
      '#232A1A',
      amzznkWrriorsppeechWalkBgDark,
    ],
    amzznkWrriorsppeechWalkImage: require('../../assets/images/amzznkWrriorsppeechWalkSlide2.png'),
  },
  {
    amzznkWrriorsppeechWalkTitle: 'Stories of Our Sisterhood',
    amzznkWrriorsppeechWalkBody:
      'Every Amazonka carries stories — legends of queens, myths of power, adventures in the deep jungle. Reading these stories aloud will shape your intonation, your emotion, your connection with language.',
    amzznkWrriorsppeechWalkQuote: '"Save your favorites. Share the wisdom."',
    amzznkWrriorsppeechWalkBgColors: [
      '#1A1A3D',
      '#23232E',
      amzznkWrriorsppeechWalkBgDark,
    ],
    amzznkWrriorsppeechWalkImage: require('../../assets/images/amzznkWrriorsppeechWalkSlide3.png'),
  },
  {
    amzznkWrriorsppeechWalkTitle: 'The Lab & Oracle',
    amzznkWrriorsppeechWalkBody:
      'In the Text Lab, craft and collect your own practice scripts. At the Oracle, test your knowledge in timed trials — collect swords ✦ as you progress, and use them in the Text Vault.',
    amzznkWrriorsppeechWalkQuote: '"Every challenge makes you stronger."',
    amzznkWrriorsppeechWalkBgColors: [
      '#3D001A',
      '#2E1820',
      amzznkWrriorsppeechWalkBgDark,
    ],
    amzznkWrriorsppeechWalkImage: require('../../assets/images/amzznkWrriorsppeechWalkSlide4.png'),
  },
  {
    amzznkWrriorsppeechWalkTitle: 'Your Voice Journey Begins',
    amzznkWrriorsppeechWalkBody:
      'The Amazonka way is not about perfection — it is about practice, consistency, and the courage to speak clearly and powerfully. I will be with you every step of this journey.',
    amzznkWrriorsppeechWalkQuote: '"Rise. Breathe. Speak. You are ready."',
    amzznkWrriorsppeechWalkBgColors: [
      '#2D1A00',
      '#272320',
      amzznkWrriorsppeechWalkBgDark,
    ],
    amzznkWrriorsppeechWalkImage: require('../../assets/images/amzznkWrriorsppeechWalkSlide5.png'),
  },
];

const amzznkWrriorsppeechWalkBtnGradient = [
  amzznkWrriorsppeechWalkOrange,
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
  amzznkWrriorsppeechWalkOrangeEnd,
];

const AmzznkWrriorsppeechWalkScreenLyraBadge = () => (
  <View style={styles.amzznkWrriorsppeechWalkLyraRow}>
    <View style={styles.amzznkWrriorsppeechWalkLyraIcon}>
      <Text style={styles.amzznkWrriorsppeechWalkLyraIconText}>⚔️</Text>
    </View>
    <Text style={styles.amzznkWrriorsppeechWalkLyraName}>Lyra</Text>
  </View>
);

type AmzznkWrriorsppeechWalkScreenDotsProps = {
  amzznkWrriorsppeechWalkActiveIndex: number;
}

const AmzznkWrriorsppeechWalkScreenDots = ({
  amzznkWrriorsppeechWalkActiveIndex,
}: AmzznkWrriorsppeechWalkScreenDotsProps) => (
  <View style={styles.amzznkWrriorsppeechWalkDotsRow}>
    {amzznkWrriorsppeechWalkSteps.map((_, amzznkWrriorsppeechWalkDotIndex) => {
      const amzznkWrriorsppeechWalkIsActive =
        amzznkWrriorsppeechWalkDotIndex === amzznkWrriorsppeechWalkActiveIndex;
      return (
        <View
          key={amzznkWrriorsppeechWalkDotIndex}
          style={[
            styles.amzznkWrriorsppeechWalkDot,
            amzznkWrriorsppeechWalkIsActive &&
              styles.amzznkWrriorsppeechWalkDotActive,
          ]}
        />
      );
    })}
  </View>
);

export function AmzznkWrriorsppeechWalkScreen() {
  const navigation = useNavigation();
  const amzznkWrriorsppeechWalkInsets = useSafeAreaInsets();
  const [walkStep, setWalkScreenStep] = useState(0);

  const amzznkWrriorsppeechWalkCurrent =
    amzznkWrriorsppeechWalkSteps[walkStep];
  const amzznkWrriorsppeechWalkIsLast =
    walkStep === amzznkWrriorsppeechWalkSteps.length - 1;

  const amzznkWrriorsppeechWalkFinish = () => {
    navigation.navigate('MainTabs' as never);
  };

  const amzznkWrriorsppeechWalkContinue = () => {
    if (amzznkWrriorsppeechWalkIsLast) {
      amzznkWrriorsppeechWalkFinish();
      return;
    }
    setWalkScreenStep(
      amzznkWrriorsppeechWalkPrev => amzznkWrriorsppeechWalkPrev + 1,
    );
  };

  return (
    <View style={styles.amzznkWrriorsppeechWalkRoot}>
      <LinearGradient
        colors={amzznkWrriorsppeechWalkCurrent.amzznkWrriorsppeechWalkBgColors}
        locations={[0, 0.55, 1]}
        style={styles.amzznkWrriorsppeechWalkBgFill}>
        <ScrollView
          contentContainerStyle={[
            styles.amzznkWrriorsppeechWalkScroll,
            {paddingTop: amzznkWrriorsppeechWalkInsets.top + 24},
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <LinearGradient
            colors={amzznkWrriorsppeechWalkFrameBgColors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.amzznkWrriorsppeechWalkPortraitWrap}>
            <Image
              source={amzznkWrriorsppeechWalkCurrent.amzznkWrriorsppeechWalkImage}
              style={styles.amzznkWrriorsppeechWalkPortrait}
              resizeMode="cover"
            />
          </LinearGradient>

          <AmzznkWrriorsppeechWalkScreenLyraBadge />

          <Text style={styles.amzznkWrriorsppeechWalkTitle}>
            {amzznkWrriorsppeechWalkCurrent.amzznkWrriorsppeechWalkTitle}
          </Text>

          <View style={styles.amzznkWrriorsppeechWalkDescBox}>
            <Text style={styles.amzznkWrriorsppeechWalkDescText}>
              {amzznkWrriorsppeechWalkCurrent.amzznkWrriorsppeechWalkBody}
            </Text>
          </View>

          <Text style={styles.amzznkWrriorsppeechWalkQuote}>
            {amzznkWrriorsppeechWalkCurrent.amzznkWrriorsppeechWalkQuote}
          </Text>
          <View
            style={[
              styles.amzznkWrriorsppeechWalkFooter,
              {paddingBottom: Math.max(amzznkWrriorsppeechWalkInsets.bottom, 16)},
            ]}>
            <AmzznkWrriorsppeechWalkScreenDots
              amzznkWrriorsppeechWalkActiveIndex={walkStep}
            />

            <Pressable
              onPress={amzznkWrriorsppeechWalkContinue}
              style={({pressed}) => [
                styles.amzznkWrriorsppeechWalkBtnWrap,
                pressed && styles.amzznkWrriorsppeechWalkBtnPressed,
              ]}>
              <LinearGradient
                colors={amzznkWrriorsppeechWalkBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.amzznkWrriorsppeechWalkBtn}>
                <Text style={styles.amzznkWrriorsppeechWalkBtnText}>
                  {amzznkWrriorsppeechWalkIsLast
                    ? 'Begin My Journey'
                    : 'Continue →'}
                </Text>
              </LinearGradient>
            </Pressable>

            {!amzznkWrriorsppeechWalkIsLast && (
              <Pressable
                onPress={amzznkWrriorsppeechWalkFinish}
                style={({pressed}) => [
                  styles.amzznkWrriorsppeechWalkSkipWrap,
                  pressed && styles.amzznkWrriorsppeechWalkSkipPressed,
                ]}>
                <Text style={styles.amzznkWrriorsppeechWalkSkipText}>
                  Skip for now
                </Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}



const styles = StyleSheet.create({
  amzznkWrriorsppeechWalkRoot: {
    flex: 1,
    backgroundColor: amzznkWrriorsppeechWalkBgDark,
  },
  amzznkWrriorsppeechWalkBgFill: {
    flex: 1,
  },
  amzznkWrriorsppeechWalkScroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 31,
    paddingBottom: 30,
  },
  amzznkWrriorsppeechWalkPortraitWrap: {
    width: 231,
    height: 231,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: amzznkWrriorsppeechWalkFrameBorder,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  amzznkWrriorsppeechWalkPortrait: {
    marginTop: 2,
  },
  amzznkWrriorsppeechWalkLyraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  amzznkWrriorsppeechWalkLyraIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.4)',
    backgroundColor: 'rgba(255, 153, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  amzznkWrriorsppeechWalkLyraIconText: {
    fontSize: 10,
    color: '#F5F0E8',
  },
  amzznkWrriorsppeechWalkLyraName: {
    fontFamily: amzznkWrriorsppeechWalkCinzelRegular,
    fontSize: 12,
    letterSpacing: 1.2,
    color: amzznkWrriorsppeechWalkOrange,
    textTransform: 'uppercase',
  },
  amzznkWrriorsppeechWalkTitle: {
    fontFamily: amzznkWrriorsppeechWalkCinzelBold,
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  amzznkWrriorsppeechWalkDescBox: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    backgroundColor: 'rgba(35, 31, 32, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
  },
  amzznkWrriorsppeechWalkDescText: {
    fontSize: 14,
    lineHeight: 22.75,
    color: 'rgba(245, 240, 232, 0.9)',
    textAlign: 'center',
  },
  amzznkWrriorsppeechWalkQuote: {
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'italic',
    fontWeight: '500',
    color: amzznkWrriorsppeechWalkOrange,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  amzznkWrriorsppeechWalkFooter: {
    width: '100%',
    paddingTop: 16,
    marginTop: 30,
  },
  amzznkWrriorsppeechWalkDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
    minHeight: 6,
  },
  amzznkWrriorsppeechWalkDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  amzznkWrriorsppeechWalkDotActive: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: amzznkWrriorsppeechWalkOrange,
  },
  amzznkWrriorsppeechWalkBtnWrap: {
    width: '100%',
    marginBottom: 12,
    shadowColor: amzznkWrriorsppeechWalkOrange,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 7.5,
    elevation: 8,
  },
  amzznkWrriorsppeechWalkBtnPressed: {
    opacity: 0.9,
    transform: [{scale: 0.98}],
  },
  amzznkWrriorsppeechWalkBtn: {
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amzznkWrriorsppeechWalkBtnText: {
    fontFamily: amzznkWrriorsppeechWalkCinzelBold,
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#000000',
  },
  amzznkWrriorsppeechWalkSkipWrap: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  amzznkWrriorsppeechWalkSkipPressed: {
    opacity: 0.6,
  },
  amzznkWrriorsppeechWalkSkipText: {
    fontSize: 12,
    letterSpacing: 0.3,
    fontWeight: '500',
    color: '#9B8E8F',
  },
});
