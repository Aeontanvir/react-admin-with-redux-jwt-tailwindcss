import React from "react";

const ContactPage = () => {
  return (
    <main className="container mx-auto py-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-800">
          Have any questions or feedback? We'd love to hear from you! Fill out
          the form below and we'll get back to you as soon as possible.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-800 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
