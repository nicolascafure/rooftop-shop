
export interface IProduct{
    id: number,
    title: string,
    currency:string,
    price:number,
    offer: any
    images: string[]
  }

  export interface IQuestion{
    answer: string,
    customer_name: string,
    question :string,
sent_at:string

  }

  export interface IState{
    products: IProduct[] ,
    productsCatalogo: IProduct[],
    questions: IQuestion[],
    productsFilter:IProduct[],
    searching:boolean,
    productCart:[]
    
 

}

export interface IStore{
    shopStore:IState
  }



