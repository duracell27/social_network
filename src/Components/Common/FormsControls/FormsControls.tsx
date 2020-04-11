import React from "react";
import cls from './FormsControls.module.css';
import {Field} from "redux-form";
import {fieldValidatorType} from "../../../utils/validators/validators";

type formControlParamsType = {
    meta: {error: string, touched: boolean}
    child: React.ReactNode
}

type formControlType = (params: formControlParamsType) => React.ReactNode

const FormControl: formControlType = ({meta, child}) => {
    const hasError = meta.error && meta.touched;
    return(
        <div className={cls.formControl + ' ' + ( hasError ? cls.error : '')}>
            {child}
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

export const createField = (placeholder: string, name: string, validators: Array<fieldValidatorType>, component: string | React.Component | React.FC, props = {}) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
    </div>
)