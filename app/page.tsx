
"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

const images = [
  "/images/Frame 9.png",
  "/images/Frame 12.png",
  "/images/Frame 13.png",
  "/images/Frame 14.png",
  "/images/Frame 15.png",
  "/images/Frame 16.png"
];



export default function Home() {
  const [hovered, setHovered] = useState<number | null>(0)


  const getFlex = (index: number) => {
    if (hovered === null) return 1

    const distance = Math.abs(index - hovered)

    if (distance === 0) return 6
    if (distance === 1) return 4
    if (distance === 2) return 2.5
    if (distance === 3) return 1.8
    return 1
  }


  const [theme, setTheme] = useState('light');

  return (
    <div className={`min-h-screen p-10 transition-all duration-500 ${theme === 'dark' ? 'bg-neutral-700 text-white' : 'bg-white text-neutral-700'}`} >

      <div className="absolute right-5 top-1 underline"><Link href="/task2" >Navigate to Task 2</Link></div>
      {/* Theme Toggle  */}
      <div className="flex relative w-25 h-12.5 gap-3 mx-auto mb-10">
        {theme === 'light' && <button className={`relative  transition-opacity duration-500`}><Image src="/images/Sliders.png" alt="road" width={100} height={50}
        /></button>}

        {theme === 'dark' && <button className={`relative transition-opacity duration-500`}><Image src="/images/Sliders (1).png" alt="road" width={100} height={50}
        /></button>}
        <Image src="/images/svrec.svg" alt="road" width={52} height={38} className={`absolute top-2.25 z-10 transition duration-400 ease  ${theme === "dark" ? 'translate-x-11' : 'translate-x-0'}`} onClick={(prev) => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      </div>


      {/* Car Animation */}
      <div className="bg-white w-100 h-12 rounded-lg flex justify-between items-center text-white px-4 font-semibold relative overflow-hidden border border-gray-300 mx-auto mb-10">
        <div className="absolute -left-1/2 w-100 h-full bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.6),transparent_55%),radial-gradient(circle_at_right,rgba(255,255,255,0.6),transparent_55%),linear-gradient(90deg,#f2f2f2_0%,#bdbdbd_20%,#3a3a3a_50%,#bdbdbd_80%,#f2f2f2_100%)]  myanim"></div>
        <div className="absolute bottom-0 -left-5 flex items-end z-10 myanim">
          <Image
            src="/images/Car.png"
            alt="car"
            width={35}
            height={18}
            className="relative mycar drop-shadow-md"
          />

        </div>
        <div className='z-1'>Design</div>
        <div className='z-1'>Develop</div>
        <div className='z-1'>Test</div>
      </div>


      {/* Gallery */}
      <div className="flex h-[450px] w-full gap-3" onMouseLeave={() => setHovered(0)}>
        {images.map((src, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ flex: getFlex(index) }}
            className="relative overflow-hidden rounded-2xl transition-all duration-500"
          >
            <Image
              src={src}
              alt="gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}