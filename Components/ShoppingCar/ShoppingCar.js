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
    ScrollView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

export default class Baobaofushi extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing:false,
            text:`text`,
            insetTop:0,
            statusText:`继续拉我可以刷新`
        };
      }

    render() {
        return (
            <ScrollView
                style={{backgroundColor:'red'}}
                // contentInset={{top:this.state.insetTop}}
                onScroll={this._onScroll.bind(this)}
                onScrollEndDrag={this._onScrollEndDrag.bind(this)}
                onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                ref="scrollView"
                scrollEventThrottle={50}
                automaticallyAdjustContentInsets={false}
                // refreshControl={
                //     <RefreshControl
                //         refreshing={this.state.isRefreshing}
                //         onRefresh={this._onRefresh.bind(this)}
                //     />
                // }
            >
                <View style={{position:'absolute',width:gmyGlobal.width,top:-64,height:64,backgroundColor:'pink',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator />
                    <Text
                        style={{color:"gray"}}
                    >{this.state.statusText}</Text>
                </View>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
                <Text>{this.state.text}</Text>
            </ScrollView>
        );
    }

    _onRefresh(){
        this.setState({
            isRefreshing:true
        });
        setTimeout(() => {
            this.setState({
                isRefreshing:false,
                text:`go`
            })
        },3000)
    }

    _onScroll(e){
        let offsetY = e.nativeEvent.contentOffset.y;
        let statusText = `继续拉我可以刷新`;
        if (offsetY <= -64){
            console.log('======');
            statusText = `释放可以刷新`;
        }
        this.setState({
            statusText: statusText
        });
    }

    _onScrollEndDrag(e){
        let offsetY = e.nativeEvent.contentOffset.y;
        if (offsetY <= -64){
            this.refs.scrollView.scrollResponderScrollTo({x:0,y:-64,animated:false});
            setTimeout(() => {
                this.refs.scrollView.scrollResponderScrollTo({x:0,y:0,animated:true});
            },3000);

        }else{
            this.refs.scrollView.scrollResponderScrollTo({x:0,y:0,animated:true});
        }
    }

    _onMomentumScrollEnd(e){
        let offsetY = e.nativeEvent.contentOffset.y;
        if (offsetY = -64) {
            this.setState({
                statusText: `加载中`
            });
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = Baobaofushi;
