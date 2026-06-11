import Image from "next/image";

export default function Story() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-paw-500 font-bold text-sm tracking-widest uppercase text-center mb-3">
          Our Story
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
          Pet Grooming That Feels Like a Spa Day
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          At PawPerfect, we understand that grooming isn&apos;t just about looking
          clean — it&apos;s about health, comfort, and confidence for your beloved
          pets.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80"
                alt="Professional dog grooming session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
              <Image
                src="https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&q=80"
                alt="Cat being pampered at pet spa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          <div>
            <div className="bg-paw-50 rounded-2xl p-6 mb-6">
              <p className="text-sm font-bold text-paw-700 uppercase tracking-wide mb-2">
                Dedicated to Your Pet&apos;s Comfort
              </p>
              <p className="text-muted-foreground leading-relaxed">
                PawPerfect is a beloved pet salon dedicated to ensuring every pet
                leaves feeling clean, loved, and pampered. We pride ourselves on
                our non-aggressive, friendly approach, making your furry friends
                feel right at home.
              </p>
            </div>
            <div className="bg-paw-50 rounded-2xl p-6 mb-6">
              <p className="text-sm font-bold text-paw-700 uppercase tracking-wide mb-2">
                Quality Care Tailored to Their Needs
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We prioritise your pet&apos;s comfort and happiness while providing
                top-quality grooming services tailored to their breed, coat type,
                and temperament.
              </p>
            </div>

            <p className="text-sm font-semibold text-foreground mb-3">
              Our certified groomers offer personalised services including:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-paw-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Full-body baths &amp; blow-drying
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-paw-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Fur trimming and breed-specific styling
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-paw-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Nail clipping, ear cleaning &amp; de-shedding
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-paw-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Flea &amp; tick treatment options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
