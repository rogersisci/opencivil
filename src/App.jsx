import Header from './components/Header';
import Hero from './components/Hero';
import WorkoutSession from './components/WorkoutSession';
import WorkoutGallery from './components/WorkoutGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WorkoutSession />
      <WorkoutGallery />      
      <ContactForm />    
      <Footer />
    </div>
  );
}

export default App;