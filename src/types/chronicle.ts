import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type ChronicleStackParams = {
  ChronicleHome: undefined;
  ChronicleDetail: {
    chronicleEntryId: string;
  };
};

export type ChronicleNavigation =
  StackNavigationProp<ChronicleStackParams>;

export type ChronicleDetailRoute = RouteProp<
  ChronicleStackParams,
  'ChronicleDetail'
>;
