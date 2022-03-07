import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonButton, useIonViewWillEnter, IonLabel } from '@ionic/react';
import { useParams } from 'react-router';
import { analyticsSharp, home } from 'ionicons/icons';
import './Page.css';
import { SyntheticEvent } from 'react';


const Mots: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  useIonViewWillEnter(() => {
    renderMot();
  });
  async function getIdMot(aMot: any) {
    let url = 'http://127.0.0.1:80/wk/try.php?type=defmot&mot=' + aMot;
    try {
      let res = await fetch(url);
      console.log(res);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getMot(aName: any) {
    let url = 'http://127.0.0.1:80/wk/try.php?type=idmot&id=' + aName;
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
      if (mot == "") {
        let htmlSegment = `<div class="user">
                              <h2>Mot non trouvé</h2>                         
                         </div>`;
        html += htmlSegment;
      } else {
        let htmlSegment = `<div class="user">
                              <h2>${mot[0].nom_mot}</h2>
                              <h2>${mot[0].definition}</h2>
                         </div>`;
        html += htmlSegment;
        console.log(mot);
        motsAChercher = mot[0].definition.split(' ')
        motsAChercher.forEach(async function (unMot: any) {
          try {
            if (unMot != "") {
              let idMot = await getIdMot(unMot);
              if (idMot != "") {
                let infoMot = await getMot(idMot[0].id);
                console.log(infoMot);
                if (infoMot != "" && unMot.toUpperCase() == infoMot[0].nom_mot.replace(/[^a-zA-Z ]/g, "")) {
                  let motHtml = `
                                <a href = "./page/mots/${infoMot[0].id}"><h2>${infoMot[0].nom_mot}</h2></a>`;
                  if (motContainer != null) {
                    motContainer.innerHTML += motHtml;
                  }
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
        <div id="container">
          Aucun mot valide défini
        </div>
        <h2>
          Mots associés:
        </h2>
        <div id="motsAssoc">
          Aucun mots associés
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
