import * as React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {Grid, TextField} from "@material-ui/core";

const FormInput = ({name, label, required}) => {
    const {control} = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                defaultValue=""
                as={TextField}
                control={control}
                fillwidth
                name={name}
                label={label}
                required={required}
            />
        </Grid>
    );
};

export default FormInput;
