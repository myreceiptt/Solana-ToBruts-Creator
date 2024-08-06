import React, { FC } from "react";
import { LuArrowRightFromLine } from "react-icons/lu";
import { MdGeneratingTokens, MdToken } from "react-icons/md";
import { RiTokenSwapFill } from "react-icons/ri";
import { RxTokens } from "react-icons/rx";

export const FeatureView: FC = ({
  setOpenAirdrop,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetadata,
}) => {
  const features = [
    {
      name: "ToBruts Faucet",
      icon: <MdToken />,
      description: "Get faucet for tobruts development on Solana devnet.",
      function: setOpenAirdrop,
    },
    {
      name: "Create ToBruts",
      icon: <MdGeneratingTokens />,
      description: "Create tobruts by deploying, and minting it on Solana.",
      function: setOpenCreateModal,
    },
    {
      name: "Transfer ToBruts",
      icon: <RiTokenSwapFill />,
      description: "Distribute tobruts by transferring them to some users.",
      function: setOpenSendTransaction,
    },
    {
      name: "ToBruts Metadata",
      icon: <RxTokens />,
      description: "The tool for updating tobruts metadata on Solana.",
      function: setOpenTokenMetadata,
    },
  ];
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Solana Featured Tools
            </h2>
            <p className="text-default-200 text-sm font-medium">
              With powerful tools is enough, no more need any other tools.
            </p>
          </div>
        </div>
        <div className="bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl">
          {features.map((list, index) => (
            <div
              key={index}
              className={`w-auto grow border-b border-white/10 md:w-1/2 ${
                index == 0
                  ? "md:border-e"
                  : index == 1
                  ? ""
                  : index == 2
                  ? "md:border-e md:border-b-0"
                  : ""
              }`}
            >
              <div className="p-8 sm:p-10">
                <div className="bg-primary/10 text-primary mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  <i data-lucide="framer">{list.icon}</i>
                </div>
                <h2 className="mb-4 text-2xl font-medium text-white">
                  {list.name}
                </h2>
                <p className="text-default-200 mb-6 text-base">
                  {list.description}
                </p>
                <a
                  onClick={() => list.function(true)}
                  className="cursor-pointer hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
                >
                  Use Tools{" "}
                  <i>
                    <LuArrowRightFromLine />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
