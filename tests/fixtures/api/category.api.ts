import { APIRequestContext } from '@playwright/test';

export class CategoryCreateAPI {
  constructor(private request: APIRequestContext) {}

  async categoryCreate(userData: any) {
    return this.request.post('/api/users', { data: userData });
  }
}