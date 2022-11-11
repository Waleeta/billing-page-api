import axios from 'axios'

export const createBillingAddress = async (payload) => {
    const URL = "/api/v1/users"
    return await axios
        .post(URL, { user: payload },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        .then((response) => { return { data: response } })
        .catch((error) => console.log("ERROR IN API", error.response.error));
}



