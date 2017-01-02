/**
 * Created by GMY on 2016/12/27.
 */

import {
    AsyncStorage
} from 'react-native';
import Dimensions from 'Dimensions';
let {width} = Dimensions.get('window');

var gmyGlobal = {};

gmyGlobal.host = 'http://v266.ma2.baobeigezi.com';

gmyGlobal.width = width;

// gmyGlobal._saveData = ((key,jsonData) => {
//
//     try {
//         AsyncStorage.setItem(
//             key,
//
//             JSON.stringify(jsonData),
//             (error)=> {
//                 if (error) {
//                     console.log('存值失败:', error);
//                 } else {
//                     console.log('存值成功!');
//                 }
//             }
//         );
//     } catch (error) {
//         console.log('失败' + error);
//     }
// });



gmyGlobal._saveData = ((key,jsonData,successCallback,errorCallback) => {

    try {
        AsyncStorage.setItem(
            key,
            JSON.stringify(jsonData),
            (error)=> {
                if (error) {
                    // console.log('存值失败:', error);
                } else {
                    // console.log('存值成功!');
                    if (successCallback) successCallback();
                }
            }
        );
    } catch (error) {
        // console.log('失败' + error);
        if (errorCallback) errorCallback();
    }
});

gmyGlobal._getData = ((key,successCallback,errorCallback) => {
    try {
        AsyncStorage.getItem(
            key,
            (error, result)=> {
                if (error) {
                    // console.log('取值失败:' + error);
                } else {
                    if (successCallback) successCallback(JSON.parse(result));
                    // this._setupData(JSON.parse(result));
                }
            }
        )
    } catch (error) {
        // console.log('失败' + error);
        if (errorCallback) errorCallback();
    }

});

gmyGlobal._deleteData = ((key,successCallback,errorCallback) => {

    try {
        AsyncStorage.removeItem(
            key,
            (error)=> {
                if (error) {
                    
                } else {
                    if (successCallback) successCallback();
                }
            }
        );
    } catch (error) {
        // console.log('失败' + error);
        if (errorCallback) errorCallback();
    }
});









window.gmyGlobal = gmyGlobal;
module.exports = window.gmyGlobal;