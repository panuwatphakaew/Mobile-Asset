
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

import BossAddpremit from "./BossAddpremit";
import BossChangeLocal from "./BossChangeLocal";
import BossGetApartment from "./BossGetApartment";
import Bosscomfim from "./Bosscomfim";
import Bosshome from "./Bosshome";
import Bosslist from "./Bosslist";
import Bosspremisstion from "./Bosspremisstion";
import secretaryhome from "./secretaryhome";
import secretaryselect from "./secretaryselect";
import changelocationMain from "./changelocationMain";
import changecreat from "./changecreat";
import Getitem from "./Getitem";
import BossSend from "./BossSend";
import Bossitems from "./Bossitems";

import Staffhome from "./Staffhome";


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
        BossAddpremit:BossAddpremit,
        BossChangeLocal:BossChangeLocal,
        BossGetApartment:BossGetApartment,
        Bosscomfim:Bosscomfim,
        Bosshome:Bosshome,
        Bosslist:Bosslist,
        Bosspremisstion:Bosspremisstion,
        secretaryhome:secretaryhome,
        secretaryselect:secretaryselect,
        changelocationMain:changelocationMain,
        changecreat:changecreat,
        Getitem:Getitem,
        BossSend:BossSend,
        Bossitems:Bossitems,
        Staffhome:Staffhome,
    },
    {
        //starting page
        initialRouteName: 'Login',
    }
);

export default createAppContainer(RootStack);
