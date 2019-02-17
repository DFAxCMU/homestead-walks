import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Pedometer } from "expo";

export default class HomePageTracker extends Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.titleBar}>
          <Text style = {styles.titleText}>Home</Text>
          <Image source = {require('./assets/images/menuIcon.png')}
                  style = {styles.iconImage}/>
        </View>
        <View style = {{marginTop: 5, height: 1, backgroundColor: 'white'}}/>
        <View style = {styles.actionSection}>
          <Text style = {styles.dateText}>Today</Text>
          <ImageBackground source = {require('./assets/images/circle.png')}
                  imageStyle = {{resizeMode: 'contain'}}
                  style = {styles.stepCountImageBackground}>
            <Text style = {styles.stepText}>{this.state.currentStepCount} steps</Text>
          </ImageBackground>
          <View style = {styles.itemBar}>
            <View style = {styles.item}>
              <Image source = {require('./assets/images/coin.png')}
                      style = {styles.itemImage}/>
              <Text style = {styles.itemText}>100 Coins</Text>
            </View>
            <View style = {styles.item}>
              <Image source = {require('./assets/images/fire.png')}
                      style = {styles.itemImage}/>
              <Text style = {styles.itemText}>10 Day Streak</Text>
            </View>
            <View style = {styles.item}>
              <Image source = {require('./assets/images/medal.png')}
                      style = {styles.itemImage}/>
              <Text style = {styles.itemText}>10 Badges</Text>
            </View>
          </View>
          <View style = {styles.buttonContainer}>
            <Button onPress = {this._onPressButton}
                    title = "Start Workout"
                    color = "green"/>
          </View>
        </View>
        <View style={styles.tabBar}>
        </View>
      </View>
    );
  }

  _onPressButton() {
    Alert.alert('Workout Started!')
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'center',
   backgroundColor:'steelblue'
  },
  titleBar: {
    marginTop: 20,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor:'steelblue'
  },
  titleText: {
    flex: 6,
    fontSize: 25,
    paddingLeft: 50,
    textAlign: 'center',
    //fontFamily: 'sans-serif-light',
    color: 'white',
    backgroundColor:'steelblue'

  },
  iconImage: {
    flex: 1,
    width: 30,
    height: 20,
    marginTop: 10,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    backgroundColor:'steelblue',
  },
  actionSection: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'steelblue',
  },
  dateText: {
    padding: 40,
    fontSize: 20,
    textAlign: 'center',
  //  fontFamily: 'sans-serif-light',
    color: 'white',
    backgroundColor:'steelblue'
  },
  stepCountImageBackground: {
    flex: 1,
  //  marginLeft: 125,
  //  width: '100%',
    //height: null,
  //  resizeMode: 'contain',
    justifyContent: 'center',
    backgroundColor: 'steelblue'
  },
  stepText: {
    fontSize: 25,
    textAlign: 'center',
  //  fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    color: 'white',
  },
  itemBar: {
    //flex: 1,
    marginTop: 20,
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'steelblue'
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'steelblue'
  },
  itemImage: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    backgroundColor:'steelblue'
  },
  itemText: {
    fontSize: 15,
    textAlign: 'center',
    //fontFamily: 'sans-serif-light',
    color: 'white',
    backgroundColor:'steelblue'
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor:'steelblue'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HomePageTracker);
