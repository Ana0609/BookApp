import { Book } from "../book";


export class CustomValidators {
     public notNullValue(value: Book): any{

      if(value.title=="" || value.description=="" || value.authorName=="" || value.publishedDate==null)
      {
        return false;
      }
      return true;
    }
}