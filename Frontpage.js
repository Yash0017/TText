/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Header, Text, ListItem} from 'react-native-elements';
import Ripple from 'react-native-material-ripple';

const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

export default class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showalert: false,
      message: '',
      page: '',
      mounted: false,
      type: '',
      id: '',
      user: '',
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header
            statusBarProps={{
              barStyle: 'dark-content',
              backgroundColor: 'white',
            }}
            containerStyle={{
              //color for the outside of the curve container.
              justifyContent: 'space-around',
              width: devicewidth,
              backgroundColor: 'white',
              borderBottomColor: 'white',
            }}
          />
          <ScrollView style={styles.view_container}>
            <View style={styles.view_container}>
              <Text style={styles.username_style}>
                Topics and Tags used{'\n'}
              </Text>
              <Text style={styles.text_style}>{'\n'}SPPU</Text>
              <Text style={styles.text_style}>{'\n'}#exams</Text>
              <Text style={styles.text_style}>{'\n'}#finalyear</Text>
              <Text style={styles.text_style}>
                {'\n'}#students{'\n\n\n'}
              </Text>
              <ListItem
                containerStyle={{backgroundColor: '#ffffff'}}
                bottomDivider
                topDivider>
                <ListItem.Content>
                  <ListItem.Title
                    onPress={() => {
                      navigate('Summary');
                    }}
                    style={{
                      color: '#003152',
                      fontSize: deviceheight * 0.025,
                      fontFamily: 'sans-serif',
                      textAlign: 'left',
                    }}>
                    See Analysis
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>
            <Text>Test</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    backgroundColor: 'white', //color for the outside of the curve container.
    minHeight: deviceheight,
    width: devicewidth,
  },
  username_style: {
    textAlign: 'left',
    marginTop: deviceheight * 0.05,
    fontSize: deviceheight * 0.03,
    paddingLeft: 10,
    fontFamily: 'Norican-Regular',
    color: '#033a42',
  },
  text_style: {
    textAlign: 'left',
    //marginTop: deviceheight * 0.05,
    fontSize: deviceheight * 0.025,
    paddingLeft: 10,
    fontFamily: 'Norican-Regular',
    color: '#033a42',
  },
});
