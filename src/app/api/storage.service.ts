import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CryptoHelper } from '../helpers/cryptohelper';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  [x: string]: any;

  private key = 'your_secret_key'; // Replace with a strong secret key

  constructor(private storage: Storage) { }

  async init() {
    await this.storage.create();
  }


  async setItem(key: string, value: any): Promise<void> {
    const encryptedData = CryptoHelper.encrypt(JSON.stringify(value), this.key);
    await this.storage.set(key, encryptedData);
 }

  async getItem(key: string): Promise<any> {
    const encryptedData = localStorage.getItem(key);
    if (!encryptedData) {
      return null;
    }
    try {
      const decryptedData = CryptoHelper.decrypt(encryptedData, this.key);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error('Error decrypting data:', error);
      return null;
    }
    return await this.storage.get(key);
  }

  async removeItem(key: string): Promise<void> {
    await this.storage.remove(key);
  }

  async clear(): Promise<void> {
    await this.storage.clear();
  }
}
