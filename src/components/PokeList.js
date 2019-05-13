import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render () {
    const {pokemon} = this.props;
    return (
      <ul className="PokeList">
        {pokemon.map((item, index) => {
          return (
            <li className="ListItem" key={`poke${index}`}>
              <Pokemon
                image={item.url}
                name={item.name}
                type={item.type}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PokeList;
