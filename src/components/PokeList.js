import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

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

PokeList.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default PokeList;
