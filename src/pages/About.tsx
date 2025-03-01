
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Rólunk:</h1>
            <div className="prose prose-lg">
              <p className="mb-6">
              A Life is Natural célja, hogy a legjobb minőségű CBD-vel dúsított italokat kínálja Önnek.
                Küldetésünk, hogy gondosan kidolgozott termékekkel fokozzuk a napi wellness rutinját.
                amelyek a CBD előnyeit prémium minőségű kávé- és teakeverékekkel kombinálják.
              </p>
              <p className="mb-6">
              2024-ben alapítottuk, közvetlenül a biogazdákkal dolgozunk együtt, és a legmodernebb technológiát alkalmazzuk.
              kivonási módszereket alkalmazunk, hogy minden általunk kínált termékünk a legmagasabb minőséget biztosítsuk.
              </p>
              <p className="mb-8">
              A minőség, a fenntarthatóság és az ügyfélelégedettség iránti elkötelezettségünk vezérel minket
                minden tevékenységünket. Hiszünk az átláthatóságban, az oktatásban, és a prémium CBD
                termékeket mindenki számára elérhetővé tesszük.
              </p>
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Our workspace"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
