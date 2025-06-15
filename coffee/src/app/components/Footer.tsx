export default function Footer() {
  return (
    <footer className="bg-[#4b2e2e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 text-sm">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa]">Cafe Menu</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Café Finder / Locator</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Customer Care</a></li>
          </ul>
        </div>

        {/* Cafe Menu */}
        <div>
          <h3 className="font-bold text-lg mb-4">Cafe Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa]">Food For Mood</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Hot Classic</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">All-Time Chillers</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">All-Day Delights</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Sweet Tooth X 32</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Nutritional Info</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa]">Coffee Mugs & Cups</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Coffee Makers & Wakecup</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Coffee Powders</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Gifts</a></li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h3 className="font-bold text-lg mb-4">Business</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa]">Lease Enquiry</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Advertise With Us</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Coffee Vending Machine</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Outdoor Catering Service</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Contact Us</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d3bbaa]">Awards</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Business Governance</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Bean to Cup</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">News & Events</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Careers</a></li>
            <li><a href="#" className="hover:text-[#d3bbaa]">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-300">
        © 2025 The Velvet Bean. All rights reserved.
      </div>
    </footer>
  );
}
