
export interface IProduct{
    id: number,
    title: string,
    currency:string,
    price:number,
    offer: any
    images: string[]
  }

  export interface IQuestion{
question :string,
customer_name: string,
answer: string,
sent_at:string

  }

  export interface IState{
    products: IProduct[] ,
    productsCatalogo: IProduct[],
    questions: IQuestion[]
    
 

}

export interface IStore{
    shopStore:IState
  }



