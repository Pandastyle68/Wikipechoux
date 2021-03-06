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
    let url = 'http://192.168.0.22:80/wk/try.php?type=motalea';
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
    window.location.href=("../page/mots/"+users[0].id);
  }
  return (
    <IonPage>
     
    </IonPage>
  );
};

export default MotAlea;
