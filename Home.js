import React, { useState, useEffect,  useRef } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import front from '../assets/front.jpeg';
import front1 from '../assets/front1.jpeg';
import front2 from '../assets/front2.jpeg';
import bmiImage from '../assets/bmi.png'; 

const Home = () => {
    const targetDate = new Date('2024-11-20T23:59:59');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [showBMICalculator, setShowBMICalculator] = useState(false);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState('');
    const [classification, setClassification] = useState('');
    const bmiRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (bmiRef.current && !bmiRef.current.contains(event.target)) {
                setShowBMICalculator(false);
                resetCalculator();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function calculateTimeLeft() {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const handleCalculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        
        if (weightNum > 0 && heightNum > 0) {
            const bmi = (weightNum / ((heightNum / 100) ** 2)).toFixed(2);
            setBmiResult(`Your BMI is ${bmi}`);
            setClassification(getBMICategory(bmi));
        } else {
            setBmiResult('Please enter valid weight and height.');
            setClassification('');
        }
    };

    const getBMICategory = (bmi) => {
        if (bmi < 16) return 'Severe Thinness';
        if (bmi >= 16 && bmi < 17) return 'Moderate Thinness';
        if (bmi >= 17 && bmi < 18.5) return 'Mild Thinness';
        if (bmi >= 18.5 && bmi < 25) return 'Normal';
        if (bmi >= 25 && bmi < 30) return 'Overweight';
        if (bmi >= 30 && bmi < 35) return 'Obese Class I';
        if (bmi >= 35 && bmi < 40) return 'Obese Class II';
        return 'Obese Class III';
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setBmiResult('');
        setClassification('');
    };

    return (
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={front} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={front1} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={front2} alt="Third slide" />
                </Carousel.Item>
            </Carousel>

            <div className="carousel-overlay">
                <div className="quote2">
                    <h1>Feel The <span className="text-orange-500">Power</span></h1>
                </div>
                <p className="quote">"Fitness is not about being better than someone else, it's about being better than you used to be."</p>
                
                <div className="clock-container">
                    <div className="timer">
                        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>
                    <div className="limited-offer">Limited Offer!</div>
                </div>
            </div>

            <button className="circular-button" onClick={() => setShowBMICalculator(!showBMICalculator)}>
                <img src={bmiImage} alt="BMI Calculator" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </button>

            {showBMICalculator && (
                <div className="fixed-bmi-calculator" ref={bmiRef}>
                    <input
                        type="number"
                        placeholder="Weight (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="form-control mb-2" 
                    />
                    <input
                        type="number"
                        placeholder="Height (cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="form-control mb-2" 
                    />
                    <button onClick={handleCalculateBMI} className="btn btn-primary">Calculate</button>
                    {bmiResult && <div className="bmi-result">{bmiResult}</div>}
                    {classification && <div className="bmi-classification">Classification: {classification}</div>}
                </div>
            )}
        </div>
    );
};

export default Home;
