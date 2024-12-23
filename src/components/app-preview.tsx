export default function AppPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-md mx-auto">
          {/* Decorative circles */}
          <div className="absolute -left-8 top-1/4 w-16 h-16 bg-emerald-500 rounded-full opacity-20" />
          <div className="absolute -right-12 bottom-1/4 w-24 h-24 bg-emerald-500 rounded-full opacity-20" />

          {/* Phone mockup */}
          <div className="relative aspect-[9/19] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
              <div className="h-full w-full bg-gray-800 p-6">
                <div className="flex justify-between items-center mb-12">
                  <div className="w-8 h-1 bg-gray-700 rounded" />
                  <div className="text-white/90">Triviiia</div>
                  <div className="w-8 h-1 bg-gray-700 rounded" />
                </div>

                {/* Timer circle */}
                <div className="relative w-32 h-32 mx-auto mb-12">
                  <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full" />
                  <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-l-transparent rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl text-white">
                    30s
                  </div>
                </div>

                {/* Question area */}
                <div className="bg-white rounded-t-3xl mt-auto p-6 absolute bottom-0 left-0 right-0">
                  <div className="w-12 h-1 bg-gray-200 rounded mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-4">Question 1/10</h3>
                  <p className="text-gray-600">
                    What is the capital city of Japan?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
