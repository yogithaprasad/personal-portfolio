import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto max-w-4xl p-4 md:p-8">
        <Header />
        <About />
        <Projects />
        <ContactForm />
      </div>
    </main>
  )
}