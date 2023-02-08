import { Suspense } from "react";
import { Box, Container, Flex, Loader } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <Box
      sx={{ minBlockSize: "100vh", display: "flex",backgroundColor:"black", flexDirection: "column" }}
    >
      <Nav />
      <Box sx={(theme) => ({ flex: 1 })}>
        <Suspense
          fallback={
            <Flex py="md" align="center">
              <Loader variant="dots" />
            </Flex>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Layout;
