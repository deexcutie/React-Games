import React from "react";

export default function test() {
  return (
    <div>
      <header>
        <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="https://flowbite.com" className="flex items-center">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                EduLearn
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
              >
                Log in
              </a>
              <a
                href="#"
                className="dark:bg-primary-600 mr-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:px-5 lg:py-2.5"
              >
                Start Learning!
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="#"
                    className="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    classNameroom
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Teachers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Let's learn about new knowledge and abilities
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Let's discover new knowledge and new friends and have a fun
              learning experience.
            </p>
            <a
              href="#"
              className="focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4"
            >
              Get started
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden overflow-hidden rounded-md lg:col-span-5 lg:mt-0 lg:flex">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16">
          <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
            Trusted by students from
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_University_of_Melbourne.svg/1200px-Logo_of_the_University_of_Melbourne.svg.png"
                className="rounded-lg"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/25/Victoria_University_Melb_Aus_Logo_Master_K_reduced.jpg"
                className="rounded-lg"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f5/Melbourne_High_School_%28Victoria%29_Logo.png"
                className="rounded-lg"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://www.latrobe.edu.au/_media/la-trobe-api/v5/img/latrobe-logo-og.png"
                className="rounded-lg"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://www.vmiac.org.au/wp-content/uploads/monash-university-vector-logo.png"
                className="rounded-lg"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Deakin_University_Logo_2017.svg/1200px-Deakin_University_Logo_2017.svg.png"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
          <dl className="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
                200K+
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                active users
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold md:text-4xl">1M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                graduates
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold md:text-4xl">20M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                questions answered
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
          <figure className="mx-auto max-w-screen-md">
            <svg
              className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                "EduLearn helped me greatly with my university studies."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Rakesh Seth
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Graduate of Architecture at the University of Melbourne
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's nourish your inner skills.
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Choose what your favorite course and start learning today!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                View more
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            EduLearn
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Let's discover new knowledge and new friends and have a fun learning
            experience.
          </p>
          <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                classNameroom
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2022{" "}
            <a href="#" className="hover:underline">
              EduLearn
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
