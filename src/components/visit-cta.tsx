import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function VisitCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-paw-600 via-paw-500 to-paw-400 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Visit Us Today or Book Online
        </h2>
        <div className="space-y-2 text-paw-100 text-lg">
          <p>
            <strong className="text-white">Location:</strong> 23, Jalan Harmoni, Taman Seri Indah, 56000 Kuala Lumpur
          </p>
          <p>
            <strong className="text-white">Call / WhatsApp:</strong>{" "}
            <a href="tel:+60388889999" className="underline hover:text-white">
              +603-8888 9999
            </a>
          </p>
          <p>
            <strong className="text-white">Open daily:</strong> 10:00 AM – 7:00 PM
          </p>
          <p>Free parking available</p>
        </div>
        <p className="mt-6 text-paw-100 max-w-xl mx-auto leading-relaxed">
          Whether it&apos;s your pet&apos;s first grooming or they&apos;re regular guests with
          us — you&apos;re always welcome at PawPerfect.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-paw-700 hover:bg-paw-50 text-base px-8 rounded-full font-bold"
            )}
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
