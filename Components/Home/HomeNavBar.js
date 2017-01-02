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

import HomeSearchView from './HomeSearchView';

import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class HomeNavBar extends Component {

    static defaultProps = {
        navigator:{}
    };

    render() {
        return (
            <View style={styles.navbarStyle}>
                <TouchableOpacity onPress={() => console.log('searchImage')}>
                    <Image source={{uri:'icon_switch_list'}} style={styles.leftImageItem}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this._searchOnPress.bind(this)}
                    style={{flex:1}}
                >
                    <View style={{flexDirection:'row',height:30,marginRight:15,borderWidth:1,borderColor:'lightgray',borderRadius:5,paddingHorizontal:10,justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:'lightgray',fontSize:16,lineHeight:16}}>😝😝😝啦啦啦</Text>
                        <Image source={{uri:'icon_new_title_search'}} style={{width:30,height:30}}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _searchOnPress(){
        this.props.navigator.push({
            component: HomeSearchView,
            title:'HomeSearchView'
        })
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
        marginHorizontal:15
    },

});

module.exports = HomeNavBar;
