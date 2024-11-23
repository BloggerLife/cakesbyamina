import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-4 pt-5">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Cake</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Cake is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <Link href={"/menu"}>
            <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
              View Menu
            </button>
          </Link>
        </div>
      </div>
      <div className="relative  md:block">
        <Image
          src={"/cake.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"cake"}
        />
      </div>
    </section>
  );
}
