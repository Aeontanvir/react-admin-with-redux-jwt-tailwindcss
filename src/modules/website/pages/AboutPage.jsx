import React from 'react'

const AboutPage = () => {
  return (
    <main className="container mx-auto py-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Welcome to Project Costing App
        </h2>
        <p className="text-gray-800">
          This app allows you to manage project costs and track expenses. It
          provides an intuitive interface to create and update project details,
          estimate costs, and monitor expenditures.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          <li>Manage project details and specifications</li>
          <li>
            Create cost estimates for labor, materials, and other expenses
          </li>
          <li>Track and update actual project expenses</li>
          <li>Generate reports for cost analysis and project budgeting</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-800">
          To get started, sign in to your account or create a new account if you
          don't have one. Once logged in, you can start creating projects,
          estimating costs, and managing your project expenses.
        </p>
        <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4">
          Sign In
        </button>
      </section>
    </main>
  );
}

export default AboutPage;
