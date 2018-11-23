import { ErrorHandler } from "@angular/core";
import { AlertPromise } from "selenium-webdriver";

//Task 1 - Create ErrorHandler Class
export class MyErrorHandler implements ErrorHandler
{
    handleError(error)
    {
        alert("Global Error Handler!");
        console.log(error);

        //Log Error on Server...
    }
}