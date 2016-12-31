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

import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class HomeNavBar extends Component {
    render() {
        return (
            <View style={styles.navbarStyle}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image source={{uri:'icon_switch_list'}} style={styles.leftImageItem}/>
                </TouchableOpacity>

                <View style={styles.searchBarStyle}>
                    <TextInput
                        placeholder='😝😝😝啦啦啦'
                        style={styles.searchTextInputStyle}
                    >

                    </TextInput>
                    <TouchableOpacity activeOpacity={0.5} style={{position:'absolute',right:10}}>
                        <Image source={{uri:'icon_new_title_search'}} style={styles.searchImageStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbarStyle:{
        flexDirection:'row',
        alignItems:'center',
        width:width,
        height:Platform.OS == 'ios' ? 64 : 44,
        paddingTop:Platform.OS == 'ios' ? 20 : 0,
        backgroundColor:'#fff',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    leftImageItem:{
        width:30,
        height:30,
        marginLeft:20,
        marginRight:20
    },
    searchBarStyle:{
        flex:1,
        flexDirection:'row',
        marginRight:20
    },
    searchTextInputStyle:{
        flex:1,
        height:30,
        width:250,
        backgroundColor:'#fff',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingLeft:10
    },
    searchImageStyle:{
        width:30,
        height:30
    },
});

module.exports = HomeNavBar;
