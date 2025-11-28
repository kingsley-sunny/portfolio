import { IComponentProps } from "../base/interfaces/interface";
import { Footer } from "../components/shared/Footer/Footer";
import { SmoothScroll } from "../components/shared/SmoothScroll/SmoothScroll";

const template = ({ children }: IComponentProps) => {
  return (
    <SmoothScroll>
      {children}
      <Footer />
    </SmoothScroll>
  );
};

export default template;
