import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'native-base'
import { SearchBar, Button } from 'react-native-elements'
// import { RNCamera } from 'react-native-camera'

const list = [
  {
    id: '100000000000004',
    typeItem: 'เก้าอี้',
    status: 'รอหัวหน้าอนุมัติ',
    iconType: 'MaterialCommunityIcons',
    iconName: 'timer-sand'
  },
  {
    id: '100000000000005',
    typeItem: 'แอร์',
    status: 'หัวหน้าปลายทางอนุมัติ',
    iconType: 'Ionicons',
    iconName: 'checkmark-circle'
  },
  {
    id: '100000000000008',
    typeItem: 'ปริ้นท์เตอร์',
    status: 'ไม่อนุมัติ',
    iconType: 'Ionicons',
    iconName: 'close-circle'
  }
]

export default class Sec_transfer_3_5 extends Component {

  constructor() {
    super();
    this.state = {
      listData: list,
      scanResult: 'scanned'
    }
  }

  static navigationOptions = {
    title: 'การเปลี่ยนสถานที่ใช้งาน',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  getKeyword = (keyword) => {
    this.setState({ search: keyword })
  }

 

  render() {
    return (
      <View style={{ flex: 1, }}>

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

            <TouchableOpacity style={styles.flatStyle} onPress={() => this.props.navigation.navigate('Bosslist')}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.flatTextStyle}>{item.id}               {item.typeItem}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ paddingTop: 10 }}>สถานะ          </Text>
                  <Icon name={item.iconName} type={item.iconType} />
                  <Text style={{ paddingTop: 10 }}>    {item.status}</Text>
                </View>

              </View>
            </TouchableOpacity>
          }
        >
        </FlatList>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('changecreat')}>
          <View style={{ padding: 10 }}>
          <Button
            icon={{
              name: 'edit',
              size: 15,
              type: 'FontAwesome'
            }}
            title='สร้างรายการ'
          />
        </View>
          </TouchableOpacity>

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
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  flatTextStyle: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})
