export type ANSData = {
  address_color: string | undefined | null;
  currentLabel: string | undefined | null;
  avatar: string | undefined | null;
} | undefined;

export const DUMMY_ANS_DATA = {
  address_color: '#ffffff',
  currentLabel: '',
  avatar: '',
}

export type userInfo = {
  userInfo: {
    user:               string;
    currentLabel:       string;
    ownedLabels?:       OwnedLabel[];
    nickname?:          string;
    address_color:      string;
    bio?:               string;
    avatar?:            string;
    links?:             Links;
    subdomains?:        any;
    freeSubdomains:     number;
    timestamp: number;
  };
};

export type GenericLabelInterface = {
  username: string | undefined,
  classes: string, // tailwind css color classes go here 
  link_to: string | null,
  canCopy: boolean,
  icon: any; // react component, or text
}


// Generated by https://quicktype.io

export interface Resobject {
  res: Res;
}

// Primary Ark Protocol response object
export interface Res {
  arweave_address:              string;
  evm_address:                  string;
  identity_id:                  string;
  is_evaluated:                 boolean;
  is_verified:                  boolean;
  last_modification:            number;
  last_validation:              number;
  telegram:                     Telegram;
  validator:                    string;
  ver_req_network:              string;
  verification_req:             string;
  // Member Since.. 
  first_linkage:                number;
  has_unevaluated_exotic_addrs: boolean;
  exotic_addresses:             any[];
  ANS:                          Ans;
  ENS:                          string;
  AVVY:                         string;
  IS_VOUCHED:                   boolean;
  LENS_HANDLES:                 string[];
  GITPOAPS:                     Gitpoap[];
  POAPS:                        Poap[];
  ERC_NFTS:                     any |  { [key: string]: null | string }[];
  URBIT_IDS:                    any |  { [key: string]: null | string }[];
  LENS_PROTOCOLS_ACTV:          LensProtocolsActv[];
  RSS3:                         Rss3[];
  GALAXY_CREDS:                 any;
  ANFTS:                        Anfts;
  ARWEAVE_TRANSACTIONS:         ArweaveTransaction[];
  STAMPS:                       Stamp[];
};

// arweave NFTs
export interface Anfts {
  koii:           Koii[] | NFT[];
  permapages_img: Permapage[] | NFT[];
}

// first attempt at a generalized NFT interface for generic NFT gallery view
export interface NFT {
  id:            string;
  poster:        string;
  timestamp:     number;
  title:         string;
  description:   string;
  ticker?:       string;
  content_type?: string;
}

export interface Koii {
  id:            string;
  poster:        string;
  timestamp:     number;
  title:         string;
  description:   string;
  ticker:        string;
}

export interface Permapage {
  id:            string;
  poster:        string;
  timestamp:     number;
  title:         string;
  description:   string;
  ticker:        string;
  content_type: string;
}

export interface Ans {
  user:           string;
  currentLabel:   string;
  ownedLabels:    OwnedLabel[];
  nickname:       string;
  address_color:  string;
  bio:            string;
  avatar:         string;
  links:          Links;
  subdomains:     any;
  freeSubdomains: number;
}

export interface Links {
  github:    string;
  twitter:   string;
  customUrl: string;
  instagram: string;
}

export interface OwnedLabel {
  label:            string;
  scarcity:         string;
  acquisationBlock: number;
  mintedFor:        number;
}

export interface ArweaveTransaction {
  txid:      string;
  timestamp: number;
  tags:      TagElement[];
}

export interface TagElement {
  name:  string;
  value: string;
}

export interface GalaxyCreds {
  id:                  string;
  avatar:              string;
  username:            string;
  eligibleCredentials: EligibleCredentials;
}

export interface EligibleCredentials {
  list: any[];
}

export interface Gitpoap {
  gitPoapId:        number;
  gitPoapEventId:   number;
  poapTokenId:      string;
  poapEventId:      number;
  poapEventFancyId: string;
  name:             string;
  year:             number;
  description:      string;
  imageUrl:         string;
  repositories:     string[];
  earnedAt:         string;
  mintedAt:         string;
}

export interface Poap {
  event:   Event;
  tokenId: string;
  owner:   string;
  chain:   string;
  created: string;
}

export interface Event {
  id:          number;
  fancy_id:    string;
  name:        string;
  event_url:   string;
  image_url:   string;
  country:     string;
  city:        string;
  description: string;
  year:        number;
  start_date:  string;
  end_date:    string;
  expiry_date: string;
  supply:      number;
}

export interface Attribute {
  value:      number | string;
  trait_type: string;
}

export interface Telegram {
  username:     string | null;
  is_verified:  boolean;
  is_evaluated: boolean;
}

export interface Stamp {
  stampedAsset: string;
  stamper:      string;
  timestamp:    number;
  stampedAssetType: string
}

export interface LensProtocolsActv {
  timestamp:    string;
  hash:         string;
  owner:        string;
  fee:          string;
  address_from: string;
  address_to:   string;
  network:      Network | string;
  platform:     string;
  tag:          TagEnum | string;
  type:         Type | string;
  success:      boolean;
  actions:      LensAction[];
}

export interface LensAction {
  tag:          TagEnum | string;
  type:         Type | string;
  index:        number;
  address_from: string;
  address_to?:  string;
  metadata:     LensActionMetadata;
  platform:     string;
  related_urls: string[];
}

export interface LensActionMetadata {
  body?:     string;
  summary?:  string;
  bio?:      string;
  name?:     string;
  type?:     Type | string;
  handle?:   string;
  source?:   string;
  address?:  string;
  network?:  Network | string;
  platform?: string;
}

export interface Event {
  id:          number;
  fancy_id:    string;
  name:        string;
  event_url:   string;
  image_url:   string;
  country:     string;
  city:        string;
  description: string;
  year:        number;
  start_date:  string;
  end_date:    string;
  expiry_date: string;
  supply:      number;
}


// RSS3 stuff goes here
export interface Rss3 {
  profile:      Profile[];
  transactions: Transaction[];
}

export interface Profile {
  address:   string;
  network:   Network;
  platform:  string;
  source:    string;
  name:      string;
  handle:    string;
  bio:       string;
  expire_at: string;
}

export interface Transaction {
  timestamp:    string;
  hash:         string;
  owner:        string;
  fee?:         string;
  address_from: string;
  address_to?:  string;
  network:      Network | string;
  tag:          TagEnum | string;
  type:         Type | string;
  success:      boolean;
  actions:      TransactionAction[];
  platform?:    string;
}

export interface TransactionAction {
  tag:          TagEnum | string;
  type:         Type;
  index:        number;
  address_from: string;
  address_to?:  string;
  metadata:     FluffyMetadata | any;
  related_urls: string[];
  platform?:    string;
}

export interface FluffyMetadata {
  id?:               string;
  cost?:             Cost;
  name?:             string;
  image?:            string;
  value?:            string;
  symbol?:           string;
  standard?:         Standard;
  attributes?:       Attribute[];
  collection?:       string;
  description?:      string;
  value_display?:    null | string;
  contract_address?: string;
  decimals?:         number;
  to?:               Cost;
  from?:             Cost;
  protocol?:         string | Protocol;
  body?:             string;
  summary?:          string;
  bio?:              string;
  type?:             Type;
  handle?:           string;
  source?:           string;
  address?:          string;
  network?:          Network;
  platform?:         string;
  animation_url?:    string;
  external_link?:    string;
  choice?:           string;
  proposal?:         Proposal;
  type_on_platform?: Type[];
}


export interface Cost {
  name:              string;
  image:             string;
  value:             string;
  symbol:            string;
  decimals:          number;
  standard:          Standard | string;
  value_display?:    string;
  contract_address?: string;
}

export interface Proposal {
  id:           string;
  body:         string;
  title:        string;
  end_at:       string;
  options:      string[];
  start_at:     string;
  organization: Organization;
}

export interface Organization {
  id:     string;
  name:   string;
  about?: string;
}

// RSS3 stuff stops here

// Warning! All the following Enums are not exhaustive, and only work as an approximation.
// Feel free to create a PR to add more values to them.

export enum Standard {
  Erc1155 = "ERC-1155",
  Erc20 = "ERC-20",
  Erc721 = "ERC-721",
  Native = "Native",
}

export enum Network {
  BinanceSmartChain = "binance_smart_chain",
  Ethereum = "ethereum",
  Polygon = "polygon",
  Xdai = "xdai",
}

export enum Type {
  Burn = "burn",
  Create = "create",
  Mint = "mint",
  Poap = "poap",
  Post = "post",
  Profile = "profile",
  Swap = "swap",
  Trade = "trade",
  Transfer = "transfer",
  Vote = "vote",
}

export enum TagEnum {
  Collectible = "collectible",
  Exchange = "exchange",
  Governance = "governance",
  Social = "social",
  Transaction = "transaction",
}

export enum Protocol {
  MetamaskV1 = "Metamask V1",
  UniswapV2 = "Uniswap V2",
  UniswapV3 = "Uniswap V3",
}
