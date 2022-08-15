import React, { FC } from "react";
import Head from "next/head";
const Header: FC = () => {
  return (
    <div className="">
      <Head>
        <title>Notes</title>
        <meta name="Notes App" content="Write and store notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-semibold text-4xl text-center md:text-left py-5">Notes</h1>
      <hr className="text-left w-screen"></hr>
    </div>
  );
};

export default Header;
