/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'red',
          borderWidth: 100,
          borderColor: 'rgba(0, 0, 255, 0.5)',
          borderRadius: 100,
        }}
      />
    </View>
  );
}

export default App;
