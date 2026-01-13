import {Page, Locator, expect} from '@playwright/test';
export class LoginPage{
    readonly page:Page;
    readonly userid:Locator;
    readonly password:Locator;
    readonly signInButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.userid=page.getByPlaceholder('Enter user ID');
        this.password=page.getByPlaceholder('Enter password');
        this.signInButton=page.getByRole('button', {name: 'Sign In'});
    }

    async goto(){
        await this.page.goto("https://localhost:3000/login");
    }

    async testLogin(page:Page, userid:string, password:string) {
        const loginPage=new LoginPage(page);
        await loginPage.goto();
        await expect(loginPage.userid).toBeVisible();   
        await loginPage.userid.fill('admin');
        await expect(loginPage.password).toBeVisible();
        await loginPage.password.fill('admin');
        await expect(loginPage.signInButton).toBeVisible();
        await loginPage.signInButton.click();
        await expect(loginPage.userid).not.toBeVisible();
    }
}

/* test("login page",async ({page})=>{
    await page.goto("https://localhost:3000/login");
    await expect(page.locator('.header-logo-login')).toBeVisible();
}); */
