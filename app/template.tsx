import { IComponentProps } from "../base/interfaces/interface";
import { SmoothScroll } from "../components/shared/SmoothScroll/SmoothScroll";

const template = ({ children }: IComponentProps) => {
  return <SmoothScroll>{children}</SmoothScroll>;
};

export default template;
