import React from "react";

const AboutUsComponent = () => {
  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <div className="mb-4 text-4xl font-extrabold text-gray-900">
            We didn't reinvent the wheel
          </div>
          <div className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </div>
          <div>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10"
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
