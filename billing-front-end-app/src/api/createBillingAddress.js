import axios from 'axios'

export const createBillingAddress = async (payload) => {
    console.log("payload in api call", payload)
    debugger;
    const URL = "/api/v1/users"
    return await axios
        .post(URL, { user: payload })
        .then((res) => { return { data: res } })
        .catch((error) => console.log(error));
}



