import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Display from './Components/Display'
import Gallery from './Components/Gallery/Gallery'
import Photos from './Components/Gallery/Photos'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ (props)=> <Display {...props} /> } exact/>
        <Route path="/gallery" component={ (props)=> <Gallery {...props} /> } exact/>
        <Route path="/gallery/photos/:id" component={ (props)=> <Photos {...props} /> } exact/>
      </Switch>
    </div>
  )
}

export default App
