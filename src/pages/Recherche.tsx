import { IonButtons, IonContent, IonList, IonItem, IonPage, IonTitle, IonToolbar, IonSearchbar, IonIcon, IonButton, IonBackButton } from '@ionic/react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Recherche: React.FC = () => {
  async function getUsers(leMot: any) {
    let url = 'http://127.0.0.1:80/wk/php/try.php?type=idmot&mot=' + leMot;
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
      let container = document.getElementById('container');
      let htmlSegment = `<div class="user">
       <h2>Connexion à la base de données échouée, veuillez contactez l'administrateur du site.</h2>
       </div>`;
      if (container != null) {
        container.innerHTML = htmlSegment;
      }
    }
  }
  async function renderUsers(leMot: any) {
    if (leMot != "") {
      let users = await getUsers(leMot);
      let html = '';

      //let rdm = Math.floor(Math.random() * users.length);  //Exploiter la base de données quand il y a une donnée choisie au hasard
      //let htmlSegment = `<div class="user">
      // <h2>${users[rdm].id}</h2>
      //<h2>${users[rdm].libelle}</h2>
      // </div>`;

      // html += htmlSegment;
      try {
        users.forEach((user: { nom_mot: any, id: any; }) => { //Exploiter la base de données quand il y a plusieurs données
          let htmlSegment = `<ion-item>
                          <a href = "./page/mots/${user.id}">${user.nom_mot}</a>
                     </ion-item>`;

          html += htmlSegment;
        });
      } catch (error) {
        console.log(error);
      }
      let container = document.getElementById('container');
      if (container != null) {
        container.innerHTML = html;
      }
    }
    else {
      let container = document.getElementById('container');
      if (container != null) {
        container.innerHTML = "";
      }
    }
  }
  var page = "";
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="./" />
          </IonButtons>
          <IonTitle>Retour</IonTitle>
        </IonToolbar>
        <IonSearchbar onIonChange={e => renderUsers(e.detail.value!)}>
        </IonSearchbar>
        <IonButton onClick={() => renderUsers(page)} expand="full" color="light">
          Rechercher
        </IonButton>
        <IonList id="container">
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Recherche;
