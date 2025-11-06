

export const API_PATHS = {
    AUTH:{
        LOGIN:"/users/login/"
    },
    USERS:{
        ROOT:"/users/",
        ID:(id:string)=>`/users/${id}`,
    },
    BOTS:{
        ROOT:`/bots/`,
        ID:(id:number)=>`/bots/bots/${id}`,
    },
    PRODUCTS:{
        ROOT:(botId:number)=>`/bots/${botId}/products`,
        ID:(botId:number, productId:number )=>`/api/bots/${botId}/products/${productId}`,
    },

}