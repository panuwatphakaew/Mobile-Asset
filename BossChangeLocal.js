import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'native-base'
import { SearchBar, Button } from 'react-native-elements'
// import { RNCamera } from 'react-native-camera'
import Modal from "react-native-modal";
import {
  Col,
  Row,
  Grid
} from "react-native-easy-grid";

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
      scanResult: 'scanned',
      modalVisabled: false,
      isModalVisabled: false
    }
  }

  static navigationOptions = {
    title: 'การอนุมัติเปลี่ยนสถานที่ใช้งาน',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  getKeyword = (keyword) => {
    this.setState({ search: keyword })
  }

  viewDetail = (element) => {
    this.setState({ modalVisabled: element });
  }

  viewAllDetail = (element) => {
    this.setState({ isModalVisabled: element });
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

            <TouchableOpacity style={styles.flatStyle} onPress={() => this.viewDetail(item)}>
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
        <TouchableOpacity >
          <View style={{ padding: 10 }}>
            <Button onPress={() => this.viewAllDetail(true)}
              icon={{
                name: 'edit',
                size: 15,
                type: 'FontAwesome'
              }}
              title='สร้างรายการ'
            />
          </View>
        </TouchableOpacity>

        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={(this.state.modalVisabled) ? true : false}
          onBackdropPress={() => this.setState({ modalVisabled: false })}
          style={{ alignItems: 'center' }}
        >
          <View style={{ backgroundColor: 'white', padding: 10, borderStyle: 'solid', width: 300, borderWidth: 2, borderColor: 'black' }}>
            <Text>ยืนยันการอนุมัติเปลี่ยนสถานที่ใช้งาน</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                margin: 7
              }}
            />
            <View style={{ flex: 0, height: 120 }}>

              <Grid>
                <Row>
                  <Col><Text>รหัส </Text></Col>
                  <Col><Text>{`10000000000014`} </Text></Col>
                </Row>
                <Row>
                  <Col><Text>ชื่อ </Text></Col>
                  <Col><Text>{`เก้าอี้นวม`} </Text></Col>
                </Row>
                <Row>
                  <Col><Text>หน่วยงาน </Text></Col>
                  <Col><Text>{`ส่วนพัสดุ`} </Text></Col>
                </Row>
                <Row>
                  <Col><Text>สถานที่ตั้งเดิม</Text></Col>
                  <Col><Text>{`AS2-202`} </Text></Col>
                </Row>
                <Row>
                  <Col><Text>สถานที่ตั้งใหม่</Text></Col>
                  <Col><Text>{`D1-306`} </Text></Col>
                </Row>
              </Grid>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button title="กลับ" onPress={() => this.setState({ modalVisabled: false })} />
              <Button title="ไม่อนุมัติ" />
              <Button title="ยืนยัน" />
            </View>
          </View>
        </Modal>

        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={(this.state.isModalVisabled) ? true : false}
          onBackdropPress={() => this.setState({ isModalVisabled: false })}
          style={{ alignItems: 'center' }}
        >
          <View style={{ backgroundColor: 'white', padding: 10, borderStyle: 'solid', width: 300, borderWidth: 2, borderColor: 'black' }}>
            <Text>ยืนยันการอนุมัติเปลี่ยนสถานที่ใช้งานทั้งหมด</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                margin: 7
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button title="ยกเลิก" onPress={() => this.setState({ isModalVisabled: false })} />
              <Button title="ยืนยัน" />
            </View>
          </View>
        </Modal>

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
