import { Link } from "next-view-transitions";
import { siteMapLinks, socialLinks } from "../../../base/data/data";
import MainContainer from "../Container";

export const Footer = () => {
  return (
    <section className="padding-all w-full bg-secondary-50 pb-6 pt-14 dark:bg-blueGray lg:pb-10 lg:pt-20">
      <MainContainer>
        <div className="grid lg:grid-cols-10">
          <div className="relative lg:col-span-6">
            <div className="absolute -left-20 -top-10 z-0 h-44 w-44 rounded-full bg-secondary-50 transition-all duration-100 lg:-left-10 lg:-top-20 lg:h-80 lg:w-80"></div>

            <p className="relative font-extralight uppercase lg:text-xl">
              FRONT END/BACKEND/DEVOPS/MOBILE DEV
            </p>

            <h2 className="relative mt-3 font-oswald text-4xl uppercase underline lg:text-7xl">
              let`s work together
            </h2>
          </div>

          <div className="relative mt-16 flex justify-between lg:col-span-4 lg:mt-0">
            <div className="">
              <h3 className="mb-2 text-xl font-light lg:mb-4">SITEMAP</h3>
              {siteMapLinks.map((link) => (
                <Link
                  className="block py-2 text-lg font-extralight text-muted-foreground underline lg:text-xl"
                  key={link.id}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -bottom-0 -right-10 z-0 h-24 w-24 rounded-full bg-secondary-50 transition-all duration-100 dark:bg-secondary-50 lg:-bottom-20 lg:-right-20 lg:h-44 lg:w-44"></div>

              <h3 className="mb-2 text-xl font-light lg:mb-4">SOCIALS</h3>
              <div className="relative">
                {socialLinks.map((link) => (
                  <a
                    className="block py-2 text-lg font-extralight text-muted-foreground underline lg:text-xl"
                    key={link.id}
                    href={link.href}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* THE PRODUCTION DATE */}
        <div className="mt-8 border-t border-muted-foreground py-4 text-center lg:mt-28 lg:py-10">
          <p className="text-center text-sm font-light uppercase text-muted-foreground lg:text-base">
            © {new Date().getFullYear()} by Ezeobi Kingsley Sunny&apos;s
            portfolio. All rights reserved.
          </p>
          <div className=""></div>
        </div>
      </MainContainer>
    </section>
  );
};
