import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type OracleStackParams = {
  OracleIntro: undefined;
  OracleTrial: undefined;
  OracleOutcome: {
    oracleCorrectCount: number;
    oracleTotalCount: number;
    oracleTokensGained: number;
  };
};

export type OracleNavigation =
  StackNavigationProp<OracleStackParams>;

export type OracleOutcomeRoute = RouteProp<OracleStackParams, 'OracleOutcome'>;
