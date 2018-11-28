import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// -------------- Home Screen -----------------
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
                <Button
                    title="Go to Detail Page"
                    onPress={() => this.props.navigation.navigate('UncheckedItem')}
                />
            </View>
        );
    }
}

// -------------- CSS -----------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        marginVertical: 10
    }
});
