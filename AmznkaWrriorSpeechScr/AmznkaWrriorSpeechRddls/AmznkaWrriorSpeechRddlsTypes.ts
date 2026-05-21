import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type AmznkaWrriorSpeechRddlsStackParamList = {
  AmznkaWrriorSpeechRddlsIntro: undefined;
  AmznkaWrriorSpeechRddlsPlay: undefined;
  AmznkaWrriorSpeechRddlsResult: {
    amznkaWrriorSpeechRddlsCorrectCount: number;
    amznkaWrriorSpeechRddlsTotalCount: number;
    amznkaWrriorSpeechRddlsSwordsEarned: number;
  };
};

export type AmznkaWrriorSpeechRddlsNavigation =
  StackNavigationProp<AmznkaWrriorSpeechRddlsStackParamList>;

export type AmznkaWrriorSpeechRddlsResultRoute = RouteProp<
  AmznkaWrriorSpeechRddlsStackParamList,
  'AmznkaWrriorSpeechRddlsResult'
>;
