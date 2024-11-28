import { IComponentProps } from "../../base/interfaces/interface";
import { cn } from "../../lib/utils";

const MainContainer = ({ children, className }: IComponentProps) => {
  return <div className={cn("max-w-[1500px] mx-auto", className)}>{children}</div>;
};

export default MainContainer;
