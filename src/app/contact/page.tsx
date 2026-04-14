import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <h2 className="text-xs tracking-widest uppercase text-gray-500 mb-8">
            Contact
          </h2>
          <p className="text-2xl font-light leading-relaxed text-gray-200 mb-10">
            Available for collaborations, prints, and bookings.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Contact details coming soon.
          </p>
        </div>
      </main>
    </>
  );
}
