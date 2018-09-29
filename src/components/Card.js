import React, { Fragment } from 'react';
import Styled from './styled';
import './css/Card.css';
import { libraries } from '../data';

const CardComponent = ({ card }) => (
  // <Styled.Card className="card" bg={card.bg}>
  <div className="card" data-effect="zoom">
    <button className="card__save js-save" type="button">
      <i className="fa fa-search" />
    </button>
    <figure className="card__image" style={{ background: card.bg }}>
      {/* <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" /> */}
    </figure>
    <div className="card__header" />
    <div className="card__body">
      <h3 className="card__name">{card.title}</h3>
      <p className="card__job">{card.description}</p>
      <p className="card__bio">
        {card.tech
            && card.tech.map((item, index) => {
              const library = libraries.find(e => e.name === item.library);
              return (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                >
                  <img src={library.icon} width="50px" height="50px" alt={library.name} />
                </span>
              );
            })}
      </p>
    </div>
    {/* <div className="card__footer">
      <p className="card__date">{card.date}</p>
      <p className="" />
    </div> */}
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
