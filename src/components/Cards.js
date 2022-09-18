import React from 'react';
import CardItem from './CardItem';
import img9 from '../assets/images/img-9.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img8 from '../assets/images/img-8.jpg';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items" >
                        <CardItem 
                            src={img9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'  
                        />
                        <CardItem 
                            src={img2}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'  
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={img3}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'  
                        />
                        <CardItem 
                            src={img4}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'  
                        />
                        <CardItem 
                            src={img8}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'  
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
