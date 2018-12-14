import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base'
import Modal from "react-native-modal";
import { createStackNavigator } from 'react-navigation';

export default class ProjectMob extends Component {
    //header bar details (Cannot be shown if the main screen file is missing!!!)
    static navigationOptions = {
        title: 'จัดการผู้มีสิทธิ์อนุมัติ',
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
            {key: 'Pongsakorn', text: 'พงศกร ทองผางาม', id: '4862489456', icon: <Icon name="ios-trash" type="Ionicons" style={styles.icon}></Icon> },
            {key: 'Manussanan', text: 'มนัสสนันท์ แก้งทอง', id: '4861548945', icon: <Icon name="ios-trash" type="Ionicons" style={styles.icon}></Icon> }            
        ]
        //<Icon name="timer-sand" type="MaterialCommunityIcons" style={styles.icon}></Icon>
        //<Icon name="done-all" type="MaterialIcons" style={styles.icon}></Icon>
        //<Icon name="account-multiple-plus" type="MaterialCommunityIcons" style={styles.icon}></Icon>
        //<Icon name="checkcircle" type="AntDesign" style={styles.icon}></Icon>
        //<Icon name="closecircle" type="AntDesign" style={styles.icon}></Icon>     
        //<Icon name="ios-trash" type="Ionicons" style={styles.icon}></Icon>
        this.state = {
           isModalVisible: false,           
           flatlistidx: 0
        }
    }

    toggleModal = (index) => {        
        this.setState({flatlistidx: index, isModalVisible: !this.state.isModalVisible});
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
                        <View style={styles.rowflat}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Text>{item.id}</Text>
                            <Text style={{marginHorizontal: 80}}>{item.text}</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.toggleModal(index)}>
                            <Icon style={{marginHorizontal: 10}}>{item.icon}</Icon></TouchableOpacity>
                        </View>                                                
                    }
                />
                <Modal
                    animationIn="fadeIn" 
                    animationOut="fadeOut" 
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    onSwipe={() => this.setState({ isModalVisible: false })}
                    swipeDirection="right"
                    style={{ alignItems: 'center' }}
                >
                    <View style={{ backgroundColor: 'beige', width: '100%', padding: 10 }}>                                                
                        <Text>ยืนยันการลบผู้มีสิทธิ์อนุมัติ</Text>
                        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                        <View style={{alignItems: 'center'}}>
                        <Text>ยืนยันให้ {this.list[this.state.flatlistidx].text} ยกเลิกสิทธิ์อนุมัติ</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Button title="ยกเลิก" onPress={this.setState({isModalVisible: false})} />                        
                        <Button title="ยืนยัน" color="green" onPress={this.toggleModal(this.state.flatlistidx)} />
                        </View>
                    </View>
                </Modal>
                </View>
                <View style={{flex: 0}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>
                    <View style={styles.iconbutton}>
                    <Icon name="account-multiple-plus" type="MaterialCommunityIcons" style={[styles.icon,{color:'white'}]}></Icon>                    
                    <Text style={{marginHorizontal: 10, color: 'white'}}>เพิ่มผู้มีิสิทธิ์อนุมัติ</Text>
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
        justifyContent: 'space-between',
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
