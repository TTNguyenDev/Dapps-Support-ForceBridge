import Web3 from 'web3';
import { TTNguyenToken } from '../../types/TTNguyenToken';
export declare class TTNguyenTokenWrapper {
    web3: Web3;
    contract: TTNguyenToken;
    address: string;
    constructor(web3: Web3);
    get isDeployed(): boolean;
    getTotalSupply(): Promise<string>;
    getTokenSymbol(): Promise<string>;
    getTokenName(): Promise<string>;
    setTransferToken(fromAddress: string, toAddress: string, amount: number): Promise<import("web3-core").TransactionReceipt>;
    deploy(fromAddress: string): Promise<any>;
    useDeployed(contractAddress: string): void;
}
