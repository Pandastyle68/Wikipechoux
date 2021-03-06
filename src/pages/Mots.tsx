import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonButton, useIonViewWillEnter, IonLabel } from '@ionic/react';
import { useParams } from 'react-router';
import { analyticsSharp, home } from 'ionicons/icons';
import './Page.css';
import { SyntheticEvent } from 'react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';


const Mots: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  useIonViewWillEnter(() => {
    renderMot();
    renderImage();
    renderVideo();
    renderMotPreSuiv();
  });
  async function getIdMot(aMot: any) {
    let url = 'http://192.168.0.22:80/wk/try.php?type=defmot&mot=' + aMot;
    try {
      let res = await fetch(url);
      console.log(res);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getMot(aName: any) {
    let url = 'http://192.168.0.22:80/wk/try.php?type=idmot&id=' + aName;
    try {
      let res = await fetch(url);
      console.log(res);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getImage(aName: any) {
    let url = 'http://192.168.0.22:80/wk/try.php?type=image&id=' + aName;
    try {
      let res = await fetch(url);
      console.log(res);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getVideo(aName: any) {
    let url = 'http://192.168.0.22:80/wk/try.php?type=video&id=' + aName;
    try {
      let res = await fetch(url);
      console.log(res);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getMotOrdre(aLettre: any) {
    let url = 'http://192.168.0.22:80/wk/try.php?type=motordre&lettre=' + aLettre;
    try {
      let res = await fetch(url);
      console.log(res);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderMot() {
    try {
      let mot = await getMot(name);
      let motsAChercher;
      let html = '';
      let motContainer = document.getElementById('motsAssoc');
      if (motContainer != null) {
        motContainer.innerHTML = "";
      }
      if (mot == "") {
        let htmlSegment = `<div class="user">
                              <h2>Mot non trouv??</h2>                         
                         </div>`;
        html += htmlSegment;
      } else {
        let htmlSegment = `<div class="user">
                              <h2>${mot[0].nom_mot}</h2>
                              <h2>${mot[0].definition}</h2>
                         </div>`;
        html += htmlSegment;
        console.log(mot);
        motsAChercher = mot[0].definition.split(' ');
        let lesMots = new Set(motsAChercher);
        console.log(lesMots);
        lesMots.forEach(async function (unMot: any) {
          try {
            if (unMot != "") {
              let idMot = await getIdMot(unMot.replace(/([.])\s+/g, ""));
              if (idMot != "") {
                let infoMot = await getMot(idMot[0].id);

                let motHtml = `
                                <a href = "./page/mots/${infoMot[0].id}"><h2>${infoMot[0].nom_mot}</h2></a>`;
                if (motContainer != null) {
                  motContainer.innerHTML += motHtml;

                }
              }
            }



          } catch (error) {
            console.log(error);
          }
        });
      }


      let container = document.getElementById('container');
      if (container != null) {
        container.innerHTML = html;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function renderImage() {
    try {
      let image = await getImage(name);
      let html = '';
      let imageContainer = document.getElementById('imageAssoc');
      image.forEach(function (uneImage: any) {
        if (uneImage != "") {
          html += '<div class="swiper-slide"><ion-card><img src="./assets/images/mots/' + uneImage["nom_photo"] + '"</img><ion-card-content></ion-card-content></ion-card></div>';
        }
      });
      if (imageContainer != null && html != '') {
        //imageContainer.innerHTML = html;
        let swiperWrapper = document.getElementsByClassName("swiper-wrapper");
        swiperWrapper[0].innerHTML = html;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function renderVideo() {
    try {
      let video = await getVideo(name);
      if (video != "") {
        console.log(video[0]['nom_video']);
        let html = '';
        let imageContainer = document.getElementById('videosAssoc');
        video.forEach(function (uneVideo: any) {
          if (uneVideo != "") {
            html += '<ion-card><video controls src="./assets/images/mots/films/' + uneVideo["nom_video"] + '"</video><ion-card-content></ion-card-content></ion-card>';
          }
        });
        if (imageContainer != null && html != '') {
          imageContainer.innerHTML = html;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function renderMotPreSuiv() {
    try {
      let mot = await getMot(name);
      let leMot = mot[0].nom_mot;
      let lettreTri = leMot[0];
      let motOrdre = await getMotOrdre(lettreTri);
      let lesMotPreSuiv = ['', '', ''];
      for (let i = 0; i < motOrdre.length; i++) {    
        if (motOrdre[i].nom_mot == leMot) {
          if(i - 1 >= 0){
            lesMotPreSuiv[0] = motOrdre[i-1];
          }
          lesMotPreSuiv[1] = motOrdre[i];
          if ((i + 1) < motOrdre.length) {
            lesMotPreSuiv[2] = motOrdre[i + 1];
          }
        }
      }
      let htmlSuiv = '';
      let htmlPrec = '';
      console.log(Object.values(lesMotPreSuiv[0]));
      if(lesMotPreSuiv[0] != ""){
        let leMotPrec = Object.values(lesMotPreSuiv[0]);
        htmlPrec += `<ion-button href="./page/mots/${leMotPrec[0]}" class="md button button-clear in-toolbar in-toolbar-color ion-activatable ion-focusable hydrated">Mot pr??c??dent: ${leMotPrec[1]}</ion-button>`;
      }
      if(lesMotPreSuiv[2] != ""){
        let leMotSuiv = Object.values(lesMotPreSuiv[2]);
        htmlSuiv += `<ion-button href="./page/mots/${leMotSuiv[0]}" class="md button button-clear in-toolbar in-toolbar-color ion-activatable ion-focusable hydrated">Mot suivant: ${leMotSuiv[1]}</ion-button>`
      }
      let motSuivContainer = document.getElementById('motsuiv');
      let motPrecContainer = document.getElementById('motprec');
      if(motPrecContainer != null){
        if(htmlPrec != ''){
          motPrecContainer.innerHTML = htmlPrec;
        }
    }
      if(motSuivContainer != null){
          if(htmlSuiv != ''){
            motSuivContainer.innerHTML = htmlSuiv;
          }
      }

    } catch (error) {
      console.log(error);
    }
  }
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
      <IonToolbar color="medium">
      <IonButtons slot="start"  id="motprec">
          </IonButtons>
        <IonButtons slot="end"  id="motsuiv">
          </IonButtons>
          </IonToolbar>
        <div id="container">
          Aucun mot valide d??fini
        </div>
        <h2>
          Mots associ??s:
        </h2>
        <div id="motsAssoc">
          Aucun mots associ??s
        </div>
        <br />
        <h2>
          Images associ??es:
        </h2>
        <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]} autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
          loop={true} id="imageAssoc" spaceBetween={40}>
          <SwiperSlide>Aucune image associ??e</SwiperSlide>
        </Swiper>
        <h2>
          Vid??os associ??es:
        </h2>
        <div id="videosAssoc">
          Aucune vid??o associ??e
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

export default Mots;
