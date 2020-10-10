import React, { Component } from "react";
import {
  Dimensions,
  Text,
  Button,
  StyleSheet
} from "react-native";

let that;
const { width, height } = Dimensions.get("window");

class Welcome extends Component {

  constructor(props){
    super(props);
    that = this;
}

loginHandle = ()=>{
  console.log("233333")
  //跳转页面,参数
  that.props.navigation.navigate('Login',{
    from:"Welcome",
    param:{
      name:"hehehe",
      id:"2333"
    }
  });
}

  render() {
    that = this;
    return (
      <>
        <Text>width</Text><Text>{width}</Text>
        <Text>height</Text><Text>{height}</Text>
        <Button title="233" onPress={this.loginHandle}></Button>
      </>
    );
  }
}


export default Welcome;

const styles = StyleSheet.create({

});
