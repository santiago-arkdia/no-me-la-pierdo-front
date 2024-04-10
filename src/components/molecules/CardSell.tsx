import Image from "next/image";

export const CardSell = () => {
  return (
    // <div className="">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
    //       <div className="p-8 sm:p-10 lg:flex-auto">
    //         <h3 className="text-2xl font-bold tracking-tight text-gray-900">
    //           Lifetime membership
    //         </h3>
    //         <p className="mt-6 text-base leading-7 text-gray-600">
    //           Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
    //           amet indis perferendis blanditiis repellendus etur quidem
    //           assumenda.
    //         </p>
    //         <div className="mt-10 flex items-center gap-x-4">
    //           <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
    //             What’s included
    //           </h4>
    //           <div className="h-px flex-auto bg-gray-100"></div>
    //         </div>
    //         <ul
    //           role="list"
    //           className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
    //         >
    //           <li className="flex gap-x-3">
    //             <svg
    //               className="h-6 w-5 flex-none text-indigo-600"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             Private forum access
    //           </li>
    //           <li className="flex gap-x-3">
    //             <svg
    //               className="h-6 w-5 flex-none text-indigo-600"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             Member resources
    //           </li>
    //           <li className="flex gap-x-3">
    //             <svg
    //               className="h-6 w-5 flex-none text-indigo-600"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             Entry to annual conference
    //           </li>
    //           <li className="flex gap-x-3">
    //             <svg
    //               className="h-6 w-5 flex-none text-indigo-600"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             Official member t-shirt
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    //         <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
    //           <div className="mx-auto max-w-xs px-8">
    //             <p className="text-base font-semibold text-gray-600">
    //               Pay once, own it forever
    //             </p>
    //             <p className="mt-6 flex items-baseline justify-center gap-x-2">
    //               <span className="text-5xl font-bold tracking-tight text-gray-900">
    //                 $349
    //               </span>
    //               <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
    //                 USD
    //               </span>
    //             </p>
    //             <a
    //               href="#"
    //               className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //             >
    //               Get access
    //             </a>
    //             <p className="mt-6 text-xs leading-5 text-gray-600">
    //               Invoices and receipts available for easy company reimbursement
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="App">
      <div className="md:flex border m-10">
        <div className="p-2 md:flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            width="448"
            height="299"
            alt="Woman paying for a purchase"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4">
          <div className="uppercase text-sm text-indigo-600 font-bold">
            MARKETING
          </div>
          <a
            href="google.com"
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-900">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  );
};
