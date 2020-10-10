import {
  createAppContainer,createSwitchNavigator
} from "react-navigation";


import Welcome from "../../page/Welcome";
import Login from "../../page/Login";
import mainNavigation from "../mainNavigation";

const screens = createSwitchNavigator({
  Welcome,
  Login,
  mainNavigation
});

export default createAppContainer(screens);