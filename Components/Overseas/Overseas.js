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
    ViewPagerAndroid
} from 'react-native';

import ViewPager from 'react-native-viewpager';

export default class Overseas extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2
            }).cloneWithPages(['0','1','2'])
        };
      }

    render() {
        return (
            <ViewPager
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                autoPlay={true}
                isLoop={true}
            />
        );
    }

    _renderPage(data,pageID){
        return(
            <Text>data</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    viewPager:{
        flex: 1,
    },
    pageStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'red'
    }
});

module.exports = Overseas;
