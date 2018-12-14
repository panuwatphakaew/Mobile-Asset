
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
import AssetDetails from './AssetDetails';
import ViewAssets from './ViewAssets';

import NormalEmployees from './NormalEmployees';
import detailTransferBetween from "./detailTransferBetween";
import selectDepartment from "./selectDepartment";
import transferBetweenDepartment from "./transferBetweenDepartment";
import comfirmItem from "./comfirmItem";


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
        AssetDetails:AssetDetails,
        ViewAssets:ViewAssets,
        NormalEmployees,NormalEmployees,
        detailTransferBetween:detailTransferBetween,
        selectDepartment:selectDepartment,
        transferBetweenDepartment:transferBetweenDepartment,
        comfirmItem:comfirmItem,
        
    },
    {
        //starting page
        initialRouteName: 'Login',
    }
);

export default createAppContainer(RootStack);
