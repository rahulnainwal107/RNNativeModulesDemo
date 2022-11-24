import React from 'react';
import {Alert} from 'react-native';

import Button from '../components/Button';
import NativeCallback from '../utils/CallbackModule';

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    NativeCallback.sayHello('Rahul Nainwal', callbackFromNative);
  };

  const callbackFromNative = (error?: string, success?: string) => {
    if (error) {
      Alert.alert('Error ', success);
    }
    Alert.alert('Success ', success);
  };

  return (
    <Button
      title="Click to invoke native module with callback functionality!"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
