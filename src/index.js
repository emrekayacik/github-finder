import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from "./routes/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
        <AppRouter />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals(console.log);
