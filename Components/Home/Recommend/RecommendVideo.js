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
import Swiper from 'react-native-swiper';

import Dimensions from 'Dimensions';
let {width} = Dimensions.get('window');

export default class RecommendVideo extends Component {

    static defaultProps={
        jsonData:{}
    };

    render() {
        let data = this.props.jsonData.data[6];
        return (

            <View style={styles.container}>

                {this._renderContentView(this.props.jsonData.data[6])}
                {this._renderContentView(this.props.jsonData.data[7])}

            </View>
        );
    }

    _renderContentView(data){
        // console.log(data);
        let that = this;
        return (
            <View style={{alignItems:'center'}}>
                <View style={styles.lineStyle}>
                </View>

                <View style={styles.topCenterViewStyle}>
                    <Image source={{uri: data.module_icon}} style={styles.playImageStyle}/>
                    <Text style={{fontWeight:'bold'}}>  {data.module_name}</Text>
                </View>

                <View style={styles.topRightViewStyle}>
                    <Text style={{color:'lightgray',fontSize:12}}>MORE</Text>
                    <Image source={{uri:'collect_more'}} style={{width:12,height:12}}/>
                </View>

                <View style={styles.lineStyle}>
                </View>

                <View style={{padding:15}}>

                    <VideoImagesView
                        data={data}
                    />

                    {/*


                     <Swiper
                     showsButtons={false}
                     width={width - 30}
                     height={(width - 30) * 13 / 23}
                     dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                     activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                     autoplay={true}
                     autoplayTimeout={5}
                     paginationStyle = {{position:'absolute',bottom:5}}
                     >

                     {this._renderVideoImagesView(data.data)}

                     </Swiper>


                    */}


                </View>


            </View>
        )
    }

    _renderVideoImagesView(list){
        if (!(list instanceof Array)){
            list = list.list;
        }
        let imageViews = [];
        for (let i = 0; i < list.length; i ++) {
            imageViews.push(
                <TouchableOpacity
                    key={i}
                    activeOpacity={1}
                    onPress={() => console.log(i)}
                >
                    <Image source={{uri:list[i].videoPic}} style={styles.imageViewStyle}>
                        <Image source={{uri:'icon_video_play'}} style={{width:40,height:40}}/>
                        <Text style={{position:'absolute',bottom:0,width:width-30,backgroundColor:'rgba(0,0,0,.5)',color:'#fff',padding:5,fontSize:12}}>  {list[i].videoTitle}</Text>
                    </Image>
                </TouchableOpacity>
            )
        }
        return imageViews;
    }
}

class VideoImagesView extends Component{

    static defaultProps = {
        data:{}
    };

    // 构造

      constructor(props) {
        super(props);
        // 初始状态
          let list = this.props.data.data;
          if (!(list instanceof  Array)){
              list = list.list;
          }
          this.state = {
              dataSource: new ViewPager.DataSource({
                  pageHasChanged: (p1, p2) => p1 !== p2
              }).cloneWithPages(list)
          };
      }

    render(){
        // console.log(this.props.data);
        let list = this.props.data.data;
        if (!(list instanceof  Array)){
            list = list.list;
        }
        if (Platform.OS === 'ios'){
            return(
                <Swiper
                    showsButtons={false}
                    width={width - 30}
                    height={(width - 30) * 13 / 23}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    autoplay={true}
                    autoplayTimeout={5}
                    paginationStyle = {{position:'absolute',bottom:5}}
                >

                    {this._renderVideoImagesView(this.props.data.data)}

                </Swiper>
            )
        }else{
            if (list.length == 1){
                return(
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => console.log('only one')}
                    >
                        <Image source={{uri:list[0].videoPic}} style={styles.imageViewStyle}>
                            <Image source={{uri:'icon_video_play'}} style={{width:40,height:40}}/>
                            <Text style={{position:'absolute',bottom:0,width:width-30,backgroundColor:'rgba(0,0,0,.5)',color:'#fff',padding:5,fontSize:12}}>  {list[0].videoTitle}</Text>
                        </Image>
                    </TouchableOpacity>
                )
            }else{
                return(


                    <View style={{width:width - 30,height:(width - 30) * 13 / 23}}>
                        <ViewPager
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            autoPlay={true}
                            isLoop={true}
                        />
                    </View>
                    /*<Text>android</Text>*/

                )
            }

        }
    }

    _renderPage(data,pageID){
        console.log(data);
        return(

            <TouchableOpacity
                key={pageID}
                activeOpacity={1}
                onPress={() => console.log(pageID)}
            >
                <Image source={{uri:data.videoPic}} style={styles.imageViewStyle}>
                    <Image source={{uri:'icon_video_play'}} style={{width:40,height:40}}/>
                    <Text style={{position:'absolute',bottom:0,width:width-30,backgroundColor:'rgba(0,0,0,.5)',color:'#fff',padding:5,fontSize:12}}>  {data.videoTitle}</Text>
                </Image>
            </TouchableOpacity>


        )
    }

    _renderVideoImagesView(list){
        if (!(list instanceof Array)){
            list = list.list;
        }
        let imageViews = [];
        for (let i = 0; i < list.length; i ++) {
            imageViews.push(
                <TouchableOpacity
                    key={i}
                    activeOpacity={1}
                    onPress={() => console.log(i)}
                >
                    <Image source={{uri:list[i].videoPic}} style={styles.imageViewStyle}>
                        <Image source={{uri:'icon_video_play'}} style={{width:40,height:40}}/>
                        <Text style={{position:'absolute',bottom:0,width:width-30,backgroundColor:'rgba(0,0,0,.5)',color:'#fff',padding:5,fontSize:12}}>  {list[i].videoTitle}</Text>
                    </Image>
                </TouchableOpacity>
            )
        }
        return imageViews;
    }
}

const styles = StyleSheet.create({
    container:{
        // justifyContent:'center',
        // alignItems:'center'
    },
    lineStyle: {
        width: width - 30,
        height: 3,
        backgroundColor: 'lightgray'
    },
    topCenterViewStyle:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    playImageStyle:{
        width:16,
        height:14
    },

    topRightViewStyle:{
        position:'absolute',
        right:0.1 * width,
        top:14,
        flexDirection:'row',
        alignItems:'center'
    },

    imageViewStyle:{
        width:width - 30,
        height:(width - 30) * 13 / 23,
        justifyContent:'center',
        alignItems:'center'
    }

});

module.exports = RecommendVideo;
