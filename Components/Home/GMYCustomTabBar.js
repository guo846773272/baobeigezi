/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class GMYCustomTabBar extends Component {


    render() {

        return (

            // <Text>
            //     GMYCustomTabBar
            // </Text>

            <Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={{width:200, height:100}}/>

        );
    }
}


const styles = StyleSheet.create({

});

module.exports = GMYCustomTabBar;