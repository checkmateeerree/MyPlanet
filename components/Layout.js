
import { Box } from "@chakra-ui/layout";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
        <Box minHeight="90vh" pt="150px" pb="60px" bgColor="white">{children}</Box>
      <Footer />
    </div>
  );
}

export default Layout;
