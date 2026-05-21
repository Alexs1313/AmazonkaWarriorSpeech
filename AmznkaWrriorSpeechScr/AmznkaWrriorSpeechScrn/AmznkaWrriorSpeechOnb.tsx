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

const amznkaWrriorSpeechOnbBgDark = '#231F20';
const amznkaWrriorSpeechOnbOrange = '#FF9900';
const amznkaWrriorSpeechOnbOrangeEnd = '#FF6B35';
const amznkaWrriorSpeechOnbFrameBorder = 'rgba(255, 153, 0, 0.3)';
const amznkaWrriorSpeechOnbFrameBgColors: [string, string] = [
  'rgba(255, 153, 0, 0.2)',
  'rgba(255, 107, 53, 0.1)',
];

const amznkaWrriorSpeechOnbCinzelBold = 'Cinzel-Bold';
const amznkaWrriorSpeechOnbCinzelRegular = 'Cinzel-Regular';

type AmznkaWrriorSpeechOnbStep = {
  amznkaWrriorSpeechOnbTitle: string;
  amznkaWrriorSpeechOnbBody: string;
  amznkaWrriorSpeechOnbQuote: string;
  amznkaWrriorSpeechOnbBgColors: [string, string, string];
  amznkaWrriorSpeechOnbImage: ImageSourcePropType;
};

const amznkaWrriorSpeechOnbSteps: AmznkaWrriorSpeechOnbStep[] = [
  {
    amznkaWrriorSpeechOnbTitle: 'I Am Lyra, Amazon Warrior',
    amznkaWrriorSpeechOnbBody:
      'Greetings, seeker. I am Lyra — warrior, orator, keeper of the ancient voice traditions of the Amazon sisterhood. I have come to guide you on a journey that will transform not just your words, but your entire presence.',
    amznkaWrriorSpeechOnbQuote:
      '"Your voice is a weapon. Let us forge it together."',
    amznkaWrriorSpeechOnbBgColors: [
      '#3D1A00',
      '#2C2018',
      amznkaWrriorSpeechOnbBgDark,
    ],
    amznkaWrriorSpeechOnbImage: require('../../assets/i/amznkawrrioronbchr1.png'),
  },
  {
    amznkaWrriorSpeechOnbTitle: 'Master the Teleprompter',
    amznkaWrriorSpeechOnbBody:
      'In ancient times, we memorized speeches under the stars. Today, I give you the Sufleur — a sacred scroll that moves before your eyes. Choose your text, set your pace, and read with the power of a warrior.',
    amznkaWrriorSpeechOnbQuote:
      '"Three categories of warrior wisdom await your voice."',
    amznkaWrriorSpeechOnbBgColors: [
      '#1A2A0A',
      '#232A1A',
      amznkaWrriorSpeechOnbBgDark,
    ],
    amznkaWrriorSpeechOnbImage: require('../../assets/i/amznkawrrioronbchr2.png'),
  },
  {
    amznkaWrriorSpeechOnbTitle: 'Stories of Our Sisterhood',
    amznkaWrriorSpeechOnbBody:
      'Every Amazon carries stories — legends of queens, myths of power, adventures in the deep jungle. Reading these stories aloud will shape your intonation, your emotion, your connection with language.',
    amznkaWrriorSpeechOnbQuote: '"Save your favorites. Share the wisdom."',
    amznkaWrriorSpeechOnbBgColors: [
      '#1A1A3D',
      '#23232E',
      amznkaWrriorSpeechOnbBgDark,
    ],
    amznkaWrriorSpeechOnbImage: require('../../assets/i/amznkawrrioronbchr3.png'),
  },
  {
    amznkaWrriorSpeechOnbTitle: 'The Workshops & Riddles',
    amznkaWrriorSpeechOnbBody:
      'In the Text Workshop, craft and collect your own practice scripts. In the Arena, test your knowledge against ancient Amazon riddles — earn Swords ⚔️ as your reward, and spend them in the Text Store.',
    amznkaWrriorSpeechOnbQuote: '"Every challenge makes you stronger."',
    amznkaWrriorSpeechOnbBgColors: [
      '#3D001A',
      '#2E1820',
      amznkaWrriorSpeechOnbBgDark,
    ],
    amznkaWrriorSpeechOnbImage: require('../../assets/i/amznkawrrioronbchr4.png'),
  },
  {
    amznkaWrriorSpeechOnbTitle: 'Your Voice Journey Begins',
    amznkaWrriorSpeechOnbBody:
      'The Amazon way is not about perfection — it is about practice, consistency, and the courage to speak clearly and powerfully. I will be with you every step of this journey.',
    amznkaWrriorSpeechOnbQuote: '"Rise. Breathe. Speak. You are ready."',
    amznkaWrriorSpeechOnbBgColors: [
      '#2D1A00',
      '#272320',
      amznkaWrriorSpeechOnbBgDark,
    ],
    amznkaWrriorSpeechOnbImage: require('../../assets/i/amznkawrrioronbchr5.png'),
  },
];

const amznkaWrriorSpeechOnbBtnGradient = [
  amznkaWrriorSpeechOnbOrange,
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
  amznkaWrriorSpeechOnbOrangeEnd,
];

const AmznkaWrriorSpeechOnbLyraBadge = () => (
  <View style={styles.amznkaWrriorSpeechOnbLyraRow}>
    <View style={styles.amznkaWrriorSpeechOnbLyraIcon}>
      <Text style={styles.amznkaWrriorSpeechOnbLyraIconText}>⚔️</Text>
    </View>
    <Text style={styles.amznkaWrriorSpeechOnbLyraName}>Lyra</Text>
  </View>
);

type AmznkaWrriorSpeechOnbDotsProps = {
  amznkaWrriorSpeechOnbActiveIndex: number;
};

const AmznkaWrriorSpeechOnbDots = ({
  amznkaWrriorSpeechOnbActiveIndex,
}: AmznkaWrriorSpeechOnbDotsProps) => (
  <View style={styles.amznkaWrriorSpeechOnbDotsRow}>
    {amznkaWrriorSpeechOnbSteps.map((_, amznkaWrriorSpeechOnbDotIndex) => {
      const amznkaWrriorSpeechOnbIsActive =
        amznkaWrriorSpeechOnbDotIndex === amznkaWrriorSpeechOnbActiveIndex;
      return (
        <View
          key={amznkaWrriorSpeechOnbDotIndex}
          style={[
            styles.amznkaWrriorSpeechOnbDot,
            amznkaWrriorSpeechOnbIsActive &&
              styles.amznkaWrriorSpeechOnbDotActive,
          ]}
        />
      );
    })}
  </View>
);

const AmznkaWrriorSpeechOnb = () => {
  const navigation = useNavigation();
  const amznkaWrriorSpeechOnbInsets = useSafeAreaInsets();
  const [amznkaWrriorSpeechOnbStep, setAmznkaWrriorSpeechOnbStep] = useState(0);

  const amznkaWrriorSpeechOnbCurrent =
    amznkaWrriorSpeechOnbSteps[amznkaWrriorSpeechOnbStep];
  const amznkaWrriorSpeechOnbIsLast =
    amznkaWrriorSpeechOnbStep === amznkaWrriorSpeechOnbSteps.length - 1;

  const amznkaWrriorSpeechOnbFinish = () => {
    navigation.navigate('AmznkaWrriorSpeechTab' as never);
  };

  const amznkaWrriorSpeechOnbContinue = () => {
    if (amznkaWrriorSpeechOnbIsLast) {
      amznkaWrriorSpeechOnbFinish();
      return;
    }
    setAmznkaWrriorSpeechOnbStep(
      amznkaWrriorSpeechOnbPrev => amznkaWrriorSpeechOnbPrev + 1,
    );
  };

  return (
    <View style={styles.amznkaWrriorSpeechOnbRoot}>
      <LinearGradient
        colors={amznkaWrriorSpeechOnbCurrent.amznkaWrriorSpeechOnbBgColors}
        locations={[0, 0.55, 1]}
        style={styles.amznkaWrriorSpeechOnbBgFill}>
        <ScrollView
          contentContainerStyle={[
            styles.amznkaWrriorSpeechOnbScroll,
            {paddingTop: amznkaWrriorSpeechOnbInsets.top + 24},
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <LinearGradient
            colors={amznkaWrriorSpeechOnbFrameBgColors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.amznkaWrriorSpeechOnbPortraitWrap}>
            <Image
              source={amznkaWrriorSpeechOnbCurrent.amznkaWrriorSpeechOnbImage}
              style={styles.amznkaWrriorSpeechOnbPortrait}
              resizeMode="cover"
            />
          </LinearGradient>

          <AmznkaWrriorSpeechOnbLyraBadge />

          <Text style={styles.amznkaWrriorSpeechOnbTitle}>
            {amznkaWrriorSpeechOnbCurrent.amznkaWrriorSpeechOnbTitle}
          </Text>

          <View style={styles.amznkaWrriorSpeechOnbDescBox}>
            <Text style={styles.amznkaWrriorSpeechOnbDescText}>
              {amznkaWrriorSpeechOnbCurrent.amznkaWrriorSpeechOnbBody}
            </Text>
          </View>

          <Text style={styles.amznkaWrriorSpeechOnbQuote}>
            {amznkaWrriorSpeechOnbCurrent.amznkaWrriorSpeechOnbQuote}
          </Text>
          <View
            style={[
              styles.amznkaWrriorSpeechOnbFooter,
              {paddingBottom: Math.max(amznkaWrriorSpeechOnbInsets.bottom, 16)},
            ]}>
            <AmznkaWrriorSpeechOnbDots
              amznkaWrriorSpeechOnbActiveIndex={amznkaWrriorSpeechOnbStep}
            />

            <Pressable
              onPress={amznkaWrriorSpeechOnbContinue}
              style={({pressed}) => [
                styles.amznkaWrriorSpeechOnbBtnWrap,
                pressed && styles.amznkaWrriorSpeechOnbBtnPressed,
              ]}>
              <LinearGradient
                colors={amznkaWrriorSpeechOnbBtnGradient}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.amznkaWrriorSpeechOnbBtn}>
                <Text style={styles.amznkaWrriorSpeechOnbBtnText}>
                  {amznkaWrriorSpeechOnbIsLast
                    ? 'Begin My Journey'
                    : 'Continue →'}
                </Text>
              </LinearGradient>
            </Pressable>

            {!amznkaWrriorSpeechOnbIsLast && (
              <Pressable
                onPress={amznkaWrriorSpeechOnbFinish}
                style={({pressed}) => [
                  styles.amznkaWrriorSpeechOnbSkipWrap,
                  pressed && styles.amznkaWrriorSpeechOnbSkipPressed,
                ]}>
                <Text style={styles.amznkaWrriorSpeechOnbSkipText}>
                  Skip for now
                </Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default AmznkaWrriorSpeechOnb;

const styles = StyleSheet.create({
  amznkaWrriorSpeechOnbRoot: {
    flex: 1,
    backgroundColor: amznkaWrriorSpeechOnbBgDark,
  },
  amznkaWrriorSpeechOnbBgFill: {
    flex: 1,
  },
  amznkaWrriorSpeechOnbScroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 31,
    paddingBottom: 30,
  },
  amznkaWrriorSpeechOnbPortraitWrap: {
    width: 231,
    height: 231,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: amznkaWrriorSpeechOnbFrameBorder,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  amznkaWrriorSpeechOnbPortrait: {
    marginTop: 2,
  },
  amznkaWrriorSpeechOnbLyraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  amznkaWrriorSpeechOnbLyraIcon: {
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
  amznkaWrriorSpeechOnbLyraIconText: {
    fontSize: 10,
    color: '#F5F0E8',
  },
  amznkaWrriorSpeechOnbLyraName: {
    fontFamily: amznkaWrriorSpeechOnbCinzelRegular,
    fontSize: 12,
    letterSpacing: 1.2,
    color: amznkaWrriorSpeechOnbOrange,
    textTransform: 'uppercase',
  },
  amznkaWrriorSpeechOnbTitle: {
    fontFamily: amznkaWrriorSpeechOnbCinzelBold,
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  amznkaWrriorSpeechOnbDescBox: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 153, 0, 0.15)',
    backgroundColor: 'rgba(35, 31, 32, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
  },
  amznkaWrriorSpeechOnbDescText: {
    fontSize: 14,
    lineHeight: 22.75,
    color: 'rgba(245, 240, 232, 0.9)',
    textAlign: 'center',
  },
  amznkaWrriorSpeechOnbQuote: {
    fontSize: 12,
    lineHeight: 16,
    fontStyle: 'italic',
    fontWeight: '500',
    color: amznkaWrriorSpeechOnbOrange,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  amznkaWrriorSpeechOnbFooter: {
    width: '100%',
    paddingTop: 16,
    marginTop: 30,
  },
  amznkaWrriorSpeechOnbDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
    minHeight: 6,
  },
  amznkaWrriorSpeechOnbDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  amznkaWrriorSpeechOnbDotActive: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: amznkaWrriorSpeechOnbOrange,
  },
  amznkaWrriorSpeechOnbBtnWrap: {
    width: '100%',
    marginBottom: 12,
    shadowColor: amznkaWrriorSpeechOnbOrange,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 7.5,
    elevation: 8,
  },
  amznkaWrriorSpeechOnbBtnPressed: {
    opacity: 0.9,
    transform: [{scale: 0.98}],
  },
  amznkaWrriorSpeechOnbBtn: {
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amznkaWrriorSpeechOnbBtnText: {
    fontFamily: amznkaWrriorSpeechOnbCinzelBold,
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#000000',
  },
  amznkaWrriorSpeechOnbSkipWrap: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  amznkaWrriorSpeechOnbSkipPressed: {
    opacity: 0.6,
  },
  amznkaWrriorSpeechOnbSkipText: {
    fontSize: 12,
    letterSpacing: 0.3,
    fontWeight: '500',
    color: '#9B8E8F',
  },
});
