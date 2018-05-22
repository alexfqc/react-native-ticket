import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Icon, Button, Container, Body, Right } from 'native-base';

const HeaderCompoent = ({ navigation }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="ios-menu" />
        </Button>
      </Left>
      <Body />
      <Right />
    </Header>
  </Container>
);

HeaderCompoent.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }).isRequired,
};

export default HeaderCompoent;
