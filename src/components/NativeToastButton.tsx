// https://medium.com/wix-engineering/creating-a-native-module-in-react-native-93bab0123e46

import React from 'react';

import Button from '../components/Button';
import NativeToast from '../utils/NativeToastModule';

const NativeToastButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    NativeToast.show('Toast by Rahul Nainwal');
  };

  return (
    <Button title="Click to invoke native toast module!" onPress={onPress} />
  );
};

export default NativeToastButton;
