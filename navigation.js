
import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Login';
import UncheckedItem from './uncheckedItem';
import Report from './reportBrokenBarcode';

// -------------- Navigation Stack -----------------
const RootStack = createStackNavigator(
    {
        //all pages for navigation
        Report: Report,
        Login: Login,
        UncheckedItem: UncheckedItem,
    },
    {
        //starting page
        initialRouteName: 'Login',
    }
);

export default createAppContainer(RootStack);
