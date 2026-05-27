import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';
import type {
  AmzznkWrriorsppeechFluxLaneId,
  AmzznkWrriorsppeechFluxCadence,
  AmzznkWrriorsppeechFluxPassageScale,
} from './AmzznkWrriorsppeechfluxCatalog';

export type AmzznkWrriorsppeechFluxStackParams = {
  FluxHome: undefined;
  FluxTier: {
    amzznkWrriorsppeechFluxCategoryId: AmzznkWrriorsppeechFluxLaneId;
  };
  FluxRead: {
    amzznkWrriorsppeechFluxCategoryId: AmzznkWrriorsppeechFluxLaneId;
    amzznkWrriorsppeechFluxPassageId: string;
    fluxScrollSpeed: AmzznkWrriorsppeechFluxCadence;
    fluxPassageSize: AmzznkWrriorsppeechFluxPassageScale;
  };
  FluxOutcome: {
    amzznkWrriorsppeechFluxCategoryId: AmzznkWrriorsppeechFluxLaneId;
    amzznkWrriorsppeechFluxPassageId: string;
  };
};

export type AmzznkWrriorsppeechFluxNavigation =
  StackNavigationProp<AmzznkWrriorsppeechFluxStackParams>;

export type AmzznkWrriorsppeechFluxTierRoute = RouteProp<AmzznkWrriorsppeechFluxStackParams, 'FluxTier'>;

export type AmzznkWrriorsppeechFluxReadRoute = RouteProp<AmzznkWrriorsppeechFluxStackParams, 'FluxRead'>;

export type AmzznkWrriorsppeechFluxOutcomeRoute = RouteProp<AmzznkWrriorsppeechFluxStackParams, 'FluxOutcome'>;
