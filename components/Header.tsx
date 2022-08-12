import React, { FC } from "react";
import Head from "next/head";
const Header: FC = () => {
  return (
    <div className="p-10">
      <Head>
        <title>Notes</title>
        <meta name="Notes App" content="Write and store notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-semibold text-4xl">Notes</h1>
    </div>
  );
};

export default Header;
