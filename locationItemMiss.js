import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from "native-base";
import Modal from "react-native-modal";
import {
    Col,
    Row,
    Grid
} from "react-native-easy-grid";
export default class UncheckedItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    key: '001',
                    name: 'D1',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '002',
                    name: 'AS2',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '003',
                    name: 'AD1',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '004',
                    name: 'AD2',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '005',
                    name: 'C1',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '006',
                    name: 'C2',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '007',
                    name: 'C3',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
                {
                    key: '008',
                    name: 'C4',
                    room: [{ roomNum: '301'}, {roomNum: '302'},{roomNum: '303'}, {roomNum: '304'},{roomNum: '305'}, {roomNum: '306'},{roomNum: '307'},{roomNum: '308' }],
                 
                },
            ],
            searchText: '',
            modalVisabled: false
        }
        // this.searchData('')
        // this.state = { show: this.state.data }

    }


    static navigationOptions = {
        title: "สถานที่ตั้งครุภัณฑ์ (อาคาร)",
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    searchData = (text) => {
        show = this.state.data.filter((element) => element.key.startsWith(text))
        this.setState({ show: show });
    }

    viewDetail = (element) => {
        console.log(element)
        let temp = JSON.stringify(element.room)
        console.log(temp)
        // this.setState({ modalVisabled: false })
        // this.props.navigation.navigate('Report', { item: JSON.parse(temp) })
        this.props.navigation.navigate('roomItemMiss',  { item: JSON.parse(temp) } )
    }

    render() {
        return (
            <View>
                <View style={{ borderBottomWidth: 2, borderStyle: "solid", borderColor: 'black' }}>
                    <View style={{ flex: 0, paddingHorizontal: 10, margin: 10, height: 40, flexDirection: "row", alignItems: "center", borderStyle: 'solid', borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
                        <Icon name="md-search" type="Ionicons" />
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder='search' value={this.state.searchText}
                                onChangeText={(text) => {
                                    this.setState({ searchText: text })
                                    this.searchData(text)
                                }
                                } />
                        </View>
                    </View>
                </View>
                {/* <Text>{this.state.searchText}</Text> */}
                <FlatList
                    data={this.state.show}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => this.viewDetail(item)}>
                            <View style={styles.listContainer}>
                                <View style={styles.itemList}>
                                    <Text> {item.name} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
               
            </View>

        )
    }
}

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row'
    },
    listContainer: {
        flex: 1,
        borderStyle: 'solid',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5
        // backgroundColor:'red'
    }
})
