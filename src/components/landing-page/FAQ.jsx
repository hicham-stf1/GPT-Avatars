import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
          <div className="space-y-4">
            {[
              {
                question: "How this UI Kit is different from others in market?",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              },
              {
                question: "How long do you provide support?",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              },
              {
                question: "Do I need any experience to work with Rareblocks?",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-1">
                  <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
                </div>

                <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
                  <h3>
                    <button
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                      className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8"
                    >
                      <span>{item.question}</span>
                      <span className="ml-4">
                        {activeIndex === index ? (
                          <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </h3>

                  {activeIndex === index && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
