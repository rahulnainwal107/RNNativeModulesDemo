package com.rnnativemodulesdemo;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CallbackBasedNativeModule extends ReactContextBaseJavaModule {
    public CallbackBasedNativeModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "NativeCallback";
    }

    @ReactMethod
    public void sayHello (String name, Callback cb) {
        try {
            String hello = "Hello " + name;
            cb.invoke(null, hello);
        } catch (Exception err) {
            cb.invoke(err, null);
        }
    }
}
