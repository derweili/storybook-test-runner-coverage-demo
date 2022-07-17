import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { ThemeProvider } from '../..';
import * as data from '../../locales/de/translations.json';
import i18n from 'i18next';
import '@testing-library/jest-dom'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: {data}
      }
    },
    fallbackLng: 'de',
    lng: 'de',
    load: "languageOnly",
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

const AllProviders: FC<{}> = ({children}) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
          {children}
      </ThemeProvider>
    </I18nextProvider>
  );
};

export const customRender = (
  ui: ReactElement,
  wrapperProps = {},
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: (props) => <AllProviders {...props} {...wrapperProps} />, ...options });

export { customRender as render };