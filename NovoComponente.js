import React, {Component} from 'react';
import {Text} from 'react-native';

class NovoComponente extends Component {
  render() {
    return (
      <Text>
        {this.props.nome} {this.props.sobrenome}
      </Text>
    );
  }
}

export default NovoComponente;
