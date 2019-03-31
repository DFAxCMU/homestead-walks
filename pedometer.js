import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";

export default class PedometerSensor extends React.Component {
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
      console.log("subscribe", result.steps)
      this.props.onChange(this.state.pastStepCount + this.state.currentStepCount)
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
        console.log("bottom", result.steps)
        this.props.onChange(result.steps)
      },
      error => {
        console.log(error)
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
      <View>
        <Text>
          <Text style={styles.centerText}>
            <Text style={{fontWeight: 'bold',}}>{this.state.pastStepCount + this.state.currentStepCount} </Text>
            steps{"\n"}
          </Text>
          <Text style={styles.smallText}> of 10,000 </Text> 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText:{
  fontSize: 38,
  color: '#ffffff',
  fontFamily: 'Avenir-Light',
  },
  smallText:{
  fontSize: 18,
  color: '#ffffff',
  fontFamily: 'AvenirNext-Italic',
  textAlign: 'center',
  },
});

Expo.registerRootComponent(PedometerSensor);