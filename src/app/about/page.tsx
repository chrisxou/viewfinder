import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <h2 className="text-xs tracking-widest uppercase text-gray-500 mb-8">
            About
          </h2>
          <p className="text-2xl font-light leading-relaxed text-gray-200 mb-6">
            ViewFinder is a photography portfolio built around capturing honest
            moments and quiet scenes.
          </p>
          <p className="text-gray-500 leading-relaxed">
            This portfolio is a work in progress. More about the photographer
            coming soon.
          </p>
        </div>
      </main>
    </>
  );
}
