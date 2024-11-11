import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const navigation = {
  solutions: [
    { name: "Web development", href: "https://teletadevelopment.com" },
    { name: "Web design", href: "https://teletadevelopment.com" },
    { name: "SEO optimization", href: "https://teletadevelopment.com" },
    { name: "Preformance", href: "https://teletadevelopment.com" },
  ],
  support: [{ name: "Contact", href: "https://teletadevelopment.com/contact" }],
  company: [
    { name: "Teleta Development", href: "https://teletadevelopment.com" },
    {
      name: "Literally One Charger",
      href: "https://www.literallyonecharger.ca",
    },
  ],
  legal: [{ name: "Policies", href: "/policies" }],
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
    {
      name: "YouTube",
      href: "https://www.youtube.com/@TeletaDevelopment",
      icon: FaYoutube,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t-2 max-w-[1700px] mx-auto border-black">
      <div className="mx-auto max-w-[1700px] px-6 pb-8 pt-16 sm:pt-24 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="text-2xl">
              <a
                href="https://teletadevelopment.com"
                target="_blank"
                className=" hoverText shrinkAnimation transition3"
              >
                Teleta.
              </a>
            </div>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className=" hoverText shrinkAnimation transition3"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg bold ">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="hoverText shrinkAnimation transition3 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg bold ">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="hoverText shrinkAnimation transition3 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg bold ">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="hoverText shrinkAnimation transition3 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg bold ">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="hoverText shrinkAnimation transition3 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="mt-16 border-t-2 border-black max-w-[1700px]">
          <p className="text-sm/6 ">
            &copy; 2024{" "}
            <a
              className="hoverText shrinkAnimation transition3 text-sm"
              href="https://teletadevelopment.com"
              target="_blank"
            >
              Teleta Development
            </a>{" "}
            , All rights reserved.
          </p>
        </div>
    </footer>
  );
}
