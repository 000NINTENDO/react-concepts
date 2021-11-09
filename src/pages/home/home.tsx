import React from "react";

const Home = (props: any) => {
  if (!props.name) {
    return <div>Hey Stranger!</div>;
  }
  return <div>Hello {props.name}!</div>;
};

export default Home;
