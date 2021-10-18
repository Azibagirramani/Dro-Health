import { AxiosInstance } from "axios"
import Instance from "../plugins/Axios"
import Endpoints from "../services/Endpoints"

interface ItemsInterface {
    name: string,
    authors: string[],
    country: string,
    characters: string[],
    isbn: string,
    publisher: string,
    released: string,
    url: string,
    numberOfPages: number,
    mediaType: string,
    povCharacters: string[]
  }

class Books{

    private instance: AxiosInstance
    private endpoints: any
    constructor(Instance: AxiosInstance, Enpoints: any){
        this.instance = Instance
        this.endpoints = Enpoints
    }


    async get_books(){
        return await (await this.instance.get<ItemsInterface[]>(this.endpoints.books)).data
    }
}

const books = new Books(Instance, Endpoints)

export default books