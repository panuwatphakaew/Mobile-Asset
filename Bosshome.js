import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Alert, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation';

export default class ProjectMob extends Component {
    //header bar details (Cannot be shown if the main screen file is missing!!!)
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)        
        //<Icon name="timer-sand" type="MaterialCommunityIcons" style={styles.icon}></Icon>
        //<Icon name="done-all" type="MaterialIcons" style={styles.icon}></Icon>
        //<Icon name="account-multiple-plus" type="MaterialCommunityIcons" style={styles.icon}></Icon>
        //<Icon name="checkcircle" type="AntDesign" style={styles.icon}></Icon>
        //<Icon name="closecircle" type="AntDesign" style={styles.icon}></Icon>     
        //<Icon name="ios-trash" type="Ionicons" style={styles.icon}></Icon>
        this.img = require('./assets/img/icon.png') //Depends on the actual location of each machine!!!
        this.state = {
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{borderTopColor: 'black',borderTopWidth: 1,}}/>
                <View style={styles.header}>
                    <Image source={this.img} style={{width: 50, height: 50}}></Image>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', marginHorizontal: 20}}>
                    <Text>ชื่อผู้ใช้งาน</Text>
                    <Text>หน่วยงาน</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                    <Text>ณัฐกานต์ เอี่ยมอ่อน</Text>
                    <Text>สำนักวิชาเทคโนโลยีสารสนเทศ</Text>
                    </View>
                    </View>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <Text style={{fontWeight: 'bold'}}>ข้อมูลครุภัณฑ์ของหน่วยงาน</Text>
                <View style={{borderBottomWidth: 1, borderLeftWidth: 1, borderRightColor: 1, borderTopWidth: 1}}>
                <Text>จำนวนครุภัณฑ์ที่เป็นเจ้าของ</Text>
                <Text style={{textAlign: 'right'}}>152 รายการ</Text>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={styles.rowflat}>
                <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <Icon name="qrcode-scan" type="MaterialCommunityIcons" style={styles.icon} onPress={() => this.props.navigation.navigate('AssetDetails')}></Icon>
                <Text>สแกน Code</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewAssets')}  >
                <View style={{flexDirection: 'row'}}>
                <Icon name="find-in-page" type="MaterialIcons" style={styles.icon}></Icon>
                <Text>ดูรายการทั้งหมด</Text>
                </View>
                </TouchableOpacity>
                </View>
                </View>                
                <Text style={{fontWeight: 'bold'}}>การอนุมัติครุภัณฑ์</Text>
                <View style={{borderBottomWidth: 1, borderLeftWidth: 1, borderRightColor: 1, borderTopWidth: 1}}>
                <Text>รายการที่ยังไม่ได้อนุมัติทั้งหมด</Text>
                <Text style={{textAlign: 'right'}}>5 รายการ</Text>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}/>
                <View style={styles.rowflat}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bosspremisstion')}>
                <View style={{flexDirection: 'row'}}>
                <Icon name="account-edit" type="MaterialCommunityIcons" style={styles.icon}></Icon>
                <Text>จัดการผู้มีสิทธิ์อนุมัติ</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bosscomfim')}>
                <View style={{flexDirection: 'row'}}>
                <Icon name="find-in-page" type="MaterialIcons" style={styles.icon}></Icon>
                <Text>ดูรายการทั้งหมด</Text>
                </View>
                </TouchableOpacity>
                </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',        
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
