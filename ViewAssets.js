import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[
                        { id: '1000000001', name: 'โต๊ะ' },
                        { id: '1000000002', name: 'โต๊ะไม้' },
                        { id: '1000000003', name: 'โปรเจคเตอร์' },
                        { id: '1000000004', name: 'เก้าอี้' },
                        { id: '1000000005', name: 'แอร์' },
                        { id: '1000000006', name: 'โต๊ะยาว' },
                        { id: '1000000007', name: 'เก้าอี้นวม' },
                        { id: '1000000008', name: 'ปริ้นเตอร์' },
                    ]}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <SearchBar placeholder="Search" />
                            <Text> </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    borderBottomWidth: '3',
                                    padding: 10,
                                }}>
                                <Text>{item.id}</Text>
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}