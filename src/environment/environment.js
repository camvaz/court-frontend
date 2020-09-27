import { development } from "./development";
import { production } from "./production";

const inProduction = false;

const API_ENDPOINT = inProduction ? production : development;
const STORAGE_ENDPOINT = inProduction
    ? "https://courtapi.tk"
    : "http://localhost:8000";

export { API_ENDPOINT, STORAGE_ENDPOINT };
