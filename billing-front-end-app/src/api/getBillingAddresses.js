import axios from 'axios'

export const getBillingAddresses = () => {
    const URL = "/api/v1/addresses"
    return axios(URL, {
        method: "GET",
        headers: { 'content-type': 'application/json' },
    })
        .then(response => response.data)
        .catch(error => console.log("ERROR in GET: ", error))
}
