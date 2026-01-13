import { useState } from "react"

export default function About() {
  const [readMore, setReadMore] = useState(false)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2B1B12]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">

        <h2 className="text-4xl md:text-5xl font-serif tracking-widest mb-4 text-[#F5E6D3]">
          ABOUT BREWHOUSE
        </h2>

        <div className="w-20 h-[2px] bg-amber-500 mx-auto mb-6" />

        <p className="text-[#E6D5C3] text-base md:text-lg leading-relaxed">
          Crafting rich, aromatic coffee experiences using carefully sourced beans
          and time-honored brewing methods.
        </p>

        {readMore && (
          <p className="mt-4 text-[#E6D5C3] text-base md:text-lg leading-relaxed">
            Every cup tells a story of passion, precision, and a love for authentic
            coffee culture that brings people together.
          </p>
        )}

        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-8 inline-flex items-center gap-2
          text-sm font-semibold tracking-wide
          text-amber-400 hover:text-amber-300 transition"
        >
          {readMore ? "Read Less" : "Read More"}
          <span className="text-lg">{readMore ? "←" : "→"}</span>
        </button>

      </div>
    </section>
  )
}
