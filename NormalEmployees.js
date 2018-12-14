import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class NormalEmployee extends Component {
  static navigationOptions = {
    header:null
}
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>

        <View style={{ flex: 1, flexDirection: 'row', borderWidth: 3}}>
          <Image source={require('./assets/img/icon.png')} style={{width: 50, height: 50, margin: 15}}/>

          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text>ชื่อผู้ใช้งาน       ณัฐกานต์ เอี่ยมอ่อน</Text>
            <Text> </Text>
            <Text>หน่วยงาน        สำนักเทคโนโลยีสารสนเทศ</Text>
          </View>

        </View>

        <View style={{flex: 6, margin: 25}}>
          <Text>ข้อมูลครุภัณฑ์ของหน่วยงาน</Text>
          <Text> </Text>
          
          <View style={{borderWidth: 3, padding: 20}}>
            <Text>จำนวนครุภัณฑ์ที่เป็นเจ้าของ</Text>
            <Text> </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'right'}}>4123 รายการ</Text>
            <Text>____________________________________________</Text>
            <Text> </Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon type='FontAwesome' name='qrcode'/>
                <Text>Scan Code</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Icon type='EvilIcons' name='search'/>
                <Text>ดูรายการทั้งหมด</Text>
              </View>
              
            </View>

          </View>

        </View>

      </View>
      

    );
  }
}

const styles = StyleSheet.create({})