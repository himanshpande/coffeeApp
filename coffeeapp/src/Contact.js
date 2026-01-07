import React from "react"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react"

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#8b4a2b] to-[#b88a5a] px-6">
      <div className="max-w-6xl w-full text-white">

        {/* Title */}
        <h1 className="text-5xl font-serif text-center mb-16">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-serif mb-4">
              Get in touch
            </h2>

            <p className="text-sm opacity-80 mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>929-242-6868</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>contact@info.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>123 Fifth Avenue, New York, NY 10160</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#8b4a2b] transition">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#8b4a2b] transition">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#8b4a2b] transition">
                <Youtube size={16} />
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none resize-none"
            />

            <button className="bg-white text-[#8b4a2b] px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage
