import BackgroundSlideshow from "./BackgroundSlideshow";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background with overlay */}
      <BackgroundSlideshow />

      {/* Content */}
      <div className="relative z-10 w-full h-full mx-auto px-6 flex items-center">
        <div className="flex flex-col gap-8 z-10 w-full max-w-4xl pt-20 pl-4 md:pl-20">
          <div className="flex flex-col leading-[0.9] font-black uppercase tracking-tighter">
            <div className="text-4xl md:text-6xl lg:text-8xl text-white flex flex-wrap gap-x-4">
              <span>AN</span>
              <span className="text-red-600">INDEPENDENTLY</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl text-white">
              ORGANIZED
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl flex flex-wrap gap-x-4">
              <span className="text-red-600">TED</span>
              <span className="text-white">EVENT</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 w-fit mt-4">
            <div className="flex items-center gap-2 text-white/80 border-r border-white/20 pr-4">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-sm md:text-base font-medium">
                7th September 2024
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80 pl-2">
              {/* Map Pin Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-sm md:text-base font-medium truncate max-w-[200px] md:max-w-none">
                Carmel College of Engineering & Technology
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center gap-2 group">
              Get Tickets
              {/* Ticket Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transform group-hover:rotate-12 transition-transform"
              >
                <path d="M15.41,7.41L14,6L8,12L14,18L15.41,16.58L10.83,12L15.41,7.41Z"></path>
              </svg>
            </button>
            <button className="text-white font-semibold hover:text-red-500 transition-all flex items-center gap-2 group">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Visual Element (X) - Positioned absolutely to the right */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[500px] h-[500px] ">
            <Image
              src="/assets2Fxlogo.webp"
              alt="Theme"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
