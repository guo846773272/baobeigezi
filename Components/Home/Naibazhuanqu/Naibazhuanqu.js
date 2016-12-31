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

export default class Naibazhuanqu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    奶爸专区
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = Naibazhuanqu;
