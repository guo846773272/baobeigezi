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
    AsyncStorage,
    ListView,
    Platform
} from 'react-native';

import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');


export default class RecommendSecondsBuy extends Component {

    static defaultProps = {
        jsonData: {}
    };

    // 构造
    constructor(props) {
        super(props);
        let collectionData = {
            "data" : [{"icon" : "icon1", "title" : "分享"}, {"icon" : "icon2", "title" : "开心网分享"}, {"icon" : "icon3", "title" : "QQ分享"}, {"icon" : "icon4", "title" : "QQ空间分享"}, {"icon" : "icon5", "title" : "QQ微博分享"}, {"icon" : "icon6", "title" : "人人网分享"}, {"icon" : "icon7", "title" : "微信分享"}, {"icon" : "icon8", "title" : "微博分享"}, {"icon" : "icon9", "title" : "朋友圈分享"}, {"icon" : "icon10", "title" : "短信分享"}
            ]
        };
        // 初始状态
        this.state = {
            date: {
                day: 0,
                hour: 0,
                minute: 0,
                seconds: 0
            }

        };
    }

    render() {
        if (!this.props.jsonData){
            return null;
        }

        let data = this.props.jsonData.data[3];
        return (
            <View style={styles.container}>
                <View style={styles.lineStyle}>
                </View>

                <View>
                    <View style={styles.topViewStyle}>
                        <Image source={{uri: data.module_icon}} style={styles.imageStyle}/>
                        <Text style={styles.boldTextStyle}>  {data.module_name}</Text>
                    </View>
                    <View style={styles.bottomViewStyle}>
                        <Text style={[styles.normalTextStyle,styles.smallTextStyle]}>距离过年 </Text>
                        <Text style={[styles.boldTextStyle,styles.smallTextStyle]}>{this.state.date.day} </Text>
                        <Text style={[styles.normalTextStyle,styles.smallTextStyle]}>天 </Text>
                        <Text style={[styles.boldTextStyle,styles.smallTextStyle]}>{this.state.date.hour} </Text>
                        <Text style={[styles.normalTextStyle,styles.smallTextStyle]}>小时 </Text>
                        <Text style={[styles.boldTextStyle,styles.smallTextStyle]}>{this.state.date.minute} </Text>
                        <Text style={[styles.normalTextStyle,styles.smallTextStyle]}>分 </Text>
                        <Text style={[styles.boldTextStyle,styles.smallTextStyle]}>{this.state.date.seconds} </Text>
                        <Text style={[styles.normalTextStyle,styles.smallTextStyle]}>秒 </Text>
                        {/*
                         <Text style={[styles.normalTextStyle,styles.smallTextStyle]}>后结束</Text>
                         */}
                    </View>

                </View>

                <View style={styles.lineStyle}>
                </View>

                {/*


                */}
                <RecommendSecondsBuyList />
            </View>


        );
    }

    componentDidMount() {

        this._setupDate();
    }


    _setupDate() {
        let endTime = new Date("2017/01/28");
        setInterval(() => {
            let nowTime = new Date();
            let endSecond = endTime.getTime();
            let nowSecond = nowTime.getTime();

            let distance = endSecond - nowSecond;
            let day = parseInt(distance / 1000 / 60 / 60 / 24);
            let hour = parseInt(distance / 1000 / 60 / 60 % 24);
            let minute = parseInt(distance / 1000 / 60 % 60);
            let seconds = parseInt(distance / 1000 % 60);

            hour < 10 ? hour = "0" + hour : hour;
            minute < 10 ? minute = "0" + minute : minute;
            seconds < 10 ? seconds = "0" + seconds : seconds;

            // console.log(day + "天" + hour + "时" + minute + "分" + seconds);

            this.setState({
                date: {
                    day: day,
                    hour: hour,
                    minute: minute,
                    seconds: seconds
                }
            });
        }, 1000);
    }
}



class RecommendSecondsBuyList extends Component{


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            jsonData:null,
            dataSource : new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
      }

    render(){
        
        if (Platform.OS === 'ios'){
            return(
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderCell.bind(this)}
                    contentContainerStyle={styles.listViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            )
        }else{
            return (
                <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:10}}>
                    {this._androidRenderBottomRow(this.state.jsonData)}
                </View>
            )
        }
    }

    componentDidMount() {

        gmyGlobal._getData('RecommendSecondsBuy', (result) => {
            // console.log(result);
            if (result) this._setupData(result);
        });

        this._requireData();
    }

    _setupData(jsonData) {
        if (jsonData.data){
            this.setState({
                jsonData:jsonData,
                dataSource:this.state.dataSource.cloneWithRows(jsonData.data.info)
            })
        }
    }

    _requireData() {
        fetch(gmyGlobal.host + '/instantPurchase?sign=b58709e833cfe6d77f1a3c803d93a0a6&session_id=&v=3.0.15&c=AppStore&agent=ios&local_cart_id=AECA7288-61B0-44DC-8BB9-4529D7B23F08&cart_id=AECA7288-61B0-44DC-8BB9-4529D7B23F08')
            .then((response) => response.json())
            .then((jsonData) => {
                this._setupData(jsonData);

                gmyGlobal._saveData('RecommendSecondsBuy', jsonData);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    _renderCell(rowData,sectionID,rowID){
        // console.log(this.state.dataSource.rowIdentities[0].length);
        let cellStyle = {
            padding:10,
            paddingRight:0,
            alignItems:'center'
        };
        if (rowID == this.state.dataSource.rowIdentities[0].length - 1){
            cellStyle = {
                padding:10,
                paddingRight:10,
                alignItems:'center'
            };
        }
        return(
            <View style={[styles.cellStyle,cellStyle]}>
                <Image source={{uri: rowData.product_image}} style={styles.cellImageStyle}/>
                <Text style={styles.cellNowPriceStyle}>¥{rowData.store_price}</Text>
                <Text style={styles.cellOldPriceStyle}>售价:  {rowData.no_activity_price}</Text>
            </View>
        )
    }

    _androidRenderBottomRow(jsonData){

        if (!jsonData) return null;
        let products = jsonData.data.info;
        const viewWidth = (gmyGlobal.width - 20 - 20) / 3;
        let productViews = [];
        for (let i = 0; i < products.length; i ++){
            let product = products[i];
            let viewStyle={marginRight: (i + 1) % 3 == 0 ? 0 : 10};
            productViews.push(
                <View key={i} style={[{alignItems:'center',justifyContent:'space-around',width:viewWidth,height:120,borderWidth:0},viewStyle]}>
                    <Image source={{uri:product.product_image}} style={{width:viewWidth,height:viewWidth}}>

                    </Image>
                    <Text style={styles.cellNowPriceStyle}>¥{product.store_price}</Text>
                    <Text style={styles.cellOldPriceStyle}>售价:  {product.no_activity_price}</Text>
                </View>
            )
        }

        return productViews;
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent:'center',
        alignItems: 'center'
    },
    lineStyle: {
        width: 0.8 * width,
        height: 3,
        backgroundColor: 'lightgray'
    },
    topViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    bottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    imageStyle: {
        width: 18,
        height: 18
    },
    boldTextStyle: {
        fontWeight: 'bold'
    },
    normalTextStyle: {
        color: 'gray'
    },
    smallTextStyle: {
        fontSize: 12
    },


    listViewStyle:{
        flexDirection:'row'
    },
    cellStyle:{

    },
    cellImageStyle:{
        width:100,
        height:100
    },
    cellNowPriceStyle:{
        color:'rgba(255,0,127,1)',
        fontSize:12,
        fontWeight:'bold'
    },
    cellOldPriceStyle:{
        color:'gray',
        textDecorationLine:'line-through',
        fontSize:10
    }
});

module.exports = RecommendSecondsBuy;
