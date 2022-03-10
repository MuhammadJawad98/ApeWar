import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';

const Screen1 = ({navigation, props}) => {
  const onPress = () => console.log('Clicked');

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image
          style={styles.image}
          source={require('../assets/topRectangle.png')}
        />
      </View>
      <View style={styles.centerBox}>
        <ImageBackground
          source={require('../assets/apesimage.png')}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: 'center',
            }}>
            <Image
              style={styles.gandWarTextImage}
              source={require('../assets/gangWars.png')}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
          <Image source={require('../assets/connectBtn.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topBox: {
    width: '100%',
    height: '15%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gandWarTextImage: {
    height: 50,
  },
  centerBox: {
    width: '100%',
    height: '70%',
  },
  bottomBox: {
    width: '100%',
    height: '15%',
    padding: 15,
    backgroundColor: 'black',
  },
});
