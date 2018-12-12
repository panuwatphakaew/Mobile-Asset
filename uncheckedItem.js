import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from "native-base";
import Modal from "react-native-modal";
import {
    Col,
    Row,
    Grid
} from "react-native-easy-grid";
export default class UncheckedItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    key: '100000000000004',
                    name: 'เก้าอี้',
                    icon: { collection: 'Entypo', name: 'tools' },
                    status: 'ซ่อม Barcode แล้ว',
                },
                {
                    key: '100000000000005',
                    name: 'แอร์',
                    icon: { collection: 'FontAwesome', name: 'warning' },
                    status: 'Barcode ชำรุด',
                },
                {
                    key: '100000000000006',
                    name: 'โต๊ะยาว',
                    icon: { collection: 'Entypo', name: 'location' },
                    status: 'มีผู้พบเจอครุภัณฑ์',
                },
                {
                    key: '100000000000007',
                    name: 'เก้าอี้นวม',
                    icon: { collection: 'MaterialCommunityIcons', name: 'file-check' },
                    status: 'ครุภัณฑ์ปกติ',
                },
                {
                    key: '100000000000008',
                    name: 'ปริ้นเตอร์',
                    icon: { collection: 'MaterialCommunityIcons', name: 'file-check' },
                    status: 'ครุภัณฑ์ปกติ',
                }
            ],
            searchText: '',
            modalVisabled: false
        }
        // this.searchData('')
        // this.state = { show: this.state.data }

    }


    static navigationOptions = {
        title: "รายการครุภัณฑ์ที่ยังไม่ได้ตรวจนับ",
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    searchData = (text) => {
        show = this.state.data.filter((element) => element.key.startsWith(text))
        this.setState({ show: show });
    }

    viewDetail = (element) => {
        this.setState({ modalVisabled: element });
    }

    render() {
        return (
            <View>
                <View style={{ borderBottomWidth: 2, borderStyle: "solid", borderColor: 'black' }}>
                    <View style={{ flex: 0, paddingHorizontal: 10, margin: 10, height: 40, flexDirection: "row", alignItems: "center", borderStyle: 'solid', borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
                        <Icon name="md-search" type="Ionicons" />
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder='search' value={this.state.searchText}
                                onChangeText={(text) => {
                                    this.setState({ searchText: text })
                                    this.searchData(text)
                                }
                                } />
                        </View>
                    </View>
                </View>
                {/* <Text>{this.state.searchText}</Text> */}
                <FlatList
                    data={this.state.show}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => this.viewDetail(item)}>
                            <View style={styles.listContainer}>
                                <View style={styles.itemList}>
                                    <Text> {item.key} </Text>
                                    <Text> {item.name} </Text>
                                </View>
                                <View style={styles.itemList}>
                                    <Text> สถานะ </Text>
                                    <Icon name={item.icon.name} type={item.icon.collection} />
                                    <Text> {item.status} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
                
                <Modal
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    isVisible={(this.state.modalVisabled) ? true : false}
                    onBackdropPress={() => this.setState({ modalVisabled: false })}
                    style={{ alignItems: 'center' }}
                >
                    <View style={{ backgroundColor: 'white', padding: 10, borderStyle: 'solid', width: 300, borderWidth: 2, borderColor: 'black' }}>
                        <Text>ข้อมูลครุภัณฑ์</Text>
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
                                    <Col><Text>{this.state.modalVisabled.key} </Text></Col>
                                </Row>
                                <Row>
                                    <Col><Text>ชื่อ </Text></Col>
                                    <Col><Text>{this.state.modalVisabled.name} </Text></Col>
                                </Row>
                                <Row>
                                    <Col><Text>หน่วยงาน </Text></Col>
                                    <Col><Text>{this.state.modalVisabled.name} </Text></Col>
                                </Row>
                                <Row>
                                    <Col><Text>สถานที่ตั้ง </Text></Col>
                                    <Col><Text>{this.state.modalVisabled.name} </Text></Col>
                                </Row>
                                <Row>
                                    <Col><Text>สถานะ </Text></Col>
                                    <Col><Text>{this.state.modalVisabled.status} </Text></Col>
                                </Row>
                            </Grid>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Button title="ยกเลิก" onPress={() => this.setState({ modalVisabled: false })} />
                            <Button title="แจ้ง Barcode ชำรุด" onPress={() => {
                                temp = JSON.stringify(this.state.modalVisabled)
                                this.setState({ modalVisabled: false })
                                this.props.navigation.navigate('Report', { item: JSON.parse(temp) })
                            }} />
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row'
    },
    listContainer: {
        flex: 1,
        borderStyle: 'solid',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5
        // backgroundColor:'red'
    }
})
