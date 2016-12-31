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

export default class Fushiqingshe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    服饰轻奢
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

module.exports = Fushiqingshe;
