import {NativeModules} from 'react-native';
const {NativeToast} = NativeModules;

interface NativeToastnterface {
  show(text: string): void;
}

export default NativeToast as NativeToastnterface;
