import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Pmadeleine: React.FC = () => {
  useIonViewWillEnter(() => {
    renderUsers();
  });
  async function getUsers() {
    let url = 'http://127.0.0.1/wk/try.php?type=madeleines';
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
    users.forEach((user: {image: any; libelle: any; }) => {
      let htmlSegment = `
                          <ion-slide>
                          <img src="assets/img/madeleines/${user.image}"></img>
                          </ion-slide>`;

      html += htmlSegment;
    });

    let container = document.getElementById('container');
    if (container != null) {
      container.innerHTML = html;
    }
  }

  let response = fetch("http://127.0.0.1/wk/try.php?type=madeleines", { method: 'GET' }).then(res => res.json());
  const { name } = useParams<{ name: string; }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Madeleine</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <Swiper >
        <SwiperSlide id="container">
          
        </SwiperSlide>
      </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Pmadeleine;