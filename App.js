import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Column, Row} from 'react-native-flexbox-grid';

// class GridSquare extends Component{
//   render() {
//     return ();
//   }
// }

class Grid extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text> {this.props.name} </Text>
        <Row size = {12}>
          <Column sm={6} md={4} lg={3}>
            <Text>FirstCol</Text>
          </Column>
          <Column sm={6} md={4} lg={3}>
            <Text>2ndCol</Text>
          </Column>
        </Row>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid name="Hi"/>
        <Grid name = "Hi 2"/>
        <Grid name="Bye"/>
        <Grid name = "Bye2"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Notes:
// Create a class called GridSquare which 
// will be the tile and contain neceasary info; 
// can make this clickable later if needed
// -- has a title
// -- has number of recent visitors
// -- has a picture

// Also create a class called grid 
// -- has a title for the component
// -- expandable ("see more")



// **/
