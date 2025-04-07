import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "../src/style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/MyProvider.jsx";
import store from "./store/store.js";
import "./i18next.js";
import ThemeProvider from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <MyProvider>
          <App />
        </MyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
