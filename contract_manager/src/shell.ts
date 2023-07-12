import * as tsNode from "ts-node";

const repl = tsNode.createRepl();
const service = tsNode.create({ ...repl.evalAwarePartialHost });
repl.setService(service);
repl.start();
repl.evalCode(
  "import { Contracts, Vaults, loadHotWallet } from './src/entities';" +
    "import { Chains,SuiChain,CosmWasmChain } from './src/chains';" +
    "import { SuiContract } from './src/sui';" +
    "import { CosmWasmContract } from './src/cosmwasm';" +
    "import { DefaultStore } from './src/store';" +
    "DefaultStore"
);

// import * as repl from 'node:repl';
// import { CosmWasmChain, Chains, ChainContracts } from './entities';
// // import { CHAINS_NETWORK_CONFIG } from './chains-manager/chains';

// const replServer = repl.start('Pyth shell> ')
// // const mnemonic = "salon myth guide analyst umbrella load arm first roast pelican stuff satoshi";

// replServer.context.CosmWasmChain = CosmWasmChain;
// replServer.context.Chains = Chains;
// replServer.context.ChainContracts = ChainContracts;