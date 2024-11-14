import React, { useEffect } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import './Gallery.css';
import 'magnific-popup/dist/magnific-popup.css';
import stretching1 from '../assets/stretching1.jpeg';
import stretching2 from '../assets/stretching2.jpeg';
import stretching3 from '../assets/stretching3.jpeg';
import strength1 from '../assets/strength1.jpeg';
import strength2 from '../assets/strength2.jpeg';
import strength3 from '../assets/strength3.jpeg';
import cardio1 from '../assets/cardio1.jpeg';
import cardio2 from '../assets/cardio2.jpeg';
import cardio3 from '../assets/cardio3.jpeg';
import cardio4 from '../assets/cardio4.jpeg';
import dumbbell1 from '../assets/dumbell1.jpeg';
import dumbbell2 from '../assets/dumbell2.jpeg';
import dumbbell3 from '../assets/dumbell3.jpeg';
import zumba1 from '../assets/zumba1.jpeg';
import zumba2 from '../assets/zumba2.jpeg';
import zumba3 from '../assets/zumba3.jpeg';
import zumba4 from '../assets/zumba4.jpeg';

const Gallery = () => {
    useEffect(() => {
        $('.buttons').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            const filter = $(this).attr('data-filter');
            if (filter === 'all') {
                $('.image').show(400);
            } else {
                $('.image').not('.' + filter).hide(200);
                $('.image').filter('.' + filter).show(400);
            }
        });

        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
    }, []);

    return (
        <div className="gallery">
            

            <ul className="controls">
                <li className="buttons active" data-filter="all">All</li>
                <li className="buttons" data-filter="stretching">Stretching</li>
                <li className="buttons" data-filter="strength">Strength</li>
                <li className="buttons" data-filter="cardio">Cardio</li>
                <li className="buttons" data-filter="dumbbell">Dumbbell</li>
                <li className="buttons" data-filter="zumba">Zumba</li>
            </ul>

            <div className="image-container">
                <a href={stretching1} className="image stretching">
                    <img src={stretching1} alt="Stretching" />
                </a>
                <a href={stretching2} className="image stretching">
                    <img src={stretching2} alt="Stretching" />
                </a>
                <a href={stretching3} className="image stretching">
                    <img src={stretching3} alt="Stretching" />
                </a>
                <a href={strength1} className="image strength">
                    <img src={strength1} alt="Strength" />
                </a>
                <a href={strength2} className="image strength">
                    <img src={strength2} alt="Strength" />
                </a>
                <a href={strength3} className="image strength">
                    <img src={strength3} alt="Strength" />
                </a>
                <a href={cardio1} className="image cardio">
                    <img src={cardio1} alt="Cardio" />
                </a>
                <a href={cardio2} className="image cardio">
                    <img src={cardio2} alt="Cardio" />
                </a>
                <a href={cardio3} className="image cardio">
                    <img src={cardio3} alt="Cardio" />
                </a>
                <a href={cardio4} className="image cardio">
                    <img src={cardio4} alt="Cardio" />
                </a>
                <a href={dumbbell1} className="image dumbbell">
                    <img src={dumbbell1} alt="Dumbbell" />
                </a>
                <a href={dumbbell2} className="image dumbbell">
                    <img src={dumbbell2} alt="Dumbbell" />
                </a>
                <a href={dumbbell3} className="image dumbbell">
                    <img src={dumbbell3} alt="Dumbbell" />
                </a>
                <a href={zumba1} className="image zumba">
                    <img src={zumba1} alt="Zumba" />
                </a>
                <a href={zumba2} className="image zumba">
                    <img src={zumba2} alt="Zumba" />
                </a>
                <a href={zumba3} className="image zumba">
                    <img src={zumba3} alt="Zumba" />
                </a>
                <a href={zumba4} className="image zumba">
                    <img src={zumba4} alt="Zumba" />
                </a>
            </div>
        </div>
    );
};

export default Gallery;
