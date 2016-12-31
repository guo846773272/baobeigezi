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
    TouchableOpacity,
    Animated
} from 'react-native';

import Dimensions from 'Dimensions';

const {width,height} = Dimensions.get('window');

export default class HomeTitlesView extends Component {

    // http://v266.ma2.baobeigezi.com/getIndexTab
    static defaultProps = {
        titles: ['推荐', '值得买', 'Cost超市', '助养', '进口奶粉', '纸尿裤', '辣妈专区', '服饰轻奢', '宝宝用品', '美食营养', '宝宝辅食', '玩具图书', '奶爸专区'],
        subTitleMargin: 20,
        subTitleWidth:60,
        _onPress:() => {}

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectSubTitleTag: 0,
            slideOffsetX: new Animated.Value(this.props.subTitleMargin)
        };
    }

    render() {
        return (

            <View>
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ref="scrollView"
                    removeClippedSubviews={false}
                >
                    {this._renderSubTitlesView()}
                    <Animated.View
                        style={{position:'absolute',left: this.state.slideOffsetX,bottom:0,width:this.props.subTitleWidth,height:2,backgroundColor:'#000'}}>
                        {this.props.children}
                    </Animated.View>
                    {/*

                     */}
                </ScrollView>
            </View>


        );
    }



    _renderSubTitlesView() {
        let titles = this.props.titles;
        let subTitles = [];
        for (let i = 0; i < titles.length; i++) {
            let title = titles[i];
            let subTitleStyle = {
                marginLeft: this.props.subTitleMargin,
                color: i == this.state.selectSubTitleTag ? '#000' : '#999',
                marginRight: i == titles.length - 1 ? this.props.subTitleMargin : 0,
                width:this.props.subTitleWidth
            };
            subTitles.push(
                <TouchableOpacity key={i} activeOpacity={0.5} onPress={this._scrollToPage.bind(this,i)}>
                    <Text style={[subTitleStyle,styles.subTitleStyle]}>{title}</Text>
                </TouchableOpacity>
            );




            // subTitles.push(
            //     <Text>{title}</Text>
            // )
        }
        return subTitles;
    }

    _scrollToPage(i){
        // console.log(i);

        let offsetX = i * (this.props.subTitleWidth + this.props.subTitleMargin) - width / 2 + (this.props.subTitleWidth + this.props.subTitleMargin) / 2 ;

        if (offsetX < 0) offsetX = 0;

        let maxOffsetX = this.props.subTitleMargin + this.props.titles.length * (this.props.subTitleMargin + this.props.subTitleWidth) - width;
        if (offsetX > maxOffsetX) offsetX = maxOffsetX;

        this.refs.scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});


        this.setState({
            selectSubTitleTag:i
        });

        Animated.timing(
            this.state.slideOffsetX,
            {toValue: this.props.subTitleMargin + i * (this.props.subTitleMargin + this.props.subTitleWidth)},
        ).start();

        this.props._onPress(i);

    }

    componentDidMount() {

    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {

    },
    subTitleStyle: {
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: 'center'
    }
});

module.exports = HomeTitlesView;
