import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonFooter, IonButton, IonSlides, IonSlide, IonItem, IonLabel, IonDatetime, IonList, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { home } from 'ionicons/icons';
import './Introduction.css';
import { SyntheticEvent } from 'react';

const Dossier: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start" >
                        <IonMenuButton />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton href="./page/search">
                            <IonIcon icon="search-outline" >
                            </IonIcon>
                        </IonButton>
                    </IonButtons>
                    <div id="header-center">
                        <IonTitle>WIKIPECHOUX</IonTitle>
                    </div>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <a href="./page/petlexi">Petit lexique intermultivers</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lexmotirr">Lexique des mots irreguliers</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/memaffixe">Memento des affixes</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/fausdef">Fausses définitions paronymiques</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lexpres">Lexique des présentatifs</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/verbes">Les verbes</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/proverbes">Proverbes</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/culture">Culture</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/epilation">Epilation</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/formchim">Formules chimiques</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/colcollec">Collection de collectionneurs</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/brachygraphie">Brachygraphie</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/gentiles">Les gentilés</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lexmed">Lexique des termes médicaux</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lexmer">Lexique de la mer</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lexanimal">Lexique des règnes animal - végétal - minéral</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lextrouille">Lexique du trouillomètre</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/lexmaux">Lexique des maux et maladies</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/calpoisson">Calendrier des poissons</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/calfruit">Calendrier des fruits</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/calcrustaces">Calendrier des crustacés et des oeufs</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/tabmesure">Tableaux des mesures</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/tabtransport">Tableaux des transports</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/pelerin">Jeu du pélerinage</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/tetebrulee">Jeu des têtes brulées</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/drapeaux">Drapeau internationnal</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/madeleine">Les madeleines</a>
                    </IonItem>
                    <IonItem>
                        <a href="./page/1440">1440</a>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter >
                <IonToolbar color="primary">
                    <div id="footer-button">
                        <IonButtons>
                            <IonButton href="./page/">
                                <IonIcon icon={home}>
                                </IonIcon>
                            </IonButton>
                        </IonButtons>
                    </div>
                    <div id="footer-text">
                        Accueil
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Dossier;
