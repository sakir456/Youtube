import Body from "./components/Body.js";

import { Provider } from "react-redux";
import store from "./utils/store";
import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";
import SearchBarResults from "./components/SearchBarResults.js";

const appRouter = createBrowserRouter([{

  path: "/",
  element: <Body />,
  children: [
    {
    path: "/",
    element: <MainContainer />
  },
  {
    path:"watch",
    element: <WatchPage />
  },
  {
    path: "results",
    element: <SearchBarResults />,
  },
 
  ],
  
}])
function App() {
  return (

    <Provider store={store}>
    <div>
    <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;































// import Body from "./components/Body.js";
// import Head from "./components/Head";
// import { Provider } from "react-redux";
// import store from "./utils/store";
// import "./App.css"
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainContainer from "./components/MainContainer.js";
// import WatchPage from "./components/WatchPage.js";
// import SearchBarResults from "./components/SearchBarResults.js";


// const appRouter = createBrowserRouter([{
//   path: "/",
//   element: <Body />,
//   children: [
//     {
//     path: "/",
//     element: <MainContainer />
//   },
//   {
//     path:"watch",
//     element: <WatchPage />
//   },
//   {
//     path: "search",  // Add the search route
//     element: <SearchBarResults />,
//   },

//   ]
// }])
// function App() {
//   return (

//     <Provider store={store}>
//     <div>
//     <Head  />
//     <RouterProvider router={appRouter} />
//     </div>
//     </Provider>
//   );
// }

// export default App;
