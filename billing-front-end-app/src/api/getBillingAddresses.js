import axios from 'axios'

export const getBillingAddresses = async () => {
    const URL = "/api/v1/addresses"

    return await axios
        .get(URL,
            {
                headers: {
                    'content-type': 'application/json'
                }
            })
        .then((response) => { return response.data })
        .catch(error => console.log("ERROR in GET: ", error))
}
