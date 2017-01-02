// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     ListView,
//     Image,
//     ActivityIndicator
// } from 'react-native';
//
// export default class GeziRecommendView extends Component {
//
//     static defaultProps = {
//         sectionData:{}
//     };
//
//     // 构造
//     constructor(props) {
//         super(props);
//         // 初始状态
//         this.state = {
//             goodses:[]
//         };
//         this.dataSource = new ListView.DataSource({
//             getSectionData: (dataBlob, sectionID) => dataBlob[sectionID],
//             getRowData: (dataBlob, sectionID, rowID) => dataBlob[sectionID + ':' + rowID],
//             rowHasChanged: (r1, r2) => r1 !== r2,
//             sectionHeaderHasChanged: (s1, s2) => s1 !== s2
//         })
//     }
//
//     render() {
//         return (
//             <ListView
//                 dataSource={this.dataSource.cloneWithRows(this.state.goodses)}
//                 renderRow={this._renderRow.bind(this)}
//                 renderSectionHeader={this._renderSectionHeader.bind(this)}
//             >
//
//             </ListView>
//         );
//     }
//
//     componentDidMount() {
//         this._loadNew();
//     }
//
//     _loadNew(){
//         fetch(gmyGlobal.host + '/getBgRecommendProduct/hot/1/20')
//             .then((response) => response.json())
//             .then((jsonData) => {
//
//                 console.log(jsonData)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
//
//     _renderSectionHeader(sectionData, sectionID){
//         return(
//             <Text>sectionHeader</Text>
//         );
//     }
//
//     _renderRow(rowData){
//         return(
//             <Text>21321321</Text>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// });
//
// module.exports = GeziRecommendView;



/**
 * Created by GMY on 2016/12/14.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

var Car = {
    "data": [
        {
            "cars": [
                {
                    "icon": "m_180_100.png",
                    "name": "AC Schnitzer"
                },
                {
                    "icon": "m_92_100.png",
                    "name": "阿尔法·罗密欧"
                },
                {
                    "icon": "m_9_100.png",
                    "name": "奥迪"
                },
                {
                    "icon": "m_97_100.png",
                    "name": "阿斯顿·马丁"
                }
            ],
            "title": "A"
        },
        {
            "cars": [
                {
                    "icon": "m_172_100.png",
                    "name": "巴博斯"
                },
                {
                    "icon": "m_157_100.png",
                    "name": "宝骏"
                },
                {
                    "icon": "m_3_100.png",
                    "name": "宝马"
                },
                {
                    "icon": "m_82_100.png",
                    "name": "保时捷"
                },
                {
                    "icon": "m_163_100.png",
                    "name": "北京汽车"
                },
                {
                    "icon": "m_211_100.png",
                    "name": "北汽幻速"
                },
                {
                    "icon": "m_168_100.png",
                    "name": "北汽威旺"
                },
                {
                    "icon": "m_14_100.png",
                    "name": "北汽制造"
                },
                {
                    "icon": "m_2_100.png",
                    "name": "奔驰"
                },
                {
                    "icon": "m_59_100.png",
                    "name": "奔腾"
                },
                {
                    "icon": "m_26_100.png",
                    "name": "本田"
                },
                {
                    "icon": "m_5_100.png",
                    "name": "标致"
                },
                {
                    "icon": "m_127_100.png",
                    "name": "别克"
                },
                {
                    "icon": "m_85_100.png",
                    "name": "宾利"
                },
                {
                    "icon": "m_15_100.png",
                    "name": "比亚迪"
                },
                {
                    "icon": "m_135_100.png",
                    "name": "布加迪"
                }
            ],
            "title": "B"
        },
        {
            "cars": [
                {
                    "icon": "m_129_100.png",
                    "name": "昌河"
                }
            ],
            "title": "C"
        },
        {
            "cars": [
                {
                    "icon": "m_113_100.png",
                    "name": "道奇"
                },
                {
                    "icon": "m_165_100.png",
                    "name": "大通"
                },
                {
                    "icon": "m_8_100.png",
                    "name": "大众"
                },
                {
                    "icon": "m_27_100.png",
                    "name": "东风"
                },
                {
                    "icon": "m_197_100.png",
                    "name": "东风风度"
                },
                {
                    "icon": "m_141_100.png",
                    "name": "东风风神"
                },
                {
                    "icon": "m_115_100.png",
                    "name": "东风风行"
                },
                {
                    "icon": "m_205_100.png",
                    "name": "东风小康"
                },
                {
                    "icon": "m_29_100.png",
                    "name": "东南"
                },
                {
                    "icon": "m_179_100.png",
                    "name": "DS"
                }
            ],
            "title": "D"
        },
        {
            "cars": [
                {
                    "icon": "m_91_100.png",
                    "name": "法拉利"
                },
                {
                    "icon": "m_199_100.png",
                    "name": "飞驰商务车"
                },
                {
                    "icon": "m_164_100.png",
                    "name": "菲斯克"
                },
                {
                    "icon": "m_40_100.png",
                    "name": "菲亚特"
                },
                {
                    "icon": "m_7_100.png",
                    "name": "丰田"
                },
                {
                    "icon": "m_67_100.png",
                    "name": "福迪"
                },
                {
                    "icon": "m_190_100.png",
                    "name": "弗那萨利"
                },
                {
                    "icon": "m_208_100.png",
                    "name": "福汽启腾"
                },
                {
                    "icon": "m_17_100.png",
                    "name": "福特"
                },
                {
                    "icon": "m_128_100.png",
                    "name": "福田"
                }
            ],
            "title": "F"
        },
        {
            "cars": [
                {
                    "icon": "m_109_100.png",
                    "name": "GMC"
                },
                {
                    "icon": "m_110_100.png",
                    "name": "光冈"
                },
                {
                    "icon": "m_147_100.png",
                    "name": "广汽"
                },
                {
                    "icon": "m_63_100.png",
                    "name": "广汽吉奥"
                },
                {
                    "icon": "m_133_100.png",
                    "name": "广汽日野"
                },
                {
                    "icon": "m_182_100.png",
                    "name": "观致汽车"
                }
            ],
            "title": "G"
        },
        {
            "cars": [
                {
                    "icon": "m_31_100.png",
                    "name": "哈飞"
                },
                {
                    "icon": "m_196_100.png",
                    "name": "哈弗"
                },
                {
                    "icon": "m_170_100.png",
                    "name": "海格"
                },
                {
                    "icon": "m_32_100.png",
                    "name": "海马"
                },
                {
                    "icon": "m_149_100.png",
                    "name": "海马商用车"
                },
                {
                    "icon": "m_181_100.png",
                    "name": "恒天汽车"
                },
                {
                    "icon": "m_58_100.png",
                    "name": "红旗"
                },
                {
                    "icon": "m_52_100.png",
                    "name": "黄海"
                },
                {
                    "icon": "m_112_100.png",
                    "name": "华泰"
                },
                {
                    "icon": "m_45_100.png",
                    "name": "汇众"
                }
            ],
            "title": "H"
        },
        {
            "cars": [
                {
                    "icon": "m_35_100.png",
                    "name": "江淮"
                },
                {
                    "icon": "m_37_100.png",
                    "name": "江铃"
                },
                {
                    "icon": "m_38_100.png",
                    "name": "江南"
                },
                {
                    "icon": "m_98_100.png",
                    "name": "捷豹"
                },
                {
                    "icon": "m_143_100.png",
                    "name": "吉利帝豪"
                },
                {
                    "icon": "m_144_100.png",
                    "name": "吉利全球鹰"
                },
                {
                    "icon": "m_148_100.png",
                    "name": "吉利英伦"
                },
                {
                    "icon": "m_39_100.png",
                    "name": "金杯"
                },
                {
                    "icon": "m_57_100.png",
                    "name": "金龙联合"
                },
                {
                    "icon": "m_161_100.png",
                    "name": "金旅客车"
                },
                {
                    "icon": "m_152_100.png",
                    "name": "九龙"
                },
                {
                    "icon": "m_4_100.png",
                    "name": "Jeep"
                }
            ],
            "title": "J"
        },
        {
            "cars": [
                {
                    "icon": "m_188_100.png",
                    "name": "卡尔森"
                },
                {
                    "icon": "m_107_100.png",
                    "name": "凯迪拉克"
                },
                {
                    "icon": "m_150_100.png",
                    "name": "开瑞"
                },
                {
                    "icon": "m_51_100.png",
                    "name": "克莱斯勒"
                },
                {
                    "icon": "m_145_100.png",
                    "name": "科尼塞克"
                },
                {
                    "icon": "m_212_100.png",
                    "name": "KTM"
                }
            ],
            "title": "K"
        },
        {
            "cars": [
                {
                    "icon": "m_86_100.png",
                    "name": "兰博基尼"
                },
                {
                    "icon": "m_200_100.png",
                    "name": "蓝海房车"
                },
                {
                    "icon": "m_80_100.png",
                    "name": "劳斯莱斯"
                },
                {
                    "icon": "m_94_100.png",
                    "name": "雷克萨斯"
                },
                {
                    "icon": "m_99_100.png",
                    "name": "雷诺"
                },
                {
                    "icon": "m_146_100.png",
                    "name": "莲花"
                },
                {
                    "icon": "m_153_100.png",
                    "name": "猎豹汽车"
                },
                {
                    "icon": "m_76_100.png",
                    "name": "力帆"
                },
                {
                    "icon": "m_16_100.png",
                    "name": "铃木"
                },
                {
                    "icon": "m_166_100.png",
                    "name": "理念"
                },
                {
                    "icon": "m_95_100.png",
                    "name": "林肯"
                },
                {
                    "icon": "m_36_100.png",
                    "name": "陆风"
                },
                {
                    "icon": "m_96_100.png",
                    "name": "路虎"
                },
                {
                    "icon": "m_83_100.png",
                    "name": "路特斯"
                }
            ],
            "title": "L"
        },
        {
            "cars": [
                {
                    "icon": "m_183_100.png",
                    "name": "迈凯伦"
                },
                {
                    "icon": "m_93_100.png",
                    "name": "玛莎拉蒂"
                },
                {
                    "icon": "m_18_100.png",
                    "name": "马自达"
                },
                {
                    "icon": "m_79_100.png",
                    "name": "MG"
                },
                {
                    "icon": "m_81_100.png",
                    "name": "MINI"
                },
                {
                    "icon": "m_201_100.png",
                    "name": "摩根"
                }
            ],
            "title": "M"
        },
        {
            "cars": [
                {
                    "icon": "m_155_100.png",
                    "name": "纳智捷"
                }
            ],
            "title": "N"
        },
        {
            "cars": [
                {
                    "icon": "m_104_100.png",
                    "name": "欧宝"
                },
                {
                    "icon": "m_84_100.png",
                    "name": "讴歌"
                },
                {
                    "icon": "m_171_100.png",
                    "name": "欧朗"
                }
            ],
            "title": "O"
        },
        {
            "cars": [
                {
                    "icon": "m_156_100.png",
                    "name": "启辰"
                },
                {
                    "icon": "m_43_100.png",
                    "name": "庆铃"
                },
                {
                    "icon": "m_42_100.png",
                    "name": "奇瑞"
                },
                {
                    "icon": "m_28_100.png",
                    "name": "起亚"
                }
            ],
            "title": "Q"
        },
        {
            "cars": [
                {
                    "icon": "m_30_100.png",
                    "name": "日产"
                },
                {
                    "icon": "m_78_100.png",
                    "name": "荣威"
                },
                {
                    "icon": "m_142_100.png",
                    "name": "瑞麒"
                }
            ],
            "title": "R"
        },
        {
            "cars": [
                {
                    "icon": "m_25_100.png",
                    "name": "三菱"
                },
                {
                    "icon": "m_209_100.png",
                    "name": "山姆"
                },
                {
                    "icon": "m_195_100.png",
                    "name": "绅宝"
                },
                {
                    "icon": "m_50_100.png",
                    "name": "双环"
                },
                {
                    "icon": "m_102_100.png",
                    "name": "双龙"
                },
                {
                    "icon": "m_111_100.png",
                    "name": "斯巴鲁"
                },
                {
                    "icon": "m_10_100.png",
                    "name": "斯柯达"
                },
                {
                    "icon": "m_89_100.png",
                    "name": "smart"
                }
            ],
            "title": "S"
        },
        {
            "cars": [
                {
                    "icon": "m_202_100.png",
                    "name": "泰卡特"
                },
                {
                    "icon": "m_189_100.png",
                    "name": "特斯拉"
                }
            ],
            "title": "T"
        },
        {
            "cars": [
                {
                    "icon": "m_140_100.png",
                    "name": "威麟"
                },
                {
                    "icon": "m_186_100.png",
                    "name": "威兹曼"
                },
                {
                    "icon": "m_19_100.png",
                    "name": "沃尔沃"
                },
                {
                    "icon": "m_48_100.png",
                    "name": "五菱"
                }
            ],
            "title": "W"
        },
        {
            "cars": [
                {
                    "icon": "m_13_100.png",
                    "name": "现代"
                },
                {
                    "icon": "m_174_100.png",
                    "name": "星客特"
                },
                {
                    "icon": "m_71_100.png",
                    "name": "新凯"
                },
                {
                    "icon": "m_87_100.png",
                    "name": "西雅特"
                },
                {
                    "icon": "m_49_100.png",
                    "name": "雪佛兰"
                },
                {
                    "icon": "m_6_100.png",
                    "name": "雪铁龙"
                }
            ],
            "title": "X"
        },
        {
            "cars": [
                {
                    "icon": "m_194_100.png",
                    "name": "扬州亚星客车"
                },
                {
                    "icon": "m_138_100.png",
                    "name": "野马汽车"
                },
                {
                    "icon": "m_100_100.png",
                    "name": "英菲尼迪"
                },
                {
                    "icon": "m_53_100.png",
                    "name": "一汽"
                },
                {
                    "icon": "m_41_100.png",
                    "name": "依维柯"
                },
                {
                    "icon": "m_75_100.png",
                    "name": "永源"
                }
            ],
            "title": "Y"
        },
        {
            "cars": [
                {
                    "icon": "m_136_100.png",
                    "name": "长安轿车"
                },
                {
                    "icon": "m_159_100.png",
                    "name": "长安商用"
                },
                {
                    "icon": "m_21_100.png",
                    "name": "长城"
                },
                {
                    "icon": "m_203_100.png",
                    "name": "之诺"
                },
                {
                    "icon": "m_60_100.png",
                    "name": "中华"
                },
                {
                    "icon": "m_167_100.png",
                    "name": "中欧"
                },
                {
                    "icon": "m_77_100.png",
                    "name": "众泰"
                },
                {
                    "icon": "m_204_100.png",
                    "name": "中通客车"
                },
                {
                    "icon": "m_33_100.png",
                    "name": "中兴"
                }
            ],
            "title": "Z"
        }
    ]
}

var carListView = React.createClass({

    getInitialState(){

        var sectionData = (dataBlob,sectionID) => {
            return dataBlob[sectionID];
        };

        var rowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        return{
            dataSource:new ListView.DataSource({
                getSectionData:sectionData,
                getRowData:rowData,
                rowHasChanged:(r1,r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2
            })
        }
    },

    render(){
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        )
    },



    componentDidMount(){
        this.loadDataFromJson();
    },

    loadDataFromJson(){
        var jsonData = Car.data;
        var dataBlob = {};
        var rowIDs = [];
        var sectionIDs = [];
        var cars = [];

        for (var i = 0; i < jsonData.length; i ++){
            sectionIDs.push(i);
            dataBlob[i] = jsonData[i].title;
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            // console.log(cars);
            for (var j = 0; j < cars.length; j ++){
                rowIDs[i].push(j);
                dataBlob[i + ':' + j] = cars[j];
            }
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });
    },


    renderRow(rowData){
        return(
            <View>
                <Image source={{uri:rowData.icon}} style={styles.imageStyle}/>
                <Text>{rowData.name}</Text>
            </View>
        )
    },

    renderSectionHeader(sectionData,sectionID){
        return(
            <View>
                <Text style={{backgroundColor:'#eee',color:'#f00'}}>{sectionData}</Text>
            </View>
        )
    }



});

const styles = StyleSheet.create({
    container:{
        paddingTop:64
    },
    imageStyle:{
        width:80,
        height:80
    }

});

module.exports = carListView;
