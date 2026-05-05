import { Page } from "@playwright/test"

export class PlaywrightPage {
    public page:Page;

    constructor(page : Page){
        this.page = page;
    }

    protected onPage(){
        return false;
    }
}