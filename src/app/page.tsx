import Link from "next/link";
import TimelinePreview from "./(landing)/TimelinePreview";
import Image from "next/image";
import HeroImage from "../../public/undraw_working-together_r43a.svg";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 items-center sm:items-start">
        <section id="hero" className="flex items-center w-full h-[40rem] p-10">
          <div className="relative w-1/2 h-[30rem]">
            <Image
              src={HeroImage}
              alt="hero landing"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-1/3 m-auto space-y-6">
            <Link href="/" className="text-3xl font-bold">
              <h1 className="text-center md:text-left">Posts your article</h1>
            </Link>
            <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">
                Get started to share &nbsp;
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  your research
                </code>
                .
              </li>
              <li>And get to discuss with other people</li>
            </ul>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <Link
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="/timeline"
                rel="noopener noreferrer"
              >
                Go to timeline
              </Link>
            </div>
          </div>
        </section>

        <div className="my-12">
          <div className="flex items-center my-4">
            <h3 className="w-1/3 text-4xl italic font-bold text-slate-400">
              Newest Article
            </h3>
            <div className="w-full h-1 bg-slate-400"></div>
          </div>
          <TimelinePreview />
        </div>
      </main>
      <footer className="row-start-3">
        <p className="text-xs font-thin">©jcwd_example_project</p>
      </footer>
    </div>
  );
}
