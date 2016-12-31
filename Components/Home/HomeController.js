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
    View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from 'react-native-scrollable-tab-view/ScrollableTabBar';
import HomeTitlesView from './HomeTitlesView';

import Recommend from './Recommend/Recommend';
import Zhidemai from './Zhidemai/Zhidemai';
import CostcoSupermarket from './CostcoSupermarket/CostcoSupermarket';
import Zhuyang from './Zhuyang/Zhuyang';
import Jinkounaifen from './Jinkounaifen/Jinkounaifen';
import Zhiniaoku from './Zhiniaoku/Zhiniaoku';
import Lamazhuanqu from './Lamazhuanqu/Lamazhuanqu';
import Fushiqingshe from './Fushiqingshe/Fushiqingshe';
import Baobaoyongpin from './Baobaoyongpin/Baobaoyongpin';
import Meishiyingyang from './Meishiyingyang/Meishiyingyang';
import Baobaofushi from './Baobaofushi/Baobaofushi';
import Wanjutushu from './Wanjutushu/Wanjutushu';
import Naibazhuanqu from './Naibazhuanqu/Naibazhuanqu';

export default class HomeController extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page: 0
        };
    }


    render() {
        return (
            <ScrollableTabView
                ref="scrollableTabView"
                renderTabBar={() => <ScrollableTabBar />}
                page={this.state.page}
                tabBarActiveTextColor="#000"
                tabBarInactiveTextColor="gray"
                tabBarUnderlineStyle={{height:2,backgroundColor:'#000'}}
                
                
                
                
                // renderTabBar={
                //     () => <HomeTitlesView
                //             _onPress={(i) => this.setState({page:i})}
                //             ref="homeTitlesView"
                //         />
                //  }
                // onScroll={(e) => {console.log(e)}}
                // onChangeTab={(tab) => this.refs.scrollableTabView.refs.homeTitlesView._scrollToPage(tab.i)}
            >
                <Recommend tabLabel="推荐"/>
                <Zhidemai tabLabel="值得买"/>
                <CostcoSupermarket tabLabel="Costco超市"/>
                <Zhuyang tabLabel="助养"/>
                <Jinkounaifen tabLabel="进口奶粉"/>
                <Zhiniaoku tabLabel="纸尿裤"/>
                <Lamazhuanqu tabLabel="辣妈专区"/>
                <Fushiqingshe tabLabel="服饰轻奢"/>
                <Baobaoyongpin tabLabel="宝宝用品"/>
                <Meishiyingyang tabLabel="美食营养"/>
                <Baobaofushi tabLabel="宝宝辅食"/>
                <Wanjutushu tabLabel="玩具图书"/>
                <Naibazhuanqu tabLabel="奶爸专区"/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({});

module.exports = HomeController;
