import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './app/App.tsx';
import {ThemeProvider} from 'styled-components';
import {theme} from './app/styles/Theme.styled.tsx';
import {GlobalStyle} from './app/styles/GlobalStyle.styled.tsx';
import {HelmetProvider} from 'react-helmet-async';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <ThemeProvider theme = {theme}>
            <GlobalStyle/>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </ThemeProvider>
    </StrictMode>
)