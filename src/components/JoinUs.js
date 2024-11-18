import React, { useState } from 'react';
import './JoinUs.css';
import axios from 'axios';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        height: '',
        weight: '',
        target: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('https://67235015493fac3cf24a68a6.mockapi.io/Contacts', formData);
            console.log("Form submitted:", response.data);
            alert("Thank you for joining us!");

            
            setFormData({ name: '', email: '', phone: '', height: '', weight: '', target: '' });
        } catch (error) {
            console.error("Error submitting form:", error.response || error.message);
            
            
            if (error.response) {
            
                alert(`Submission failed: ${error.response.data?.message || 'Please try again.'}`);
            } else if (error.request) {
                
                alert("No response from the server. Please check your internet connection or try again later.");
            } else {
                
                alert("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="join-us-container">
            <h2>Join Us</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="number" 
                    name="height" 
                    placeholder="Your Height (cm)" 
                    value={formData.height}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="number" 
                    name="weight" 
                    placeholder="Your Weight (kg)" 
                    value={formData.weight}
                    onChange={handleChange}
                    required 
                />
                <select 
                    name="target" 
                    value={formData.target} 
                    onChange={handleChange}
                    required
                    className="join-us-select"
                >
                    <option value="" disabled>Select Your Target</option>
                    <option value="Bodybuilding">Bodybuilding</option>
                    <option value="Endurance and Stamina Training">Endurance and Stamina Training</option>
                    <option value="Weight Gain">Weight Gain</option>
                    <option value="Weight Loss">Weight Loss</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default JoinUs;
