import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';
import { Content, Container } from 'native-base';
import HeaderComponent from '../components/Header';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderComponent {...this.props} />
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() =>
              navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              })}
          />
        </Content>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
