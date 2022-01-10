import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonFooter, IonButton, IonSlides,IonSlide } from '@ionic/react';
import { useParams } from 'react-router';
import { home } from 'ionicons/icons';
import './Introduction.css';
import { SyntheticEvent } from 'react';

const Introduction: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
          <IonTitle>WIKIPECHOUX</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <hr></hr>
        <div>
          <hr></hr>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
         <p>Chacun donne son sens au monde, le mien est de coudre le temps pour peut-être y changer un morceau de réel.</p> 
         </IonSlide>
         <IonSlide>
         <p>C'est pourquoi j'ai entrepris de recréer toutes les définitions du dictionnaire et d'écrire une encyclopédie en lien avec mon travail plastique (installation, peinture, dessin, gravure, sculpture, vidéo, cinéma, performance...).</p>
         </IonSlide>
         <IonSlide>
         <p>On pourrait dire que c'est une encyclopédie des petites mémoires de la vie, qui fonctionnent comme des piqûres de rappel cherchant la vérité des rythmes du monde.</p>
         </IonSlide>
         <IonSlide>
         <p>Mon projet est de constituer une encyclopédie "Géographie d'un multivers" comportant la totalité des mots de la langue française.</p>
         </IonSlide>
         <IonSlide>
         <p>Le premier volume ressemble à une sorte de temps écrasé, possédant 8000 entrées et 300 travaux plastiques.</p>
         </IonSlide>
         <IonSlide>
         <p>Chaque nouveau volume est un outil qui me permet de voir l'univers sous un autre aspect, celui d'un multivers.</p>
         </IonSlide>
        </IonSlides>
        <hr></hr>
        <h2 id="sign">Hervé Péchoux</h2>
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

export default Introduction;
