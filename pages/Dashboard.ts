import{Page, Locator, expect} from '@playwright/test';
export class DashboardPage{
    readonly page:Page;
    readonly Dashboard:Locator;
    readonly Templates:Locator;
    readonly Manage:Locator;
    readonly TotalLetters:Locator;
    readonly SuccessLetters:Locator;
    readonly FailedLetters:Locator;
    
    //readonly Totalvalue:Locator;

  constructor(page:Page){
    this.page=page;
    this.Dashboard=page.getByText('Dashboard');                                                                                                                                   
    this.Templates=page.getByText('Templates').first();
    this.Manage=page.getByRole('button',{name:'Manage'}).first();
    this.TotalLetters=page.getByText('Total Letters Generated');
    this.SuccessLetters=page.getByText('Success Letters');
    this.FailedLetters=page.getByText('Failed Letters');
    


    }

    async verifyDashboardPage(){
        await expect(this.Dashboard).toBeVisible();
        await expect(this.Templates).toBeVisible();
        await expect(this.Manage).toBeVisible();
        await expect(this.TotalLetters).toBeVisible();
        await expect(this.SuccessLetters).toBeVisible();
        await expect(this.FailedLetters).toBeVisible();
       
       
        

}
}