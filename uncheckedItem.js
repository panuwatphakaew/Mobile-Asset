import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { Icon } from "native-base";
import { createStackNavigator } from 'react-navigation';
export default class UncheckedItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    key: '100000000000004',
                    name: 'เก้าอี้',
                    icon: { collection: 'Entypo', name: 'tools' },
                    status: 'ซ่อม Barcode แล้ว',
                },
                {
                    key: '100000000000005',
                    name: 'แอร์',
                    icon: { collection: 'FontAwesome', name: 'warning' },
                    status: 'Barcode ชำรุด',
                },
                {
                    key: '100000000000006',
                    name: 'โต๊ะยาว',
                    icon: { collection: 'Entypo', name: 'location' },
                    status: 'มีผู้พบเจอครุภัณฑ์',
                },
                {
                    key: '100000000000007',
                    name: 'เก้าอี้นวม',
                    icon: { collection: 'MaterialCommunityIcons', name: 'file-check' },
                    status: 'ครุภัณฑ์ปกติ',
                },
                {
                    key: '100000000000008',
                    name: 'ปริ้นเตอร์',
                    icon: { collection: 'MaterialCommunityIcons', name: 'file-check' },
                    status: 'ครุภัณฑ์ปกติ',
                }
            ]
        }
    }


    static navigationOptions = {
        title: "รายการครุภัณฑ์ที่ยังไม่ได้ตรวจนับ",
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }


    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <View style={styles.listContainer}>
                            <View style={styles.itemList}>
                                <Text> {item.key} </Text>
                                <Text> {item.name} </Text>
                            </View>
                            <View style={styles.itemList}>
                                <Text> สถานะ </Text>
                                <Icon name={item.icon.name} type={item.icon.collection} />
                                <Text> {item.status} </Text>
                            </View>
                        </View>
                    }
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
  itemList:{
    flexDirection:'row'
  },
  listContainer:{
    flex:1,
    borderStyle: 'solid',
    borderBottomColor:'black',
    borderBottomWidth: 1,
    // backgroundColor:'red'
  }
})
