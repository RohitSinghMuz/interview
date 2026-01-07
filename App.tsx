// import React from "react";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./native/language/locales/i18n";
// import LangScreen from "./native/language/LangScreen";


// function App() {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <LangScreen />
//     </I18nextProvider>
//   );
// }

// export default App;



import React from "react";
import { Provider } from "react-redux";
import store from "./native/reduxsaga/store";
import ProductScreen from "./native/reduxsaga/ProductScreen";


const App=()=>{
  return (
    <Provider store={store}>
      <ProductScreen />
    </Provider>
  );
}

export default  App

