import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonFooter, IonButton, IonSlides, IonSlide } from '@ionic/react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { home } from 'ionicons/icons';
import './Introduction.css';
import { SyntheticEvent } from 'react';
import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';

const LexMed: React.FC = () => {

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
        <hr></hr>
        <div>
          <hr></hr>
          <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]} autoplay={true}
            keyboard={true}
            pagination={true}
            scrollbar={true}
            zoom={true}
            loop={true}>
            <SwiperSlide>
              <img src="assets/divers/termesMedicaux.jpg" alt="Termes medicaux"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/termesMedicaux2.jpg" alt="Termes medicaux 2"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/termesMedicaux3.jpg" alt="Termes medicaux 3"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/termesMedicaux4.jpg" alt="Termes medicaux 4"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/termesMedicaux5.jpg" alt="Termes medicaux 5"></img>
            </SwiperSlide>
          </Swiper>
          <hr></hr>
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

export default LexMed;
