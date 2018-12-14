import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TextInput, Image, Picker, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base'


export default class ProjectMob extends Component {
    //header bar details (Cannot be shown if the main screen file is missing!!!)
    static navigationOptions = {
        title: 'การอนุมัติครุภัณฑ์',
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
            {key: 'Transfer', text: 'โอนย้ายระหว่างหน่วยงาน', icon: <Icon name="account-switch" type="MaterialCommunityIcons" style={styles.icon}></Icon>},
            {key: 'Change', text: 'เปลี่ยนสถานที่ใช้งาน', icon: <Icon name="swap-vertical-circle" type="MaterialIcons" style={styles.icon}></Icon> },
            {key: 'Receive', text: 'รับโอนย้ายระหว่างหน่วยงาน', icon: <Icon name="move-to-inbox" type="MaterialIcons" style={styles.icon}></Icon> },
            {key: 'Repair', text: 'ครุภัณฑ์ส่งซ่อม', icon: <Icon name="wrench" type="Foundation" style={styles.icon}></Icon> },
        ]
    }

    navi = (index) => {
        switch(index) {
        case 0: this.props.navigation.navigate('BossSend'); break;
        case 1: this.props.navigation.navigate('BossChangeLocal'); break;
        case 2: this.props.navigation.navigate('BossGetApartment'); break;
        case 3: this.props.navigation.navigate('Bossitems'); break;
        }
    } 

    render() {
        return(
            <View style={styles.container}>                
                <FlatList
                    data={this.list}
                    renderItem={({item,index}) =>
                        <TouchableOpacity onPress={() => this.navi(index)}>
                        <View style={styles.row}>
                            <Text>{item.text}</Text>
                            <Icon>{item.icon}</Icon>
                        </View>
                        </TouchableOpacity>
                    }
                />
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        color: 'black',
        fontSize: 20
    }
});
