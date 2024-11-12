export default class Todos{
    id: string;
    text: string

    constructor(text: string){
        this.id = new Date().toISOString();
        this.text = text;
    }
}