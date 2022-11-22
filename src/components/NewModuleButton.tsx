import React from 'react';

import Button from '../components/Button';
import CalendarModule from '../utils/CalendarModule';

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <Button title="Click to invoke your native module!" onPress={onPress} />
  );
};

export default NewModuleButton;
