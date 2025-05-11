/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import store from './store/store';
import { Provider } from 'react-redux';

const Main = () => {
  return (
    <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
