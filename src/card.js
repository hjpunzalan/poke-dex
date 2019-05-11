import React, { Component } from 'react';
import './card.css';

function splitNumber(id) {
    let newID;
    if (id < 10) {
        newID = ('00' + id).slice(-3);
    } else if (id > 10 && id < 100) {
        newID = ('0' + id).slice(-3);
    } else {
        newID = id;
    }
    return newID;
}


class Card extends Component {
    render () {
        const { id,name,type,experience } = this.props;
        const imageSource = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${splitNumber(id)}.png`
        return (
            <div className="Card">
                <h2 className="card-heading">{name}</h2>
                <img src={imageSource} alt={name} className="card-img"/>
                <p className="card-type">Type: {type}</p>
                <p className="card-experience">EXP: {experience}</p>
            </div>

        )
    }
}

export default Card;