import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// INTERNAL IMPORT
import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  TokenMetadata,
  ContactView,
  AirdropView,
  DonateView,
} from "../views";

const Home: NextPage = (props) => {
  // STATE VARIABLE
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetadata, setOpenTokenMetadata] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);

  return (
    <>
      <Head>
        <title>Solana ToBruts Creator</title>
        <meta
          name="Solana ToBruts Creator"
          content="Create and Deploy Solana ToBruts"
        />
      </Head>

      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetadata={setOpenTokenMetadata}
      />
      {/* <FeatureView
        setOpenAirdrop={setOpenAirdrop}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetadata={setOpenTokenMetadata}
      /> */}
      <OfferView />
      <FaqView />
      {/* // DYNAMIC COMPONENT */}
      {/* {openCreateModal && (
        <div className="new_loader relative h-full bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}
      {openTokenMetadata && (
        <div className="new_loader relative h-full bg-slate-900">
          <TokenMetadata setOpenTokenMetadata={setOpenTokenMetadata} />
        </div>
      )}
      {openContact && (
        <div className="new_loader relative h-full bg-slate-900">
          <ContactView setOpenContact={setOpenContact} />
        </div>
      )}
      {openAirdrop && (
        <div className="new_loader relative h-full bg-slate-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}
      {openSendTransaction && (
        <div className="new_loader relative h-full bg-slate-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )} */}
    </>
  );
};

export default Home;
