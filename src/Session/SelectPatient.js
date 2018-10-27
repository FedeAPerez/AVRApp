import React from 'react';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';

const SelectPatient = ({...props, children}) => {
    return (
            <Select
                value={props.idPatient}
                onChange={props.handleChange}
                input={<FilledInput name="patient" id="filled-patient-simple" />}
            >
                <MenuItem value={0}>
                    <em>-</em>
                </MenuItem>
                {
                    props.patients && props.patients.length > 0 &&
                    props.patients.map((element, index) => {
                        return (
                            <MenuItem key={"patient_"+index} value={element.idPatient}>{element.name}</MenuItem>
                        );
                    })
                }
            </Select>
    );
};

export default SelectPatient;