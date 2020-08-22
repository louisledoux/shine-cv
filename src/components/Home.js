import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class Home extends Component {
    render () {
        return (
            <div id="home" className="center">
                <div className="col s12 m10">
                    <h1 className="header pink-text text-accent-3">Louis Ledoux</h1>
                </div>
                <div className="col s12 m10">
                    <h4 className="light grey-text text-darken-2">Lettre de Motivation + CV </h4>
                    <h5 className="light grey-text text-darken-2"><img id="shine-title" alt="Shine's logo" src="https://www.shine.fr/images/logo.svg"></img> Special Edition</h5>
                    <br/>
                    <p>Bonjour ! Je me présente rapidement : je m'appelle Louis, j'ai 24 ans, et vous trouverez sur ce site (réalisé avec amour en React) ma lettre de motivation {'&'} mon CV pour votre entreprise ～</p>
                    <p>Je vous remercie de prendre le temps de venir lire ma candidature, et j'espère à très vite <FontAwesomeIcon icon={['far', 'smile-beam']} /></p>
                </div>

                <div className="row center">
                    <div className="col s12 m10">
                        <div className="spacer" />
                        <div className="row">
                            <div className="col m4 s12">
                                <Link to="/motivation">
                                    <Button
                                        node="button"
                                        waves="light"
                                        className="cyan"
                                    >
                                        Lettre de Motivation &nbsp;<FontAwesomeIcon icon={['fas', 'hiking']} />
                                    </Button>
                                </Link>
                            </div>
                            <div className="col m4 s12">
                                <Link to="/curriculum">
                                    <Button
                                        node="button"
                                        waves="light"
                                        className="amber accent-4"
                                    >
                                        Curriculum Vitae &nbsp;<FontAwesomeIcon icon={['fas', 'file-alt']} />
                                    </Button>
                                </Link>
                            </div>
                            <div className="col m4 s12">
                            <Link to="/contact">
                                <Button
                                    node="button"
                                    waves="light"
                                    className="pink accent-3"
                                >
                                    Contact &nbsp;<FontAwesomeIcon icon={['fas', 'phone']} />
                                </Button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;