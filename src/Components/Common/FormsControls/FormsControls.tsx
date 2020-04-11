import React from "react";
import cls from './FormsControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {fieldValidatorType} from "../../../utils/validators/validators";

type formControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<formControlPropsType> = ({meta, children}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={cls.formControl + ' ' + (hasError ? cls.error : '')}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea className={cls.textarea} {...input} {...restProps}/> </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}



export function createField<formsKeysType extends string>(placeholder: string, name: formsKeysType, validators: Array<fieldValidatorType>,
                            component: React.FC<WrappedFieldProps>, props = {}) {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
    </div>
}