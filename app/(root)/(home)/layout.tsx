import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      Navbar
      <div className="flex">
        Sidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28"></section>
      </div>
      {children}
    </main>
  );
};

export default HomeLayout;
