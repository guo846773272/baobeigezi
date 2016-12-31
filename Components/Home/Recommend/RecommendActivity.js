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

import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');

export default class RecommendActivity extends Component {

    static defaultProps = {
        jsonData:{}
    };

    render() {
        return (
            <View style={styles.container}>


                {this._renderItem()}

            </View>
        );
    }

    _renderItem(){
        let items = [];

        let list = this.props.jsonData.data[2].data.list;
        const imageW = 42;
        const imageMarginLeft= (width - imageW * list.length) / (list.length + 1);
        let imageStyle = {
            marginLeft:imageMarginLeft,
            width:imageW,
            height:60,
            resizeMode:'stretch'

        };
        for (let i = 0; i < list.length;i ++){
            items.push(
                <Image key={i} source={{uri:list[i].pic}} style={imageStyle}/>
            )
        }
        return items;
    }

    componentDidMount() {

    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:100,
        // justifyContent:'center',
        alignItems:'center',

    },
    // imageStyle:{
    //     width:42,
    //     height:60
    // }
});

module.exports = RecommendActivity;
