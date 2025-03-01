import { useTranslation } from 'react-i18next';

export const TextSection = () => {
  const { t } = useTranslation('common');  // Using 'common' namespace for translations

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('textSection.title')}  {/* Dynamic title from translations */}
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>{t('textSection.description.part1')}</p>  {/* Dynamic content */}
            <p>{t('textSection.description.part2')}</p>  {/* Dynamic content */}
            <p>{t('textSection.description.part3')}</p>  {/* Dynamic content */}
          </div>
        </div>
      </div>
    </div>
  );
};
