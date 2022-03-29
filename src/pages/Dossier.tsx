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
                    <IonItem
                        href="./page/petlexi">Petit lexique intermultivers
                    </IonItem>
                    <IonItem
                        href="./page/lexmotirr">Lexique des mots irreguliers
                    </IonItem>
                    <IonItem
                        href="./page/memaffixe">Memento des affixes
                    </IonItem>
                    <IonItem
                        href="./page/fausdef">Fausses définitions paronymiques
                    </IonItem>
                    <IonItem
                        href="./page/lexpres">Lexique des présentatifs
                    </IonItem>
                    <IonItem
                        href="./page/verbes">Les verbes
                    </IonItem>
                    <IonItem
                        href="./page/proverbes">Proverbes
                    </IonItem>
                    <IonItem
                        href="./page/culture">Culture
                    </IonItem>
                    <IonItem
                        href="./page/epilation">Epilation
                    </IonItem>
                    <IonItem
                        href="./page/formchim">Formules chimiques
                    </IonItem>
                    <IonItem
                        href="./page/colcollec">Collection de collectionneurs
                    </IonItem>
                    <IonItem
                        href="./page/brachygraphie">Brachygraphie
                    </IonItem>
                    <IonItem
                        href="./page/gentiles">Les gentilés
                    </IonItem>
                    <IonItem
                        href="./page/lexmed">Lexique des termes médicaux
                    </IonItem>
                    <IonItem
                        href="./page/lexmer">Lexique de la mer
                    </IonItem>
                    <IonItem
                        href="./page/lexanimal">Lexique des règnes animal - végétal - minéral
                    </IonItem>
                    <IonItem
                        href="./page/lextrouille">Lexique du trouillomètre
                    </IonItem>
                    <IonItem
                        href="./page/lexmaux">Lexique des maux et maladies
                    </IonItem>
                    <IonItem
                        href="./page/calpoisson">Calendrier des poissons
                    </IonItem>
                    <IonItem
                        href="./page/calfruit">Calendrier des fruits
                    </IonItem>
                    <IonItem
                        href="./page/calcrustaces">Calendrier des crustacés et des oeufs
                    </IonItem>
                    <IonItem
                        href="./page/tabmesure">Tableaux des mesures
                    </IonItem>
                    <IonItem
                        href="./page/tabtransport">Tableaux des transports
                    </IonItem>
                    <IonItem
                        href="./page/pelerin">Jeu du pélerinage
                    </IonItem>
                    <IonItem
                        href="./page/tetebrulee">Jeu des têtes brulées
                    </IonItem>
                    <IonItem
                        href="./page/drapeaux">Drapeau internationnal
                    </IonItem>
                    <IonItem
                        href="./page/madeleine">Les madeleines
                    </IonItem>
                    <IonItem
                        href="./page/1440">1440
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
