export const FORDEFI_API_BASE_URL_PROD = 'https://api.fordefi.com';
// Should be updated when the openapi folder is updated
export const CURRENT_FORDEFI_API_VERSION = 'v1.83.14';

// Page size used when paginating the Fordefi `/api/v1/blockchains` endpoint while resolving the configured chain.
// 100 is the maximum the endpoint accepts.
export const CHAINS_PAGE_SIZE = 100;
// Hard cap on the number of pages requested while resolving the configured chain, so a server that reports a growing
// or non-finite `total` cannot spin the loop indefinitely.
export const CHAINS_MAX_PAGES = 20;
