export default function Hero() {
  return (
    <section className="relative pt-12 pb-2 overflow-hidden bg-custom-dark">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-16 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center mb-12 gap-4">
            <img
              src="/logo.png"
              alt="Triviiia Logo"
              className="w-32 h-32 rounded-lg"
            />

            <span className="text-4xl text-gray-100 font-semibold">
              Triviiia
            </span>
          </div>
          <h1 className="text-3xl text-gray-100  md:text-5xl font-bold mb-6">
            Get Smarter in Your Spare Time!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Got a few minutes? Learn something new with our fun trivia app!
          </p>
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/jp/app/triviiia/id6739017439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/app_store.svg"
                alt="Download on the App Store"
                className=""
                width={150}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
