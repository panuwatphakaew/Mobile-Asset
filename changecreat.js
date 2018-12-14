import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import {Icon} from 'native-base'
import {Card, Divider} from 'react-native-elements'

const list = [
    {
        id: '100000000000009',
        typeItem: 'โต๊ะยาว',
        departOwner: 'สำนักวิชาแพทยศาสตร์',
        oldPlace: 'ME-205',
    },
]


export default class Sec_transfer_3_7 extends Component {

    constructor() {
        super();
        this.state = {
            listData: list
        }
    }

    static navigationOptions = {
        title: 'โอนย้ายระหว่างหน่วยงาน',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Text style={{marginLeft: 20}}>โอนย้ายระหว่างหน่วยงาน</Text>
                <Card>
                    {
                        list.map((u, i) => {
                            return (
                                <View key={i} style={{flexDirection: 'column', paddingBottom: 10}}>
                                    <Text>รหัส                    {u.id}</Text>
                                    <Text>ชื่อ                      {u.typeItem}</Text>
                                    <Text>หน่วยงานเดิม    {u.departOwner}</Text>
                                    <Text>สถานที่ดั้งเดิม    {u.oldPlace}</Text>
                                </View>
                            );
                        })

                    }
                    <Divider></Divider>
                    <TouchableOpacity style={{flexDirection: 'row' , justifyContent: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('Locationitemmiss')}>
                        <Icon name='location-pin' type='Entypo'/>
                        <Text style={{paddingLeft: 5, paddingTop: 4}}>เลือกสถานที่ตั้ง</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
