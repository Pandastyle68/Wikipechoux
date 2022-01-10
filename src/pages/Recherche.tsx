import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar, IonIcon, IonButton, IonBackButton } from '@ionic/react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Recherche: React.FC = () => {
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
        <IonSearchbar onIonChange={e=> page = e.detail.value!}>
        </IonSearchbar>
        <IonButton onClick={()=> history.push("mots/"+page)} expand="full" color="light">
          Rechercher
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Recherche;
