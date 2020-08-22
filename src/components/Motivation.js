import React, { Component } from 'react';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Motivation extends Component {

    componentDidMount() {
        var scrollspy = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scrollspy, { scrollOffset: 310 });

        var pushpin = document.querySelectorAll('.pushpin');
        M.Pushpin.init(pushpin, {top: 120});
    }

    //ScrollSpy for the Motivation Page
    ScrollSpy = () => {
        return (
            <div className="col hide-on-small-only m3 xl3 offset-xl1 scrollspy-tab">
                <div className="pushpin">
                    <ul className="section table-of-contents">
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#why-shine">Pourquoi Shine ?</a></li>
                        <li><a href="#apport">Qu'est-ce que je peux apporter ?</a></li>
                        <li><a href="#together">Ce qu'on peut faire ensemble</a></li>
                    </ul>
                </div>
            </div>
        );
    }

    //Content of the Motivation Page
    Content = () => {
        return (
            <div id="motivation" className="col s12 m8 offset-m1 xl7 offset-xl1">
                <div id="introduction" className="section scrollspy">
                    <h3 className="header teal-text">Introduction</h3>
                    <p>
                        Je suis actuellement conseiller en création d'entreprise, spécialisé dans l'accompagnement en stratégie digitale. À côté de mon emploi, je suis passionné par le web et son évolution, et
                        voilà maintenant plusieurs années que j'apprends des langages webs {'&'} des frameworks en autodidacte, comme Laravel ou plus récemment React.
                    </p>
                    <p>
                        Je souhaite aujourd'hui suivre cette passion et évoluer vers le développement web, tout en restant en contact avec le monde de l'entrepreneuriat.
                        C'est pour cela que je suis intéressé par votre offre de développeur Fullstack, et j'ai donc pris l'initiative de vous faire part de ma candidature.
                    </p>
                </div>
                <div id="why-shine" className="section scrollspy">
                    <h3 className="header purple-text">Pourquoi Shine ?</h3>
                    <p>
                        De par mon métier et mon parcours de porteur de projet, Shine ne m'était pas inconnu. Je souhaite venir chez vous pour rester dans l'environnement
                        entrepreneurial, et continuer d'aider les entrepreneurs, tout en évoluant dans un métier qui me plait et me motive au quotidien.
                    </p>
                    <p>
                        De plus, je ne suis pas resté insensible à la journée par mois dédiée pour effectuer du freelance. En effet, j'aimerais à l'avenir pouvoir développer une
                        agence web pour aider les entrepreneurs à la réalisation de leur site Internet (idée que je commence déjà à travailler depuis plusieurs mois).
                        Pouvoir entamer cette activité freelance petit à petit en étant dans l'écosystème Shine est une idée qui me plait beaucoup.
                    </p>
                </div>
                <div id="apport" className="section scrollspy">
                    <h3 className="header amber-text text-accent-4">Qu'est-ce que je peux apporter ?</h3>
                    <p>
                        Avec mon expérience de conseiller en création d'entreprise, et de porteur de projet, je suis confronté au jour le jour à la réalité de la vie quotidienne des indépendants et à leurs problématiques.
                        Cela me permet d'avoir une approche orientée Utilisateur dans le développement. De plus, développer des outils pouvant faciliter la vie des entrepreneurs au quotidien est pour moi une véritable motivation.
                    </p>
                    <p>
                        Pour le côté développement, j'ai appris plusieurs langages {'&'} framework en autodidacte, comme React. J'ai en revanche très peu touché au Back-End pour le moment, bien que ce soit quelque chose qui m'attire : j'aimerais pouvoir à l'avenir manipuler la Data et concevoir des APIs.
                        Bien que n'ayant pas l'expérience professionnelle directe en tant que développeur Fullstack, je pense que les connaissances acquises par mes différentes expériences pourraient correspondre à vos critères de recherche.
                    </p>
                    <p>Je peux proposer également mes talents de cuisinier : j'ai reçu mon diplôme pas du tout officiel de professionnel en confection de crêpes <FontAwesomeIcon icon={['far', 'smile-wink']} /></p>
                </div>

                <div id="together" className="section scrollspy">
                    <h3 className="header cyan-text">Ce qu'on peut faire ensemble</h3>
                    <p>
                    <FontAwesomeIcon icon={['fab', 'empire']} /> <strike>Ensemble, nous règnerons sur la galaxie</strike> <FontAwesomeIcon icon={['fab', 'empire']} />
                    </p>
                    <p>
                        J'ai conscience que je n'ai peut-être pas toutes les compétences techniques, ou encore l'expérience requise, pour répondre aux besoins de votre équipe.
                    </p>
                    <p>
                        Si l'écart est trop important entre le poste et mon profil, j'aimerais savoir si vous êtes ouvert à l'idée d'une <a href="https://www.pole-emploi.fr/employeur/aides-aux-recrutements/les-aides-a-la-formation/la-preparation-operationnelle-a.html" target="_blank" rel="noopener noreferrer">POEI <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="xs" /></a>, afin de pouvoir suivre une formation complète Fullstack JS en téléprésentiel, directement depuis vos locaux. Cela me permettrait d’acquérir les compétences nécessaires, tout en pouvant me former sur place à vos outils et votre méthode de travail, pour une prise de poste immédiate une fois la formation terminée.
                    </p>
                    <p>
                        Si cela vous intéresse, je suis déjà en relation avec une école qui propose une formation Fullstack JS en téléprésentiel, <a href="https://oclock.io/" target="_blank" rel="noopener noreferrer">O'Clock &nbsp;<FontAwesomeIcon icon={['fas', 'external-link-alt']} size="xs" /></a>.
                    </p>
                    <p>
                        Également titulaire d'une formation en management international, je pense posséder les qualités relationnelles, ainsi que le sens de l'autonomie et de l'esprit d'équipe requis pour ce travail.
                    </p>
                    <p>
                        J'espère que vous serez intéressé par mon profil, et je me tiens à votre disposition pour répondre à vos questions.
                    </p>
                </div>

                <div className="spacer"></div>
                <div className="center">
                    <Link to="/contact">
                        <Button
                            node="button"
                            waves="light"
                            className="pink accent-3"
                        >
                            On se contacte ? &nbsp;<FontAwesomeIcon icon={['fas', 'phone']} />
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <>
                <this.Content />
                <this.ScrollSpy />
            </>
        );
    }
}

export default Motivation