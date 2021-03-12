import React from 'react';
import './Header.css';
import tinder_logo from './assets/tinder_logo.png';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    
    return (
        <div className="header">
            {backButton ? (
                <IconButton className="header__iconContainer" onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__arrowback" />
                </IconButton>
            ) : (
                <IconButton className="header__iconContainer">
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
            
            <Link to="/">
                <img src={tinder_logo} className="header__logo" alt="tinder_logo" />
            </Link>
            <Link to="/chat">
                <IconButton className="header__iconContainer">
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
