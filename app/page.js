import Link from "next/link";
export default function Home() {
  return (
    <div className="p-10 w-screen max-h-screen">
      <div className="text-center">
        <div className="text-3xl flex gap-3 justify-center text-white drop-shadow-[0px_0px_39px_rgba(237,222,229,0.9)] items-center font-serif">Bridging Hearts
          <img className="w-[100px]" src="/picsvg.svg" alt="bridging" /></div>
        <div className="text-sm text-center font-semibold text-gray-500">Receive Help, Offer Help</div>
        <div className="text-sm text-center font-semibold text-gray-500">"The act of helping and being helped enriches lives and cultivates a culture of generosity and shared success."</div>
        <Link href={'/about'}><button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-full text-base px-5 py-3 font-bold m-auto mt-5 mb-0">Know More</button></Link>
      </div>
      <div className="bg-white opacity-20 m-6 h-[2px]"></div>
      <div>
        <div className="text-xl text-center text-white font-serif underline m-4 underline-offset-4">Help in any way!!</div>
        <div className="flex justify-around items-center px-8">
          <div className="justify-items-center font-bold"> <img className="rounded-full m-1 border bg-gray-600 hover:bg-gray-500 hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/3749/3749784.png" width="90" height="90" alt="Support" />
            <span className="text-gray-400 text-sm">Willing to Support</span></div>
          <div className="justify-items-center font-bold"> <img className="rounded-full m-1 border bg-gray-600 hover:bg-gray-500 hover:cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/10384/10384161.png" width="90" height="90" alt="financial" />
            <span className="text-gray-400 text-sm">Willing to Contribute Financially</span></div>
          <div className="justify-items-center font-bold"> <img className="rounded-full m-1 border bg-gray-600 hover:bg-gray-500 hover:cursor-pointer" src="	https://cdn-icons-png.flaticon.com/512/1534/1534938.png" width="90" height="90" alt="collaborate" />
            <span className="text-gray-400 text-sm">Willing to Collaborate</span></div>

        </div>
      </div>
    </div>
  );
}
