export default function Footer() {
  return (
    <footer className="bg-[#4b2e2e] dark:bg-black text-white dark:text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 text-sm">
        {/* Quick Links */}
        <nav>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Cafe Menu</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Café Finder / Locator</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Customer Care</a></li>
          </ul>
        </nav>

        {/* Cafe Menu */}
        <nav>
          <h3 className="font-bold text-lg mb-4">Cafe Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Food For Mood</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Hot Classic</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">All-Time Chillers</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">All-Day Delights</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Sweet Tooth X 32</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Nutritional Info</a></li>
          </ul>
        </nav>

        {/* Shop */}
        <nav>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Coffee Mugs & Cups</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Coffee Makers & Wakecup</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Coffee Powders</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Gifts</a></li>
          </ul>
        </nav>

        {/* Business */}
        <nav>
          <h3 className="font-bold text-lg mb-4">Business</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Lease Enquiry</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Advertise With Us</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Coffee Vending Machine</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Outdoor Catering Service</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Contact Us</a></li>
          </ul>
        </nav>

        {/* About Us */}
        <nav>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Awards</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Business Governance</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Bean to Cup</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">News & Events</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Careers</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa] transition">Contact Us</a></li>
          </ul>
        </nav>
      </div>

      {/* Optional: Newsletter Signup */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
        <p className="text-sm mb-4 text-gray-300 dark:text-gray-400">
          Get the latest updates, offers & coffee insights in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded w-full sm:w-auto text-black dark:text-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[#d3bbaa] text-[#4b2e2e] font-semibold px-6 py-2 rounded hover:bg-[#c6ae98] transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-300 dark:text-gray-500">
        © 2025 <strong>The Velvet Bean</strong>. All rights reserved.
      </div>
    </footer>
  );
}
