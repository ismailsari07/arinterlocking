export default function ServingArea() {
  const cityList = [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Burlington",
    "Milton",
    "Caledon",
  ];
  return (
    <section id="serving-area" className="container flex flex-col justify-center items-center gap-6 text-center py-8 md:py-16">
        <h2 className="text-5xl font-semibold mb-3">
          Serving Greater Toronto Area
        </h2>
        <div className="lg:w-2/3 text-lg flex flex-wrap justify-center gap-3">
          {cityList.map((city, index) => (
            <span key={city} className="bg-gray-200 rounded-4xl px-2 py-1">
              {city}
            </span>
          ))}
        </div>
    </section>
  );
}
