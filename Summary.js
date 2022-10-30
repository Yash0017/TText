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
  Text,
} from 'react-native';
import {Header} from 'react-native-elements';
const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summery: '',
      positive: '',
      negative: '',
      neutral: '',
    };
  }

  componentDidMount() {
    this.getdata();
  }
  getdata = async () => {
    fetch('https://fast-everglades-97469.herokuapp.com/text', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          summery: json.output.text,
          negative: json.output.negative,
          positive: json.output.positive,
          neutral: json.output.neutral,
        });
      });
  };
  render() {
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
              justifyContent: 'space-around',
              width: devicewidth,
              backgroundColor: 'white',
              borderBottomColor: 'white',
            }}
          />
          <ScrollView>
            <View style={styles.view_container}>
              <Text style={styles.username_style}>{'\n\n'}Summary</Text>
              <Text style={styles.description_style}>
                {'\n\n' + this.state.summery + '\n\n'}
              </Text>
              <Text style={styles.username_style}>
                {'\n\n'}Sentiment Polarity
              </Text>
              <View style={styles.content_flex}>
                <Text style={styles.headline}>{'\n\n'}Positive : </Text>
                <Text style={styles.description_style}>
                  {'\n\n' + this.state.positive} %
                </Text>
              </View>
              <View style={styles.content_flex}>
                <Text style={styles.headline}>Negative : </Text>
                <Text style={styles.description_style}>
                  {this.state.negative} %
                </Text>
              </View>
              <View style={styles.content_flex}>
                <Text style={styles.headline}>Neutral : </Text>
                <Text style={styles.description_style}>
                  {this.state.neutral} %
                </Text>
              </View>
            </View>
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
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: '#fe5f55',
  },
  description_style: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: 'gray',
    paddingHorizontal: 10,
  },
  content_flex: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  headline: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: 'gray',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
