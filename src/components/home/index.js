import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './Header';
import Menu from './Menu';

class HomeScreen extends Component {
    toggleMenu = () => {
        if (this.sideMenu) this.sideMenu.toggle();
    }

    render() {
        return (
            <View style={styles.parent}>
                <Header toggleMenu={this.toggleMenu} />
                <View style={styles.parent}>
                    <Menu ref={sideMenu => this.sideMenu = sideMenu} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1
    }
});

export default HomeScreen;