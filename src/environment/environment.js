import { development } from "./development";
import { production } from "./production";

const inProduction = true;

export const API_ENDPOINT = inProduction ? production : development;
