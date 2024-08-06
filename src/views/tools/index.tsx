import React, { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { LuArrowRightFromLine } from "react-icons/lu";

export const ToolView: FC = ({
  setOpenAirdrop,
  setOpenContact,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetadata,
}) => {
  const tools = [
    {
      name: "ToBruts Faucet",
      icon: <MdGeneratingTokens />,
      function: setOpenAirdrop,
    },
    {
      name: "Create ToBruts",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Transfer ToBruts",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "ToBruts Metadata",
      icon: <MdGeneratingTokens />,
      function: setOpenTokenMetadata,
    },
    {
      name: "ToBruts Support",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },
    {
      name: "ToBruts Support",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },
    {
      name: "ToBruts Support",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },
    {
      name: "ToBruts Support",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },
  ];
  return (
    <section id="tools" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Solana Powerfull Tools
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Where the force will always together with us.
              <br />
              In the bloody market, tobruts will grow big and bigger.
              <br />
              On the Solana, the powerfull tools rules them all.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              className="bg-default-950/40 rounded-xl backdrop-blur-3xl"
              onClick={() => tool.function(true)}
            >
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${
                      index == 0
                        ? "text-red-500"
                        : index == 1
                        ? "text-sky-500"
                        : index == 2
                        ? "text-indigo-500"
                        : index == 3
                        ? "text-yellow-500"
                        : "text-teal-500"
                    }`}
                  >
                    <i data-lucide="dribble" className="">
                      {tool.icon}
                    </i>
                  </div>
                  <h3 className="text-default-200 text-xl font-medium">
                    {tool.name}
                  </h3>
                </div>
                <a className="cursor-pointer text-primary group relative inline-flex items-center gap-2">
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                  Select & Try
                  <i data-lucide={"move-right"}>
                    <LuArrowRightFromLine />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a className="cursor-pointer hover:bg-primary-hover bg-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-all duration-500">
            No More Tools
            <i>
              <IoIosArrowRoundForward />
              <IoIosCloseCircleOutline />
              <IoIosArrowRoundBack />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};
