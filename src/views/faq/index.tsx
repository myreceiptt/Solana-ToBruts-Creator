import React, { FC } from "react";

export const FaqView: FC = ({}) => {
  const questions = [
    {
      question: "What is the question number one?",
      answer: "The answer to question number one is the Solana tobruts creator tools. It makes the force always together with us. In the bloody market, tobruts will grow bigger and better. On the Solana, the powerful tools rule them all.",
      id: "faq-1",
    },
    {
      question: "What is the question number two?",
      answer: "The answer to question number two is the Solana tobruts creator tools. It makes the force always together with us. In the bloody market, tobruts will grow bigger and better. On the Solana, the powerful tools rule them all.",
      id: "faq-2",
    },
    {
      question: "What is the question number three?",
      answer: "The answer to question number three is the Solana tobruts creator tools. It makes the force always together with us. In the bloody market, tobruts will grow bigger and better. On the Solana, the powerful tools rule them all.",
      id: "faq-3",
    },
    {
      question: "What is the question number four?",
      answer: "The answer to question number four is the Solana tobruts creator tools. It makes the force always together with us. In the bloody market, tobruts will grow bigger and better. On the Solana, the powerful tools rule them all.",
      id: "faq-4",
    },
    {
      question: "What is the question number five?",
      answer: "The answer to question number five is the Solana tobruts creator tools. It makes the force always together with us. In the bloody market, tobruts will grow bigger and better. On the Solana, the powerful tools rule them all.",
      id: "faq-5",
    },
    {
      question: "What is the question number six?",
      answer: "The answer to question number six is the Solana tobruts creator tools. It makes the force always together with us. In the bloody market, tobruts will grow bigger and better. On the Solana, the powerful tools rule them all.",
      id: "faq-6",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Find the answer for any frequently asked question about Solana
              tobruts creator.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div
            className="hs-accordion-group space-y-4"
            data-hs-accordion-always-open="false"
          >
            {questions.map((faq, index) => (
              <div
                key={index}
                className={`hs-accordion bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl`}
                id={faq.id}
              >
                <button
                  className="hs-accordion-toggle inline-flex items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
                  aria-controls={`faq-accordion-${index + 1}`}
                >
                  <h5 className="flex text-base font-semibold">
                    <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
                    {faq.question}
                  </h5>
                  <i className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"></i>
                </button>
                <div
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  // aria-labelledby={`faq-accordion-${index + 1}`}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-default-300 mb-2 text-sm font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
