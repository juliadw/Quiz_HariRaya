import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import SessionScreen from '../screens/SessionScreen';
import Lesson from '../screens/Lesson';
import Quiz from '../screens/Quiz';
import SplashScreen from '../screens/SplashScreen';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Verification from '../screens/Verification';
import Theory1 from '../screens/Lesson/Theory1';
import Theory2 from '../screens/Lesson/Theory2';
import Theory3 from '../screens/Lesson/Theory3';
import Theory4 from '../screens/Lesson/Theory4';
import Theory5 from '../screens/Lesson/Theory5';
import Theory6 from '../screens/Lesson/Theory6';
import Theory7 from '../screens/Lesson/Theory7';
import Video1 from '../screens/Lesson/Video1';
import Video2 from '../screens/Lesson/Video2';
import Video3 from '../screens/Lesson/Video3';
import Video4 from '../screens/Lesson/Video4';
import Quiz1 from '../screens/Quiz/Quiz3';
import Quiz2 from '../screens/Quiz/Quiz2';
import Quiz3 from '../screens/Quiz/Quiz4';
import AboutApp from '../screens/AboutApp';
import Discuss1 from '../screens/DiscusScreen';
import DisscusFitri from '../screens/DiscussScreenFitri';

export const SessionScreenStack = StackNavigator(
  {
    SessionScreen: {
      screen: SessionScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: {tabBarVisible: true } }
);

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    AboutApp: {
      screen: AboutApp,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const LessonStack = StackNavigator(
  {
    Lesson: {
      screen: Lesson,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Theory1: {
      screen: Theory1,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Theory2: {
      screen: Theory2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Theory3: {
      screen: Theory3,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Theory4: {
      screen: Theory4,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Theory5: {
      screen: Theory5,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Theory6: {
      screen: Theory6,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Theory7: {
      screen: Theory7,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Video1: {
      screen: Video1,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Video2: {
      screen: Video2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Video3: {
      screen: Video3,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Video4: {
      screen: Video4,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const QuizStack = StackNavigator(
  {
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Quiz1: {
      screen: Quiz1,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Quiz2: {
      screen: Quiz2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Quiz3: {
      screen: Quiz3,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Discuss1: {
      screen: Discuss1,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DisscusFitri: {
      screen: DisscusFitri,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true} }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UserAuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
      tabBarVisible: true
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
      tabBarVisible: false
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
      tabBarVisible: false
      }
    },
    Verification: {
      screen: Verification,
      navigationOptions: {
      tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
