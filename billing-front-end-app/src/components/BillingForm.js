import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

import Success from './Success'

import { createBillingAddress } from '.././api/createBillingAddress'

import './BillingForm.css'

const BillingForm = () => {
    const [success, setSuccess] = useState(false)
    const [firstName, setFirstName] = useState(false)


    const BillingFormSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        street: Yup.string()
            .required('Required'),
        city: Yup.string()
            .required('Required'),
        zip: Yup.string()
            .min(5, 'Must be 5 digits')
            .max(5, 'Must be 5 digits')
            .required('Required'),
        phone: Yup.string()
            .required('Required')
            .min(10, 'Must be 10 digits')
            .max(10, 'Must be 10 digits')
    });

    const handleSubmit = async (values) => {
        values.firstName && setFirstName(values.firstName)
        const payload = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone,
            address_attributes: {
                street: values.street,
                zip: values.zip,
                city: values.city,
                state: values.usState,
            }
        }
        const { data, error } = await createBillingAddress(payload)

        if (data.status === 200) {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 10000)
            return
        } else {
            return error
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: "", lastName: "", street: "", city: "", usState: "", zip: "", phone: "", email: ""
                }}
                validationSchema={BillingFormSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                    resetForm({ values: { firstName: '', lastName: '', email: '', phone: '', zip: '', usState: '', city: '', street: '' } });
                }} >
                {({ errors, touched }) => (
                    <Form className="formContainer">
                        <label>First Name</label>
                        <Field name="firstName" label="First Name" />
                        {errors.firstName && touched.firstName ? (
                            <div className="errorField">{errors.firstName}</div>
                        ) : null}
                        <label>Last Name</label>
                        <Field name="lastName" type="text" />
                        {errors.lastName && touched.lastName ? (
                            <div className="errorField">{errors.lastName}</div>
                        ) : null}
                        <label>Street Address</label>
                        <Field name="street" type="text" />
                        {errors.street && touched.street ? (
                            <div className="errorField">{errors.street}</div>
                        ) : null}
                        <label>City</label>
                        <Field name="city" type="text" />
                        {errors.city && touched.city ? (
                            <div className="errorField">{errors.city}</div>
                        ) : null}
                        <label>State</label>
                        <Field as="select" multiple={false} name="usState">
                            <option value="IL">IL</option>
                            <option value="CA">CA</option>
                            <option value="MI">MI</option>
                            <option value="MI">WI</option>
                            <option value="MI">NY</option>
                        </Field>
                        <label>Zip Code</label>
                        <Field name="zip" type="text" />
                        {errors.zip && touched.zip ? (
                            <div className="errorField">{errors.zip}</div>
                        ) : null}
                        <label>Email</label>
                        <Field name="email" label="Email" />
                        {errors.email && touched.email ? (
                            <div className="errorField">{errors.email}</div>
                        ) : null}
                        <label>Phone</label>
                        <Field name="phone" type="text" />
                        {errors.phone && touched.phone ? (
                            <div className="errorField">{errors.phone}</div>
                        ) : null}
                        <button className='button' type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            {success && <Success firstName={firstName} />}
        </div >
    )
}

export default BillingForm;