import React, { Component } from 'react';
import { View, Animated, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const menuWidth = width * 0.8;

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this._toggle;
        this.translateX = new Animated.Value(-width);
        this._isOpened = false;
    }

    _toggle = () => {
        let toValue = 0;

        if (this._isOpened) toValue = -width;

        Animated.timing(this.translateX, {
            toValue,
            duration: 300
        }).start(() => {
            this._isOpened = !this._isOpened;
        });
    }

    render() {
        return (
            <Animated.View style={[styles.parent, { transform: [{ translateX: this.translateX }] }]}>
                <View style={styles.sideMenu}>

                </View>
                <TouchableWithoutFeedback onPress={this.toggle}>
                    <View style={styles.backdrop}>

                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        position: 'absolute',
        width,
        top: 0,
        bottom: 0,
        flexDirection: 'row'
    },
    sideMenu: {
        flex: 0.8,
        backgroundColor: '#EEE',
        elevation: 8
    },
    backdrop: {
        flex: 0.2
    }
});

export default Menu;