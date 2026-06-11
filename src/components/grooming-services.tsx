import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Basic Grooming",
    description:
      "A thorough bath, blow-dry, nail clipping, ear cleaning, and sanitary trim to keep your pet neat and fresh.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80",
  },
  {
    number: "02",
    title: "Full Grooming",
    description:
      "Everything in Basic plus a full body trim and breed-specific styling for a picture-perfect look.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&q=80",
  },
  {
    number: "03",
    title: "Pet Spa Treatment",
    description:
      "Relaxing spa treatments including deep-conditioning masks, aromatherapy baths, and coat revitalisation for silky, healthy fur.",
    image:
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&q=80",
  },
];

export default function GroomingServices() {
  return (
    <section id="grooming" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-paw-500 font-bold text-sm tracking-widest uppercase text-center mb-3">
          Our Tailored Grooming Services
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Explore Our Grooming Options
        </h2>
        <div className="flex justify-center mb-12">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-paw-300 text-paw-700 hover:bg-paw-50 rounded-full px-6"
            )}
          >
            Explore More Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-paw-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SERVICE {service.number}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-sm font-bold text-paw-600 hover:text-paw-700 transition-colors"
                >
                  Learn More &rarr;
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
