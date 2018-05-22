import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <Button onPress={() => navigation.navigate('MyModal')} title="Info" color="#fff" />
    ),
    headerRight: <Button onPress={() => alert('This is a button!')} title="Info" color="#fff" />,
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
