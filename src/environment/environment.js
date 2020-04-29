import { development } from "./development";
import { production } from "./production";

const inProduction = false;

export const API_ENDPOINT = inProduction ? production : development;
