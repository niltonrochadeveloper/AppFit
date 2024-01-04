import store from './src/store';
import { Provider } from 'react-redux';
import { config } from "./config/gluestack-ui.config"
import React, { useState } from 'react';
import Routes from './src/navigators/routes';
import { StyledProvider } from "@gluestack-style/react"
import { OverlayProvider } from "@gluestack-ui/overlay"
import { ToastProvider } from "@gluestack-ui/toast"

import { createProvider } from "@gluestack-ui/provider"

export default function App() {
  const [theme, setTheme] = useState('light');
  const GluestackUIStyledProvider = createProvider({ StyledProvider })
  return (
    <Provider store={store}>
      <GluestackUIStyledProvider colorMode={theme === 'light' ? 'light' : 'dark'} config={config}>
      <OverlayProvider>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </OverlayProvider>
      </GluestackUIStyledProvider>
    </Provider>
  );
}

