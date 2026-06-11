import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const hotelRooms = [
  { label: "Small Breed Dogs", price: "RM 35", note: "per night" },
  { label: "Medium Breed Dogs", price: "RM 50", note: "per night" },
  { label: "Large Breed Dogs", price: "RM 70", note: "per night" },
  { label: "Cat Boarding", price: "RM 30", note: "per night" },
];

const groomingPackages = [
  { label: "Basic Grooming", price: "from RM 40" },
  { label: "Full Grooming", price: "from RM 70" },
  { label: "Pet Bathing", price: "from RM 25" },
  { label: "Pet Spa", price: "from RM 90" },
];

export default function Boarding() {
  return (
    <section id="boarding" className="py-20 bg-paw-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-paw-500 font-bold text-sm tracking-widest uppercase text-center mb-3">
          Our Services
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Safe &amp; Loving Pet Boarding
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Heading out of town? Let us take care of your pets like they&apos;re our
          own. Secure boarding in a clean, cage-free, air-conditioned
          environment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              {[
                "Private sleeping rooms with ventilation",
                "Daily cleaning and feeding routines",
                "CCTV surveillance & staff supervision",
                "Playtime, walks, and quiet zones",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1601758124510-52d02ddf7cbd?w=600&q=80"
                alt="Comfortable pet boarding rooms"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-paw-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <h3 className="text-base font-bold text-foreground">Pet Hotel</h3>
                </div>
                <p className="text-xs text-paw-500 font-bold mb-4">
                  As low as RM30/night!
                </p>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-3">
                  Choose Your Room
                </p>
                <ul className="space-y-3">
                  {hotelRooms.map((room) => (
                    <li key={room.label} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{room.label}</span>
                      <span className="text-paw-600 font-bold">{room.price}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants(),
                    "w-full mt-6 bg-paw-500 hover:bg-paw-600 text-white rounded-full"
                  )}
                >
                  Book Boarding
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-paw-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  <h3 className="text-base font-bold text-foreground">Pet Grooming</h3>
                </div>
                <p className="text-xs text-paw-500 font-bold mb-4">
                  Affordable grooming for dogs &amp; cats
                </p>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-3">
                  Choose Your Package
                </p>
                <ul className="space-y-3">
                  {groomingPackages.map((pkg) => (
                    <li key={pkg.label} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{pkg.label}</span>
                      <span className="text-paw-600 font-bold">{pkg.price}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants(),
                    "w-full mt-6 bg-paw-500 hover:bg-paw-600 text-white rounded-full"
                  )}
                >
                  Book Grooming
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
