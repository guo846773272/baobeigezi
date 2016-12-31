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
    Image,
    Platform,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert
} from 'react-native';

import HomeNavBar from './HomeNavBar';
import HomeController from './HomeController';
import HomeTitlesView from './HomeTitlesView';
import Recommend from './Recommend/Recommend';


import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class Home extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            scrollImagesData:[123123,21321321,213213]
        };
      }


    render() {
        return (
            <View style={styles.container}>

                {/*



                */}



                <HomeNavBar />


                <HomeController />
                {/*

                 <HomeTitlesView />

                 <Recommend />

                */}


                
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },

    


});

module.exports = Home;
