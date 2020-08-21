import React, { Component } from 'react';
import { Tabs, Tab } from 'react-materialize';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Curriculum extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, { scrollOffset: 0 });
    }

    //Tab displaying all the skills
    SkillsTab = () => {
        return (
            <div id="web-skills" className="section scrollspy">
                <h4 className="header tab-subheader">Web</h4>
                <div className="row">
                    <div className="col l4 s12">
                        <div id="frontend" className="section">
                            <h5 className="header teal-text">Front End</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fab', 'react']} size="lg" color="teal" /> <span className="skill-name">React.js</span> <span className="skill-level">60 %</span>
                            <div className="progress">
                                <div className="determinate" style={{width: 60 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'laravel']} size="lg" color="teal" /> <span className="skill-name">Laravel</span> <span className="skill-level">40 %</span>
                            <div className="progress">
                                <div className="determinate" style={{width: 40 + "%"}}></div>
                            </div>       
                        </div>
                    </div>

                    <div className="col l4 s12">
                        <div id="backend" className="section">
                            <h5 className="header purple-text">Back End</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fab', 'node']} size="lg" color="purple" /> <span className="skill-name">Node.js</span> <span className="skill-level">60 %</span>
                            <div className="progress purple lighten-4">
                                <div className="determinate purple" style={{width: 60 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'php']} size="lg" color="purple" /> <span className="skill-name">PHP</span> <span className="skill-level">20 %</span>
                            <div className="progress purple lighten-4">
                                <div className="determinate purple" style={{width: 20 + "%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col l4 s12">
                        <div id="cms" className="section">
                            <h5 className="header amber-text text-accent-4">CMS</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fab', 'wordpress']} size="lg" color="#ffab00" /> <span className="skill-name">Wordpress</span> <span className="skill-level">80 %</span>
                            <div className="progress amber lighten-3">
                                <div className="determinate amber accent-4" style={{width: 80 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'joomla']} size="lg" color="#ffab00" /> <span className="skill-name">Joomla</span> <span className="skill-level">30 %</span>
                            <div className="progress amber lighten-3">
                                <div className="determinate amber accent-4" style={{width: 30 + "%"}}></div>
                            </div>       
                        </div>
                    </div>
                    <div className="col l4 s12">
                        <div id="devops" className="section">
                            <h5 className="header pink-text text-accent-3">DevOps</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="#f50057" /> <span className="skill-name">GitHub</span> <span className="skill-level">20 %</span>
                            <div className="progress pink lighten-4">
                                <div className="determinate pink accent-3" style={{width: 20 + "%"}}></div>
                            </div>      
                        </div>
                    </div>
                </div>

                <br/>
                <h4 className="header tab-subheader">Informatique</h4>
                <div className="row">
                    <div className="col l4 s12">
                        <div id="bureautique" className="section">
                            <h5 className="header blue-text">Bureautique</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fas', 'file-word']} size="lg" color="#2196f3" /> <span className="skill-name">Word</span> <span className="skill-level">100 %</span>
                            <div className="progress blue lighten-4">
                                <div className="determinate blue" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fas', 'file-excel']} size="lg" color="#2196f3" /> <span className="skill-name">Excel</span> <span className="skill-level">100 %</span>
                            <div className="progress blue lighten-4">
                                <div className="determinate blue" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fas', 'file-powerpoint']} size="lg" color="#2196f3" /> <span className="skill-name">Powerpoint</span> <span className="skill-level">100 %</span>
                            <div className="progress blue lighten-4">
                                <div className="determinate blue" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fas', 'file-powerpoint']} size="lg" color="#2196f3" /> <span className="skill-name">Project</span> <span className="skill-level">80 %</span>
                            <div className="progress blue lighten-4">
                                <div className="determinate blue" style={{width: 80 + "%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col l4 s12">
                        <div id="creation" className="section">
                            <h5 className="header red-text">Création</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fab', 'adobe']} size="lg" color="red" /> <span className="skill-name">Photoshop</span> <span className="skill-level">70 %</span>
                            <div className="progress red lighten-4">
                                <div className="determinate red" style={{width: 70 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'adobe']} size="lg" color="red" /> <span className="skill-name">Illustrator</span> <span className="skill-level">70 %</span>
                            <div className="progress red lighten-4">
                                <div className="determinate red" style={{width: 70 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'adobe']} size="lg" color="red" /> <span className="skill-name">Adobe XD</span> <span className="skill-level">60 %</span>
                            <div className="progress red lighten-4">
                                <div className="determinate red" style={{width: 60 + "%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col l4 s12">
                        <div id="communication" className="section">
                            <h5 className="header indigo-text text-lighten-2">Communication</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fab', 'slack']} size="lg" color="#7986cb" /> <span className="skill-name">Slack</span> <span className="skill-level">100 %</span>
                            <div className="progress indigo lighten-4">
                                <div className="determinate indigo lighten-2" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'trello']} size="lg" color="#7986cb" /> <span className="skill-name">Trello / Jira</span> <span className="skill-level">100 %</span>
                            <div className="progress indigo lighten-4">
                                <div className="determinate indigo lighten-2" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fab', 'discord']} size="lg" color="#7986cb" /> <span className="skill-name">Discord</span> <span className="skill-level">100 %</span>
                            <div className="progress indigo lighten-4">
                                <div className="determinate indigo lighten-2" style={{width: 100 + "%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <h4 className="header tab-subheader">Personnelles</h4>
                <div className="row">
                    <div className="col l4 s12">
                        <div id="langues" className="section">
                            <h5 className="header green-text">Langues</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fas', 'flag-usa']} size="lg" color="#4caf50" /> <span className="skill-name">Anglais</span> <span className="skill-level">100 %</span>
                            <div className="progress indigo lighten-4">
                                <div className="determinate green" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fas', 'torii-gate']} size="lg" color="#4caf50" /> <span className="skill-name">Japonais</span> <span className="skill-level">70 %</span>
                            <div className="progress indigo lighten-4">
                                <div className="determinate green" style={{width: 70 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fas', 'yin-yang']} size="lg" color="#4caf50" /> <span className="skill-name">Chinois</span> <span className="skill-level">10 %</span>
                            <div className="progress green lighten-4">
                                <div className="determinate green" style={{width: 10 + "%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 s12">
                        <div id="permis" className="section">
                            <h5 className="header grey-text">Permis</h5>
                            <br/>
                            <FontAwesomeIcon icon={['fas', 'car']} size="lg" color="grey" /> <span className="skill-name">Permis de conduire</span>
                            <div className="progress grey lighten-4">
                                <div className="determinate grey" style={{width: 100 + "%"}}></div>
                            </div>

                            <br/>
                            <FontAwesomeIcon icon={['fas', 'motorcycle']} size="lg" color="grey" /> <span className="skill-name">Permis Moto</span>
                            <div className="progress grey lighten-4">
                                <div className="determinate grey" style={{width: 100 + "%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //Tab displaying the Education
    EducationTab = () => {
        /* ------
        Timeline Template (Original Code: https://www.uplabs.com/posts/responsive-materialize-timeline, by Paul Bottein)
        ------ */
        return (
            <div id="education" className="section scrollspy">
                <div className="timeline">
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Master 2 Entrepreneuriat {'&'} Management de l'Innovation</span>
                                <p>2018-2019</p>
                                <p>IAE Lille, Lille (FR)</p>
                            </div>
                        </div>
                        <div className="timeline-badge blue white-text"><FontAwesomeIcon icon={['fas', 'users']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Master en Management</span>
                                <p>2016-2018</p>
                                <p>Eurasiam, Paris (FR), Tokyo (JP)</p>
                            </div>
                        </div>
                        <div className="timeline-badge red white-text"><FontAwesomeIcon icon={['fas', 'globe-asia']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">3 ans de formation en Management {'&'} Game Design</span>
                                <p>2013-2016</p>
                                <p>SUPINFOGAME Rubika, Valenciennes (FR)</p>
                            </div>
                        </div>
                        <div className="timeline-badge green white-text"><FontAwesomeIcon icon={['fas', 'gamepad']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Baccalauréat Section Scientifique</span>
                                <p>2013</p>
                            </div>
                        </div>
                        <div className="timeline-badge amber accent-4 white-text"><FontAwesomeIcon icon={['fas', 'graduation-cap']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Diplôme d’études de solfège</span>
                                <p>Juin 2008</p>
                                <p>(Fin de 3ème cycle, passé avec mention)</p>
                            </div>
                        </div>
                        <div className="timeline-badge purple white-text"><FontAwesomeIcon icon={['fas', 'music']} /></div>
                    </div>
                </div>
            </div>
        );
    }

    //Tab displaying the Experiences
    ExperiencesTab = () => {
        /* ------
        Timeline Template (Original Code: https://www.uplabs.com/posts/responsive-materialize-timeline, by Paul Bottein)
        ------ */
        return (
            <div id="experiences" className="section scrollspy">
                <div className="timeline">
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Développement Web</span>
                                <p>Compétences apprises en autodidacte</p>
                                <hr/>
                                <div className="card-description">
                                    <p>Développement de sites Internet dans le cadre de mon emploi en interne ou sur mon temps libre.</p>
                                    <ul>
                                        <li>Exemples :</li>
                                        <li><a href="https://ressources.bge-parif.fr" target="_blank" rel="noopener noreferrer">Ressources BGE PaRIF</a></li>
                                        <li><a href="https://github.com/louisledoux" target="_blank" rel="noopener noreferrer">Mon profil GitHub</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-badge purple white-text"><FontAwesomeIcon icon={['fas', 'code']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">BGE PaRIF - Conseiller en création d’entreprise</span>
                                <p>Octobre 2019 - Aujourd'hui</p>
                                <hr/>
                                <div className="card-description">
                                    <p>Accompagnement des porteurs de projet dans leur objectif de création/reprise d'entreprise : suivi, conseil et explications des étapes de la création d'entreprise.</p>
                                    <p>Animation de formations sur les thématiques de l'Entrepreneuriat {'&'} du Marketing digital / Communication digital (stratégie digitale, utilisation des CMS, référencement sur Internet, ...).</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-badge blue white-text"><FontAwesomeIcon icon={['fas', 'building']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                            <span className="card-title">Extrusium - Projet Entrepreneurial</span>
                                <p>Septembre 2018 - Juillet 2019</p>
                                <hr/>
                                <div className="card-description">
                                    <p>Projet d'entreprise dans le domaine du recyclage industriel {'&'} de l'impression 3D.</p>
                                    <p>Lauréat Régional Hauts-de-France au Concours PEPITE 2019, dans le cadre du Statut National Étudiant Entrepreneur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-badge green white-text"><FontAwesomeIcon icon={['fas', 'robot']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Boulanger Business Services - Service Client</span>
                                <p>Juin 2018 - Novembre 2018</p>
                                <hr/>
                                <div className="card-description">
                                    <p>Analyse et résolution de problèmes des clients sur leurs produits IoT {'&'} High-Tech.</p>
                                    <p>Apprentissage, prise en main et utilisation quotidienne des méthodes Relation Client {'&'} des outils CRM.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-badge deep-orange white-text"><FontAwesomeIcon icon={['fab', 'bootstrap']} /></div>
                    </div>
                    <div className="timeline-event">
                        <div className="card timeline-content">
                            <div className="card-content">
                                <span className="card-title">Echange International - Japon</span>
                                <p>Octobre 2016 - Avril 2018</p>
                                <hr/>
                                <div className="card-description">
                                    <p>Échange international d'un an et demi réalisé à Tokyo (JP).</p>
                                    <p>Travail sur divers projets étudiants {'&'} mises en situation dans la thématique du Management International, accompagné d'un apprentissage intensif de la langue japonaise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-badge pink accent-3 white-text"><FontAwesomeIcon icon={['fas', 'torii-gate']} /></div>
                    </div>
                </div>
            </div>
        );
    }

    //Tab displaying the Hobbies
    HobbiesTab = () => {
        return (
            <div id="hobbies" className="section scrollspy">
                <div className="row">
                    <div className="col l4 s12">
                        <div className="card">
                            <div className="card-image">
                                <img alt="" src="https://img.finalfantasyxiv.com/lds/promo/h/M/jmK4Q5CcFnBD1FfV90aw1zeUG8.png" />
                                <button className="btn-floating btn-small activator halfway-fab waves-effect waves-light pink accent-3"><i><FontAwesomeIcon className="activator" icon={['fas', 'plus']} /></i></button>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Culture du Jeu</span>
                                <p className="card-description">Joueur régulier de jeux de société {'&'} jeux vidéo</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Jeux du moment<i className="right"><FontAwesomeIcon icon={['fas', 'times']} /></i></span>
                                <hr />
                                <ul className="card-list">
                                    <li>Final Fantasy XIV</li>
                                    <li>Star Wars : Empire At War</li>
                                    <li>Satisfactory</li>
                                    <li>Tu Te Mets Combien</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 s12">
                        <div className="card">
                            <div className="card-image">
                                <img alt="" src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg" />
                                <button className="btn-floating btn-small activator halfway-fab waves-effect waves-light pink accent-3"><i><FontAwesomeIcon className="activator" icon={['fas', 'plus']} /></i></button>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Culture Asiatique</span>
                                <p className="card-description">Fort intérêt pour la culture asiatique</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Culture Asiatique<i className="right"><FontAwesomeIcon icon={['fas', 'times']} /></i></span>
                                <hr />
                                <ul className="card-list">
                                    <li>Niveau intermédiaire en Japonais (JLPT N3)</li>
                                    <li>Apprentissage en autodidacte du chinois</li>
                                    <li>Dégustateur de Ramen {'&'} de Kimchi professionnel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 s12">
                        <div className="card">
                            <div className="card-image">
                                <img alt="" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg&w=640" />
                                <button className="btn-floating btn-small activator halfway-fab waves-effect waves-light pink accent-3"><i><FontAwesomeIcon className="activator" icon={['fas', 'plus']} /></i></button>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Informatique</span>
                                <p className="card-description">Programming, Web Development, Gaming</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Informatique<i className="right"><FontAwesomeIcon icon={['fas', 'times']} /></i></span>
                                <hr />
                                <ul className="card-list">
                                    <li>Apprentissage en autodidacte de languages {'&'} framework de programmation</li>
                                    <li>Modérateur d'une association gaming</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 s12">
                        <div className="card">
                            <div className="card-image">
                                <img alt="" src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=marius-masalar-rPOmLGwai2w-unsplash.jpg&w=640" />
                                <button className="btn-floating btn-small activator halfway-fab waves-effect waves-light pink accent-3"><i><FontAwesomeIcon className="activator" icon={['fas', 'plus']} /></i></button>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Musique</span>
                                <p className="card-description">Pratique {'&'} goûts musicaux</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Musique<i className="right"><FontAwesomeIcon icon={['fas', 'times']} /></i></span>
                                <hr />
                                <ul className="card-list">
                                    <li>Musicien: Bassoniste (15 ans) / Pianiste (11 ans)</li>
                                    <li>Diplôme Musical de Basson (Fin de 2nd cycle, passé avec mention)</li>
                                    <li>Appétence particulière pour le rock, le jazz {'&'} la musique des années 80 ～♪</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 s12">
                        <div className="card">
                            <div className="card-image">
                                <img alt="" src="https://i.ytimg.com/vi/Emw0_F7kuAA/maxresdefault.jpg" />
                                <button className="btn-floating btn-small activator halfway-fab waves-effect waves-light pink accent-3"><i><FontAwesomeIcon className="activator" icon={['fas', 'plus']} /></i></button>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Sport</span>
                                <p className="card-description">Arts Martiaux {'&'} pratique sportive</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Sport (avant COVID)<i className="right"><FontAwesomeIcon icon={['fas', 'times']} /></i></span>
                                <hr />
                                <ul className="card-list">
                                    <li>Pratique de sport en salle</li>
                                    <li>Pratiquant de Naginata (art de la lance japonaise)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //Render all the Tabs
    render () {
        return (
            <div className="col s12 m8 offset-m1 xl9 offset-xl1">
                <div className="spacer"></div>
                <Tabs
                    className="tab-cv z-depth-1 tabs-fixed-width"
                    options={{
                        swipeable: true
                    }}
                >
                    <Tab
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Compétences Techniques"
                    >
                        <this.SkillsTab />
                    </Tab>
                    <Tab
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Expériences"
                    >
                        <this.ExperiencesTab />
                    </Tab>
                    <Tab
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Éducation"
                    >
                        <this.EducationTab />
                    </Tab>
                    <Tab
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Loisirs"
                    >
                        <this.HobbiesTab />
                    </Tab>
                </Tabs>
            </div>
        );
    }

}

export default Curriculum