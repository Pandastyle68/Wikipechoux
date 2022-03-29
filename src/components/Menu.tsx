import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { home, documentTextSharp, imagesSharp, albumsSharp, globeOutline, qrCodeOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import DarkMode from './DarkMode';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}


const appPages: AppPage[] = [
  {
    title: 'Accueil',
    url: '/page/',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Introduction',
    url: '/page/introduction',
    iosIcon: documentTextSharp,
    mdIcon: documentTextSharp
  },
  {
    title: 'Madeleine',
    url: '/page/madeleine',
    iosIcon: imagesSharp,
    mdIcon: imagesSharp
  },
  {
    title: 'Dossiers',
    url: '/page/dossier',
    iosIcon: albumsSharp,
    mdIcon: albumsSharp
  },
  {
    title: 'Mot aléatoire',
    url: '/page/motalea',
    iosIcon: globeOutline,
    mdIcon: globeOutline
  },
  {
    title: 'Flash code',
    url: '/page/flash',
    iosIcon: qrCodeOutline,
    mdIcon: qrCodeOutline
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu side="start" contentId="main" type="overlay" maxEdgeStart={100}>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <DarkMode/>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
