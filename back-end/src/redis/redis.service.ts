import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    });
  }

  async set(key: string, value: string, expireTime?: number): Promise<void> {
    await this.client.set(key, value);
    if (expireTime) await this.client.expire(key, expireTime);
  }

  async del(key: string) {
    return await this.client.del(key);
  }

  async get(key: string) {
    return await this.client.get(key);
  }

  async onModuleDestroy() {
    this.client.disconnect();
  }
}
