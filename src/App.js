import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './component/head';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './page/home';
import Pelatihan from './page/pelatihan';
import NotFound from './page/notFound';
import Adart from './page/adart';
import NewsDaerah from './page/newsDaerah';
import NewsNusantara from './page/newsNusantara';
import NewsPemerintah from './page/newsPemerintah';
import NewsMuda from './page/newsMuda';
import Sejarah from './page/sejarah';
import Struktur from './page/struktur';
import Visimisi from './page/visimisi'
import { BrowserRouter as Router, Redirect ,Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar></Navbar>
        {(<Route path={`/home`} component={Home}/> || <Route path={`/`} component={Home}/>)}
        <Route path={`/notfound`} component={NotFound}></Route>
        <Route path={`/adart`} component={Adart}></Route>
        <Route path={'/pelatihan'} component={Pelatihan}/>
        <Route path={'/sejarah'} component={Sejarah}/>
        <Route path={'/struktur'} component={Struktur}/>
        <Route path={'/visimisi'} component={Visimisi}/>
        <Route path={'/news/daerah'} component={NewsDaerah}/>
        <Route path={'/news/nusantara'} component={NewsNusantara}/>
        <Route path={'/news/pemerintahan'} component={NewsPemerintah}/>
        <Route path={'/news/muda'} component={NewsMuda}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
