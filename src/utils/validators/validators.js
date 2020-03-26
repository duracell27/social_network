export const requiredField = value => {
    if (value) return undefined
    return "Field is required!"
}


export const maxLengthCreator = (max) => (value) =>{
    if (value && value.length > max) return `Max length must be less than ${max} symbols`;
    return undefined
}