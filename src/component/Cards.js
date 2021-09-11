import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img01 from './images/img-1.jpg'
import Img02 from './images/img-2.jpg'
import Img03 from './images/img-3.jpg'
import Img04 from './images/img-4.jpg'
import Img05 from './images/img-5.jpg'
import Img06 from './images/img-6.jpg'
import Img07 from './images/img-7.jpg'
import Img08 from './images/img-8.jpg'
import Img09 from './images/img-9.jpg'



function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Img09}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={Img01}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={Img03}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={Img04}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={Img08}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;