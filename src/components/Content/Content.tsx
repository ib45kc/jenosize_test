import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const Content = (props: any) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Container
      className="content container-fluid pt-2 pb-4"
      style={{
        minHeight: windowDimensions.height - 320,
      }}
    >
      {props.children}
    </Container>
  );
};
