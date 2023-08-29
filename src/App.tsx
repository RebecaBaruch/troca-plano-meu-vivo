import React from 'react';
import './App.css';
import { 
  Box, 
  ResponsiveLayout,
  Text6,

} from '@telefonica/mistica';

function App() {
  return (
    <>
      <Box>
        <ResponsiveLayout>
          <React.Fragment>
            <Box>
              <Text6 as='p'>Tenha ainda mais velocidade por até R$x por mês</Text6>
            </Box>
          </React.Fragment>
        </ResponsiveLayout>
      </Box>
    </>
  );
}

export default App;
