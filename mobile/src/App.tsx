import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </View>
  );
};

export default App;
