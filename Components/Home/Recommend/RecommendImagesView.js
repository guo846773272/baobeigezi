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

let imageW = (width - 10 * 3) / 2;
let rightImageH = (imageW - 10) / 2;

export default class RecommendImagesView extends Component {

    static defaultProps = {
        jsonData:{}
    };

    render() {
        let list = this.props.jsonData.data[4].data.list;
        return (
            <View style={styles.container}>

                {/*



                */}

                <View style={styles.topViewStyle}>
                    <Image source={{uri: list[2].ad_pic_400}} style={[styles.topLeftImageStyle,{marginRight: 10}]}>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontWeight:'bold'}}>{list[2].ad_word}</Text>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontSize:12,marginTop:15}}>{list[2].ad_introduction}</Text>
                    </Image>

                    <View>
                        <Image source={{uri: list[1].ad_pic_400}} style={[styles.topRightImageStyle,{marginBottom:10}]}>
                            <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontWeight:'bold'}}>{list[1].ad_word}</Text>
                            <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontSize:12,marginTop:15}}>{list[1].ad_introduction}</Text>
                        </Image>
                        <Image source={{uri: list[0].ad_pic_400}} style={styles.topRightImageStyle}>
                            <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontWeight:'bold'}}>{list[0].ad_word}</Text>
                            <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontSize:12,marginTop:15}}>{list[0].ad_introduction}</Text>
                        </Image>
                    </View>
                </View>

                <RecommendImagesBottomView
                    jsonData = {this.props.jsonData}
                />

            </View>
        );
    }
}


class RecommendImagesBottomView extends Component{

    static defaultProps = {
        jsonData: {}
    };

    render(){
        let list = this.props.jsonData.data[5].data.list;
        if (list.length == 0 || list == null || !list) return null;
        return (
            <View>
                {this._renderModule(list.slice(0,3))}
                {this._renderModule(list.slice(3,6))}
            </View>
        )
    }

    _renderModule(list){
        return (
            <View style={styles.bottomViewStyle}>
                <Image source={{uri: list[0].ad_pic_400}} style={styles.bottomModuleImageStyle}>
                    <View style={styles.outBoxStyle}>
                        <View style={styles.inBoxStyle}>
                            <Text style={{fontWeight:'600',fontSize:12}}>{list[0].ad_word}</Text>
                            <Text style={{fontSize:10}}>{list[0].ad_introduction}</Text>
                        </View>
                    </View>
                </Image>

                <View style={{flexDirection:'row',marginBottom:10}}>
                    <Image source={{uri: list[1].ad_pic_400}} style={[styles.topLeftImageStyle,{marginRight:10}]}>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontWeight:'bold'}}>{list[1].ad_word}</Text>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontSize:12,marginTop:15}}>{list[1].ad_introduction}</Text>
                    </Image>
                    <Image source={{uri: list[2].ad_pic_400}} style={styles.topLeftImageStyle}>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontWeight:'bold'}}>{list[2].ad_word}</Text>
                        <Text style={{backgroundColor:'rgba(0,0,0,0)',color:'white',fontSize:12,marginTop:15}}>{list[2].ad_introduction}</Text>
                    </Image>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    topViewStyle:{
        padding:10,
        flexDirection:'row'
        // justifyContent:'center',
        // alignItems:'center'
    },
    topLeftImageStyle:{
        width:imageW,
        height:imageW,
        justifyContent:'center',
        alignItems:'center',
        // marginRight:10
    },
    topRightImageStyle:{
        width:imageW,
        height:rightImageH,
        justifyContent:'center',
        alignItems:'center',
    },





    bottomViewStyle:{
        // justifyContent:'center',
        alignItems:'center'
    },
    bottomModuleImageStyle:{
        justifyContent:'center',
        alignItems:'center',
        width:width - 10 * 2,
        height:imageW,
        marginBottom:10
    },
    outBoxStyle:{
        backgroundColor:'#fff',
        padding:8
    },
    inBoxStyle:{
        backgroundColor:'#fff',
        width:180,
        height:80,
        borderWidth:2,
        borderColor:'#000',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15
    },
    bottomViewBottomImageStyle:{

    }
});

module.exports = RecommendImagesView;
