import React from "react";
import VolunteerCard from "./VolunteerCard";
import { TermsAndCondition } from "../Data/Data";

function RegisterForm() {
  return (
    <div>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
        id="volunteer"
      >
        <div className="grid md:grid-cols-3 items-start gap-12">
          <div className="col-span-1 py-14 px-7 bg-orange-500 rounded-lg ">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-3xl lg:leading-tight dark:text-gray-800 ">
              Join Our Volunteer Team
            </h1>
            <p className="mt-1 md:text-lg text-gray-800 dark:text-gray-600">
              Every hour you dedicate makes a difference. Explore our volunteer
              options and be a part of something impactful.
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-700">
                Membership Terms and Conditions
              </h2>
              <div className="text-sm">All members must:</div>

              <ul className="mt-2 space-y-2">
                {TermsAndCondition.map((terms) => (
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-700">
                      {terms.condition}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-900">
                Note:
              </h2>
              <div className="text-base font-normal dark:text-gray-700">
                By submitting your membership application, you acknowledge that
                you have read, understood, and agreed to abide by these
                membership terms and conditions
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <VolunteerCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
