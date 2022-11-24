import {NativeModules} from 'react-native';
const {DeviceIdNativeModule} = NativeModules;

interface NativeToastnterface {
  getDeviceId(): Promise<string>;
}

export default DeviceIdNativeModule as NativeToastnterface;
