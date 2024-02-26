
import { Wrapper } from "./PageWrapper.style";

const PageWrapper = ({ children, ...others }) => {

  return (
    <Wrapper
      {...others}
    >
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
