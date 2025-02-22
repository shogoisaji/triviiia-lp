export default function AppPreview() {
  return (
    <section className="py-16 bg-custom-dark">
      <div className="container mx-auto px-4">
        <div className="relative max-w-md mx-auto">
          <div className="absolute left-0 top-1/4 w-32 h-32 bg-emerald-500 rounded-full opacity-20" />

          <div className="absolute right-2 bottom-1/4 w-24 h-24 bg-emerald-500 rounded-full opacity-20" />

          <div className="flex justify-center">
            <img
              src="/display.png"
              alt="Triviiia Logo"
              className="h-[600px] rounded-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
