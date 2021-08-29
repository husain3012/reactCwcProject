import React from "react";
import FaqComponent from "../Faq/FaqComponent";

const FaqSection = () => {
  const faqs = [
    {
      ques: "How does brand name earn money?",
      ans: <p>Glad you asked. No fees, no hidden charges. We earn a small fee from the mutual fund companies. The exact commissions are on our side.</p>,
    },
    {
      ques: "How soon can I start investing?",
      ans: <p>We'll have you up and running in just a few hours. As soon as you complete your registration, and we verify the details. You can start investing via Internet Banking/UPI ID/Auto Debit payment methods.</p>,
    },
    {
      ques: "Why should I invest through brandname",
      ans: (
        <p>
          Unbiased recommendations, a single view of your investments, automated performance tracking, timely alerts for course corrections, easy investment process, tax efficient withdrawals. There’s more, but do ask our customers, we have
          a retention rate of 95%. We really are good people!
        </p>
      ),
    },
    {
      ques: "Can I add a family member to my brand name investment account?",
      ans: (
        <p>
          Absolutely. Just use ‘Add a Family Member’ in your brand name account. This new account will be linked to your existing brand name account, and you’ll get a single dashboard that helps you make better decisions, with information
          and insights.
        </p>
      ),
    },
    {
      ques: "Can I invest in funds other than the ones brand name recommends?",
      ans: <p>Yes, you can. But then again, would you really want to do that when our recommendations are backed by a time-tested process and an unbiased algorithm that has beaten benchmarks, in 8 out of 9 years?</p>,
    },
    {
      ques: "How do you ensure that my money is secure?",
      ans: (
        <p>
          We have invested in technology that ensures the system’s security. Our money is invested here too, remember? Your money moves directly from your bank to the mutual fund account, and a record of your investments is stored
          electronically by the mutual fund company, which will send you regular statements too.
        </p>
      ),
    },
  ];

  return (
    <div className="home-wealth-faq wealth-section-space wealth-faq-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="wealth-section-title">Frequently asked questions</h2>
            <div className="accordion wealth-faq-collapse-wrapper" id="faq-accordion-set-1" itemScope="" itemType="https://schema.org/FAQPage">
              <div className="d-flex justify-content-evenly">
                <div className="">
                  {faqs.map((faq) => (
                    <FaqComponent faq={faq} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
