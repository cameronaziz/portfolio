import React from 'react';
import { libraries } from '../data';
import './css/Card.css';

const CardComponent = ({ card }) => (
  <div className="card" data-effect="zoom">
    {/* <button className="card__save js-save" type="button">
      <i className="fa fa-search" />
    </button> */}
    <figure className="card__image" style={{ background: card.bg }} />
    <div className="card__header" />
    <div className="card__body">
      <h3 className="card__name">{card.title}</h3>
      <p className="card__job">{card.description}</p>
      <p className="card__bio">
        {card.tech
          && card.tech.map(item => {
            const library = libraries.find(e => e.name === item.library);
            return (
              <span key={library.name}>
                <img
                  className="library-icon"
                  width="50px"
                  height="50px"
                  src={library.icon}
                  alt={library.name}
                />
              </span>
            );
          })}
      </p>
    </div>
  </div>
);

export default CardComponent;

//   {/* <CardBackground bg={card.bg} /> */}
//   <img src="/images/img_avatar.png" alt="Avatar" style={{ width: '100%' }} />
//   <div className="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </Styled.Card>
