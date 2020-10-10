import React, { Component } from "react";
import {
  Dimensions,
  Text,
  Button,
  StyleSheet
} from "react-native";

const { width, height } = Dimensions.get("window");
let pp = null;
let count = 0;
class Login extends Component {

    constructor(props){
        super(props);
        const { navigation } = this.props;
        console.log("constructor"+new Date());
        console.log(JSON.stringify(navigation)); 
        pp = "pp";
    }
    
    static navigationOptions = ({ navigation }) => {
        console.log("navigationOptions"+new Date());
        console.log(JSON.stringify(navigation));
        return {
          title: pp,
          cardStack: {
              gesturesEnabled: false  // 是否可以右滑返回
          }      
        };
      };

      toHomeHandle = ()=>{
            //跳转页面,参数
        this.props.navigation.navigate('Home',{
            from:"Welcome",
            param:{
            name:"hehehe",
            id:"2333"
            }
        });
      }


    render() {
        const { navigation } = this.props;
        //console.log(JSON.stringify(navigation));
        /**
         * 带参数跳转: 
         * {"state":{"params":{"from":"Welcome","param":{"name":"hehehe"}},
         * "routeName":"Login","key":"id-1587363296912-20"},"actions":{}}
         * 获取参数:
         * navigation.getParam("from")
         */

        return (
            <>
                <Text>from</Text><Text>{navigation.getParam("from")}</Text>
                <Text>height</Text><Text>{height}</Text>
                <Text>count</Text><Text>{count++}</Text>
                <Button title="toHome" onPress={this.toHomeHandle}></Button>
            </>
        );
    }
}


export default Login;

const styles = StyleSheet.create({

});
