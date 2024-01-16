// import logo from './logo.svg';
import './App.css';
import Cardcarousel from './component/Cardcarousel'
import Foot from './component/Footer';
import ChangingCard from './component/ChangingCard';
import ReviewHome from './component/ReviewHome';
import FAQ from './component/FAQ';
import WhyUs from './component/WhyUs';
import Plan from './component/PricingCard';
import Navbar from './component/navbar';
import Home from './pages/Home';
import ChatBot from './component/chatbot';

function App() {
  return (
    <div>
      <Navbar/>
      <ChatBot />
      <Foot/>
    </div>
    
  );
}

export default App;
