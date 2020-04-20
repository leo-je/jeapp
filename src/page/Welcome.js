import React, { Component } from "react";
import {
  Dimensions,
  Text,
  StyleSheet
} from "react-native";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {

  render() {
    return (
      <>
        <Text>width</Text><Text>{width}</Text>
        <Text>height</Text><Text>{height}</Text>
      </>
    );
  }
}


export default Welcome;

const styles = StyleSheet.create({

});
