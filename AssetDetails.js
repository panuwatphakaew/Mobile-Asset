import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AssetsDetails extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 6, margin: 25 }}>
                    <Text style={{ fontWeight: 'bold' }}>ข้อมูลครุภัณฑ์</Text>
                    <Text> </Text>

                    <View style={{ borderWidth: 3, padding: 20 }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>รหัสครุภัณฑ์</Text>
                            <Text>1000000001</Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>ชื่อ</Text>
                            <Text>โต๊ะ</Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>หน่วยงาน</Text>
                            <Text>พัสดุ</Text>
                        </View>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>สถานที่ตั้ง</Text>
                            <Text>AS2-202</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
