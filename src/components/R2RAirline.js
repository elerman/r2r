import React from 'react';

class R2RAirline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const al = this.props.airline
    return <p>{al.code} - {al.name}</p>;
  }

}

export default R2RAirline;
