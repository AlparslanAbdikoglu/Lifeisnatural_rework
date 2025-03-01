import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
  const { t } = useTranslation('common'); // Use 'common' namespace for translations

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {t('faq.title')} {/* Localized title */}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('faq.question1')}</AccordionTrigger> {/* Localized question */}
            <AccordionContent>
              {t('faq.answer1')} {/* Localized answer */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>{t('faq.question2')}</AccordionTrigger> {/* Localized question */}
            <AccordionContent>
              {t('faq.answer2')} {/* Localized answer */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>{t('faq.question3')}</AccordionTrigger> {/* Localized question */}
            <AccordionContent>
              {t('faq.answer3')} {/* Localized answer */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>{t('faq.question4')}</AccordionTrigger> {/* Localized question */}
            <AccordionContent>
              {t('faq.answer4')} {/* Localized answer */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>{t('faq.question5')}</AccordionTrigger> {/* Localized question */}
            <AccordionContent>
              {t('faq.answer5')} {/* Localized answer */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
