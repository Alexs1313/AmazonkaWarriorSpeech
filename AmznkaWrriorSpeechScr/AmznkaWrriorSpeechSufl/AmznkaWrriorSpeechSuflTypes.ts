import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';
import type {
  AmznkaWrriorSpeechSuflCategoryId,
  AmznkaWrriorSpeechSuflScrollSpeed,
  AmznkaWrriorSpeechSuflTextSize,
} from './AmznkaWrriorSpeechSuflData';

export type AmznkaWrriorSpeechSuflStackParamList = {
  AmznkaWrriorSpeechSuflHome: undefined;
  AmznkaWrriorSpeechSuflDiff: {
    amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId;
  };
  AmznkaWrriorSpeechSuflRead: {
    amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId;
    amznkaWrriorSpeechSuflTextId: string;
    amznkaWrriorSpeechSuflScrollSpeed: AmznkaWrriorSpeechSuflScrollSpeed;
    amznkaWrriorSpeechSuflTextSize: AmznkaWrriorSpeechSuflTextSize;
  };
  AmznkaWrriorSpeechSuflResult: {
    amznkaWrriorSpeechSuflCategoryId: AmznkaWrriorSpeechSuflCategoryId;
    amznkaWrriorSpeechSuflTextId: string;
  };
};

export type AmznkaWrriorSpeechSuflNavigation =
  StackNavigationProp<AmznkaWrriorSpeechSuflStackParamList>;

export type AmznkaWrriorSpeechSuflDiffRoute = RouteProp<
  AmznkaWrriorSpeechSuflStackParamList,
  'AmznkaWrriorSpeechSuflDiff'
>;

export type AmznkaWrriorSpeechSuflReadRoute = RouteProp<
  AmznkaWrriorSpeechSuflStackParamList,
  'AmznkaWrriorSpeechSuflRead'
>;

export type AmznkaWrriorSpeechSuflResultRoute = RouteProp<
  AmznkaWrriorSpeechSuflStackParamList,
  'AmznkaWrriorSpeechSuflResult'
>;
