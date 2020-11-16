import { render } from '@testing-library/react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }: any) => children;
// return (
//   <ThemeProvider theme="light">
//     <TranslationProvider messages={defaultStrings}>
//       {children}
//     </TranslationProvider>
//   </ThemeProvider>
// )
const customRender = (ui: any, options = {}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  render(ui, { wrapper: Providers as any, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
