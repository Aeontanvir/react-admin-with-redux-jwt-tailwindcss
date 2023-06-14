import React from "react";

const HomePage = () => {
  return (
      <main className="flex-grow bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Track Project Expenses</h2>
            <p className="text-gray-800 mb-6">
              Take control of your project budgets and track expenses with ease.
              Stay on top of your spending and make informed decisions for
              successful project outcomes.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
              Sign Up Now
            </button>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Generate Reports</h2>
            <p className="text-gray-800 mb-6">
              Generate comprehensive reports and create customizable dashboards
              to visualize project costs. Gain insights, analyze trends, and
              make data-driven decisions for your projects.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
              Sign Up Now
            </button>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
            <p className="text-gray-800 mb-6">
              Sign up for the Project Costing App and start managing your
              project expenses with ease. Take control of your budgets, track
              spending, and make informed decisions for successful project
              outcomes.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
              Sign Up Now
            </button>
          </section>
        </div>
      </main>
  );
};

export default HomePage;
