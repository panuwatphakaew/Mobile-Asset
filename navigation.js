
import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Login';
import UncheckedItem from './uncheckedItem';
import Report from './reportBrokenBarcode';
import locationitemmiss from './locationItemMiss';
import roomItemMiss from './roomItemMiss';
import detailItem from './detailItem';
import itemMiss from './itemMiss';


// -------------- Navigation Stack -----------------
const RootStack = createStackNavigator(
    {
        //all pages for navigation
        Report: Report,
        Login: Login,
        UncheckedItem: UncheckedItem,
        Locationitemmiss:locationitemmiss,
        roomItemMiss:roomItemMiss,
        detailItem:detailItem,
        itemMiss:itemMiss,
    },
    {
        //starting page
        initialRouteName: 'detailItem',
    }
);

export default createAppContainer(RootStack);
