// https://medium.com/wix-engineering/creating-a-native-module-in-react-native-93bab0123e46

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import NativeToast from '../utils/NativeToastModule';

const NativeToastButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    NativeToast.show('Toast by Rahul Nainwal');
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#841584',
        margin: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }}
      onPress={onPress}>
      <Text style={{color: 'white'}}>Click to invoke native toast module!</Text>
    </TouchableOpacity>
  );
};

export default NativeToastButton;
