import React from 'react';
// import { StyleSheet, Text, View, Modal } from 'react-native';
import { Input, Button, ButtonGroup } from 'react-native-elements';
import { Auth } from 'aws-amplify';

// Testing
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const { Value, event, block, cond, eq, set, Clock, startClock, stopClock, debug, timing, clockRunning, interpolate, Extrapolate, concat } = Animated

// Testing as well. --
function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);

}
// -- End of test code


export default class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            confirmationCode: '',
            modalVisible: false,
            selectedIndex: 0,
        };

        this.buttons = ['Sign Up', 'Sign In']
        // Test Code Below -- 
        this.buttonOpacity = new Value(1)

        this.onStateChange = Animated.event([{
            nativeEvent: ({ state }) => block([
                cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)))
            ])
        }]);

        this.onCloseState = event([{
            nativeEvent: ({ state }) => block([
                cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 0, 1)))
            ])
        }]);

        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            Extrapolate: Extrapolate.CLAMP
        });

        this.bgY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-height / 3 - 50, 0],
            Extrapolate: Extrapolate.CLAMP
        });
        this.TextInputZindex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
            Extrapolate: Extrapolate.CLAMP
        });
        this.TextInputY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [0, 100],
            Extrapolate: Extrapolate.CLAMP
        });
        this.TextInputOpacity = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            Extrapolate: Extrapolate.CLAMP
        });
        this.rotateCross = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [180, 360],
            Extrapolate: Extrapolate.CLAMP
        });

        // -- Test Code Above 
    }

    updateIndex = () => {
        // If selectedIndex was 0, make it 1.  If it was 1, make it 0
        const newIndex = this.state.selectedIndex === 0 ? 1 : 0
        this.setState({ selectedIndex: newIndex })
    }

    handleSignIn = () => {
        const { email, password } = this.state;
        Auth.signIn(email, password)
            // If we are successful, navigate to Home screen
            .then(user => this.props.navigation.navigate('Home'))
            // On failure, display error in console
            .catch(err => console.log(err));
    }

    handleSignUp = () => {
        // alert(JSON.stringify(this.state));
        const { email, password, confirmPassword } = this.state;
        // Make sure passwords match
        if (password === confirmPassword) {
            Auth.signUp({
                username: email,
                password,
                attributes: { email },
            })
                // On success, show Confirmation Code Modal
                .then(() => this.setState({ modalVisible: true }))
                // On failure, display error in console
                .catch(err => console.log(err));
        } else {
            alert('Passwords do not match.');
        }
    }
    handleConfirmationCode = () => {
        const { email, confirmationCode } = this.state;
        Auth.confirmSignUp(email, confirmationCode, {})
            .then(() => {
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('Home')
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
                <Animated.View style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: this.bgY }] }}>
                    <Svg height={height + 50} width={width} >
                        <ClipPath id="clip" >
                            <Circle r={height + 50} cx={width / 2} />
                        </ClipPath>
                        <Image
                            href={require('../assets/images/bg.jpg')}
                            height={height + 50}
                            width={width}
                            preserveAspectRatio="xMidYMid slice"
                            clipPath='url(#clip)'
                        />
                    </Svg>
                </Animated.View>

                <View style={{ height: height / 3, justifyContent: 'center' }}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange} >
                        <Animated.View style={{ ...styles.button, opacity: this.buttonOpacity, transform: [{ translateY: this.buttonY }] }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }} >SIGN IN</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    {/* <Animated.View style={{ ...styles.button, backgroundColor: '#2E71DC', opacity: this.buttonOpacity, transform: [{ translateY: this.buttonY }] }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >SIGN IN WITH FACEBOOK</Text>
                    </Animated.View> */}
                    <Animated.View style={{
                        zIndex: this.TextInputZindex,
                        opacity: this.TextInputOpacity,
                        transform: [{ translateY: this.TextInputY }],
                        height: height / 3, ...StyleSheet.absoluteFill,
                        top: null,
                        justifyContent: 'center'
                    }}>
                        <TapGestureHandler onHandlerStateChange={this.onCloseState} >
                            <Animated.View style={styles.closeButton} >
                                <Animated.Text style={{
                                    fontSize: 15,
                                    transform: [{ rotate: concat(this.rotateCross, 'deg') }]
                                }}>X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>

                        <TextInput
                            Label="Email"
                            style={styles.TextInput}
                            placeholderTextColor="black"
                            onChangeText={(value) => this.setState({ email: value })}
                            placeholder="Email"
                        />
                        <TextInput
                            label="Password"
                            placeholder="Password"
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            style={styles.TextInput}
                            placeholderTextColor="black"
                            onChangeText={(value) => this.setState({ password: value })}
                            secureTextEntry
                        />
                        <TapGestureHandler onHandlerStateChange={this.handleSignIn} >
                            <Animated.View style={{ ...styles.button, }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', }} >Submit</Text>
                            </Animated.View>
                        </TapGestureHandler>

                    </Animated.View>
                </View>
            </View >

        );
    }
}







// Test Code Below --
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    closeButton: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },

    TextInput: {
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 20,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    }
})