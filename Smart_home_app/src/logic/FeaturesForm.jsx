import { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const FeaturesForm = ({ updateTheFeatures }) => {

    const [isFormValid, setFormValid] = useState(true);

    const [nameField, setNameField] = useState('')
    const [actionField, setActionField] = useState('')
    const [stateField, setStateField] = useState('')
    const [descriptionField, setDescriptionField] = useState('')

    const [nameFieldError, setNameFieldError] = useState(false);

    const navigate = useNavigate();

    const checkValid = () => {
        if (nameField === '' ||
            actionField === '' ||
            stateField === '' ||
            descriptionField === '') {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

        if (nameField === '') {
            setNameFieldError(true)
        }
    }

    /** Resets the fields after the value are used */
    const resetFields = () => {
        setNameField('');
        setActionField('');
        setStateField('');
        setDescriptionField('');
    }

    const nameChangeHandler = (e) => {
        setNameField(e.target.value)
    }

    const actionChangeHandler = (e) => {
        setActionField(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        checkValid();

        if (isFormValid) {
            return;
        }

        const newFeature = {
            name: nameField,
            action: actionField,
            state: stateField,
            id: Math.random() * 100
        }

        updateTheFeatures(newFeature)
        resetFields();
        navigate('/smart-home')
    }

    return (
        <form className={`form ${isFormValid ? 'valid' : 'invalid'}`}
            onSubmit={submitHandler}
            noValidate>
            <div className="control">
                <TextField
                    error={nameFieldError}
                    id="name-field-error-text"
                    label="Feature title"
                    value={nameField}
                    required
                    onChange={nameChangeHandler}
                    helperText={nameFieldError && "Incorrect name."}
                    variant="standard"
                />
            </div>

            <div className="control">
                <TextField
                    error={false}
                    id="action-field-error-text"
                    label="Feature action"
                    value={actionField}
                    required
                    onChange={actionChangeHandler}
                    helperText="Incorrect action."
                    variant="standard"
                />
            </div>

            <div className="control">
                <TextField
                    error={false}
                    id="state-field-error-text"
                    label="Feature state"
                    value={stateField}
                    required
                    onChange={(e) => setStateField(e.target.value)}
                    helperText="Incorrect state."
                    variant="standard"
                />
            </div>

            <div className="control">
                <TextField
                    error={false}
                    id="description-field-error-text"
                    label="Feature description"
                    value={descriptionField}
                    required
                    multiline
                    minRows={4}
                    onChange={(e) => setDescriptionField(e.target.value)}
                    helperText="Incorrect description."
                    variant="standard"
                />
            </div>

            <div className="actions">
                <Button variant="contained" type="submit">Add Feature</Button>
            </div>

        </form>
    )
}

FeaturesForm.propTypes = {
    updateTheFeatures: PropTypes.func,
    currentItems: PropTypes.number
}

export default FeaturesForm;