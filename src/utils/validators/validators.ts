export type fieldValidatorType = (value : string) => string | undefined

export const requiredField : fieldValidatorType = (value) => {
    if (value) return undefined
    return "Field is required!"
}

export const maxLengthCreator = (max : number) : fieldValidatorType => (value) =>{
    if (value && value.length > max) return `Max length must be less than ${max} symbols`;
    return undefined
}