import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonFooter, IonButton, IonSlides, IonSlide, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { home } from 'ionicons/icons';
import './Introduction.css';
import { SyntheticEvent } from 'react';

const Timeimage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('00:00');
    function renderImage() {
        localStorage.setItem("prenom", "dany");
        let time = selectedDate.split(":");
        let htmlSegment = `<img src= "./assets/1440/` + time[0] + "h" + time[1] + `.jpg" onerror="this.onerror=null;this.src='./assets/1440/Labelfriche.jpg'"></img>`;
        let container = document.getElementById('img-search-container');
        if (container != null) {
            container.innerHTML = htmlSegment;
        }
    }
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
                    <h2>Saisie d'un horaire : </h2>
                </IonItem>
                <IonItem>
                    <IonLabel>HH:mm</IonLabel>
                    <IonDatetime
                        displayFormat="HH:mm"
                        value={selectedDate}
                        onIonChange={(e) => setSelectedDate(e.detail.value!)}
                    ></IonDatetime>
                </IonItem>
                <IonButton expand="full" color="light" onClick={() => renderImage()}>
                    Rechercher l'image associée
                </IonButton>
                <IonItem>
                    <div id="img-search-container">

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

export default Timeimage;
