"use client"

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2B1B12] text-white">
      <div className="bg-[#3A2418] p-10 rounded-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
        <p className="text-[#C4A484] mb-6">
          Complete your payment securely ☕
        </p>

        <button className="bg-[#C4A484] text-[#2B1B12] px-6 py-3 rounded font-semibold hover:bg-[#E6D5C3] transition">
          Pay Now
        </button>
      </div>
    </div>
  )
}
