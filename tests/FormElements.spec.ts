import {test, expect} from '@playwright/test'
import { BasicForm } from '../pages/BasicForm'

test('Navigation to the site', async({page})=>{
    await page.goto('file:///C:/Users/lakshmi.p.kammula/Downloads/automation-practice-playground.html');
    const basicForm = new BasicForm(page);
    await basicForm.FormData('Priyanka','Priya','test@gmail.com','9014803192','testComments');
    await basicForm.formOutputMsgValidation();
    await basicForm.FormData('Priyanka','Priya','test@gmail.com','9014803192','');
});
