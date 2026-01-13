import {LoginPage} from './login';   
import {DashboardPage} from './Dashboard';
import { test } from '@playwright/test';

test('login test', async ({page})=>{

    const loginPage=new LoginPage(page);
    await loginPage.testLogin(page, 'admin', 'admin');
    await page.waitForTimeout(5000);

     const dashboardPage=new DashboardPage(page);
        await dashboardPage.verifyDashboardPage();
         await page.waitForTimeout(5000)
})