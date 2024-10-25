import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="home" className="mb-16 w-full text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}>
          <div className="bg-black bg-opacity-50 p-8">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <h1 className="text-white text-4xl">Welcome to Our Website</h1>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a tincidunt nisi facilisis. Integer sit amet arcu vel arcu vehicula fermentum.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Learn More</button>
          </div>
        </section>

        <section id="about-us" className="mb-16 w-full">
          <h2 className="text-3xl mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section id="services" className="mb-16 w-full">
          <h2 className="text-3xl mb-4">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-4 border rounded shadow">
              <Image src="https://picsum.photos/300/200" alt="Service 1" width={300} height={200} />
              <h3 className="text-xl mt-2">Service 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
            <div className="card p-4 border rounded shadow">
              <Image src="https://picsum.photos/300/200" alt="Service 2" width={300} height={200} />
              <h3 className="text-xl mt-2">Service 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
            <div className="card p-4 border rounded shadow">
              <Image src="https://picsum.photos/300/200" alt="Service 3" width={300} height={200} />
              <h3 className="text-xl mt-2">Service 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mb-16 w-full">
          <h2 className="text-3xl mb-4">Testimonials</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
            <cite className="block mt-2">- Someone Famous</cite>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-4">
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            <cite className="block mt-2">- Another Person</cite>
          </blockquote>
        </section>

        <section id="contact-us" className="mb-16 w-full">
          <h2 className="text-3xl mb-4">Contact Us</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <textarea placeholder="Message" className="p-2 border rounded"></textarea>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
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
      </footer>
    </div>
  );
}