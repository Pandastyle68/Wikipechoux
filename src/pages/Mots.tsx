import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonButton, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import { home } from 'ionicons/icons';
import './Page.css';
import { SyntheticEvent } from 'react';


const Mots: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    useIonViewWillEnter(() => {
        renderMot();
      });
      async function getMot() {
        let url = 'http://127.0.0.1:8888/wk/php/try.php?type=defMot&mot='+name;
        try {
          let res = await fetch(url);
          return await res.json();
        } catch (error) {
          console.log(error);
        }
      }
      async function renderMot() {
        let mot = await getMot();
        let html = '';
         if(mot == ""){
            let htmlSegment = `<div class="user">
                              <h2>Mot non trouvé</h2>                         
                         </div>`;
                         html += htmlSegment;
         }else{
         let htmlSegment = `<div class="user">
                              <h2>${mot[0].nom_mot}</h2>
                              <h2>${mot[0].definition}</h2>
                         </div>`;
                         html += htmlSegment;
         }
          
    
        let container = document.getElementById('container');
        if (container != null) {
          container.innerHTML = html;
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
        <div id="container">
            dgdg
        </div>
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

export default Mots;
