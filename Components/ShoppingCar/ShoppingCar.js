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
    Animated
} from 'react-native';

var Carousel = require('react-native-carousel');

export default class ShoppingCar extends Component {
    render() {
        return (
            <Carousel width={375}>
                <View style={styles.container}>
                    <Text>Page 1</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 2</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 3</Text>
                </View>
            </Carousel>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

module.exports = ShoppingCar;
