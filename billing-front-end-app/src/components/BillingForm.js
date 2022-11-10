import { Formik, Field, Form } from "formik";

import { createBillingAddress } from '.././api/createBillingAddress'

import './BillingForm.css'

const BillingForm = () => {

    const handleSubmit = (values) => {

        const payload = {
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            phone: values.phone,
            address_attributes: {
                street: values.street,
                zip: values.zip,
                city: values.city,
                state: values.usstate,
            }
        }
        const { data, error } = createBillingAddress(payload)
        if (!error) {
            return data
        } else {
            return error
        }
    }

    return (
        <div>
            <Formik initialValues={{
                firstname: "", lastname: "", street: "", city: "", usstate: "", zip: "", phone: "", email: ""
            }} onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm({ values: { firstname: '', lastname: '', email: '', phone: '', zip: '', usstate: '', city: '', street: '' } });
            }} >
                {() => (
                    <Form className="formContainer">
                        <label>First Name</label>
                        <Field name="firstname" label="First Name" />
                        <label>Last Name</label>
                        <Field name="lastname" type="text" />
                        <label>Street Address</label>
                        <Field name="street" type="text" />
                        <label>City</label>
                        <Field name="city" type="text" />
                        <label>State</label>
                        <Field as="select" multiple={false} name="usstate">
                            <option value="IL">IL</option>
                            <option value="CA">CA</option>
                            <option value="MI">MI</option>
                            <option value="MI">WI</option>
                            <option value="MI">NY</option>
                        </Field>
                        <label>Zip Code</label>
                        <Field name="zip" type="text" />
                        <label>Email</label>
                        <Field name="email" label="Email" />

                        <label>Phone</label>
                        <Field name="phone" type="text" />
                        <button className='button' type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default BillingForm;