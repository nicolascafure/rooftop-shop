
export interface IProduct{
    id: number,
    title: string,
    currency:string,
    price:number,
    offer: any
  }

  export interface IState{
    products: IProduct[] 
}

export interface IStore{
    shopStore:IState
  }



