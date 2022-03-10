import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const ImageButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image style={[styles.image, props.style]} source={props.src} />
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // width: 104,
    height: 40,
    resizeMode: 'cover',
  },
});
