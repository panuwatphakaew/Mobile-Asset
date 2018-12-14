import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity ,Picker} from 'react-native'
import { Icon  ,Card, CardItem, Body} from "native-base";
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
            searchText: '',
            modalVisabled: false,
            status:''
        }
        // this.searchData('')
        // this.state = { show: this.state.data }

    }


    static navigationOptions = {
        title: "ตรวจนับครุภัณฑ์",
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
                <View style={{ margin:15}}>
                    <Text style={{fontSize:25}}>แจ้งตำแหน่งให้แก่เข้าของครุภัณฑ์</Text>
                </View>
                <View style={{padding:20}}>
                    <Card >
                    <CardItem>
                        <Body>
                            <View style={{flexDirection:"row",marginTop:5}}>
                            <Text>รหัส{'\t\t\t\t\t\t\t'}</Text>
                            <Text>10000000000000014</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                            <Text>ชื่อ{'\t\t\t\t\t\t\t\t'}</Text>
                            <Text>เก้าอี้นวม</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                            <Text>สถานที่ตั้ง{'\t\t\t'}</Text>
                            <Text>AS2-202</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                            <Text>หน่วยงาน{'\t\t\t'}</Text>
                            <Text>พัสดุ</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                            <Text >สถานะ{'\t\t\t\t\t'}</Text>
                            <Text>ครุภัณฑ์ไม่ได้อยู่ในทะเบียนของหน่วยงาน</Text>
                            </View>
                        </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' ,alienItem:'center'}}>
                            <View>
                                <Button onPress={()=>{this.props.navigation.navigate('Locationitemmiss')}} title="แจ้งตำแหน่ง" />
                            </View>
                            
                                
                            </View>
                        </CardItem>
                    </Card>
                </View>
                
               
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
