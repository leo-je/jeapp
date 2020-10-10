import React, { Component } from "react";
import {
  Dimensions,
  Text,
  Button,
  StyleSheet
} from "react-native";

let that;
const { width, height } = Dimensions.get("window");

class Setting extends Component {

  constructor(props){
    super(props);
    that = this;
}

  render() {
    that = this;
    return (
      <>
        <Text>width</Text><Text>{width}</Text>
        <Text>height</Text><Text>{height}</Text>
      </>
    );
  }
}


export default Setting;

const styles = StyleSheet.create({

});