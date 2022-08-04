import Routes from './Routes';
const background = require('./assets/wave-cafe-video-bg.mp4')

function App() {
  return (
    <div className="App">
      <video id="background-video" autoPlay loop muted style={{
        width: '100vw', 
        height: '100vh', 
        objectFit: 'cover', 
        position: 'fixed', 
        left: 0, 
        right: 0,
        top: 0, 
        bottom: 0, 
        zIndex: -1
      }} 
      >
        <source src={background.default} type="video/mp4"/>
      </video>
      <Routes/>
    </div>
  );
}

export default App;
