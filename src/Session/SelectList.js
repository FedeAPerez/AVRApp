import React from 'react';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';

const SelectList = ({...props, children}) => {
    return (
            <Select
                value={props.id}
                onChange={props.handleChange}
                input={<FilledInput name="list-input" id="filled-list-simple" />}
            >
                <MenuItem value={0}>
                    <em>-</em>
                </MenuItem>
                {
                    props.list && props.list.length > 0 &&
                    props.list.map((element, index) => {
                        return (
                            <MenuItem key={"list_"+index} value={element.id}>{element.name}</MenuItem>
                        );
                    })
                }
            </Select>
    );
};

export default SelectList;