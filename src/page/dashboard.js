import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from './login'
import { BrowserRouter as Router, Redirect ,Route,Switch} from "react-router-dom"
import Addnews from './addnews'
import Addcar from './addcar'
import Addfiles from './addfiles'
import Addsosok from './addsosok'

export class Dashboard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
      if(localStorage.token){
        return (
            <div style={{marginTop:10+"%"}}>
            <link rel="stylesheet" href="/css/Kontak.css"/>
            <section className="main-content">
                <div className="container">
                    <h4 id="berita">Tambah Data</h4>
                    <a href="/admin/addnews"><button className="btn btn-primary" id="kirim">News</button></a>
                    <a href="/admin/addsosok"><button className="btn btn-primary" id="kirim">Sosok</button></a>
                    <a href="/admin/addfiles"><button className="btn btn-primary" id="kirim">Files</button></a>
                    <a href="/admin/addcarousel"><button className="btn btn-primary" id="kirim">Carousel</button></a>
                    <Switch>
                        <Route path="/admin/addnews" component={Addnews}/>
                        <Route path="/admin/addsosok" component={Addsosok}/>
                        <Route path="/admin/addfiles" component={Addfiles}/>
                        <Route path="/admin/addcarousel" component={Addcar}/>
                    </Switch>    
                </div>
            </section>
            </div>
            
          )
      }else{
          return(
            <Login></Login>
          )
      }
    
  }
}



export default Dashboard
