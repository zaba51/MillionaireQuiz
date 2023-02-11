import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { FreezeProvider } from 'hooks/useFreeze';
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

export type Tlayout = {
    children?: ReactNode;
}

const AppProviders: FC<Tlayout> = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <FreezeProvider>
                    <BrowserRouter>
                        <GlobalStyle />
                        {children}
                    </BrowserRouter>
                </FreezeProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default AppProviders;