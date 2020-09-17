const apiKey = "zsFUe3bdWKPSULVdtTqi2AByRobjXCyTge5GOeWlO6kHXyK4vkbwEyKxFkIKVHhdEvhTRqv6KgSA6jaanpvYwtKCnpUK6xk9NK0ipYiUMffYIQx6zk2WE_obw51jX3Yx";
//const clientId = "34iwnZAq87krtt0oQLg1Mg";

const limit = 10;  // Limit for the number of results in the search


const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}`,
            {headers: {Authorization: `Bearer ${apiKey}`}}
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipcode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};

export default Yelp;