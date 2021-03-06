import React from 'react'

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__container">
                <ReplayIcon className="swipeButtons__repeat" fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__container" >
                <CloseIcon className="swipeButtons__left" fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__container" >
            <StarRateIcon className="swipeButtons__star" fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__container" >
                <FavoriteIcon className="swipeButtons__right" fontSize="large" />
            </IconButton>
            
            <IconButton className="swipeButtons__container" >
                <FlashOnIcon className="swipeButtons__light" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
