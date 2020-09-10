import React from "react";
import "./Business.css";

// THis is where the component representing a business is created
const busines = { // **This is dummy, hard coded here. Will update with API
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

class Business extends React.Component {
    render() {
        return(
            <div className="Business">
                <div className="image-container">
                    <img src={busines.imageSrc} alt={busines.name}/>
                </div>
                <h2>{busines.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{busines.address}</p>
                        <p>{busines.city}</p>
                        <p>{busines.state} {busines.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{busines.category}</h3>
                        <h3 className="rating">{busines.rating} stars</h3>
                        <p>{busines.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Business;