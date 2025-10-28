import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ContextProvider } from './PlanKeeper/plankeeperst/planKeeperContext';
import PlanKeeperStack from './PlanKeeper/plankeepernv/PlanKeeperStack';
import Toast from 'react-native-toast-message';
import PlanKeeperLoader from './PlanKeeper/plankeepercmp/PlanKeeperLoader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4600);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isLoading ? <PlanKeeperLoader /> : <PlanKeeperStack />}
        <Toast position="top" topOffset={60} />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
