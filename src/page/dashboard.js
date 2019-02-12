import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from './login'
import { BrowserRouter as Router, Redirect ,Route,Switch} from "react-router-dom"
import Addnews from './addnews'
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
                    <a href="/admin/addnews"><button className="btn btn-primary" id="kirim">News & sosok</button></a>
                    <a href="/admin/addfiles"><button className="btn btn-primary" id="kirim">Files</button></a>
                    <Switch>
                        <Route path="/admin/addnews" component={Addnews}/>
                        <Route path="/admin/addfiles" component={Addfiles}/>
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
