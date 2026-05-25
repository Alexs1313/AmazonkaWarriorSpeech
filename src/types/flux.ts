import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';
import type {
  FluxLaneId,
  FluxCadence,
  FluxPassageScale,
} from '../data/flux';

export type FluxStackParams = {
  FluxHome: undefined;
  FluxTier: {
    fluxCategoryId: FluxLaneId;
  };
  FluxRead: {
    fluxCategoryId: FluxLaneId;
    fluxPassageId: string;
    fluxScrollSpeed: FluxCadence;
    fluxPassageSize: FluxPassageScale;
  };
  FluxOutcome: {
    fluxCategoryId: FluxLaneId;
    fluxPassageId: string;
  };
};

export type FluxNavigation =
  StackNavigationProp<FluxStackParams>;

export type FluxTierRoute = RouteProp<FluxStackParams, 'FluxTier'>;

export type FluxReadRoute = RouteProp<FluxStackParams, 'FluxRead'>;

export type FluxOutcomeRoute = RouteProp<FluxStackParams, 'FluxOutcome'>;
