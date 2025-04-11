
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('common');  // Using 'common' namespace for translations

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-sm">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">{t('footer.home')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.products')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.contact')}</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">{t('footer.information')}</h3>
            <ul className="text-sm space-y-3">
              <li>{t('footer.email')}: support@lifeisnatural.eu</li>
              <li>Poszonyi út</li>
              <li>Budapest</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
