import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import { BrowserRouter } from "react-router-dom";
import {Route} from "react-router-dom"
import {Routes} from "react-router-dom"

ReactDOM.render(
	<React.StrictMode>
	  <BrowserRouter>
		<Routes>
		  <Route path="*" element={ <App /> }>
		  </Route>
		</Routes>
	  </BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
  );
registerServiceWorker();
applyPolyfills().then(() => {
  defineCustomElements(window);
});