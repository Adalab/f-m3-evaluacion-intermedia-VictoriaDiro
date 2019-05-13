import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {image, name, type} = this.props;
    return (
      <div className="Pokemon">
        <img className="PokemonIMG" src={image}></img>
        <h2 className="PokemonName">{name}</h2>
        <h3 className="PokemonType">{type}</h3>
      </div>
    )
  }
}

export default Pokemon;
