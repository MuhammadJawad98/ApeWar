import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import ImageButton from '../components/imageButton';

const Screen4 = ({navigation, props}) => {
  const [isApe1Selected, setApe1Selected] = useState(false);
  const [isApe2Selected, setApe2Selected] = useState(false);
  const [isApe3Selected, setApe3Selected] = useState(false);
  const [isApe4Selected, setApe4Selected] = useState(false);
  const [isApe5Selected, setApe5Selected] = useState(false);
  const [isApe6Selected, setApe6Selected] = useState(false);
  const [isApe7Selected, setApe7Selected] = useState(false);

  const onPress = () => console.log('Clicked');

  onApePress = index => {
    switch (index) {
      case 0: {
        console.log('case 0');
        setApe1Selected(!isApe1Selected);
        break;
      }
      case 1: {
        console.log('case 1');
        setApe2Selected(!isApe2Selected);
        break;
      }
      case 2: {
        console.log('case 2');
        setApe3Selected(!isApe3Selected);
        break;
      }
      case 3: {
        console.log('case 3');
        setApe4Selected(!isApe4Selected);
        break;
      }
      case 4: {
        console.log('case 4');
        setApe5Selected(!isApe5Selected);
        break;
      }
      case 5: {
        console.log('case 5');
        setApe6Selected(!isApe6Selected);
        break;
      }
      case 6: {
        console.log('case 6');
        setApe7Selected(!isApe7Selected);
        break;
      }
      default:
        console.log('default case');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <View
          style={{
            width: 346,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            top: 40,
          }}>
          <ImageButton
            onPress={onPress}
            src={require('../assets/statbtn1.png')}
          />
          <ImageButton
            onPress={onPress}
            src={require('../assets/statbtn2.png')}
          />
          <ImageButton
            onPress={onPress}
            src={require('../assets/statbtn3.png')}
          />
        </View>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.trees}>
          <Image source={require('../assets/chooseYouropponent.png')} />
          <Image source={require('../assets/apeWithGun.png')} />
        </View>
      </View>
      <View style={{width: '100%', height: 50}}>
        <Image source={require('../assets/bluepixels.png')} />
      </View>
      <View style={{padding: 10}}>
        <Image source={require('../assets/whiteDText.png')} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          height: 61,
        }}>
        <ImageButton
          onPress={onApePress.bind(this, 0)}
          src={require('../assets/apeGang1.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 1)}
          src={require('../assets/apeGang2.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 2)}
          src={require('../assets/apeGang3.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 3)}
          src={require('../assets/apeGang4.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 4)}
          src={require('../assets/apeGang5.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>

      <View style={{paddingTop: 20, paddingLeft: 10}}>
        <Image source={require('../assets/oxD12Text.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          height: 61,
        }}>
        <ImageButton
          onPress={onApePress.bind(this, 0)}
          src={require('../assets/btnEmpty.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 1)}
          src={require('../assets/apeGang2.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 2)}
          src={require('../assets/apeGang3.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 3)}
          src={require('../assets/btnEmpty.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 4)}
          src={require('../assets/apeGang4.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>

      <View style={{padding: 10}}>
        <Image source={require('../assets/whiteDText.png')} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          height: 61,
        }}>
        <ImageButton
          onPress={onApePress.bind(this, 0)}
          src={require('../assets/apeGang1.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 1)}
          src={require('../assets/apeGang2.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 2)}
          src={require('../assets/apeGang3.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 3)}
          src={require('../assets/apeGang4.png')}
          style={{resizeMode: 'contain'}}
        />
        <ImageButton
          onPress={onApePress.bind(this, 4)}
          src={require('../assets/apeGang5.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>

      <TouchableOpacity style={{marginTop: 50}}>
        <Image source={require('../assets/gotowarbtn.png')} />
      </TouchableOpacity>
      <View style={styles.footerBtns}>
        <TouchableOpacity>
          <Image source={require('../assets/playbrtn.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/btnStat.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/btnCook.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  topBox: {
    width: '100%',
    height: 192,
    backgroundColor: '#0A7BE3',
  },
  midContainer: {
    width: '100%',
    height: 84,
    backgroundColor: '#30A5FA',
  },
  btnAddSize: {
    flexDirection: 'row',
    width: '100%',
    height: 61,
  },
  footerBtns: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
  myToucan: {
    flexDirection: 'row',
    width: '100%',
    height: 61,
    marginTop: 10,
    marginLeft: 10,
  },
  trees: {
    position: 'absolute',
    width: '80%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
