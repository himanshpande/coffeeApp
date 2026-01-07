import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2B1B12] text-[#E6D5C3] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#F5E6D3] mb-3">BrewHouse</h2>
            <p className="text-[#C4A484] text-sm mb-6">
              Taste the best coffee in town.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-[#F5E6D3] text-[#2B1B12] rounded-full flex items-center justify-center hover:bg-[#C4A484] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className="text-[#F5E6D3] font-semibold text-sm uppercase tracking-widest mb-6">
              About Us
            </h3>
            <ul className="space-y-3">
              {["Menu", "Blog", "Recipes", "Events", "Contacts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#C4A484] hover:text-[#F5E6D3] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 className="text-[#F5E6D3] font-semibold text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1111111111" className="text-[#C4A484] hover:text-[#F5E6D3] text-sm">
                  +111 111 11 11
                </a>
              </li>
              <li>
                <a href="tel:+2222222222" className="text-[#C4A484] hover:text-[#F5E6D3] text-sm">
                  +222 222 22 22
                </a>
              </li>
              <li>
                <a
                  href="mailto:coffee@coffeemail.com"
                  className="text-[#C4A484] hover:text-[#F5E6D3] text-sm"
                >
                  coffee@coffeemail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}
