import { useEffect, useState } from 'react'

import { getBillingAddresses } from '../../api/getBillingAddresses'

const BillingAddressList = () => {
    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        const getAddresses = async () => {
            const response = await getBillingAddresses();

            setAddresses(response)
        }
        getAddresses();
    }, []);

    return (
        <div>
            Hello world
        </div>
    );

}

export default BillingAddressList;