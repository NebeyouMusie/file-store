import Image from "next/image";
import heroImage from "@/public/images/file-illustration.gif"
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center justify-center p-10 space-y-4 w-full">
          <h1 className="text-7xl font-bold text-center lg:text-left mb-5">
            Welcome to file<span className="text-blue-900 ">Z</span>
          </h1>
          <h2 className="text-5xl font-semibold text-center lg:text-left mb-4">
            Store <span className="text-blue-900">everything</span> all in one place.
          </h2>
          <p className="text-center lg:text-left text-normal">
            Enhance your personal storage with fileZ, offering a simple and
            efficient way to upload, organize , and access files from anywhere.
            Security store important documents and media, and experience the
            convenience of easy life and sharing in one centralized solution.
          </p>
          <br />
          <Link href="/dashboard" className="bg-blue-900 py-4 px-8 rounded-2xl cursor-pointer self-center lg:self-start text-white">
            Get Started 
          </Link>
        </div>

        <div className="w-full px-10 object-cover">
          <Image src={heroImage} alt="file-illustration" width={100} height={100} className="w-full h-full rounded-2xl"/>
        </div>
      </div>
    </main>
  );
}
