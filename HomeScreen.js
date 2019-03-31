import React from 'react';
import PedometerSensor from "./pedometer.js";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
  Image,
  ImageBackground,
  TouchableHighlight,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Today'
  };

  constructor(props) {
    super(props)
    this.state={
    	fill: 0,
    	miles: 0,
    	calories: 0
    }
  }

  onPedometerChange(steps) {
  	console.log("steps", steps)
  	this.setState({
  		fill: steps / 100,
  		miles: (steps / 2250).toFixed(2),
  		calories: (96 * steps / 2250).toFixed(0)
  	})
  }


  render() {
    return (
      <ImageBackground source={require('./background2.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.circle}>
          <AnimatedCircularProgress 
            size={285}
            width={22}
            rotation={360}
            fill={this.state.fill}
            duration={1500}
            lineCap="round"
            tintColor="#ffffff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="rgba(255, 255, 255, 0.35)">
            {
              (fill) => (
              <Text>
                <Text> <PedometerSensor onChange={ this.onPedometerChange.bind(this) }/></Text>
              </Text>
            )
          }
          </AnimatedCircularProgress>
        </View>
        <View style={styles.statsBox}>
          <View style={styles.info}>
          <Text style={styles.statsText}> 
            <Text style={{fontSize:35}}>2</Text>
            {"\n"}friends</Text>
          </View>
          <View style={styles.info}>
          <Text style={styles.statsText}> 
            <Text style={{fontSize:35}}>{this.state.miles}</Text>
            {"\n"}miles</Text>
          </View>
          <View style={styles.info}>
          <Text style={styles.statsText}> 
            <Text style={{fontSize:35}}>{this.state.calories}</Text>
            {"\n"}calories</Text>
          </View>
        </View>

        <View style={styles.buttonBox}>
          <TouchableHighlight
            style={styles.button} underlayColor='#ffffff'
            onPress={() => this.props.navigation.push('Home')}
            >
            <Text style={styles.buttonText}> Start Walk </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles=StyleSheet.create({
  imagecontainer:{
    flex:1,
    backgroundColor: '#f2f3f7',
  },
  circle:{
    paddingTop: 50,
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center', 
  },
    buttonText: {
    fontSize: 26,
    fontFamily: 'Avenir-Light',
    color: '#ffffff',
  },
    buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
    button: {
    alignItems: 'center',
    width: 210,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: '#ffffff',
  },
  statsBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    flexDirection: 'row',

    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 50,
  },
  statsText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center'
  },
  info: {
    borderRightWidth:0,
    borderColor: '#ffffff',
    flex:3,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});


Expo.registerRootComponent(PedometerSensor);
