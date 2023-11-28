import { type Page } from '@playwright/test';
export default class BasePage{
    private page: Page

    constructor(page){
        this.page = page;
    }
}