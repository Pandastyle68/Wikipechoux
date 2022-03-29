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

const Introduction: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
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

          <p>Chacun donne son sens au monde, le mien est de coudre le temps pour peut-être y changer un morceau de réel.</p>

          <p>C'est pourquoi j'ai entrepris de recréer toutes les définitions du dictionnaire et d'écrire une encyclopédie en lien avec mon travail plastique (installation, peinture, dessin, gravure, sculpture, vidéo, cinéma, performance...).</p>

          <p>On pourrait dire que c'est une encyclopédie des petites mémoires de la vie, qui fonctionnent comme des piqûres de rappel cherchant la vérité des rythmes du monde.</p>

          <p>Mon projet est de constituer une encyclopédie "Géographie d'un multivers" comportant la totalité des mots de la langue française.</p>

          <p>Le premier volume ressemble à une sorte de temps écrasé, possédant 8000 entrées et 300 travaux plastiques.</p>

          <p>Chaque nouveau volume est un outil qui me permet de voir l'univers sous un autre aspect, celui d'un multivers.</p>

          <hr></hr>
          
        </div>
      </IonContent>
      <IonFooter >
      <h2 id="sign">Hervé Péchoux</h2>
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

export default Introduction;
