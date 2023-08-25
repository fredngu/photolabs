import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {photoLike, photoDislike, openModal} = props;
  const [liked, setLiked] = useState(false);
  
  const photoLiked = () => {
    if (liked === false) {
      setLiked(true);
      photoLike(props.photo)
    } else {
      setLiked(false)
      photoDislike(props.photo)
    }
  }

  const handleModal = () => {
    openModal(props.photo)
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton liked={liked} photoLiked={photoLiked}/>
      <img onClick={handleModal} className="photo-list__image" src={props.photo.urls.full}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile}/>
        <span className="photo-list__user-info">
          {props.photo.user.name}
          <br/>
          <span className="photo-list__user-location">{props.photo.location.city}, </span>
          <span className="photo-list__user-location"> {props.photo.location.country}</span>
        </span>
      </div>
    </div>
  )
};

export default PhotoListItem;
