import { SwitchNavigator } from 'react-navigation';
import { SplashScreenStack, OnBoardingStack, UserAuthStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';
import { AppStack } from './tabNavigator';

export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    SignIn: UserAuthStack,
    App: Drawer
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
