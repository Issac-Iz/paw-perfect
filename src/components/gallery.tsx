import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80",
    alt: "Happy dog after grooming",
  },
  {
    src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&q=80",
    alt: "Clean and cozy pet salon interior",
  },
  {
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80",
    alt: "Cat relaxing after spa treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    alt: "Golden retriever with beautiful coat",
  },
  {
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&q=80",
    alt: "Pug posing after grooming session",
  },
  {
    src: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&q=80",
    alt: "Well-groomed Pomeranian",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80",
    alt: "Professional pet grooming in action",
  },
  {
    src: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&q=80",
    alt: "Cat boarding room",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Our Happy Clients
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          A glimpse of our furry friends looking their best after visiting PawPerfect.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
