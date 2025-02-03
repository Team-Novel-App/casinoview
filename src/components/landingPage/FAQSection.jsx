import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
   
    question: "How do I create a Casino Account?",
    answer: "Creating a casino account is simple and secure. Visit our registration page, fill in your personal details, verify your email address, and complete the identity verification process."
  },
  {
    
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, e-wallets, bank transfers, and cryptocurrency. All transactions are processed securely."
  },
  {
    
    question: "How can I ensure responsible gaming?",
    answer: "We promote responsible gaming through deposit limits, self-exclusion options, and reality checks."
  },
  {
   
    question: "What games are available?",
    answer: "Our platform offers slots, table games, live dealer games, and specialty games from top providers."
  },
  {
    
    question: "How do I withdraw my winnings?",
    answer: "Navigate to the cashier section, select your withdrawal method, and follow verification steps."
  },
  {
    
    question: "Is my personal information secure?",
    answer: "Yes, we use state-of-the-art encryption and security measures to protect your personal information."
  },
  {
    
    question: "How do I withdraw my winnings?",
    answer: "Navigate to the cashier section, select your withdrawal method, and follow verification steps."
  },
  {
    
    question: "Is my personal information secure?",
    answer: "Yes, we use state-of-the-art encryption and security measures to protect your personal information."
  }
];

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="hover:gradient-border  h-fit rounded-lg overflow-hidden bg-white/5 ">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center  transition duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[white]" />
        ) : (
          <ChevronDown className="w-6 h-6  text-[white]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-fit-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4">
          <p className="text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    console.log(index);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white/5 text-white py-[100px] px-4"
      style={{ backgroundImage: "url('/assets/images/bgfaq.png')", backgroundSize: "cover !important" }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl  font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          A casino is a facility for certain types of gambling. Casinos are often built combined with hotels and resorts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
