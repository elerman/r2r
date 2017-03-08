import React from 'react';

class R2RPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = { someKey: 'someValue' };
  }

  render() {
    const place = this.props.place

    return <p>{place.kind} {place.shortName} - {place.code}</p>;
  }

}

export default R2RPlace;
