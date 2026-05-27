import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type AmzznkWrriorsppeechChronicleStackParams = {
  ChronicleHome: undefined;
  ChronicleDetail: {
    amzznkWrriorsppeechChronicleEntryId: string;
  };
};

export type AmzznkWrriorsppeechChronicleNavigation =
  StackNavigationProp<AmzznkWrriorsppeechChronicleStackParams>;

export type AmzznkWrriorsppeechChronicleDetailRoute = RouteProp<
  AmzznkWrriorsppeechChronicleStackParams,
  'ChronicleDetail'
>;
