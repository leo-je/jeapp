import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../page/Welcome";

const screens = createStackNavigator(
  {
    Welcome
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackTitle: null,
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
