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

import Swiper from 'react-native-swiper';

export default class RecommendNotice extends Component {
    
    static defaultProps = {
        jsonData:{}
    };
    
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.jsonData.data[1].module_icon}} style={styles.imageStyle}/>
                <View style={styles.lineStyle}>
                </View>
                <Swiper
                    showsButtons={false}
                    width={220}
                    height={30}
                    horizontal={false}
                    showsPagination={false}
                    autoplay={true}
                    autoplayTimeout={2}
                >

                    {this._renderArray()}
                </Swiper>
            </View>
        );
    }

    _renderArray(){
        let noticeTexts = [];
        if (this.props.jsonData.data[1].data.list){
            let notices = this.props.jsonData.data[1].data.list;
            for (let i = 0; i < notices.length; i ++){
                noticeTexts.push(
                    <View key={i} style={styles.slide}>
                        <Text key={i} style={styles.text}>{notices[i].ad_name}</Text>
                    </View>
                )
            }
        }
        return noticeTexts;
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'lightgray',
        borderBottomWidth:1
    },
    imageStyle:{
        width:46,
        height:15,
        resizeMode:'stretch',
        margin:10
    },
    lineStyle:{
        width:1,
        height:20,
        backgroundColor:'lightgray'
    },




    slide: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft:10
        // backgroundColor: '#92BBD9',
    },
    text: {
        color: '#999',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

module.exports = RecommendNotice;
