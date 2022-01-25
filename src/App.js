import './styles/global.scss';

import { RoutesComponent } from './routes';
import { PlanetProvider } from './hooks/usePlanet';
import { Header } from './components/Header';

const App = () => {
  return (
    <PlanetProvider>
      <Header />
      <RoutesComponent />
    </PlanetProvider>

  );
}

export default App;
