import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../../page/Home";
import Setting from "../../page/Setting";

const screens = createStackNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions:{
        title:"哦豁",
        header:null
      }
    },
    Setting
  },
  {
    //指定那个为主屏幕
    initialRouteName: 'Home',
    initialRouteParams: {initPara: '初始页面参数'},
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackTitle: "返回",
      headerLeftContainerStyle: {
        alignItems: "center"
      },
      headerRightContainerStyle: {
        alignItems: "center"
      }
    }
  }
);

export default createAppContainer(screens);
