export default function Contact() {
  return (
    <section className="py-20 bg-[#fdf8f2] dark:bg-[#1a1a1a] px-6 text-[#4b2e2e] dark:text-[#f3f3f3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-10">
          Have a question or want to collaborate? Let’s connect.
        </p>
        <form className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded border border-gray-300 dark:border-gray-700 dark:bg-[#2a2a2a] dark:placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded border border-gray-300 dark:border-gray-700 dark:bg-[#2a2a2a] dark:placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="md:col-span-2 p-4 rounded border border-gray-300 h-32 dark:border-gray-700 dark:bg-[#2a2a2a] dark:placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-[#4b2e2e] text-white px-6 py-3 rounded hover:bg-[#3a2424] dark:bg-[#8b5e3c] dark:hover:bg-[#6e462c]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
