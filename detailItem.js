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
                    <Text style={{fontSize:25}}>ตรวจนับครุภัณฑ์</Text>
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
                            <Text style={{paddingTop:15}}>สถานะ{'\t\t\t\t\t'}</Text>
                            <Picker
                            selectedValue={this.state.status}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}>
                            <Picker.Item label="ใช้งานได้ปกติ" value="0" />
                            <Picker.Item label="ไม่จำเป็นต้องใช้" value="1" />
                            <Picker.Item label="ชำรุด" value="2" />
                            </Picker>
                            </View>
                        </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' ,alienItem:'center'}}>
                            <View>
                                <Button title="ยกเลิก" />
                            </View>
                            <View style={{marginLeft:10}}>
                                <Button color="green" title="ยืนยัน" onPress={()=>{this.props.navigation.navigate('itemMiss')}}  />
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
