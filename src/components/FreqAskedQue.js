import React from "react";
import Container from "./Container";
import { ACCORDIAN_ITEMS } from "./constants";
import { useForm, ValidationError } from "@formspree/react";

const FreqAskedQue = () => {
  return (
    <div className="mb-[12rem]">
      <div className="py-16">
        <Container>
          <h1 className="p-8 text-4xl font-medium text-gray-100 uppercase rounded-lg bg-cloudone-blue">
            Frequently Asked Questions
          </h1>
          <div className="lg:flex lg:gap-8">
            <div className="pt-8 lg:w-[50%]">
              {ACCORDIAN_ITEMS.map((item) => (
                <Accordian question={item.question} answer={item.answer} />
              ))}
            </div>
            <ContactForm className="lg:w-[50%]" />
          </div>
        </Container>
      </div>
    </div>
  );
};

const Accordian = ({ question, answer }) => (
  <details className="p-8 mt-4 text-gray-200 bg-cloudone-blue rounded-xl">
    <summary className="cursor-pointer">{question}</summary>
    <p className="pt-4 border-t-[1px] mt-4 border-black/20">{answer}</p>
  </details>
);

const ContactForm = ({ className }) => {
  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     console.log("yo");
  //   };

  const [state, handleSubmit] = useForm("mwpkrqqq");
  if (state.succeeded) {
    return (
      <div
        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 border border-green-300"
        role="alert"
      >
        <strong>Success!</strong> We will get in touch with you shortly!
      </div>
    );
  }

  return (
    <div
      className={`p-8 h-fit flex-shrink-0 bg-cloudone-blue rounded-xl mt-12 text-gray-200 ${
        className === undefined ? "" : className
      }`}
    >
      <p className="uppercase">Ask your question</p>
      <div className="pt-4 border-t-[1px] mt-4 border-black/20">
        <form onSubmit={handleSubmit} id="contact">
          <fieldset className="mt-4">
            <label className="block mb-2 uppercase">Name</label>
            <input
              id="name"
              className="w-full p-4 rounded-lg text-cloudone-blue"
              placeholder="Enter your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </fieldset>
          <fieldset className="mt-4">
            <label className="block mb-2 uppercase ">Email</label>
            <input
              id="email"
              className="w-full p-4 rounded-lg text-cloudone-blue"
              placeholder="Enter your email"
              type="email"
              tabindex="2"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </fieldset>
          <fieldset className="mt-4">
            <label className="block mb-2 uppercase">Your question</label>
            <textarea
              className="w-full p-4 rounded-lg text-cloudone-blue"
              rows="4"
              placeholder="Enter your question here ...."
              tabindex="5"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </fieldset>
          <fieldset className="mt-4">
            <button
              className="w-full p-4 mt-2 text-lg font-bold text-[#20343c] bg-yellow-500  rounded-xl"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FreqAskedQue;
