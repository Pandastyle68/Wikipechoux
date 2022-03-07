import { IonApp, IonRouterOutlet, IonSplitPane, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Timeimage from './pages/1440';
import Recherche from './pages/Recherche';
import Ptest from './pages/test';
import Introduction from './pages/Introduction';
import Drapeaux from './pages/Drapeau';
import MotAlea from './pages/MotAlea';
import Mots from './pages/Mots';
import Pmadeleine from './pages/Madeleine';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" when={"min-width:40px"}>
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/search" exact={true}>
              <Recherche />
            </Route>
            <Route path="/page/" exact={true}>
              <Page />
            </Route>
            <Route path="/page/madeleine" exact={true}>
              <Pmadeleine />
            </Route>
            <Route path="/" exact={true}>
              <Page />
            </Route>
            <Route path="/page/test" exact={true}>
              <Ptest />
            </Route>
            <Route path="/page/introduction" exact={true}>
              <Introduction />
            </Route>
            <Route path="/page/1440" exact={true}>
              <Timeimage />
            </Route>
            <Route path="/page/drapeaux" exact={true}>
              <Drapeaux />
            </Route>
            <Route path="/page/motalea" exact={true}>
              <MotAlea />
            </Route>
            <Route path="/page/mots/:name" exact={true}>
              <Mots />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
