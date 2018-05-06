export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public drinkPerfermence: string,
        public hobbies?: string[]
    ){}
}