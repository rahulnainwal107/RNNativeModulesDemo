// https://medium.com/@dev_one/react-native-native-modules-ee5a8f390a7

import React from 'react';
import {Alert} from 'react-native';

import Button from '../components/Button';
import DeviceIdNativeModule from '../utils/DeviceIdNativeModule';

const DeviceIdNative = () => {
  const onPress = async () => {
    try {
      console.log('We will invoke the native module here!');
      const deviceId = await DeviceIdNativeModule.getDeviceId();
      Alert.alert('DeviceId ', deviceId);
    } catch (error) {
      Alert.alert('Error  ', 'Error in getting device id.');
    }
  };

  return (
    <Button title="Click to invoke native toast module!" onPress={onPress} />
  );
};

export default DeviceIdNative;
