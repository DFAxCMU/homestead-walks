import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity} from 'react-native';

class Stats extends React.Component {
	render(){
		return (			
			<Text style={styles.heading}> {this.props.header} </Text>,
			<Text> {this.props.info} </Text>	
		)

	}
}

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Statistics',
  };

  render() {

  	return(
  		<ScrollView style={styles.mainContainer}>
  			<View style={styles.otherContainer}>
	  			<View style={styles.container}>
	  				<Text style={styles.heading}> Walk Summary: </Text>
	  				<View style={styles.bodytext}>
		  				<Text> Miles walked: 100</Text>
		  				<Text> Calories burned: 1000 </Text>
		  				<Text> Friends made: 0 </Text>
	  				</View>
	  			</View>
	  		</View>
	  		<View style={styles.container}>
	  			<Stats header='Walk Summary'/>
	  			<Stats info='Miles walked:' />
	  			<Stats info='Calories burned:' />
	  			<Stats info='Friends made:' />
	  		</View>
  		</ScrollView>
  	);

  }

}

const styles = StyleSheet.create({
	mainContainer: {
		flex:1,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20,
		
	},
	otherContainer: {
		flex:1,
		justifyContent: 'space-between',
		flexDirection: 'column',

	},
	container: {
		flex:1,
		marginTop:20,
		backgroundColor: 'white',
	},
	heading: {
		paddingTop: 20,
		paddingLeft: 20,
		paddingBottom: 20,
	},
	bodytext: {
		paddingLeft: 20,
		paddingBottom: 20,
	}
});
  