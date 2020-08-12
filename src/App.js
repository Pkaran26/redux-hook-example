import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Display from './Components/Display'
import Gallery from './Components/Gallery/Gallery'
import Photos from './Components/Gallery/Photos'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container" style={{ marginTop: '40px' }}>
        <Switch>
          <Route path="/" component={ (props)=> <Display {...props} /> } exact/>
          <Route path="/gallery" component={ (props)=> <Gallery {...props} /> } exact/>
          <Route path="/gallery/photos/:id" component={ (props)=> <Photos {...props} /> } exact/>
        </Switch>
      </div>
    </div>
  )
}

export default App
