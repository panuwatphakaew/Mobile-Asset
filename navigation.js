
import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PageHome from './pageHome';
import UncheckedItem from './uncheckedItem';
import Report from './reportBrokenBarcode';

// -------------- Navigation Stack -----------------
const RootStack = createStackNavigator(
    {
        //all pages for navigation
        Report: Report,
        Home: PageHome,
        UncheckedItem: UncheckedItem,
    },
    {
        //starting page
        initialRouteName: 'UncheckedItem',
    }
);

export default createAppContainer(RootStack);
