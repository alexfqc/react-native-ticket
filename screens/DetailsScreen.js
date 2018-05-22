import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(itemId)}
        </Text>
        <Text>
          otherParam: {JSON.stringify(otherParam)}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

export default DetailsScreen;
