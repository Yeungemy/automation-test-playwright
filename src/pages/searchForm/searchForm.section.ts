import { Page } from "playwright";

class SearchForm {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get selectors (): any {
        return {
            POST_CODE_FIELD: '#postcode'
        };
    }


}

const searchForm = new SearchForm();
export {searchForm};