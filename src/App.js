import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addTexarea} from "./components/Redux/State";




const App = (p) => {
    return (
<BrowserRouter>
            <div className='CreateApp'>
                <Header/>
                <Navbar/>
              <div className='CreateApp-content'>
             <Routes>
             <Route path="/profile" element={<Profile state={p.State.profilePage} addPost={p.addPost} addTexarea={p.addTexarea}/>}/>
              <Route path="/dialogs" element={<Dialogs state={p.State.dialogsPage}/>}/>}/>
              </Routes>
                </div>
            </div>

</BrowserRouter>
    )
}

export default App;
