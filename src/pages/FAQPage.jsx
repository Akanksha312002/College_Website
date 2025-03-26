import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I apply for admission?",
    answer: "You can apply online through our official college website under the 'Admissions' section. Follow the instructions and submit the required documents."
  },
  {
    question: "What are the available courses?",
    answer: "Our college offers various undergraduate and postgraduate courses in science, commerce, and humanities. Visit the 'Academics' page for a detailed list."
  },
  {
    question: "How can I check the event calendar?",
    answer: "You can check our event calendar on the 'Events' page, where all upcoming academic and extracurricular activities are listed."
  },
  {
    question: "What facilities does the campus provide?",
    answer: "We provide well-equipped labs, a digital library, hostels, sports facilities, and a cafeteria. Visit the 'Campus Facilities' page for more details."
  },
  {
    question: "How do I contact the administration?",
    answer: "You can contact us via email or phone, listed on the 'Contact Us' page. You can also visit the administrative office during working hours."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-navy-700 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <button
              className="flex justify-between items-center w-full text-lg font-semibold text-navy-700"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
