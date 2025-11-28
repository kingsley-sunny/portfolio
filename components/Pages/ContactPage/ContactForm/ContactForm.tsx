import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";

export const ContactForm = () => {
  return (
    <form className="mt-8 h-full font-light leading-[1.6] lg:mt-16 lg:max-w-[80%]">
      <div className="space-y-3">
        <label htmlFor="email" className="text-xl lg:text-3xl">
          What&apos;s your name?
        </label>
        <Input className="text-lg lg:text-xl" />
      </div>

      <div className="mt-10 space-y-3">
        <label htmlFor="email" className="text-xl lg:text-3xl">
          What&apos;s your email?
        </label>
        <Input className="text-lg lg:text-xl" />
      </div>

      <div className="mt-10 space-y-3">
        <label htmlFor="email" className="text-xl lg:text-3xl">
          Please write your message
        </label>
        <Textarea className="text-lg lg:text-xl" />
      </div>

      <button className="mt-12 flex h-36 w-36 items-center justify-center rounded-full bg-greenColor text-sm text-white/80 lg:mt-16 lg:h-40 lg:w-40 lg:text-base">
        <p className="">
          <span className="text-sm">CLICK TO</span>
          <span className="inline-block">SEND MESSAGE</span>
        </p>
      </button>
    </form>
  );
};
