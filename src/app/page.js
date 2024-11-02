import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            At Cakes by Amina, we believe in the magic of celebrations and the
            power of a perfectly baked treat to elevate any moment. Our
            commitment to quality ingredients, attention to detail, and
            personalised service ensures that every cake tells a unique story
            and leaves a lasting impression.
          </p>
          <p>
            Join us on a journey of sweetness and discovery. Explore our gallery
            of delectable creations, join our community of dessert enthusiasts
            on social media, and let us be a part of your special moments.
          </p>
          <p>
            Contact Cakes by Amina today to add a touch of sweetness to your
            life's celebrations.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+263773799776"
          >
            +263 773 799 776
          </a>
        </div>
      </section>
    </>
  );
}
