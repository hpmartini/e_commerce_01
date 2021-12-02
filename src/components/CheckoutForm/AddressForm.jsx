import * as React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {FormProvider, useForm} from "react-hook-form";
import FormInput from "./FormInput";

const AddressForm = () => {
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label="First Name"/>
                        <FormInput required name='lastName' label="Last Name"/>
                        <FormInput required name='address' label="Address"/>
                        <FormInput required name='email' label="Email"/>
                        <FormInput required name='city' label="City"/>
                        <FormInput required name='zip' label="ZIP"/>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;
