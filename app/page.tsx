'use client'

import { useState } from "react";
import Image from "next/image";

const colorTheme = {
  "Classic Romance": {
    primary: "#8A9A5B",
    secondary: "#D4AF37",
    background: "#FFFFF0",
    accent: "#FFC0CB",
  },
  "Modern Minimalist": {
    primary: "#F4D1D1",
    secondary: "#D2B48C",
    background: "#F2F2F2",
    accent: "#4E5D6C",
  },
  "Bohemian Chic": {
    primary: "#A3B18A",
    secondary: "#E07A5F",
    background: "#EDC9AF",
    accent: "#FFF8E7",
  },
  "Vintage Glamour": {
    primary: "#947E94",
    secondary: "#484848",
    background: "#F7E7CE",
    accent: "#D4AF37",
  },
}

const themeNames = Object.keys(colorTheme)

export default function Home() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
  const theme = colorTheme[themeNames[currentThemeIndex]];

  const handleThemeChange = (event) => {
    setCurrentThemeIndex(themeNames.indexOf(event.target.value));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: theme.background }}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <select onChange={handleThemeChange} className="px-4 py-2 mb-5 rounded hover:border">
          {themeNames.map((themeName, index) => (
            <option key={index} value={themeName}>{themeName}</option>
          ))}
        </select>

        <section id="home" className="mb-16 w-full text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}>
          <div className="bg-white bg-opacity-90 p-8 shadow-md rounded">
            <h1 style={{ color: theme.primary }} className="text-4xl">Welcome to Our Website</h1>
            <p style={{ color: theme.primary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a tincidunt nisi facilisis. Integer sit amet arcu vel arcu vehicula fermentum.</p>
            <button className="mt-4 px-4 py-2 rounded hover:border" style={{ backgroundColor: theme.accent, color: theme.secondary, borderColor: theme.secondary }}>Learn More</button>
          </div>
        </section>

        <section id="about-us" className="mb-16 w-full p-8 shadow-md rounded bg-white">
          <h2 className="text-3xl mb-4" style={{ color: theme.secondary }}>About Us</h2>
          <p style={{ color: theme.primary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section id="services" className="mb-16 w-full p-8 shadow-md rounded bg-white">
          <h2 className="text-3xl mb-4" style={{ color: theme.secondary }}>Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-4 border rounded shadow" style={{ borderColor: theme.primary }}>
              <Image src="https://picsum.photos/300/200" alt="Service 1" width={300} height={200} />
              <h3 className="text-xl mt-2" style={{ color: theme.primary }}>Service 1</h3>
              <p style={{ color: theme.primary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
            <div className="card p-4 border rounded shadow" style={{ borderColor: theme.primary }}>
              <Image src="https://picsum.photos/300/200" alt="Service 2" width={300} height={200} />
              <h3 className="text-xl mt-2" style={{ color: theme.primary }}>Service 2</h3>
              <p style={{ color: theme.primary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
            <div className="card p-4 border rounded shadow" style={{ borderColor: theme.primary }}>
              <Image src="https://picsum.photos/300/200" alt="Service 3" width={300} height={200} />
              <h3 className="text-xl mt-2" style={{ color: theme.primary }}>Service 3</h3>
              <p style={{ color: theme.primary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mb-16 w-full p-8 shadow-md rounded bg-white">
          <h2 className="text-3xl mb-4" style={{ color: theme.secondary }}>Testimonials</h2>
          <blockquote className="border-l-4 pl-4 italic" style={{ borderColor: theme.secondary, color: theme.primary }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
            <cite className="block mt-2" style={{ color: theme.primary }}>- Someone Famous</cite>
          </blockquote>
          <blockquote className="border-l-4 pl-4 italic mt-4" style={{ borderColor: theme.secondary, color: theme.primary }}>
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            <cite className="block mt-2" style={{ color: theme.primary }}>- Another Person</cite>
          </blockquote>
        </section>

        <section id="contact-us" className="mb-16 w-full p-8 shadow-md rounded bg-white">
          <h2 className="text-3xl mb-4" style={{ color: theme.secondary }}>Contact Us</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" style={{ borderColor: theme.primary, backgroundColor: theme.background }} />
            <input type="email" placeholder="Email" className="p-2 border rounded" style={{ borderColor: theme.primary, backgroundColor: theme.background }} />
            <textarea placeholder="Message" className="p-2 border rounded" style={{ borderColor: theme.primary, backgroundColor: theme.background }}></textarea>
            <button type="submit" className="px-4 py-2 rounded hover:border" style={{ backgroundColor: theme.primary, color: theme.background, borderColor: theme.secondary }}>Send Message</button>
          </form>
        </section>
      </main>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-4" style={{ backgroundColor: theme.accent }}>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.primary }}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.primary }}
        >
          <Image
            aria-hidden
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
      </footer> */}
    </div>
  )
}