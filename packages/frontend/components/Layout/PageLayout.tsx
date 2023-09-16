import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyHeading, { MyHeadingProps } from "./MyHeading";

type PageLayoutProps = MyHeadingProps & {
  children: ReactNode;
};

const PageLayout = ({ children, ...props }: PageLayoutProps): JSX.Element => (
  <Box minH="100vh" bg="background">
    <MyHeading {...props} />
    {children}
  </Box>
);
export default PageLayout;
