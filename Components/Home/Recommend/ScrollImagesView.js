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
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';



import Dimensions from 'Dimensions';
let {width} = Dimensions.get('window');


var TimerMixin = require('react-timer-mixin');


export default class ScrollImagesView extends Component {

    // mixin : {TimerMixin};

    static defaultProps = {
        scrollViewWidth:width,
        imagesData: [],
        scrollOffsetXs:[]
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage:0

        };
      }

    render() {
        return (

            <View style={{width:this.props.scrollViewWidth}}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    // showsHorizontalScrollIndicator={false}
                    // showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this._onAnimationEnd(e)}
                    onScrollBeginDrag={this._onScrollBeginDrag.bind(this)}
                    onScrollEndDrag={this._onScrollEndDrag.bind(this)}
                    scrollEventThrottle={200}
                    onScroll={(e)=> this._onScroll(e)}
                    style={{width:this.props.scrollViewWidth}}
                >

                    {this.renderSubImageView.bind(this)()}



                </ScrollView>


                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicatorCircle()}
                </View>
            </View>

        );
    }

    renderIndicatorCircle(){
        let circles = [];
        let imagesData = this.props.imagesData;
        for (let i = 0; i < imagesData.length; i ++){
            let indicatorCircleStyle = {
                color: i == this.state.currentPage ? '#fff' : '#bbb',

            };
            circles.push(
                <Text key={i} style={[styles.indicatorCircleStyle,indicatorCircleStyle]}>&bull;</Text>

                // <Text key={i}>2138ghrwafbhjjaKSBDJADHK</Text>
            )
        }
        return circles;
    }




    renderSubImageView(){

        let imagesView = [];
        for (let i = 0; i < 3; i ++){
            //获取页码
            let index = this.state.currentPage;
            let imagesData = this.props.imagesData;
            if (i == 0){
                index --;
            }else if (i == 2){
                index ++;
            }
            if (index < 0){
                index = imagesData.length - 1;
            }
            if (index >= imagesData.length){
                index = 0;
            }
            // console.log(index);
            //样式
            let imageStyle = {
                width:this.props.scrollViewWidth
            };

            imagesView.push(
                <TouchableOpacity key={i} activeOpacity={0.9} onPress={this.imageClick.bind(this,index)}>
                    <Image source={{uri: imagesData[index].ad_pic_100}} style={[styles.imageStyle,imageStyle]}>
                        <View style={styles.outBoxStyle}>
                            <View style={styles.inBoxStyle}>
                                <Text style={{fontWeight:'600',fontSize:12}}>
                                    {imagesData[index].ad_name}
                                </Text>

                                <Text style={{fontSize:10}}>
                                    {imagesData[index].ad_word}
                                </Text>
                            </View>
                        </View>
                    </Image>
                </TouchableOpacity>
            )
        }
        return imagesView;
    }

    imageClick(index){
        console.log(index);
    }

    _onScroll(e){
        // console.log('onscroll');
        let offsetX = e.nativeEvent.contentOffset.x;
        let imagesX = [0,this.props.scrollViewWidth,2 * this.props.scrollViewWidth];
        let minDistance = 9999;
        let currentPage = this.state.currentPage;
        for(let i = 0; i < 3; i ++){
            // console.log(Math.abs(imagesX[i] - offsetX));
            if (Math.abs(imagesX[i] - offsetX) < minDistance){
                minDistance = imagesX[i];
            }
            if (minDistance == 0 && i == 2 && (offsetX == imagesX[0] || offsetX == imagesX[1] || offsetX == imagesX[2])){//滚动结束
                console.log(offsetX);

                if (Platform.OS == 'android'){
                    console.log('aaaaa');
                    this._onAnimationEnd(e);
                }

            }
        }

    }


    _onAnimationEnd(e){

        let offSetX = e.nativeEvent.contentOffset.x;
        // console.log(offSetX);
        let currentPage = this.state.currentPage;
        if (offSetX == 0){
            currentPage --;
            if (currentPage < 0) currentPage = this.props.imagesData.length - 1;
        }
        if (offSetX == 2 * this.props.scrollViewWidth){
            currentPage ++;
            if (currentPage >= this.props.imagesData.length) currentPage = 0;
        }
        this.setState({
            currentPage:currentPage
        });
        // console.log(this.state.currentPage);
        this.refs.scrollView.scrollResponderScrollTo({x:this.props.scrollViewWidth,y:0,animated:false});
    }



    _onScrollBeginDrag(){
        clearInterval(this.timer);
    }

    _onScrollEndDrag(){
        // this.startTimer();
    }


    componentDidMount(){
        // this.startTimer();
        this.refs.scrollView.scrollResponderScrollTo({x:this.props.scrollViewWidth,y:0,animated:true});

    }

    startTimer(){
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(() => {
            scrollView.scrollResponderScrollTo({x:2 * this.props.scrollViewWidth,y:0,animated:true});
        },2000);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:150
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
    indicatorViewStyle:{
        position:'absolute',
        right:20,
        bottom:0,
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0)'
    },
    indicatorCircleStyle:{
        fontSize:25,
    }
});

module.exports = ScrollImagesView;
