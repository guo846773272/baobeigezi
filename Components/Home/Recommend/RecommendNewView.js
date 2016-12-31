/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class RecommendNewView extends Component {

    static defaultProps = {
        jsonData:{}
    };

    render() {
        return (
            <View style={styles.container}>
                {this._renderNewView()}

                <RecommendZhuanchangHeader
                    jsonData={this.props.jsonData}
                />
            </View>

        );
    }

    _renderNewView(){
        let list = this.props.jsonData.data[9].data.list;
        let newList = [];
        for (let i = 0; i < list.length; i ++){
            let imageStyle = {
                marginBottom: i == list.length - 1 ? 10 : 0
            };
            newList.push(
                <Image key={i} source={{uri: list[i].ad_pic_400}} style={[{margin:15,width:gmyGlobal.width - 30,height:(gmyGlobal.width - 30) / 2},imageStyle]}/>
            );
        }
        return newList;
    }
}

class RecommendZhuanchangHeader extends Component{
    static defaultProps = {
        jsonData: {}
    };

    render(){
        let data = this.props.jsonData.data[10];
        return(
            <View style={{alignItems:'center',padding:10}}>
                <View style={styles.lineStyle}>
                </View>

                <View style={{flexDirection:'row',padding:10}}>
                    <Image source={{uri: data.module_icon}} style={{width:16,height:14}}/>
                    <Text style={{fontWeight:'bold'}}>  {data.module_name}</Text>
                </View>


                <View style={styles.lineStyle}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    lineStyle: {
        width: gmyGlobal.width - 30,
        height: 3,
        backgroundColor: 'lightgray'
    },
});

module.exports = RecommendNewView;
