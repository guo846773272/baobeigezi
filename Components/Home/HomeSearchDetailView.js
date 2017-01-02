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
    Platform,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

export default class HomeSearchDetailView extends Component {
    
    static defaultProps = {
        currentSearchText:''
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTitleTag: 0,
            goodses: ['0','1','2']
        };
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarStyle}>
                    <TouchableOpacity>
                        <Image source={{uri:'icon_new_title_search'}} style={{width:20,height:20}}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.props.navigator.pop}
                        style={{flex:1}}
                    >
                        <View style={{flexDirection:'row',height:30,marginHorizontal:15,paddingHorizontal:10,alignItems:'center'}}>
                            <Text style={{color:'#fff',backgroundColor:'#000',height:30,lineHeight:30,paddingHorizontal:8}}>{this.props.currentSearchText}</Text>
                            <Text style={{color:'#fff',backgroundColor:'#000',marginLeft:2,fontSize:30,lineHeight:30,width:30,height:30,textAlign:'center'}}>×</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.props.navigator.popToTop}
                    >
                        <Image source={{uri:'umeng_update_close_bg_normal'}} style={{width:30,height:30,marginHorizontal:10}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.titlesBarStyle}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        {this._renderTitleViews()}
                    </View>
                    <TouchableOpacity>
                        <Image source={{uri: 'icon_switch_list'}} style={{width:20,height:20,marginHorizontal:15,resizeMode:'stretch'}}/>
                    </TouchableOpacity>

                </View>

                <ListView
                    dataSource={this.dataSource.cloneWithRows(this.state.goodses)}
                    renderRow={this._renderRow.bind(this)}
                >

                </ListView>

            </View>
        );
    }

     _renderRow(rowData){
         return(
             <View style={{padding:10,borderBottomColor:'lightgray',borderBottomWidth:1}}>
                 <View style={{flexDirection:'row',borderBottomColor:'#e8e8e8',borderBottomWidth:1,paddingBottom:10}}>
                     <Image source={{uri:rowData.image_url_400}} style={{width:100,height:100,marginRight:10}}/>

                     <View style={{justifyContent:'space-between'}}>
                         <Text style={{fontWeight:'bold'}}>{rowData.brand_name}</Text>
                         <Text numberOfLines={2} style={{fontSize:12,color:'gray',width:gmyGlobal.width - 30 - 100}}>{rowData.name}</Text>
                         <View style={{flexDirection:'row',alignItems:'center'}}>
                             <Text style={{color:'rgba(255,0,127,1)'}}>¥{rowData.store_price}</Text>
                             <Text style={{color:'gray',fontSize:10}}>  {`${rowData.currency_symbol}${rowData.currency_market_price}`}</Text>
                         </View>

                         <View style={{flexDirection:'row',alignItems:'center'}}>
                             <Text style={{fontSize:10,color:'lightgray'}}>{rowData.sold_number}人购买  </Text>
                             <Text style={{fontSize:10,color:'lightgray'}}>{rowData.commentNumber}条评论  </Text>
                             <Text style={{fontSize:10,color:'lightgray'}}>{rowData.likeNumber}人喜欢</Text>
                         </View>
                     </View>
                 </View>

                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                     <View style={{flexDirection:'row'}}>
                         <Image source={{uri:rowData.country_flag}} style={{width:15,height:15}}/>
                         <Text style={{color:'lightgray',fontSize:10}}>  {rowData.country_name}</Text>
                     </View>

                     <Text style={{fontSize:10,color:'lightgray'}}>{rowData.refer_text_url}</Text>
                 </View>
             </View>
         )
     }

    _renderTitleViews(){
        let titles = ['综合','价格','销量','筛选'];
        let titleViews = [];
        for (let i = 0; i < titles.length; i ++){
            let titleStyle = {color : i == this.state.selectedTitleTag ? '#000' : 'lightgray'};
            titleViews.push(
                <TouchableOpacity
                    onPress={this._titleOnPress.bind(this,i)}
                    key={i}
                    style={{flex:1}}
                >
                    <Text style={[{textAlign:'center'},titleStyle]}>{titles[i]}</Text>
                </TouchableOpacity>
            )
        }
        return titleViews;
    }

    _titleOnPress(i){
        this.setState({
            selectedTitleTag:i
        })
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        http://v266.mapi.baobeigezi.com/v26_4/search/search_result_v26?size=10&sortby=&sortby_mode=&key_word=mac&page=1
        console.log(`http://v266.mapi.baobeigezi.com/v26_4/search/search_result_v26?size=10&sortby=&sortby_mode=&key_word=${this.props.currentSearchText}&page=1`);
        fetch(`http://v266.mapi.baobeigezi.com/v26_4/search/search_result_v26?size=10&sortby=&sortby_mode=&key_word=${this.props.currentSearchText}&page=1`)
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                this.setState({
                    goodses:jsonData.data.list
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

const styles = StyleSheet.create({
    container:{

    },
    navbarStyle:{
        flexDirection:'row',
        alignItems:'center',
        width:gmyGlobal.width,
        height:Platform.OS == 'ios' ? 64 : 44,
        paddingTop:Platform.OS == 'ios' ? 20 : 0,
        backgroundColor:'#fff',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        paddingHorizontal:15
    },
    leftImageItem:{
        width:30,
        height:30,
        marginHorizontal:15
    },
    titlesBarStyle:{
        flexDirection: 'row',
        alignItems:'center',
        height: 44,
        borderBottomColor:'lightgray',
        borderBottomWidth:1
    }
});

module.exports = HomeSearchDetailView;
