import React from "react";
import Business from "../Business/Business"; // o simulate what a returned list of businesses would look like 

// Creates a list of Business components
class BusinessList extends React.Component {
    render() {
        return(
            <div className="BusinessList">
                {this.props.businesses.map(
                    business => {
                        return <Business business={business} key={business.id}/>;
                    }
                )}
            </div>
        );
    }
};

export default BusinessList;
