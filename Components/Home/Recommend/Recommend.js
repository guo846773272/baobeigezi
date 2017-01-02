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
    AsyncStorage,
    ScrollView,
    ListView,
    Image,
    RefreshControl,
    Platform,
    ActivityIndicator
} from 'react-native';

// import ScrollImagesView from './ScrollImagesView';
import SwiperScrollImagesView from './SwiperScrollImagesView';

import RecommendNotice from './RecommendNotice';

import RecommendActivity from './RecommendActivity';

import RecommendSecondsBuy from './RecommendSecondsBuy';

import RecommendImagesView from './RecommendImagesView';

import RecommendVideo from './RecommendVideo';

import RecommendBestView from './RecommendBestView';

import RecommendNewView from './RecommendNewView';

export default class Recommend extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            jsonData:null,
            recommendSecondsBuyData:{},
            isRefreshing:true,
            // ds: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
            goodses:[],
            page:1,
            pageSize:10,
            totalPage:1
        };
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    }
    
    render() {
        if (!this.state.jsonData){
            return null;
        }
        return (
            /*


            */

            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="pink"
                        title=" "
                        titleColor="purple"
                        colors={['red', 'yellow', 'blue']}//android
                        progressBackgroundColor="pink"
                    />
                }
                onEndReached={this._onEndReached.bind(this)}
                initialListSize={this.state.jsonData.data[10].data.list.length}
                pageSize={this.state.pageSize}
                // dataSource={this.state.ds}
                dataSource={this.dataSource.cloneWithRows(this.state.goodses)}
                renderRow={this._renderRow.bind(this)}
                renderHeader={this._renderHeader.bind(this)}
                renderFooter={this._renderFooter.bind(this)}
            >
            </ListView>

        );
    }

    _renderHeader(){
        // console.log(this.state.jsonData);
        if (!this.state.jsonData){
            return null;
        }
        return(

            /*



             */

            <View>

                <SwiperScrollImagesView
                    jsonData={this.state.jsonData}
                />

                <RecommendNotice
                    jsonData={this.state.jsonData}
                />
                <RecommendActivity
                    jsonData={this.state.jsonData}
                />

                <RecommendSecondsBuy
                    jsonData={this.state.jsonData}
                />

                <RecommendImagesView
                    jsonData={this.state.jsonData}
                />

                <RecommendVideo
                    jsonData={this.state.jsonData}
                />

                <RecommendBestView
                    jsonData={this.state.jsonData}
                />

                <RecommendNewView
                    jsonData={this.state.jsonData}
                />

            </View>
        )
    }

    _renderFooter(){
        if (this.state.page > this.state.totalPage){
            return (
                <View style={{justifyContent:'center',alignItems:'center',padding:16}}>
                    <Text style={{fontSize:14,color:'gray'}}>没有更多数据了</Text>
                </View>
            )
        }else{
            return(
                <View style={{justifyContent:'center',alignItems:'center',padding:16}}>
                    <ActivityIndicator/>
                </View>
            )
        }
    }

    _renderRow(rowData,sectionID,rowID){
        return (
            <View
                style={{
                    padding:15,
                    borderBottomColor:'lightgray',
                    borderBottomWidth:1
                }}

            >
                <Image
                    source={{uri:rowData.event_img}}
                    style={{
                        width:gmyGlobal.width - 30,
                        height:(gmyGlobal.width - 30) / 2,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    <View style={styles.outBoxStyle}>
                        <View style={styles.inBoxStyle}>
                            <Text style={{fontWeight:'600',fontSize:12}}>{rowData.title_fir}</Text>
                            <Text style={{fontSize:10}}>{rowData.title_sec}</Text>
                        </View>
                    </View>

                </Image>
                {/*this._renderBottomRow(rowData.event_product)*/}
                <BottomRow
                    products={rowData.event_product}
                />

            </View>
        )
    }

    componentDidMount(){
        gmyGlobal._getData('HomeRecommend',(result) => {
            this._setupData(result);
        },(error) => {
            console.log(error);
        });
        this._onRefresh();
    }

    _onRefresh(){
        this.setState({
            isRefreshing:true
        });
        this._loadNew();
        // setTimeout(() => {
        //
        // },3000);
    }

    _onEndReached(){
        setTimeout(() => {
            this._loadMore();
        },2000);
    }

    _loadNew() {
        fetch(gmyGlobal.host + '/getIndex')
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                this.setState({
                    isRefreshing:false
                });
                this._setupData(jsonData);

                gmyGlobal._saveData('HomeRecommend',jsonData);
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    isRefreshing:false
                });
            });
    }

    _loadMore() {
        fetch(gmyGlobal.host + '/eventList/0/' + this.state.page + '/' + this.state.pageSize)
            .then((response) => response.json())
            .then((jsonData) => {

                if (jsonData.msg == 'success'){
                    let tempPage = this.state.page;
                    tempPage ++;
                    this.setState({
                        goodses:[...this.state.goodses,...jsonData.data.eventList],
                        page:tempPage,
                        totalPage:jsonData.data.totalPage
                    });
                    console.log(this.state.page);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    _setupData(jsonData){
        if (jsonData){
            this.setState({
                jsonData:jsonData,
                // ds: this.state.ds.cloneWithRows(jsonData.data[10].data.list),
                goodses:jsonData.data[10].data.list,
                page:1
            });
        }
    }
}


class BottomRow extends Component {
    static defaultProps = {
        products: []
    };

    render(){
        if (Platform.OS === 'ios'){
            return (
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                >
                    {this._iOSRenderBottomRow(this.props.products)}
                </ScrollView>
            )
        }else{
            return (
                /*

                 */
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {this._androidRenderBottomRow(this.props.products)}
                </View>
            )
        }
    }

    _iOSRenderBottomRow(products){
        // console.log(products);
        if (products.length == 0) return null;
        let productViews = [];
        for (let i = 0; i < products.length; i ++){
            let product = products[i];
            productViews.push(
                <View key={i} style={{alignItems:'center',marginTop:10,marginRight:10}}>
                    <Image source={{uri:product.image_url_400}} style={{width:100,height:100,marginBottom:5}}>

                    </Image>

                    <Text style={{fontSize:10,marginBottom:5}}>{product.brand_name}</Text>
                    <Text numberOfLines={1} style={{fontSize:10,width:100,marginBottom:5}}>{product.name}</Text>
                    <Text
                        style={{color:'rgba(255,0,127,1)',
                        fontSize:10}}
                    >¥{product.store_price}</Text>
                </View>
            )
        }
        productViews.push(
            <View key={productViews.length} style={{alignItems:'center',justifyContent:'center',width:100,height:100,marginTop:10,marginRight:10,borderWidth:1,borderColor:'lightgray'}}>
                <Text style={{}}>SEE ALL</Text>
            </View>
        );
        return productViews;
    }

    _androidRenderBottomRow(products){
        if (products.length == 0) return null;
        const viewWidth = (gmyGlobal.width - 30 - 20) / 3;
        let productViews = [];
        for (let i = 0; i < products.length; i ++){
            let product = products[i];
            let viewStyle={marginRight: (i + 1) % 3 == 0 ? 0 : 10};
            productViews.push(
                <View key={i} style={[{alignItems:'center',justifyContent:'space-around',width:viewWidth,height:150,borderWidth:0},viewStyle]}>
                    <Image source={{uri:product.image_url_400}} style={{width:viewWidth,height:viewWidth}}>

                    </Image>
                    <Text style={{fontSize:10}}>{product.brand_name}</Text>
                    <Text numberOfLines={1} style={{fontSize:10,width:100}}>{product.name}</Text>
                    <Text
                        style={{color:'rgba(255,0,127,1)',
                        fontSize:10}}
                    >¥{product.store_price}</Text>
                </View>
            )
        }
        productViews.push(
            <View key={productViews.length} style={{alignItems:'center',justifyContent:'center',width:viewWidth,height:viewWidth,marginTop:2,borderWidth:1,borderColor:'lightgray'}}>
                <Text style={{}}>SEE ALL</Text>
            </View>
        );
        return productViews;
    }
}

const styles = StyleSheet.create({
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
});

module.exports = Recommend;
