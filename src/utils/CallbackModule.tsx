import {NativeModules} from 'react-native';
const {NativeCallback} = NativeModules;

interface NativeToastnterface {
  sayHello(text: string, callbacl: myCallbackType): void;
}

interface myCallbackType {
  (error?: string, name?: string): void;
}

export default NativeCallback as NativeToastnterface;
