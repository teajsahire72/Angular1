export class Expense {
    constructor(
        public expenseName:string,
        public date:Date,
        public expenseCategory:string,
        public notes:string,
        public amount:number
    ){}
}