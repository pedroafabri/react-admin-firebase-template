import { sha256 } from "crypto-hash";

const createHash = (str: string | ArrayBuffer | ArrayBufferView) => sha256(str)

export default createHash;