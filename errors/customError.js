

export class CustomerAPIError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const creatCustomError=(msg,statusCode)=>{
    return new CustomerAPIError(msg,statusCode);
}

