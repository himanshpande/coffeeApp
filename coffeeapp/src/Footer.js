import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F3EFE3] text-[#4B3621]">


      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


          <div>
            <h2 className="text-2xl font-bold text-[#2B1B12] mb-2">
              BrewHouse
            </h2>
            <p className="text-[#6B4F3A] text-sm leading-relaxed mb-4">
              Crafting rich, aromatic coffee experiences.
            </p>

            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#6B4F3A]/30
                  flex items-center justify-center
                  text-[#4B3621]
                  hover:bg-[#4B3621] hover:text-[#F3EFE3]
                  transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-[#2B1B12] font-semibold text-xs uppercase tracking-widest mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {["Menu", "Coffee", "Shop","Contacts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#6B4F3A] text-sm hover:text-[#2B1B12] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-[#2B1B12] font-semibold text-xs uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#6B4F3A]">
              <li>+918533839002</li>
              <li>+222 222 22 22</li>
              <li>
                <a
                  href="mailto:coffee@coffeemail.com"
                  className="hover:text-[#2B1B12] transition"
                >
                  coffee@coffeemail.com
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-[#2B1B12] font-semibold text-xs uppercase tracking-widest mb-4">
              Updates
            </h3>
            <p className="text-[#6B4F3A] text-sm mb-3">
              Offers & news
            </p>
            <button className="px-4 py-2 bg-[#4B3621] text-[#F3EFE3] text-xs font-semibold rounded-full hover:bg-[#2B1B12] transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      <div className="border-t border-[#6B4F3A]/20">
        <div className="max-w-7xl mx-auto px-6 py-3 text-center text-xs text-[#6B4F3A]">
          © {new Date().getFullYear()} BrewHouse
        </div>
      </div>

    </footer>
  )
}
