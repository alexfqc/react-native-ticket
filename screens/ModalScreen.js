import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

const ModalScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 30 }}>This is a modal!</Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>
);

ModalScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default ModalScreen;
