import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import { Icon } from "native-base";
import Modal from "react-native-modal";
import {
    Col,
    Row,
    Grid
} from "react-native-easy-grid";
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */


export default class Report extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //just a dummy image in base64
            imgURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACWCAYAAACy2zieAAABqElEQVR4nO3OIQHAQBAEsfNv+otWwxQEhOfu7sFP5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegMkDMHkAJg/A5AGYPACTB2DyAEwegHd37wMRXigQ9XEDyAAAAABJRU5ErkJggg==',
            modalVisabled: false
        }
    }


    static navigationOptions = {
        title: "แจ้งบาร์โค้ดชำรุด",
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    selectImage = () => {
        ImagePicker.launchCamera(options, (response) => {
            // Same code as in above section!
            console.log(response)
            if(response.didCancel){
                console.log('cancle')
            }
            else{
                this.setState({
                    imgURI: response.uri,
                });
            }
        });
    }

    viewDetail = (element) => {
        this.setState({ modalVisabled: element });
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'missing');

        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Text>
                    แจ้งบาร์โค้ดชำรุด
                </Text>
                <View style={{ flex: 0, margin: 10, height: 330, borderStyle: 'solid', borderWidth: 2, borderColor: 'black', padding: 10 }}>
                    <Grid>
                        <Row size={100}>
                            <Col size={1} ><Text>รหัส </Text></Col>
                            <Col size={3} ><Text>{item.key} </Text></Col>
                        </Row>
                        <Row size={100}>
                            <Col size={1} ><Text>ชื่อ </Text></Col>
                            <Col size={3} ><Text>{item.name} </Text></Col>
                        </Row>
                        <Row size={800}>
                            <Col size={1} ><Text>รูปภาพ </Text></Col>
                            <Col size={3} >
                                <View style={{ flex: 1, marginBottom: 10 }}>
                                    <Image source={{ uri: this.state.imgURI }} style={{ height: 200 }} resizeMode="contain" />
                                </View>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,

                                    }}
                                />
                            </Col>
                        </Row>
                        <Row size={200}>
                            <Col>

                                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={this.selectImage} style={{ flex: 1, alignItems: "center", justifyContent: 'center', flexDirection: 'row' }}>
                                        <Icon name="image" type="FontAwesome" />
                                        <Text>
                                            แนบรูปภาพ
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </Col>
                            <Col>
                                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => this.viewDetail(item)} style={{ flex: 1, alignItems: "center", justifyContent: 'center', flexDirection: 'row' }}>
                                    <Icon name="send" type="FontAwesome" />
                                        <Text>
                                            แจ้งซ่อม
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </View>

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
                            <Button title="ยืนยัน" onPress={() => { }} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}