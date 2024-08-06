import { FC } from "react";
import dynamic from "next/dynamic";

// INTERNAL IMPORT
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
import NetworkSwitcher from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <select
          value={networkConfiguration}
          onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
          className="select text-center max-w-xs border-none bg-transparent outline-0 cursor-pointer"
        >
          <option value="mainnet-beta">mainnet</option>
          <option value="devnet">devnet</option>
          <option value="testnet">testnet</option>
        </select>
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), { ssr: false });
