import React from "react";
import cls from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return(
        <div className={cls.formControl + ' ' + ( hasError ? cls.error : '')}>
            {props.children}
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea className={cls.textarea} {...input} {...restProps}/> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
    </div>
)