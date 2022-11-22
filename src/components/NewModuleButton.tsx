import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import CalendarModule from '../utils/CalendarModule';

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
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
      <Text style={{color: 'white'}}>Click to invoke your native module!</Text>
    </TouchableOpacity>
  );
};

export default NewModuleButton;
