export interface InputProp {
    label?: string;
    name: string;
    placeholder?: string;
    type?: string;
  }

  export interface FormikValue {
  
    email:string
    
  }
  export interface InvoiceValues {
    invoicefrom: string
    invoiceTo:string
    billTo:string
    date:string
    duedate:string
    terms:string
    ponumber:string
  }