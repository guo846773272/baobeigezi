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
    TouchableOpacity,
    Platform
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import Carousel from 'react-native-carousel';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

let {width} = Dimensions.get('window');

// export default class SwiperScrollImagesView extends Component {
//
//     static defaultProps = {
//         jsonData:{},
//         swiperWidth:width,
//         swiperHeight:180
//     };
//
//     // 构造
//       constructor(props) {
//         super(props);
//         // 初始状态
//         this.state = {
//
//         };
//       }
//
//     render() {
//         return (
//             <Swiper
//                 style={styles.wrapper}
//                 showsButtons={false}
//                 width={this.props.swiperWidth}
//                 height={this.props.swiperHeight}
//                 dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//                 activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//                 autoplay={true}
//                 autoplayTimeout={5}
//                 paginationStyle = {{position:'absolute',bottom:5}}
//             >
//
//                 {this._renderScrollImagesView()}
//             </Swiper>
//
//             // <Carousel
//             //     width={375}
//             //     height={375}
//             //     indicatorOffset={5}
//             //     indicatorSize={20}
//             //     indicatorSpace={15}
//             //     delay={3000}
//             //     inactiveIndicatorColor="#999999"
//             //     indicatorColor="#FFFFFF"
//             // >
//             //     {this._renderScrollImagesView()}
//             // </Carousel>
//         );
//     }
//
//     _renderScrollImagesView(){
//         let list = this.props.jsonData.data[0].data.list;
//         let imagesView = [];
//         let imageStyle = {width: this.props.swiperWidth,height:this.props.swiperHeight};
//         for(let i = 0; i < list.length; i++){
//             let data = list[i];
//             imagesView.push(
//                 <TouchableOpacity key={i} activeOpacity={1} onPress={this._imageClick.bind(this,i)}>
//                     <Image source={{uri: data.ad_pic_400}} style={[styles.image,imageStyle]}>
//                         <View style={styles.outBoxStyle}>
//                             <View style={styles.inBoxStyle}>
//                                 <Text style={{fontWeight:'600',fontSize:12}}>
//                                     {data.ad_name}
//                                 </Text>
//
//                                 <Text style={{fontSize:10}}>
//                                     {data.ad_word}
//                                 </Text>
//                             </View>
//                         </View>
//                     </Image>
//                 </TouchableOpacity>
//             )
//         }
//         return imagesView;
//     }
//
//     _imageClick(i){
//         // console.log(i);
//     }
//
//     componentDidMount() {
//         // console.log(this.props.scrollImagesData);
//     }
// }










export default class SwiperScrollImagesView extends Component {

    static defaultProps = {
        jsonData:{},

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2
            }).cloneWithPages(this.props.jsonData.data[0].data.list)
        };
    }

    render() {
        if (Platform.OS === 'ios'){
            return (
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    width={gmyGlobal.width}
                    height={gmyGlobal.width / 2}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    autoplay={true}
                    autoplayTimeout={5}
                    paginationStyle = {{position:'absolute',bottom:5}}
                >
                    {this._renderScrollImagesView()}
                </Swiper>
            )
        }else{
            return (
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    autoPlay={true}
                    isLoop={true}
                />
            );
        }
    }

    _renderPage(data,pageID){
        // console.log(pageID);
        return(
            <Image source={{uri: data.ad_pic_400}} style={[styles.image,{width: gmyGlobal.width,height:gmyGlobal.width / 2}]}>
                <View style={styles.outBoxStyle}>
                    <View style={styles.inBoxStyle}>
                        <Text style={{fontWeight:'600',fontSize:12}}>
                            {data.ad_name}
                        </Text>

                        <Text style={{fontSize:10}}>
                            {data.ad_word}
                        </Text>
                    </View>
                </View>
            </Image>
        )
    }

    _renderScrollImagesView(){
        let list = this.props.jsonData.data[0].data.list;
        let imagesView = [];
        let imageStyle = {width: gmyGlobal.width,height:gmyGlobal.width / 2};
        for(let i = 0; i < list.length; i++){
            let data = list[i];
            imagesView.push(
                <TouchableOpacity key={i} activeOpacity={1} onPress={this._imageClick.bind(this,i)}>
                    <Image source={{uri: data.ad_pic_400}} style={[styles.image,imageStyle]}>
                        <View style={styles.outBoxStyle}>
                            <View style={styles.inBoxStyle}>
                                <Text style={{fontWeight:'600',fontSize:12}}>
                                    {data.ad_name}
                                </Text>

                                <Text style={{fontSize:10}}>
                                    {data.ad_word}
                                </Text>
                            </View>
                        </View>
                    </Image>
                </TouchableOpacity>
            )
        }
        return imagesView;
    }

    _imageClick(i){
        // console.log(i);
    }

    componentDidMount() {
        // console.log(this.props.scrollImagesData);
    }
}

const styles = StyleSheet.create({

    image:{
        justifyContent:'center',
        alignItems:'center'
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


});

module.exports = SwiperScrollImagesView;
