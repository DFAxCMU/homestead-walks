import React from 'react';
import {AppRegistry, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends React.Component{

  render() {
    return(
      <ScrollView style = {styles.container}>
        <View style = {styles.userInfo}>
          <View style = {styles.userHeader}>
            <Image source = {require('../assets/images/profPic.jpg')}
                    style = {styles.profPic}/>
            <View style = {styles.userText}>
              <Text style = {styles.userName}>Gialon Kasha</Text>
              <Text style = {styles.userBio}>Student at Carnegie Mellon</Text>
            </View>
            <TouchableOpacity onPress = {() =>{alert("you clicked me")}}>
              <Image source = {require('../assets/images/post.png')}
                      style = {styles.iconPic}/>
            </TouchableOpacity>
          </View>
          <View style = {styles.tokens}>
            <View style = {styles.singleToken}>
              <Text style = {styles.tokenValue}>150</Text>
              <Text style = {styles.tokenText}>Coins</Text>
            </View>
            <View style = {styles.singleToken}>
              <Text style = {styles.tokenValue}>10 Days</Text>
              <Text style = {styles.tokenText}>Streak</Text>
            </View>
            <View style = {styles.singleToken}>
              <Text style = {styles.tokenValue}>7</Text>
              <Text style = {styles.tokenText}>Badges</Text>
            </View>
          </View>
        </View>
      <View style = {{height: 5, backgroundColor: 'white'}}/>
      <View style = {styles.notifications}>
        <Text style = {styles.header2}>Notifications</Text>
        <View style = {styles.userItem}>
          <Image source = {require('../assets/images/profPic.jpg')}
                  style = {styles.altUserProfPic}/>
          <Text numberOfLines={2}
                style = {styles.notificationText}>Gialon Kasha liked your post:
                New Personal Record</Text>
          <Text style = {styles.expandText}>5 s</Text>
        </View>
        <View style = {styles.userItem}>
          <Image source = {require('../assets/images/FarnamJahanianFace.jpg')}
                  style = {styles.altUserProfPic}/>
          <Text numberOfLines={2}
                style = {styles.notificationText}>Farnam Jahanian commented "Free tuition?" on your post:
                New Personal Record</Text>
          <Text style = {styles.expandText}>30 s</Text>
        </View>
        <View style = {styles.userItem}>
          <Image source = {require('../assets/images/usainBolt.jpg')}
                  style = {styles.altUserProfPic}/>
          <Text numberOfLines={2}
                style = {styles.notificationText}>Usain Bolt liked your post: "Olympics here I come!"</Text>
          <Text style = {styles.expandText}>1 min</Text>
        </View>
        <View style = {styles.userItem}>
          <Image source = {require('../assets/images/drakeSelfie.png')}
                  style = {styles.altUserProfPic}/>
          <Text numberOfLines={2}
                style = {styles.notificationText}>Drake sent you a message: "You tryna run ;)"</Text>
          <Text style = {styles.expandText}>10 min</Text>
        </View>
        <TouchableOpacity onPress = {() =>{alert("you clicked me")}}>
          <Text style = {styles.expandText}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style = {{height: 5, marginTop: 20, backgroundColor: 'white'}}/>
      <View style = {styles.friendRequestSection}>
        <Text style = {styles.header2}>Friend Requests</Text>
        <View style = {styles.userItem}>
          <View style = {styles.altUserProf}>
            <Image source = {require('../assets/images/profPic.jpg')}
                    style = {styles.altUserProfPic}/>
            <Text style = {styles.timeText}>Gialon Kasha</Text>
          </View>
          <TouchableOpacity onPress = {() =>{alert("you clicked me")}}>
            <Text style = {styles.friendRequestApprove}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>{alert("you clicked me")}}>
            <Text style = {styles.friendRequestReject}>Reject</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.userItem}>
          <View style = {styles.altUserProf}>
            <Image source = {require('../assets/images/drakeSelfie.png')}
                    style = {styles.altUserProfPic}/>
            <Text style = {styles.timeText}>Drake</Text>
          </View>
          <TouchableOpacity onPress = {() =>{alert("you clicked me")}}>
            <Text style = {styles.friendRequestApprove}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>{alert("you clicked me")}}>
            <Text style = {styles.friendRequestReject}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{height: 20, backgroundColor:'steelblue'}}/>
      </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'steelblue'
  },
  userInfo:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  userHeader:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  profPic:{
    flex: 1,
    height: 100,
    borderRadius: 50,
    width: 100,
    resizeMode: 'contain',
    backgroundColor: 'steelblue',
  },
  iconPic:{
    flex: 1,
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  userText:{
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'steelblue'
  },
  userName:{
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  userBio:{
    marginTop: 5,
    fontSize: 10,
    textAlign:'center',
    color: 'white'
  },
  tokens:{
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },
  singleToken:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },
  tokenText:{
    marginTop: 2,
    fontSize: 10,
    textAlign: 'center',
    color: 'white'
  },
  tokenValue:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  notifications:{
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 25,
  },
  header2: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'bold',
    color: 'steelblue',
  },
  userItem:{
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,

  },
  altUserProfPic:{
    flex: 1,
    height: 50,
    borderRadius: 25,
    width: 50,
    resizeMode: 'contain',
    backgroundColor: 'white'
  },
  notificationText:{
    flex: 3,
    fontSize: 15,
    textAlign: 'left',
    color: 'steelblue'
  },
  timeText:{
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    color: 'steelblue'
  },
  expandText:{
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    color: 'steelblue'
  },
  friendRequestSection:{
    flex: 1,
    marginTop: 20,
    borderRadius: 25,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'white'
  },
  altUserProf:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  friendRequestApprove:{
    marginRight: 20,
    borderWidth: 2,
    height: 20,
    width: 80,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'steelblue',
    borderColor: 'steelblue'
  },
  friendRequestReject:{
    marginRight: 20,
    height: 20,
    width: 80,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'steelblue',
    textAlign: 'center',
    color: 'white'
  }

});
