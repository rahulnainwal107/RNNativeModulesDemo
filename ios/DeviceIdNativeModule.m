// RCTCalendarModule.m
#import "DeviceIdNativeModule.h"
#import <React/RCTLog.h>

@implementation DeviceIdNativeModule

RCT_EXPORT_MODULE(DeviceIdNativeModule);

RCT_EXPORT_METHOD(getDeviceId:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  UIDevice *device = [UIDevice currentDevice];
  //NSString *deviceName = [[UIDevice currentDevice] name];
  //NSString *deviceName = [device name];
  NSString *uniqueIdentifier = [[device identifierForVendor] UUIDString];
  resolve(uniqueIdentifier);
}

@end
