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
import Dossier from './pages/Dossier';
import JTete from './pages/JeuTeteBrulee';
import JPelerin from './pages/JeuPelerin';
import TTransport from './pages/TabTransport';
import TMesure from './pages/TabMesure';
import CCrustace from './pages/CalCrustaces';
import CFruit from './pages/CalFruit';
import CPoisson from './pages/CalPoisson';
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
import LexMaux from './pages/LexMaux';
import LexTrouille from './pages/LexTrouille';
import Lexanimal from './pages/LexAnimal';
import LexMer from './pages/LexMer';
import LexMed from './pages/LexMed';
import Gentiles from './pages/Gentiles';
import Brach from './pages/Brachygraphie';
import ColCollec from './pages/Colcollec';
import FormChim from './pages/Formchim';
import Epilation from './pages/Epilation';
import Culture from './pages/Culture';
import Proverbe from './pages/Proverbes';
import Verbe from './pages/Verbes';
import Lexpres from './pages/LexPres';
import FausDef from './pages/FausDef';
import MemAffixe from './pages/MemAffix';
import LexMulti from './pages/LexMulti';
import Lexirr from './pages/LexIrr';

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
            <Route path="/page/dossier" exact={true}>
              <Dossier />
            </Route>
            <Route path="/page/tetebrulee" exact={true}>
              <JTete />
            </Route>
            <Route path="/page/pelerin" exact={true}>
              <JPelerin />
            </Route>
            <Route path="/page/tabmesure" exact={true}>
              <TMesure />
            </Route>
            <Route path="/page/tabtransport" exact={true}>
              <TTransport />
            </Route>
            <Route path="/page/calcrustaces" exact={true}>
              <CCrustace />
            </Route>
            <Route path="/page/calfruit" exact={true}>
              <CFruit />
            </Route>
            <Route path="/page/calpoisson" exact={true}>
              <CPoisson />
            </Route>
            <Route path="/page/lexmaux" exact={true}>
              <LexMaux />
            </Route>
            <Route path="/page/lextrouille" exact={true}>
              <LexTrouille />
            </Route>
            <Route path="/page/lexanimal" exact={true}>
              <Lexanimal />
            </Route>
            <Route path="/page/lexmer" exact={true}>
              <LexMer />
            </Route>
            <Route path="/page/lexmed" exact={true}>
              <LexMed />
            </Route>
            <Route path="/page/gentiles" exact={true}>
              <Gentiles />
            </Route>
            <Route path="/page/brachygraphie" exact={true}>
              <Brach />
            </Route>
            <Route path="/page/colcollec" exact={true}>
              <ColCollec />
            </Route>
            <Route path="/page/formchim" exact={true}>
              <FormChim />
            </Route>
            <Route path="/page/epilation" exact={true}>
              <Epilation />
            </Route>
            <Route path="/page/culture" exact={true}>
              <Culture />
            </Route>
            <Route path="/page/proverbes" exact={true}>
              <Proverbe />
            </Route>
            <Route path="/page/verbes" exact={true}>
              <Verbe />
            </Route>
            <Route path="/page/lexpres" exact={true}>
              <Lexpres />
            </Route>
            <Route path="/page/fausdef" exact={true}>
              <FausDef />
            </Route>
            <Route path="/page/memaffixe" exact={true}>
              <MemAffixe />
            </Route>
            <Route path="/page/petlexi" exact={true}>
              <LexMulti />
            </Route>
            <Route path="/page/lexmotirr" exact={true}>
              <Lexirr />
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
