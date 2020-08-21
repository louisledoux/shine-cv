import React, { Component } from 'react';
import photo from '../img/photo_pro_cropped.jpg'

class Contact extends Component {

    render () {
        return (
            <div id="contact" className="col s12 m8 offset-m1 xl7 offset-xl1">
                <div className="spacer" />
                <div className="row">
                    <div className="col l11 offset-l1 s12 name-header">
                        <p>
                            <img className="z-depth-1" alt="Moi" src={photo}></img>
                        </p>
                        <h5 className="header teal-text">Louis Ledoux</h5>
                    </div>
                </div>
                <div className="row">
                    <div id="adresse" className="col l4 offset-l1 s12">
                        <div className="section">
                            <h5 className="header purple-text">Adresse postale</h5>
                            <ul>
                                <li>5 rue des Jours Heureux</li>
                                <li>Appartement 112</li>
                                <li>95490, Vauréal</li>
                            </ul>
                        </div>
                    </div>
                    <div id="mail" className="col l3 s12">
                        <div className="section">
                            <h5 className="header amber-text text-accent-4">Mail</h5>
                            <ul>
                                <li><a href="mailto:louisledoux95@gmail.com">louisledoux95@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="telephone" className="col l3 offset-l1 s12">
                        <div className="section">
                            <h5 className="header pink-text text-accent-3">Téléphone</h5>
                            <ul>
                                <li><a href="tel:+33645196985">+33 (0)6.45.19.69.85</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact