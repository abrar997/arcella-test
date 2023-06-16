import React from "react";
import { Content, Details, Header } from "./components";

const App = () => {
  return (
    <div class="px-5 lg:container py-12 grid gap-5">
      <Header />
      <Details />
      <Content />
    </div>
  );
};

export default App;
