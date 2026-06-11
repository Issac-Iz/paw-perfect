import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Mei Ling",
    source: "Google Review",
    text: "The best pet salon experience for my Pomeranian — so gentle and patient! Best dog grooming I've ever had.",
    rating: 5,
  },
  {
    name: "Arif Rahman",
    source: "Google Review",
    text: "Left my cat here for 4 nights while traveling. Super clean and staff updated me every day with photos. The best cat hotel!",
    rating: 5,
  },
  {
    name: "Tomo Lim",
    source: "Google Review",
    text: "The shop is clean, the staff are warm and knowledgeable, and the pets are clearly well looked after. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Tan",
    source: "Facebook",
    text: "My Golden Retriever always comes home smelling amazing and looking like a show dog. Great value for money too!",
    rating: 5,
  },
  {
    name: "David Lee",
    source: "Google Review",
    text: "The free pickup service is a game changer. They picked up my two dogs and returned them looking fabulous!",
    rating: 5,
  },
  {
    name: "Nurul Aisyah",
    source: "Google Review",
    text: "First time bringing my rescue cat for grooming. The groomers were so patient and understanding. Will definitely be back!",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-paw-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-paw-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          Real feedback from happy pet owners who trust PawPerfect for their
          furry friends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.name} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Stars count={review.rating} />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-paw-200 flex items-center justify-center text-paw-700 text-sm font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{review.source}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
