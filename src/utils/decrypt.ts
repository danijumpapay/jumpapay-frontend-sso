import CryptoJS from "crypto-js";

const SECRET = import.meta.env.VITE_REACT_APP_CRYPTO_SECRET || "";

export function encryptReturnTo(url: string) {
  return CryptoJS.AES.encrypt(url, SECRET).toString();
}

export function decryptReturnTo(encrypted: string) {
  const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
}