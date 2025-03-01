
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-r from-green-50 to-green-100 py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('hero.description')}
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              {t('hero.cta')}
            </Button>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://youtu.be/wgAIqKJA4Sk?si=efGVOGenF_JNNwRL"
              title="Product Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
