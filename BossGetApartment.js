import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TextInput, Image, Picker, FlatList, Alert, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base'
import Modal from "react-native-modal";


export default class ProjectMob extends Component {
    //header bar details (Cannot be shown if the main screen file is missing!!!)
    static navigationOptions = {
        title: 'การอนุมัติรับโอนย้ายระหว่างหน่วยงาน',
        headerStyle: { //They can be customized later.
            backgroundColor: 'orange', 
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    constructor(props) {
        super(props)
        this.list = [
            {key: 'Chair', text: 'เก้าอี้', id: '100000000000004', status: 'รออนุมัติ', icon: <Icon name="timer-sand" type="MaterialCommunityIcons" style={styles.icon}></Icon>},
            {key: 'Air', text: 'แอร์', id: '100000000000005', status: 'อนุมัติ', icon: <Icon name="ios-checkmark-circle" type="Ionicons" style={styles.icon}></Icon> },
            {key: 'Printer', text: 'ปริ้นเตอร์', id: '100000000000008',status: 'ไม่อนุมัติ',icon: <Icon name="ios-close-circle" type="Ionicons" style={styles.icon}></Icon> },            
        ]
        //<Icon name="timer-sand" type="MaterialCommunityIcons" style={styles.icon}></Icon>
        //<Icon name="done-all" type="MaterialIcons" style={styles.icon}></Icon>
        //<Icon name="account-multiple-plus" type="MaterialCommunityIcons" style={styles.icon}></Icon>
        //<Icon name="checkcircle" type="AntDesign" style={styles.icon}></Icon>
        //<Icon name="closecircle" type="AntDesign" style={styles.icon}></Icon>     
        //<Icon name="ios-trash" type="Ionicons" style={styles.icon}></Icon>
        this.state = {
           isModalVisible1: false,
           isModalVisible2: false,
           flatlistidx: 0
        }
    }

    toggleModal1 = (index) => {        
        this.setState({flatlistidx: index,isModalVisible1: !this.state.isModalVisible1});
    }

    toggleModal2 = () => {
        this.setState({isModalVisible2: !this.state.isModalVisible2});
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="ios-search" type="Ionicons" style={styles.icon}></Icon>
                <TextInput style={styles.input} placeholder="Search"></TextInput>                
                </View>
                <FlatList
                    data={this.list}
                    renderItem={({item, index}) =>
                        <TouchableOpacity onPress={() => this.toggleModal1(index)}>
                        <View style={styles.rowflat}>
                            <Text>{item.id}</Text>
                            <Text>{item.text}</Text>
                        </View>
                        <View style={styles.rowflat2}>
                            <Text>สถานะ</Text>
                            <Icon style={{marginHorizontal: 10}}>{item.icon}</Icon>
                            <Text style={{marginHorizontal: 10}}>{item.status}</Text>
                        </View>
                        </TouchableOpacity>
                    }
                />
                <Modal
                    animationIn="fadeIn" 
                    animationOut="fadeOut" 
                    isVisible={this.state.isModalVisible1}
                    onBackdropPress={() => this.setState({ isModalVisible1: false })}
                    onSwipe={() => this.setState({ isModalVisible1: false })}
                    swipeDirection="right"
                    style={{ alignItems: 'center' }}
                >
                    <View style={{ backgroundColor: 'beige', width: '100%'
, padding: 10 }}>                                                
                        <Text>ยืนยันการอนุมัติรับโอนย้ายระหว่างหน่วยงาน</Text>
                        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>รหัส</Text>
                            <Text>{this.list[this.state.flatlistidx].id}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>ชื่อ</Text>
                            <Text>{this.list[this.state.flatlistidx].text}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>หน่วยงานเดิม</Text>
                            <Text>ส่วนพัสดุ</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>หน่วยงานใหม่</Text>
                            <Text>สำนักวิชาเทคโนโลยีสารสนเทศ</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>สถานที่ตั้งเดิม</Text>
                            <Text>AS2-202</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>สถานที่ตั้งใหม่</Text>
                            <Text>D1-306</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Button title="กลับ" onPress={this.setState({isModalVisible1: false})} />
                        <Button title="ไม่อนุมัติ" color="red" onPress={() => this.toggleModal1(this.state.flatlistidx)} />
                        <Button title="ยืนยัน" color="green" onPress={() => this.toggleModal1(this.state.flatlistidx)} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationIn="fadeIn" 
                    animationOut="fadeOut" 
                    isVisible={this.state.isModalVisible2}
                    onBackdropPress={() => this.setState({ isModalVisible2: false })}
                    onSwipe={() => this.setState({ isModalVisible2: false })}
                    swipeDirection="right"
                    style={{ alignItems: 'center' }}
                >
                    <View style={{ backgroundColor: 'beige', width: '100%'
, padding: 10 }}>                                                
                        <Text>ยืนยันการอนุมัติรับโอนย้ายทั้งหมด</Text>
                        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                        <View style={{alignItems: 'center'}}>
                        <Text>ยืนยันการอนุมัติรายการทั้งหมด</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Button title="ยกเลิก" onPress={this.toggleModal2} />                        
                        <Button title="ยืนยัน" color="green" onPress={this.toggleModal2} />
                        </View>
                    </View>
                </Modal>
                </View>
                <View style={{flex: 0}}>
                    <TouchableOpacity onPress={this.toggleModal2}>
                    <View style={styles.iconbutton}>
                    <Icon name="done-all" type="MaterialIcons" style={[styles.icon,{color:'white'}]}></Icon>
                    <Text style={{marginHorizontal: 10, color: 'white'}}>อนุมัติทั้งหมด</Text>
                    </View>
                    </TouchableOpacity>                    
                </View>
            </View>            
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10, 
        //alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18
    },
    input: {
        width: '100%'
    },
    rowflat: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowflat2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',        
    },
    icon: {
        color: 'black',
        fontSize: 20
    },
    iconbutton: {
        flexDirection: 'row',
        justifyContent: 'center',        
        backgroundColor: 'green',        
    }
});
