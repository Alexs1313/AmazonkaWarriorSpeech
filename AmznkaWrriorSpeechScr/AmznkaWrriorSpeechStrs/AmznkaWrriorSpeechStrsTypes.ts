import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type AmznkaWrriorSpeechStrsStackParamList = {
  AmznkaWrriorSpeechStrsHome: undefined;
  AmznkaWrriorSpeechStrsDetail: {
    amznkaWrriorSpeechStrsStoryId: string;
  };
};

export type AmznkaWrriorSpeechStrsNavigation =
  StackNavigationProp<AmznkaWrriorSpeechStrsStackParamList>;

export type AmznkaWrriorSpeechStrsDetailRoute = RouteProp<
  AmznkaWrriorSpeechStrsStackParamList,
  'AmznkaWrriorSpeechStrsDetail'
>;
