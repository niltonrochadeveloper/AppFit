import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/store';
import { Provider } from 'react-redux';

import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View , StatusBar} from 'react-native';

// import SignIn from './src/navigators/signedIn';
// import SignOut from './src/navigators/signedOut';
import Routes from './src/navigators/routes';

export default function App() {

  // const user = { name: 'John Doe', email: 'johndoe@example.com', isAppReady: true };

  // const isAppReady = user.isAppReady

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}


