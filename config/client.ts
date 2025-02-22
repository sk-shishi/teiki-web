import { assert } from "@/modules/common-utils";

// TODO: Maybe replace this with a middleware filling in the hostname
export const NEXT_PUBLIC_HOST: string = process.env.NEXT_PUBLIC_HOST || "";
assert(
  /^(http|https):\/\/.*[^/]$/.test(NEXT_PUBLIC_HOST),
  "NEXT_PUBLIC_HOST must starts with " +
    "'http://' or 'https://' and must not end with '/'"
);

export const NEXT_PUBLIC_BLOCKFROST_URL: string =
  process.env.NEXT_PUBLIC_BLOCKFROST_URL || "";
assert(
  /^(http|https):\/\/.*[^/]$/.test(NEXT_PUBLIC_BLOCKFROST_URL),
  "NEXT_PUBLIC_BLOCKFROST_URL must starts with " +
    "'http://' or 'https://' and must not end with '/'"
);

export const NEXT_PUBLIC_BLOCKFROST_PROJECT_ID: string =
  process.env.NEXT_PUBLIC_BLOCKFROST_PROJECT_ID || "";
assert(
  /^(mainnet|preprod|preview|testnet)[a-zA-Z0-9_]{32}$/.test(
    NEXT_PUBLIC_BLOCKFROST_PROJECT_ID
  ),
  "NEXT_PUBLIC_BLOCKFROST_PROJECT_ID must start with " +
    "'mainnet', 'preprod', 'preview' or 'testnet' " +
    "and followed by 32 alphanumeric characters"
);

export const NEXT_PUBLIC_NETWORK: "Mainnet" | "Preview" | "Preprod" =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (process.env.NEXT_PUBLIC_NETWORK || "") as any;
assert(
  ["Mainnet", "Testnet", "Preview", "Preprod"].includes(NEXT_PUBLIC_NETWORK),
  "NEXT_PUBLIC_NETWORK must be 'Mainnet', 'Testnet', 'Preview' or 'Preprod'"
);

export const NEXT_PUBLIC_SHOW_SECRET_ROUTES: string =
  process.env.NEXT_PUBLIC_SHOW_SECRET_ROUTES || "";
assert(
  /^true|false$/.test(NEXT_PUBLIC_SHOW_SECRET_ROUTES),
  "NEXT_PUBLIC_SHOW_SECRET_ROUTES must be 'true' or 'false'"
);

export const NEXT_PUBLIC_ENABLE_LEGACY: string =
  process.env.NEXT_PUBLIC_ENABLE_LEGACY || "";
assert(
  /^true|false$/.test(NEXT_PUBLIC_ENABLE_LEGACY),
  "NEXT_PUBLIC_ENABLE_LEGACY must be 'true' or 'false'"
);

export const NEXT_PUBLIC_TX_TIME_START_PADDING: string =
  process.env.NEXT_PUBLIC_TX_TIME_START_PADDING || "";
assert(
  NEXT_PUBLIC_TX_TIME_START_PADDING.length > 0,
  "NEXT_PUBLIC_TX_TIME_START_PADDING is required"
);

export const NEXT_PUBLIC_TX_TIME_END_PADDING: string =
  process.env.NEXT_PUBLIC_TX_TIME_END_PADDING || "";
assert(
  NEXT_PUBLIC_TX_TIME_END_PADDING.length > 0,
  "NEXT_PUBLIC_TX_TIME_END_PADDING is required"
);

export const NEXT_PUBLIC_PROJECT_AT_MPH: string =
  process.env.NEXT_PUBLIC_PROJECT_AT_MPH || "";
assert(
  NEXT_PUBLIC_PROJECT_AT_MPH.length > 0,
  "NEXT_PUBLIC_PROJECT_AT_MPH is required"
);

export const NEXT_PUBLIC_PROOF_OF_BACKING_MPH: string =
  process.env.NEXT_PUBLIC_PROOF_OF_BACKING_MPH || "";
assert(
  NEXT_PUBLIC_PROOF_OF_BACKING_MPH.length > 0,
  "NEXT_PUBLIC_PROOF_OF_BACKING_MPH is required"
);

export const NEXT_PUBLIC_LEGACY_PROOF_OF_BACKING_MPH: string | null =
  process.env.NEXT_PUBLIC_LEGACY_PROOF_OF_BACKING_MPH || null;

export const NEXT_PUBLIC_PROTOCOL_NFT_MPH: string =
  process.env.NEXT_PUBLIC_PROTOCOL_NFT_MPH || "";
assert(
  NEXT_PUBLIC_PROTOCOL_NFT_MPH.length > 0,
  "NEXT_PUBLIC_PROTOCOL_NFT_MPH is required"
);
export const NEXT_PUBLIC_TEIKI_MPH: string =
  process.env.NEXT_PUBLIC_TEIKI_MPH || "";
assert(
  /^[0-9a-f]+$/.test(NEXT_PUBLIC_TEIKI_MPH),
  "NEXT_PUBLIC_TEIKI_MPH must be a hex string"
);

export const NEXT_PUBLIC_TEIKI_ASSET_NAME: string =
  process.env.NEXT_PUBLIC_TEIKI_ASSET_NAME || "";
assert(
  /^[0-9a-f]+$/.test(NEXT_PUBLIC_TEIKI_ASSET_NAME),
  "NEXT_PUBLIC_TEIKI_ASSET_NAME must be a hex string"
);

export const NEXT_PUBLIC_AI_URL: string = process.env.NEXT_PUBLIC_AI_URL || "";
assert(
  /^(http|https):\/\/.*[^/]$/.test(NEXT_PUBLIC_AI_URL),
  "NEXT_PUBLIC_AI_URL must starts with " +
    "'http://' or 'https://' and must not end with '/'"
);

export const NEXT_PUBLIC_GRAMMARLY_CLIENT_ID =
  process.env.NEXT_PUBLIC_GRAMMARLY_CLIENT_ID || "";
assert(
  /^client_[a-zA-Z0-9]*$/.test(NEXT_PUBLIC_GRAMMARLY_CLIENT_ID),
  "NEXT_PUBLIC_GRAMMARLY_CLIENT_ID must start with " +
    "'client_' and followed by alphanumeric characters"
);

export const NEXT_PUBLIC_TEIKI_CDN: string =
  process.env.NEXT_PUBLIC_TEIKI_CDN || "";
assert(
  /^(http|https):\/\/.*[^/]$/.test(NEXT_PUBLIC_TEIKI_CDN),
  "NEXT_PUBLIC_TEIKI_CDN must starts with " +
    "'http://' or 'https://' and must not end with '/'"
);

export const NEXT_PUBLIC_IPFS_GATEWAY: string =
  process.env.NEXT_PUBLIC_IPFS_GATEWAY || "";
assert(
  /^(http|https):\/\/.*[^/]$/.test(NEXT_PUBLIC_IPFS_GATEWAY),
  "NEXT_PUBLIC_IPFS_GATEWAY must starts with " +
    "'http://' or 'https://' and must not end with '/'"
);
