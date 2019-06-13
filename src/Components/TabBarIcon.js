import React from 'react';
import { Icon } from 'expo';
import { AntDesign } from "@expo/vector-icons";

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    if(this.props.icon === "ant"){
      return <AntDesign
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    }
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={30}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}