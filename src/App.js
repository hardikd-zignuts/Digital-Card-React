import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <About title="About" introduction="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
      <About title="Interests" introduction="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
      <Footer />
    </div>
  );
}

export default App;
