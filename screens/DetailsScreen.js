import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';
import { Content, Container } from 'native-base';
import HeaderComponent from '../components/Header';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <Container>
        <HeaderComponent {...this.props} />
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>
            itemId: {JSON.stringify(itemId)}
          </Text>
          <Text>
            otherParam: {JSON.stringify(otherParam)}
          </Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </Content>
      </Container>
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
