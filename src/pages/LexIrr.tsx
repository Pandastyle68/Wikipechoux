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

const Lexirr: React.FC = () => {

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
              <img src="assets/divers/lexiqueMotsirreguliers.jpg" alt="Lexique mots irreguliers"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers2.jpg" alt="Lexique mots irreguliers 2"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers3.jpg" alt="Lexique mots irreguliers 3"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers4.jpg" alt="Lexique mots irreguliers 4"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers5.jpg" alt="Lexique mots irreguliers 5"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers6.jpg" alt="Lexique mots irreguliers 6"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers7.jpg" alt="Lexique mots irreguliers 7"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers8.jpg" alt="Lexique mots irreguliers 8"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers9.jpg" alt="Lexique mots irreguliers 9"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers10.jpg" alt="Lexique mots irreguliers 10"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers11.jpg" alt="Lexique mots irreguliers 11"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers12.jpg" alt="Lexique mots irreguliers 12"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers13.jpg" alt="Lexique mots irreguliers 13"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers14.jpg" alt="Lexique mots irreguliers 14"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers15.jpg" alt="Lexique mots irreguliers 15"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers16.jpg" alt="Lexique mots irreguliers 16"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers17.jpg" alt="Lexique mots irreguliers 17"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers18.jpg" alt="Lexique mots irreguliers 18"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers19.jpg" alt="Lexique mots irreguliers 19"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers20.jpg" alt="Lexique mots irreguliers 20"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers21.jpg" alt="Lexique mots irreguliers 21"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/divers/lexiqueMotsirreguliers22.jpg" alt="Lexique mots irreguliers 22"></img>
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

export default Lexirr;
