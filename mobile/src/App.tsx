import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </View>
  );
};

export default App;
