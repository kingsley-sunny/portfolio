import portraitImg from "@/public/images/portrait.jpeg";
import Image from "next/image";
import { socialLinks } from "../../../../base/data/data";
import MainContainer from "../../../shared/Container";
import { ContactForm } from "../ContactForm/ContactForm";

export const ContactBanner = () => {
  return (
    <div className="padding-all py-10 lg:py-32">
      <MainContainer className="grid gap-8 lg:grid-cols-10">
        <div className="lg:col-span-7">
          <h1 className="max-w-[85%] text-4xl font-light leading-[1.3] lg:text-[94px] lg:leading-[1.1]">
            Let&apos;s start a project together
          </h1>

          <ContactForm />
        </div>

        <div className="mt-10 lg:col-span-3 lg:mt-0">
          <div className="relative h-[140px] w-[160px] overflow-hidden rounded-full border-4 border-foreground/50 lg:h-[225px] lg:w-[260px]">
            <Image
              src={portraitImg}
              fill
              className="h-full w-full object-cover"
              alt="Profile picture"
            />
          </div>

          <div className="mt-6 lg:mt-8">
            <div className="">
              <h3 className="text-lg font-light uppercase text-muted-foreground">
                contact details
              </h3>
              <div className="mt-4 flex flex-col space-y-3">
                <a href="mailto:ezeobisunny51@gmail.com" className="text-xl">
                  ezeobisunny51@gmail.com
                </a>
                <a href="tel:+2347082740676" className="text-xl">
                  +234 708 2740 676
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-light uppercase text-muted-foreground">
                Address
              </h3>
              <div className="mt-4 flex flex-col space-y-3">
                <p className="text-xl">
                  <span className="text-muted-foreground">location:</span> Awka,
                  Nigeria
                </p>
                <a href="tel:+2347082740676" className="text-xl">
                  <span className="text-muted-foreground">Tel:</span> +234 708
                  2740 676
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-light uppercase text-muted-foreground">
                business details
              </h3>
              <div className="mt-4 flex flex-col space-y-3">
                {socialLinks.map((link) => (
                  <a
                    className="block py-1 text-lg font-light lg:text-xl"
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
      </MainContainer>
    </div>
  );
};
