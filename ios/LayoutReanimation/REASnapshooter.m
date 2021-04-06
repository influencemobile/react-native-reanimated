//
//  REASnapshooter.m
//  RNReanimated
//
//  Created by Szymon Kapala on 24/03/2021.
//

#import "REASnapshooter.h"
#import "REAHeroView.h"

@implementation REASnapshooter 

-(instancetype)initWithTag:(NSNumber*)tag capturableProps:(NSSet*)capturableProps
{
  if (self = [super init]) {
    _capturableProps = capturableProps;
    _tag = tag;
    _listView = [NSMutableArray new];
    _capturedValues = [NSMutableDictionary new];
    return self;
  }
  return nil;
}

//TODO capture also transform matrix to make it more error proof
-(void)takeSnapshot:(UIView*)view
{
  NSMutableDictionary* values = [NSMutableDictionary new];
  UIView *windowView = UIApplication.sharedApplication.keyWindow;
  CGPoint originFromRootPerspective = [[view superview] convertPoint:view.center toView:windowView]; //TODO choose correct origin
  
 
  values[@"width"] = [NSNumber numberWithDouble:(double)(view.bounds.size.width)];
  values[@"height"] = [NSNumber numberWithDouble:(double)(view.bounds.size.height)];
  values[@"originX"] = [NSNumber numberWithDouble:view.center.x - view.bounds.size.width/2.0];
  values[@"originY"] = [NSNumber numberWithDouble:view.center.y - view.bounds.size.height/2.0];
  values[@"globalOriginX"] = [NSNumber numberWithDouble:originFromRootPerspective.x - view.bounds.size.width/2.0];
  values[@"globalOriginY"] = [NSNumber numberWithDouble:originFromRootPerspective.y - view.bounds.size.height/2.0];

  //TODO capture additional values set by a user
  
  values[@"parent"] = view.superview;
  
  [_listView addObject:view];
  self.capturedValues[[REASnapshooter idFor:view]] = values;
}

+ (NSString*)idFor:(UIView *)view
{
  if ([view isKindOfClass:[REAHeroView class]]) {
    NSString *heroId = ((REAHeroView*)view).heroId;
    return heroId;
  }
  return [[NSNumber numberWithUnsignedLong:[[NSValue valueWithNonretainedObject:view] hash]] stringValue];
}

@end
