import { useState } from "react";

const BillingForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [usState, setUsState] = useState('')
    const [zip, setZip] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleUsStateChange = (e) => {
        setUsState(e.target.value)
    }

    const handleZipChange = (e) => {
        setZip(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleStreetChange = (e) => {
        setStreet(e.target.value)
    }

    console.log("city: ", city)
    console.log("state: ", usState)
    console.log("phone: ", phone)
    return (
        <form>
            <label>
                First Name:
                <input type="text" name="name" onChange={handleFirstNameChange} />
            </label>
            <label>
                Last Name:
                <input type="text" name="name" onChange={handleLastNameChange} />
            </label>
            <label>
                Street:
                <input type="text" name="name" onChange={handleStreetChange} />
            </label>
            <label>
                City:
                <input type="text" name="name" onChange={handleCityChange} />
            </label>
            <label>
                State:
                <input type="text" name="name" onChange={handleUsStateChange} />
            </label>
            <label>
                Zip:
                <input type="text" name="name" onChange={handleZipChange} />
            </label>
            <label>
                Email:
                <input type="text" name="name" onChange={handleEmailChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="name" onChange={handlePhoneChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default BillingForm;