import React from "react";
import cls from './FormsControls.module.css';

const FormControl = ({input, meta, child,  ...props}) => {
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
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}