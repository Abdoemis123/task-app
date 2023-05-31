import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProfileCard({title,handle,image}) {
    return (
        <div className="card border-primary mb-3" style={{width : '18rem'}}>
            <img className="card-img-top" src={image} alt="Profile" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{handle}</p>
            </div>
        </div>
    );
}

export default ProfileCard;