import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProfileCard({title,handle,image}) {
    return (
        <div className="card border-primary mb-3" style={{width : '18rem'}}>
            <img className="card-img-top" src={image} alt="Profile" />
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-text">{handle}</p>
            </div>
        </div>
    );
}

export default ProfileCard;