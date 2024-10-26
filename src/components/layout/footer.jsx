import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const navigation = {
  solutions: [
    { name: "SEO ", href: "https://TeletaDevelopment.com" },
    { name: "Website development", href: "https://TeletaDevelopment.com" },
    { name: "Website design", href: "https://TeletaDevelopment.com" },
  ],
  support: [{ name: "Contact", href: "/contact" }],
  company: [
    { name: "About", href: "/about" },
    { name: "Teleta Development", href: "https://TeletaDevelopment.com" },
    { name: "Literally one charger", href: "https://LiterallyOneCharger.ca" },
  ],
  links: [
    { name: "Blog", href: "/blog" },
    { name: "Quotes", href: "/quotes" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Policies", href: "/policies" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/TeletaDevelopment",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/teleta_development/",
      icon: FaInstagram,
    },
    {
      name: "GitHub",
      href: "https://github.com/eteen12",
      icon: FaGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="whiteBg blackText rounded-lg shadow ring-1 ring-black/5 "
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="tracking-tighter bold text-2xl leading-6 ">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4 ">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        aria-label="click to go the teleta development website"
                        target="_blank"
                        className="text-base tracking-tighter leading-6 mediumBold hoverText "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="tracking-tighter bold text-2xl leading-6 ">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label="click to go to the contact section"
                        className="text-base tracking-tighter leading-6 mediumBold hoverText"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="tracking-tighter bold text-2xl leading-6 ">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        aria-label="link for teleta development company"
                        target="_blank"
                        className="text-base tracking-tighter leading-6 mediumBold hoverText"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="tracking-tighter bold text-2xl leading-6 ">
                  Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label={`go to ${item.name} page`}
                        className="text-base tracking-tighter leading-6 mediumBold hoverText"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="tracking-tighter bold text-2xl leading-6 ">
              Subscribe to the newsletter
            </h3>
            <p className="mt-2 text-base tracking-tighter leading-6 mediumBold hoverText ">
              This is for the Teleta Development newsletter
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                aria-label="please do not enter your email here, it will not work"
                placeholder="dont enter anything, it wont work"
                autoComplete="email"
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-base  shadow-md ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-stone-100 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="button"
                  className="absolute rounded-md blackBg px-7 py-1.5 whiteText shadow-sm hoverBg tracking-tighter bold text-base md:text-lg transition-transform duration-300 transform hover:scale-105"
                >
                  subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4 sm:space-x-6 md:order-2 justify-end  sm:mt-5 sm:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={`visit the ${item.name} page`}
                  className=" hoverText transition-transform duration-300 transform hover:scale-105"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-8 w-8 " />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-stone-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-400 md:text-base text-center">
            &copy; 2024{" "}
            <a
              href="https://TeletaDevelopment.com"
              target="_blank"
              aria-label="visit the teleta development website"
              className=" hover:underline"
            >
              Teleta Development
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
