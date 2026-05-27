import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteProp} from '@react-navigation/native';

export type AmzznkWrriorsppeechOracleStackParams = {
  OracleIntro: undefined;
  OracleTrial: undefined;
  OracleOutcome: {
    oracleCorrectCount: number;
    amzznkWrriorsppeechOracleTotalCount: number;
    amzznkWrriorsppeechOracleTokensGained: number;
  };
};

export type AmzznkWrriorsppeechOracleNavigation =
  StackNavigationProp<AmzznkWrriorsppeechOracleStackParams>;

export type AmzznkWrriorsppeechOracleOutcomeRoute = RouteProp<AmzznkWrriorsppeechOracleStackParams, 'OracleOutcome'>;
