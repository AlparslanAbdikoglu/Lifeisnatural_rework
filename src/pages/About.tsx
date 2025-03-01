import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('common'); // Default namespace will be used

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('about.title')}</h1>
            <div className="prose prose-lg">
              <p className="mb-6">{t('about.description.part1')}</p>
              <p className="mb-6">{t('about.description.part2')}</p>
              <p className="mb-8">{t('about.description.part3')}</p>
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
              alt={t('about.imageAlt')}
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
