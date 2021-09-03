
import React, { useState } from 'react'

export const useForm = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    const onChange = <K extends Object>(value: K, field: keyof T) => {  //El <K extends Object> es porque value podrá ser string o boolean...
        setState({
            ...state,
            [field]: value
        });
    }


    return {
        ...state,
        form: state,
        onChange
    }
}
