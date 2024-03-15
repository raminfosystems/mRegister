import { AES } from 'jscrypto/es6/AES';
import * as JsCrypto from 'jscrypto/es6';



export class CryptoHelper {



    static encrypt(data: string, key: string): string {
        const iv = JsCrypto.Word32Array.random(128 / 8); // Generate random initialization vector
        const encrypted = AES.encrypt(data, JsCrypto.Utf8.parse(key), {
            iv: iv,
            mode: JsCrypto.mode.CBC,
            padding: JsCrypto.pad.Pkcs7,
        });
        return `${iv.toString()}${encrypted.toString()}`;
    }

    static decrypt(data: string, key: string): string {
        const iv = JsCrypto.Hex.parse(data.substr(0, 32)); // Extract initialization vector
        const encryptedText: JsCrypto.Word32Array = JsCrypto.Hex.parse(data.substr(32));
        const cipherParams: JsCrypto.CipherParams = new JsCrypto.CipherParams({
            cipherText: encryptedText,
        });
        const decrypted = AES.decrypt(cipherParams, JsCrypto.Utf8.parse(key), {
            iv: iv,
            mode: JsCrypto.mode.CBC, 
            padding: JsCrypto.pad.Pkcs7,
        });
        return decrypted.toString(JsCrypto.Utf8);
    }
}