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
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

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
    iosIcon: archiveSharp,
    mdIcon: archiveSharp
  },
  {
    title: 'Introduction',
    url: '/page/introduction',
    iosIcon: archiveSharp,
    mdIcon: archiveSharp
  },
  {
    title: 'Vers page test',
    url: '/page/test',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Dossiers',
    url: '/page/dossiers',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Mot aléatoire',
    url: '/page/motalea',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Flash code',
    url: '/page/flash',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Livres',
    url: '/page/livres',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Musiques',
    url: '/page/music',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Historique',
    url: '/page/historique',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
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
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
