import "./index.css";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // yeh <Provider> component react-redux se aa rha ha and then store property me 'store' import kr lenge from store.js
  // to ab hmari puri application me 'redux store' activate ho gya ha kyuki <App/> component ko maine <Provider> me
  // wrap kra ha 
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
);
