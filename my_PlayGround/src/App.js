// import Counter from './components/Counter';
import React, {useEffect, useState} from 'react';
import Home from './components/Home'
import Profile from "./components/profile";
import Settings from './components/settings';
import Error from './components/error';
// import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Datatable from './components/table';
// import Demo from './components/tablecopy';
import Details from './components/details'
import Practice from './components/practice';
import MiniDrawer from './components/drawer';
import ListComponent from './components/listvirtualization/ListComponent';
import Resumeuploader from './components/ResumeUploaderPro/ResumeUploader';
// import ReactWindowTable from "./components/ReactWindowTable/ReactWindowTable"
// import { COLUMNS } from "../src/components/constants";
// import { createData } from "../src/components/data";
// import ReactVirtualizedTable from './components/MuiVirtualizedTable';
// import { Router } from 'react-router-dom';
// import { renderRoutes } from "react-router-config";
// const columns = COLUMNS;

// create mock data
// const data = createData();
function App() {

const routes = [{
  path: ["/", "/Home"],
  exact: true,
  component: <Home/>,
},
// {
//   path: "/ReactWindowTable",
//   exact: false,
//   component: <ReactWindowTable data={data} columns={columns} />,
// },
 {
  path: "/PROFILE",
  exact: false,
  component: <Profile/>,
}, {
  path: "/Settings",
  exact: false,
  component: <Settings/>,
}, {
  path: "/Datatable",
  exact: false,
  component: <Datatable/>,
},{
  path: "/Details",
  exact: false,
  component: <Details/>,
},{
  path: "/Practice",
  exact: false,
  component: <Practice/>,
},{
  path: "/Resumeuploader",
  exact: false,
  component: <Resumeuploader/>,
},{
  path: "/MiniDrawer",
  exact: false,
  component: <MiniDrawer/>,
},
{
  path: "/ListComponent",
  exact: false,
  component: <ListComponent/>,
},
{
  path: "*",
  exact: false,
  component: <Error/>,
}];
 const routeComponents = routes.map(({path, exact, component}) => {
 return <Route exact={exact} path={path}>{component}</Route>
// return (
//   <div>
//     <Router>{renderRoutes(routes)}</Router>
//   </div>
// );
});


  // let givenComponents = ["Home", "Profile", "Settings"].map((mappedComponent) => {
  //   return <Route path={mappedComponent} element={<mappedComponent/>}/>
  // })
  // const [components, setComponents] = useState(givenComponents);
  return (
<Switch>
{/* <Routes> */}
{/* <Route exact path='/'><Home /></Route></Switch>
    
    
    ); */}
{routeComponents}
{/* <Router>{renderRoutes(routes)}</Router> */}
{/* {givenComponents.map((mappedComponent) => {
  <Route path={mappedComponent} element={<mappedComponent/>}/>
})} */}
{/* <Route path='/' element={<Home/>}/> */}

      {/* <Route path='Home' element={<Home/>}/>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='settings' element={<Settings/>}/> */}
        {/* {givenComponents} */}

        {/* <Route exact path='*' element={<Error/>}/> */}
        
    {/* </Routes> */}
</Switch>
    
    
  );
}

export default App;
