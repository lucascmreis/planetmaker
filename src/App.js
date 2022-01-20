import './styles/global.scss';

import { RoutesComponent } from './routes';
import { PlanetProvider } from './hooks/usePlanet';

const App = () => {
  return (
    <PlanetProvider>
      <RoutesComponent />
    </PlanetProvider>

  );
}

export default App;
