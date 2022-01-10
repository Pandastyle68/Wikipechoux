import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonFooter, IonButton, IonSlides, IonSlide, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { home } from 'ionicons/icons';
import './Introduction.css';
import { SyntheticEvent } from 'react';

const Drapeau: React.FC = () => {

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
                <IonItem>
                    <div id="img-drap-container">
                    <img src="./assets/wiki/Drapeau.jpg"></img>
                    </div>
                </IonItem>
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

export default Drapeau;
