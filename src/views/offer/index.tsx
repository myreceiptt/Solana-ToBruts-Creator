import React, { FC } from "react";
import { LuArrowRightFromLine, LuArrowLeftFromLine } from "react-icons/lu";
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosCloseCircleOutline,
} from "react-icons/io";

export const OfferView: FC = ({}) => {
  return (
    <section id="price" className="relative overflow-hidden py-20">
      <div className="px-6 py-0">
        <div className="bg-default-950/40 rounded-2xl">
          <div className="container">
            <div className="mb-10 flex items-end justify-between pt-6">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-medium capitalize text-white">
                  It’s Your Precious On Solana
                </h2>
                <p className="text-default-200 text-sm font-medium">
                  You can't code for your tobruts, but we can code it for you.
                  If you know, so you know. If you know more, you know better.
                  If you not know, so you knowing nothing about it.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* // FIRST */}
              <div className="space-y-6">
                <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                  <div className="p-10">
                    <i className="text-primary h-10 w-10"></i>
                    <h3 className="mb-4 mt-4 text-2xl font-medium text-white">
                      No Price For The Best!
                    </h3>
                    <p className="text-default-100 mb-4 text-sm font-medium">
                      Please do what you want to do as long as you hold our
                      NFTs.
                    </p>
                    <a
                      href="#"
                      className="text-primary group relative inline-flex items-center gap-2"
                    >
                      <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                      No More To Read.
                      <i data-lucide={"move-right"}>
                        <LuArrowLeftFromLine />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              {/* // SECOND */}
              <div className="space-y-6">
                <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                  <div className="p-10">
                    <i className="text-primary h-10 w-10"></i>
                    <h3 className="mb-4 mt-4 text-2xl font-medium text-white">
                      Best Price Is No Price!
                    </h3>
                    <p className="text-default-100 mb-4 text-sm font-medium">
                      Please hold our NFTs as long as you want to do what you
                      want.
                    </p>
                    <a
                      href="#"
                      className="text-primary group relative inline-flex items-center gap-2"
                    >
                      <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                      No More To Read.
                      <i data-lucide={"move-right"}>
                        <LuArrowLeftFromLine />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              {/* // THIRD */}
              <div className="space-y-6">
                <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                  <div className="p-10">
                    <i className="text-primary h-10 w-10"></i>
                    <h3 className="mb-4 mt-4 text-2xl font-medium text-white">
                      No Price For The Best!
                    </h3>
                    <p className="text-default-100 mb-4 text-sm font-medium">
                      Please do what you want to do as long as you hold our
                      NFTs.
                    </p>
                    <a className="cursor-pointer text-primary group relative inline-flex items-center gap-2">
                      <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                      No more to read.
                      <i data-lucide={"move-right"}>
                        <LuArrowLeftFromLine />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center pb-6">
              <a className="cursor-pointer hover:bg-primary-hover bg-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-all duration-500">
                No More Price
                <i>
                  <IoIosArrowRoundForward />
                  <IoIosCloseCircleOutline />
                  <IoIosArrowRoundBack />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
