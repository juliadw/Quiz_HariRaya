import React from 'react';
import { TabNavigator } from 'react-navigation';
import { HomeStack, LessonStack, QuizStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import Home from '../../assets/svgs/Home';
import Lesson from '../../assets/svgs/Lesson';
import Quiz from '../../assets/svgs/Quiz';

const COLOR_DARK_GREY = '#59DBF8';
const COLOR_BlUE = '#59DBF8';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        isActive={tintColor === COLOR_BlUE}
        label={label}
        icon={tintColor === COLOR_BlUE ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 30, width: 30, tintColor }]}
        // badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_BlUE,
    inactiveTintColor: COLOR_GREY,
    style: {
      borderTopWidth: 0,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    stack: HomeStack,
    image: {
      active: <Home active />,
      inactive: <Home />
    }
  },
  {
    stack: LessonStack,
    image: {
      active: <Lesson active />,
      inactive: <Lesson />
    }
  },
  {
    stack: QuizStack,
    image: {
      active: <Quiz active />,
      inactive: <Quiz />
    }
  }
]);

export default { AppStack };
