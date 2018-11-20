import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#10245f"
                    barStyle="light-content"
                />
                <View style={styles.parentFlex}>
                    <TouchableOpacity onPress={this.props.toggleMenu}>
                        <Icon name="menu" size={26} color="#FFF" />
                    </TouchableOpacity>
                    <View>
                        <Image resizeMode="contain" style={styles.logo} source={require('../../images/logo_menu.png')} />
                    </View>
                    <View style={styles.rightButton} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#153080',
        elevation: 8
    },
    parentFlex: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        height: 35,
        height: 35
    },
    rightButton: {
        width: 30,
        height: 30
    }
});

export default Header;