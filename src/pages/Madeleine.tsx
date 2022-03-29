import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import './Madeleine.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { home } from 'ionicons/icons';

const Pmadeleine: React.FC = () => {
  useIonViewWillEnter(() => {
    renderUsers();
  });
  async function getUsers() {
    let url = 'http://localhost/wk/try.php?type=madeleines';
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
    users.forEach((user: { image: any; libelle: any; }) => {
      let htmlSegment = `
      <div class="swiper-slide madeleine-container"><ion-card>
                          <img src="assets/images/madeleines/${user.image}"></img>
                          <ion-card-content>${user.libelle}</ion-card-content></ion-card></div>`;

      html += htmlSegment;
    });

    let container = document.getElementById('container');
    if (container != null) {
      container.innerHTML = html;
      let swiperWrapper = document.getElementsByClassName("swiper-wrapper");
      swiperWrapper[0].innerHTML = html;
    }
  }

  let response = fetch("http://localhost/wk/try.php?type=madeleines", { method: 'GET' }).then(res => res.json());
  const { name } = useParams<{ name: string; }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton href="./page/search">
              <IonIcon icon="search-outline" >
              </IonIcon>
            </IonButton>
          </IonButtons>
          <div id="header-center">
            <IonTitle>MADELEINE</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="madeleine-container">
        <Swiper >
          <SwiperSlide id="container">

          </SwiperSlide>
        </Swiper>
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

export default Pmadeleine;