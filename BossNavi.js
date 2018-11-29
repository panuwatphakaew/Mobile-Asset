import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import PageWelcome from './Boss4';
import PageMain from './Boss4.4';
import PageTransfer from './Boss4.5-7';
import PageMove from './Boss4.8-10';
import PageReceive from './Boss4.11-13';
import PageRepair from './Boss4.14-16';
import PageAdd from './Boss4.18-19'
import PageManage from './Boss4.17,20'
// -------------- Navigation Stack -----------------
const RootStack = createStackNavigator(
    {
        //all pages for navigation
        Welcome: PageWelcome,
        Main: PageMain,
        Transfer: PageTransfer,
        Move: PageMove,
        Receive: PageReceive,
        Repair: PageRepair,
        Manage: PageManage,
        Add: PageAdd
    },
    {
        //starting page
        initialRouteName: 'Welcome',
    }
);

// -------------- Default Class: start here -----------------
export default class NavigationExample extends Component {
    render() {
        return <RootStack />;
    }
}
