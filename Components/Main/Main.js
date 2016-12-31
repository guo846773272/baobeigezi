/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    Platform,
    Alert
} from 'react-native';

import GlobalConfig from './GlobalConfig';//全局配置


import TabNavigator from 'react-native-tab-navigator';

import Home from './../Home/Home';
import Overseas from './../Overseas/Overseas';
import ShoppingCar from './../ShoppingCar/ShoppingCar';
import Mine from './../Mine/Mine';

import GeziCircle from './../GeziCircle/GeziCircle';

export default class Main extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'Home'
        };
    }

    render() {
        return (
            <TabNavigator>
                {this.setupTabNavigator('Home', '首页', 'tab_index_n', 'tab_index_p', '首页', Home)}
                {this.setupTabNavigator('Overseas', '海外', 'tab_events_n', 'tab_events_p', '海外', Overseas)}
                {this.setupCenterTabNavigator('GeziCircle', '', 'tab_events_new_takephoto_n', 'tab_events_new_takephoto_p', '', GeziCircle)}
                {this.setupTabNavigator('ShoppingCar', '购物车', 'tab_shopping_car_n', 'tab_shopping_car_p', '购物车', ShoppingCar)}
                {this.setupTabNavigator('Mine', '我的', 'tab_person_n', 'tab_person_p', '我的', Mine)}
            </TabNavigator>
        );
    }

    setupTabNavigator(selectedTab, title, icon, selectedIcon, componentName, component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                // title={title}
                renderIcon={() => <Image source={{uri:icon}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIcon}} style={styles.iconStyle}/>}
                selectedTitleStyle={styles.selectedTitleStyle}
                // badgeText="1"
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >


                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={() => {
                            return Navigator.SceneConfigs.PushFromRight
                        }}
                    renderScene={(route,navigator) => {
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
                />
            </TabNavigator.Item>
        )

    }

    setupCenterTabNavigator(selectedTab, title, icon, selectedIcon, componentName, component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                // title={title}
                renderIcon={() => <Image source={{uri:icon}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIcon}} style={styles.iconStyle}/>}
                selectedTitleStyle={styles.selectedTitleStyle}
                // badgeText="1"
                onPress={this._geziCircleClick.bind(this)}
            >


                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={() => {
                            return Navigator.SceneConfigs.PushFromRight
                        }}
                    renderScene={(route,navigator) => {
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
                />
            </TabNavigator.Item>
        )
    }

    _geziCircleClick(){
        if (this.state.selectedTab == 'GeziCircle'){
            Alert.alert('show photo');
            console.log('show photo');
        }else{
            this.setState({
                selectedTab:'GeziCircle'
            })
        }
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width:Platform.OS === 'ios' ? 49 : 49,
        height:Platform.OS === 'ios' ? 49 : 49
    },
    selectedTitleStyle:{
        color:'orange'
    }
});

module.exports = Main;
