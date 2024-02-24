import { PrimaryContainedButton } from "@/components/buttons/contained-btns";
import { OutLineButton } from "@/components/buttons/outline-btns";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-start items-center ">
        <img src="/path.png" alt="" className="" />
        <div className="flex flex-col justify-center items-center h-[800px] mr-28">
          <div className="mt-20  flex flex-col justify-center items-center gap-2">
            <div className="flex gap-1 ">
              <h1 className="text-6xl font-bold">Manage Your </h1>
              <h1 className="text-primary-700 text-6xl font-bold"> Company Accounting</h1>
            </div>
            <p className="items-center">Create your company, and manage all your accounting things on our platform.</p>
            <div className="flex gap-5 justify-center items-center">
              <Link href="/login">
                <PrimaryContainedButton title={<p className="font-semibold text-white px-6 py-3">Login</p>} />
              </Link>
              <Link href="/login">
                <OutLineButton title={<p className="font-semibold px-6 py-3">Signup</p>} />
              </Link>
            </div>
          </div>
          <div className="h-1/2">
            <img src="/SVG-1.PNG" alt="" />
          </div>
        </div>
        <img src="/Path (1).png" alt="" className="z-50 fixed top-0 right-0"/>
      </div>
      <Footer />
    </main>
  );
}
