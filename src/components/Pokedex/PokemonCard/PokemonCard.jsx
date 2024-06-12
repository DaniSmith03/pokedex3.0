import React from 'react';
import { capitalizeFirst, getImageId } from '../../Helpers';
import './PokemonCard.css';

function PokemonCard({ pokemonCardOpen, setPokemonCardOpen, pokeDetails }) {
  if (!pokeDetails) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.classList.contains('card-overlay')) {
      setPokemonCardOpen(false);
    }
  };

  const {
    name,
    height,
    weight,
    types,
    abilities,
    moves,
    description,
    habitat,
  } = pokeDetails;

  const pokeId = pokeDetails.id;
  const newId = getImageId(pokeId);
  const swshImageUrl = `https://www.serebii.net/swordshield/pokemon/${newId}.png`;
  const swshShinyImageUrl = `https://www.serebii.net/Shiny/SWSH/${newId}.png`;
  const svImageUrl = `https://www.serebii.net/scarletviolet/pokemon/new/${newId}.png`;
  const svShinyImageUrl = `https://www.serebii.net/Shiny/SV/new/${newId}.png`;

  return (
    <div className='cardInfo'>
      {pokemonCardOpen && (
        <div className='card-overlay' onClick={handleClose}>
          <div className='card-container' onClick={(e) => e.stopPropagation()}>
            <div className='infocard-header'>
              <h2>
                {capitalizeFirst(name)} #{pokeId}
              </h2>
            </div>
            <div className='card-body'>
              <div className='image-container'>
                {pokeId <= 904 ? (
                  <div>
                    <img src={swshImageUrl} alt={name} />
                    <p>Normal</p>
                  </div>
                ) : (
                  <div>
                    <img src={svImageUrl} alt={name} />
                    <p>Normal</p>
                  </div>
                )}
                {pokeId <= 904 ? (
                  <div>
                    <img src={swshShinyImageUrl} alt={`${name} shiny`} />
                    <p>Shiny</p>
                  </div>
                ) : (
                  <div>
                    <img src={svShinyImageUrl} alt={`${name} shiny`} />
                    <p>Shiny</p>
                  </div>
                )}
              </div>
              <p>{description}</p>
              <div className='details'>
                <div className='detail-item'>
                  <h3>Height</h3>
                  <p>{height}</p>
                </div>
                <div className='detail-item'>
                  <h3>Weight</h3>
                  <p>{weight}</p>
                </div>
                <div className='detail-item'>
                  <h3>Habitat</h3>
                  <p>{habitat}</p>
                </div>
              </div>
              <div className='details'>
                <div className='detail-item'>
                  <h3>Types</h3>
                  <div className='types'>
                    {types.map((type) => (
                      <span key={type} className='chip'>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='detail-item'>
                  <h3>Abilities</h3>
                  <div className='types'>
                    {abilities.map((ability) => (
                      <span key={ability} className='chip'>
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='details'>
                <div className='detail-item'>
                  <h3>Moves</h3>
                  <div className='moves-list'>
                    {moves.map((move, index) => (
                      <p key={index} className='move-item'>
                        {move}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <button className='chip'>Favorite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
