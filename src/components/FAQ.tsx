import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
         Gyakran Ismételt kérdések
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 business days within the continental US. 
              Express shipping options are available at checkout for faster delivery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for all unopened items in their original packaging. 
              For defective items, we provide free returns and exchanges within 90 days of purchase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
            <AccordionContent>
              Yes, we ship to most countries worldwide. International shipping times and costs vary 
              by location. Specific delivery estimates will be provided at checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Are your products covered by warranty?</AccordionTrigger>
            <AccordionContent>
              All our products come with a minimum 1-year manufacturer's warranty. 
              Extended warranty options are available for select items at checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order ships, you'll receive a tracking number via email. 
              You can use this number to track your package on our website or the carrier's site.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};