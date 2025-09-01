import { forwardRef } from "react";

export const ContactPage = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-gray-200 font-sans flex flex-col items-center justify-center p-8 py-24 md:p-16 lg:p-24"
    >
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="inline-block border-2 border-black px-12 py-3 text-3xl font-semibold tracking-widest">
            CONTACT
          </h2>
        </div>
        <h1 className="text-6xl font-semibold">Use Footer Links Below</h1>

        {/* Waiting on FormSpree ... */}
        {/* <form action="#" method="POST" className="w-full flex flex-col gap-10">
          Name
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="peer w-full bg-transparent border-b-2 border-black pt-2 pb-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-gray-500"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Name
            </label>
          </div>

          Email
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="peer w-full bg-transparent border-b-2 border-black pt-2 pb-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-gray-500"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          Phone Number
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="peer w-full bg-transparent border-b-2 border-black pt-2 pb-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-gray-500"
              placeholder="Phone Number"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Phone Number
            </label>
          </div>

          Message Textarea
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              className="peer w-full bg-transparent border-b-2 border-black pt-2 pb-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-gray-500"
              placeholder="Message...."
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Message....
            </label>
          </div>

          Submit Button
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-px bg-black"></div>
            <button
              type="submit"
              className="px-4 py-2 text-lg font-semibold tracking-widest text-black hover:text-gray-600 transition-colors cursor-pointer"
            >
              SUBMIT
            </button>
            <div className="w-16 h-px bg-black"></div>
          </div>
        </form> */}
      </div>
    </div>
  );
});