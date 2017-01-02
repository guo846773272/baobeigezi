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
    Image,
    Platform,
    TextInput,
    TouchableOpacity,
    ListView
} from 'react-native';

import HomeSearchDetailView from './HomeSearchDetailView';

export default class HomeSearchView extends Component {

    // 构造
      constructor(props) {
          super(props);
          // 初始状态
          this.state = {
              currentSearchText:'',
              searchHistory: []
          };
          this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    <Image source={{uri:'icon_new_title_search'}} style={{width:30,height:30,marginHorizontal:10,paddingLeft:5}}/>
                    <TextInput
                        style={{flex:1,height:30,borderBottomColor:'lightgray',borderBottomWidth:0,paddingLeft:10,borderColor:'lightgray',borderWidth:1,borderRadius:5}}
                        placeholder="[抠鼻][抠鼻][抠鼻]"
                        autoFocus={true}
                        onChangeText={(text) => {this.setState({currentSearchText: text})}}
                        onSubmitEditing={this._onSubmitEditing.bind(this)}
                        clearButtonMode="while-editing"
                    >

                    </TextInput>
                    <TouchableOpacity
                        onPress={this._closeOnPress.bind(this)}
                    >
                        <Image source={{uri:'umeng_update_close_bg_normal'}} style={{width:30,height:30,marginHorizontal:10}}/>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:44,paddingHorizontal:10,borderBottomColor:'lightgray',borderBottomWidth:1,marginTop:50}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri: 'icon_new_title_search'}} style={{width:30,height:30}}/>
                        <Text style={{fontWeight:'bold'}}>  历史搜索</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this._deleteAllHistoryOnPress.bind(this)}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text>全部删除  </Text>
                            <Image source={{uri: 'umeng_update_close_bg_tap'}} style={{width:18,height:18}}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <ListView
                    dataSource={this.dataSource.cloneWithRows(this.state.searchHistory)}
                    renderRow={this._renderRow.bind(this)}
                    enableEmptySections = {true}
                >

                </ListView>
            </View>
        );
    }

    _closeOnPress(){
        this.props.navigator.pop();
    }
    

    componentDidMount() {
        this._getData();
    }

    _getData(){
        gmyGlobal._getData('HomeSearch',(result) => {
            console.log(result);
            if (result && result['HomeSearch']){
                this.setState({
                    searchHistory: result["HomeSearch"]
                });
            }else{
                this.setState({
                    searchHistory: []
                });
            }
        },(error) => {
            console.log(error);
        });
    }

    async _onSubmitEditing(){
        let currentSearchText = this.state.currentSearchText;
        let searchHistory = this.state.searchHistory;
        await this.setState({
            searchHistory: [...new Set([currentSearchText,...searchHistory])]
        });
        gmyGlobal._saveData('HomeSearch',{"HomeSearch":this.state.searchHistory});
        this._pushToDetail(this.state.currentSearchText);
        // console.log(this.state.searchHistory);
    }

    _pushToDetail(currentSearchText){
        this.props.navigator.push({
            component: HomeSearchDetailView,
            passProps: {currentSearchText}
        })
    }

    _renderRow(history){
        return(
            <TouchableOpacity onPress={() => this._pushToDetail(history)}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:44,paddingHorizontal:10,borderBottomColor:'lightgray',borderBottomWidth:1}}>
                    <Text>{history}</Text>
                    <TouchableOpacity
                        onPress={this._deleteHistoryOnPress.bind(this,history)}
                    >
                        <Image source={{uri: 'search_clear_normal'}} style={{width:24,height:24,padding:5}}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        )
    }

    _deleteAllHistoryOnPress(){
        gmyGlobal._deleteData('HomeSearch');
        this._getData();
    }

    async _deleteHistoryOnPress(history){
        let setSearchHistory = new Set(this.state.searchHistory);
        setSearchHistory.delete(history);
        await this.setState({
            searchHistory: [...setSearchHistory]
        });
        gmyGlobal._saveData('HomeSearch',{"HomeSearch":this.state.searchHistory});
    }
}

const styles = StyleSheet.create({
    container:{

    },
    navStyle:{
        flexDirection:'row',
        height:Platform.OS == 'ios' ? 64 : 44,
        paddingTop:Platform.OS == 'ios' ? 27 : 0,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'lightgray'
    }
});

module.exports = HomeSearchView;
