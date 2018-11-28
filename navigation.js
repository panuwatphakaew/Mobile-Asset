
import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PageHome from './pageHome';
import UncheckedItem from './uncheckedItem';

// -------------- Navigation Stack -----------------
const RootStack = createStackNavigator(
    {
        //all pages for navigation
        Home: PageHome,
        UncheckedItem: UncheckedItem,
    },
    {
        //starting page
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootStack);
