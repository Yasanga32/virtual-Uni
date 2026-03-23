const { default: axios } = require("axios");

function sum(a,b){
    return a+b;
}

const BACKEND_URL = "http://localhost:3000"

describe("Authentication",()=>{
    test('User is able to sign up only once',async ()=>{
        const user = "shanuka" + Math.random(); //shanuka0.2231
        const password = "123456";

        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
            username,
            password,
            type: "admin"
        })

        expect(response.statusCode).toBe(200)

        const updatedResponse = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
            username,
            password,
            type: "admin"
        })

        expect(resupdatedResponseponse.statusCode).toBe(400)

    })
})


