import React from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Rank from './components/Rank/Rank';
import NavParent from './NavParent';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const particlesOption = {
      "particles": {
          "number": {
              "value": 20
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              }
          }
      }
  } 

const app = new Clarifai.App({
 apiKey: '14a5eb77d0094e099dbedb3ff668bf79'
});

const initialState = {
      route: 'signin',
      isSignedIn: false,
      input: '',
      imageUrl: '',
      box: {},

      currentUser: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }

class App extends React.Component {
  constructor(){
    super()
    this.state = initialState;

  }


  loadUser = (user) => {
    this.setState({currentUser: {
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    }})
  }

  resetState = () => {
    this.setState(initialState)
    console.log('state just cleared')
  }

  routeChange = (route) => {
    this.setState({route: route})
    if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    else{
      this.setState({isSignedIn: false})
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  outLineFaces = (box) => {
    this.setState({box: box})
  }

  onInput = (event) =>{
    this.setState({input: event.target.value})
  }

  onDetect = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      this.outLineFaces(this.calculateFaceLocation(response))
      if(response){
        fetch('https://salty-beach-47396.herokuapp.com/image', {
          method: 'put',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({
            id: this.state.currentUser.id
          })
        })
        .then(response => response.json())
        .then(count => {Object.assign(this.state.currentUser, {entries: count})})
      }
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={particlesOption} />
        <NavParent resetState = {this.resetState} routeChange = {this.routeChange} isSignedIn = {this.state.isSignedIn} />
        {
          this.state.route === 'home'
          ?
          <div>
            <Rank name = {this.state.currentUser.name} entries = {this.state.currentUser.entries} />
            <ImageLinkForm onDetect = {this.onDetect} onInputChange={this.onInput}/>
            <FaceRecognition box = {this.state.box} image = {this.state.imageUrl}/>
          </div>
          :
          (
            this.state.route === 'signin'
            ? <Signin loadUser = {this.loadUser} routeChange = {this.routeChange}/>
            : <Register loadUser = {this.loadUser} routeChange = {this.routeChange} />
          )
        }
      </div>
    );
  }
}

export default App;
