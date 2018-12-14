import React, { Component } from "react";
import { Text, View, FlatList,TouchableOpacity,TextInput } from "react-native";
import { Icon } from "native-base";
// import { SearchBar } from 'react-native-elements';

export default class HelloWorldApp extends Component {
    static navigationOptions = {
        title: 'ดูข้อมูลครุภัณฑ์',
        headerStyle: { //They can be customized later.
            backgroundColor: 'orange', 
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
  render() {
    return (
      <View style={{ flex: 1 }}>
       <View style={{ borderBottomWidth: 2, borderStyle: "solid", borderColor: 'black' }}>
                    <View style={{ flex: 0, paddingHorizontal: 10, margin: 10, height: 40, flexDirection: "row", alignItems: "center", borderStyle: 'solid', borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
                        <Icon name="md-search" type="Ionicons" />
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder='search' 
                               
                                 />
                        </View>
                    </View>
                    </View>
        <FlatList
          data={[{ key: "0",id:'100000000001',name:'โต๊ะ' },
          { key: "1",id:'100000000001',name:'โต๊ะ' },
          { key: "2",id:'100000000001',name:'โต๊ะไม้' },
          { key: "3",id:'100000000001',name:'โปรเจคเตอร์' },
          { key: "4",id:'100000000001',name:'เก้าอี้' },
          { key: "5",id:'100000000001',name:'แอร์' },
          { key: "6",id:'100000000001',name:'โต๊ะยาว' },
          { key: "7",id:'100000000001',name:'เก้าอี้นวม' },
          { key: "8",id:'100000000001',name:'xปริ้นเตอร์' },
          ]}
          renderItem={({ item }) => 
          <TouchableOpacity style = {{flexDirection: 'row'}} onPress={() => this.props.navigation.navigate('AssetDetails')}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              
          </TouchableOpacity>
        
        }
        />
      </View>
    );
  }
}
