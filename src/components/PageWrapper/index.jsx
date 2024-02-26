
import { Wrapper } from "./PageWrapper.style";

const PageWrapper = ({ children, ...others }) => {
  // const { isLoggedIn } = useUserContext();
  const isLoggedIn = true;


  return (
    <Wrapper
      {...others}
    >
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
