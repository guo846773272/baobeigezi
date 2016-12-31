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
let {width} = Dimensions.get('window');

export default class RecommendBestView extends Component {

    static defaultProps = {
        jsonData: {}
    };

    render() {
        return (
            <View style={styles.container}>

                {this._renderBestView()}

            </View>
        );
    }

    _renderBestView(){
        let bestViews = [];
        let list = this.props.jsonData.data[8].data.list;
        for (let i = 0; i < list.length; i ++){
            bestViews.push(
                <View key={i} style={{alignItems:'center',padding:10}}>
                    <View style={styles.lineStyle}>
                    </View>

                    <View style={{flexDirection:'row',alignSelf:'flex-start',padding:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold',marginRight:10}}>{list[i].day}</Text>

                        <View>
                            <Text style={styles.subtitleStyle}>{list[i].ym}</Text>
                            <Text style={styles.subtitleStyle}>{list[i].tips}</Text>
                        </View>
                    </View>

                    <View style={styles.lineStyle}>
                    </View>

                    <Image source={{uri: list[i].phone_head_pic}} style={{width:width,height:width / 2,marginTop:10}}/>

                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>{list[i].title}</Text>

                    <Text numberOfLines={3} style={{marginTop:10,fontSize:12,paddingBottom:30}}>{list[i].introduction}</Text>

                    <View style={{flexDirection:'row',width:width - 30,padding:10,justifyContent:'space-between',borderTopColor:'lightgray',borderTopWidth:1}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={{uri: list[i].avatar}} style={{width:24,height:24,borderRadius:12}}/>
                            <Text style=  {{fontSize:12,color:'gray'}}>  {list[i].nick_name}</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={{uri:'icon_love_unselect'}} style={{width:12,height:12}}/>
                            <Text style={{color:'gray'}}>  {list[i].like_num}  </Text>
                            <Image source={{uri: 'icon_comment_empty'}} style={{width:12,height:12}}/>
                            <Text style={{color:'gray'}}>  {list[i].comment_num}</Text>
                        </View>

                    </View>

                    <View style={styles.lineStyle}>
                    </View>
                </View>
            )
        }
        return bestViews;
    }

}

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    lineStyle: {
        width: width - 30,
        height: 3,
        backgroundColor: 'lightgray'
    },
    subtitleStyle:{
        color:'lightgray',
        fontSize:12

    }
});

module.exports = RecommendBestView;
