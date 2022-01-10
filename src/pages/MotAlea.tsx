import { IonPage, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { home } from 'ionicons/icons';
import './Page.css';
import { SyntheticEvent } from 'react';



const MotAlea: React.FC = () => {
    const history = useHistory();
  useIonViewWillEnter(() => {
    renderUsers();
  });
  async function getUsers() {
    let url = 'http://127.0.0.1:8888/wk/php/try.php?type=motalea';
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderUsers() {
    let users = await getUsers();
    let html = '';
    history.replace("mots/"+users[0].id);
  }
  return (
    <IonPage>
     
    </IonPage>
  );
};

export default MotAlea;
