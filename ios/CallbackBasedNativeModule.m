// RCTCalendarModule.m
#import "CallbackBasedNativeModule.h"
#import <React/RCTLog.h>

@implementation NativeCallback

RCT_EXPORT_MODULE(NativeCallback);

RCT_EXPORT_METHOD(sayHello:(NSString *)name myCallback:(RCTResponseSenderBlock)callback)
{
  @try {
    NSString *hello = [NSString stringWithFormat:@"Hello %@",name];
    RCTLogInfo(@"Pretending to create an event %@ ", hello );
    callback(@[[NSNull null],hello]);
    }

    @catch ( NSException *e ) {
      callback(@[e,[NSNull null]]);
    }
}

@end
