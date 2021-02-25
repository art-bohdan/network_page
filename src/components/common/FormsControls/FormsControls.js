import React from 'react'
import classes from './FormsControls.module.css'


const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.error && meta.touched;
  const colorError = hasError ? classes.error : '';
  return (
    <div className={`${classes.formControl} ${colorError}`}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} name="" id="" cols="30" rows="5" /></FormControl>}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>}