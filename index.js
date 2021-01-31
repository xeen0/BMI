import * as React from 'react';
import { AppRegistry ,View} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';

export default function Main() {
  return (
    <PaperProvider>
      <View >
      <App />
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);