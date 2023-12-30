import store from './src/store';
import { Provider } from 'react-redux';
import { NativeBaseProvider, Box, useColorMode } from "native-base";

import Routes from './src/navigators/routes';
import { colorModeManager, config } from './src/Theme/config';
import { useBaseThemes } from './src/Theme';

export default function App() {

  const { lightTheme, darkTheme } = useBaseThemes()
  const { colorMode } = useColorMode()

  // const user = { name: 'John Doe', email: 'johndoe@example.com', isAppReady: true };
  // const isAppReady = user.isAppReady

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={colorMode === 'light' ? lightTheme : darkTheme} config={config} colorModeManager={colorModeManager}>
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
}


