#import "AppDelegate.h"
#import "RNBootSplash.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"WhiteLabelDemo";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
//  NSBundle* mainBundle = [NSBundle mainBundle];
//  NSString *splashStoryboard = [mainBundle objectForInfoDictionaryKey:@"UILaunchStoryboardName"];
//  
//  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
//                                                moduleName:@"Cyrus"
//                                                initialProperties:nil];
//  
//  UIView *rootView = [super createRootViewWithBridge:bridge
//                                          moduleName:moduleName
//                                           initProps:initProps];
//
//  [RNBootSplash initWithStoryboard:splashStoryboard rootView:rootView];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  NSBundle* mainBundle = [NSBundle mainBundle];
  NSString *splashStoryboard = [mainBundle objectForInfoDictionaryKey:@"UILaunchStoryboardName"];
  
  UIView *rootView = [super createRootViewWithBridge:bridge
                                          moduleName:moduleName
                                           initProps:initProps];

  [RNBootSplash initWithStoryboard:splashStoryboard rootView:rootView]; // ⬅️ initialize the splash screen

  return rootView;
}

@end
