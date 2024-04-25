'use client'
import React from "react";
import Input from "./Input";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButton from "./RadioButton";


const FormControl = ({ control, ...attributes }) => {
   switch (control) {
      case "input":
         return <Input {...attributes} />;
      case "textarea":
         return <Textarea {...attributes} />;
      case "select":
         return <Select {...attributes} />;
      case "button":
         return <Button {...attributes} />;
      case "checkbox":
         return <CheckBox {...attributes} />;
      case "radio":
         return <RadioButton {...attributes} />;
      default:
         return null;
   }
};

export default FormControl

