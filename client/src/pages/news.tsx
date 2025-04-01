import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { news } from "@/lib/data";

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <section className="py-14 bg-white flex flex-col items-center">
        <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <iframe
              className="w-full h-64 md:h-80 rounded-xl border-4 border-[#c8a16e]"
              src="https://www.youtube.com/embed/qzuHRrZwYks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-bold text-[#000000] mt-4 text-center">
            Corporate Film-Sri Hari Hara Real Estate
          </h2>
          <h4 className="text-xl font-bold text-[#000000] mt-4 text-center">Igloo Ideas</h4>
        </div>
      </section>




      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

            {/* Left YouTube Video */}
            <div className="relative text-center w-full md:w-1/2">
              <iframe
                className="w-full aspect-video rounded-xl border-4 border-[#c8a16e]"
                src="https://www.youtube.com/embed/Dr_62XHFjS4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl font-bold text-[#000000] mt-4">
                Success Story Of Sri Sai Hari Hara Estates M.D Yadava Reddy
              </h2>
              <h4 className="text-xl font-bold text-[#000000] mt-4">Disha TV</h4>
            </div>

            {/* Right YouTube Video */}
            <div className="relative text-center w-full md:w-1/2">
              <iframe
                className="w-full aspect-video rounded-xl border-4 border-[#c8a16e]"
                src="https://www.youtube.com/embed/EPKtOw46Q3c"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl font-bold text-[#000000] mt-4">
                Credai Property Show 2019 - <div>Hari Hara Estates</div>
              </h2>
              <h4 className="text-xl font-bold text-[#000000] mt-4">Disha TV</h4>
            </div>

          </div>
        </div>
      </section>






      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left YouTube Video */}
            <div className="relative text-center">
              <iframe
                className="w-full h-64 md:h-80 rounded-xl border-4 border-[#c8a16e]"
                src="https://www.youtube.com/embed/yEYq6MACdbE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl font-bold text-[#000000] mt-4">
                Harihara Estates Projects | Sri Sai Soukya Luxurious Gated Community @ Uppal
              </h2>
              <h4 className="text-xl font-bold text-[#000000] mt-4">HYBIZTV HD</h4>
            </div>

            {/* Right YouTube Video */}
            <div className="relative text-center">
              <iframe
                className="w-full h-64 md:h-80 rounded-xl border-4 border-[#c8a16e]"
                src="https://www.youtube.com/embed/4W9zeE692bc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-2xl font-bold text-[#000000] mt-4">
                Premium gated Community in Uppal Harihara Estates | SBI Property Show 2019
              </h2>
              <h4 className="text-xl font-bold text-[#000000] mt-4">HYBIZTV HD</h4>
            </div>

          </div>
        </div>
      </section>



      <section className="py-14 bg-white flex justify-center">
        <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              className="w-full h-auto rounded-xl border-4 border-[#c8a16e]"
              src="/newsimage.jpeg"
              alt="Centered Image"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#000000] mt-4 text-center">Times Realty Icons
          </h2>
        </div>
      </section>



    </div>
  );
}
