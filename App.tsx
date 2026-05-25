import {NavigationContainer} from '@react-navigation/native';
import VoiceFlowNavigator from './src/navigation/VoiceFlowStack';

const App = () => {
  return (
    <NavigationContainer>
      <VoiceFlowNavigator />
    </NavigationContainer>
  );
};

export default App;
