import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function BookingCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Book a Grooming or Boarding Session Today
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          No need to wait. Click below to send us a quick message and book your
          slot.
        </p>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-paw-500 hover:bg-paw-600 text-white text-lg px-10 rounded-full"
          )}
        >
          Book Now
        </a>
        <p className="mt-6 text-muted-foreground">or</p>
        <p className="mt-2 text-xl font-bold text-paw-700">
          Contact Us:{" "}
          <a href="tel:+60388889999" className="hover:underline">
            +603-8888 9999
          </a>
        </p>
      </div>
    </section>
  );
}
