import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert, Button } from 'react-native'
import { SearchBar} from 'react-native-elements'
import Modal from 'react-native-modal'

const list = [
    {
        department: 'สำนักวิชาเทคโนโลยีสารสนเทศ'
    },
    {
        department: 'สำนักวิชาพยาบาลศาสตร์'
    },
    {
        department: 'สำนักวิชาแพทยศาสตร์'
    },
    {
        department: 'ส่วนพัสดุ'
    },
    {
        department: 'ส่วนอาคารและสถานที่'
    },
    {
        department: 'ส่วนงานบัญชี'
    },
]

const detail = [
    {
        id: '100000000000009',
        typeItem: 'โต๊ะยาว',
        oldDepart: 'สำนักวิชาแพทยศาสตร์',
        oldPlace: 'ME-205',
    }
]

export default class Sec_transfer_3_8 extends Component {

    constructor() {
        super();
        this.state = {
            listData: list,
            listDetail: detail,
            modalVisible: false,
            keepIndex: 0,
        }
    }

    static navigationOptions = {
        title: 'หน่วยงาน',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    setModalVisible = (index) => {
        this.setState({ keepIndex: index, modalVisible: !this.state.modalVisible })
    }

    confirmDetail = () => {
    }

    render() {
        return (
            <View>
                <SearchBar
                    lightTheme
                    round
                    searchIcon={{ size: 24 }}
                    //onChangeText={someMethod}
                    //onClear={someMethod}
                    placeholder='Type Here...' />

                <FlatList
                    extraData={this.state}
                    data={this.state.listData}
                    renderItem={({ item, index }) => 

                        <TouchableOpacity style={styles.flatStyle} onPress={() => this.setModalVisible(index)} >
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.flatTextStyle}>{item.department}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                >
                </FlatList>

                {<Modal
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    isVisible={this.state.modalVisible}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                    onSwipe={() => this.setState({ modalVisible: false })}
                    swipeDirection="right"
                    style={{ alignItems: 'center' }}
                >
                    <View style={{
                        backgroundColor: 'white', width: '100%'
                        , padding: 10
                    }}>
                        <Text>ยืนยันการสร้างรายการโอนย้าย</Text>
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>รหัส</Text>
                            <Text>{detail[0].id}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>ชื่อ</Text>
                            <Text>{detail[0].typeItem}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>หน่วยงานเดิม</Text>
                            <Text>{detail[0].oldDepart}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>หน่วยงานใหม่</Text>
                            <Text>{list[this.state.keepIndex].department}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>สถานที่ตั้งเดิม</Text>
                            <Text>{detail[0].oldPlace}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Button title="ยกเลิก" color="red" onPress={() => this.setModalVisible(this.state.keepIndex)} />
                            <Button title="ยืนยัน" color="green" onPress={() => this.setModalVisible(this.state.keepIndex)} />
                        </View>
                    </View>
                </Modal>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        //marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    flatTextStyle: {
        marginTop: 5,
        marginBottom: 5,
        //fontWeight: 'bold'
    }
})
