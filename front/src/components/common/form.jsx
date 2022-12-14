import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     } 

     validate = () => {
        const options =  { abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors={};
        for(let item of error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error}= Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit= e => {
        e.preventDefault(); //prevent the submission of the form(full page reloade)
        
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit();
    }

    handleChange= e => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);
        if (errorMessage)  errors[e.currentTarget.name]=errorMessage;
        else delete errors[e.currentTarget.name];

        const data= {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value; // currentTarget: returns our input field
        this.setState({data, errors});
    }

    renderButton(label){
        return (
            <button 
                disabled={this.validate()}
                className="btn btn-primary">
                    {label}
            </button>
        );
    }

    renderSelect(name,label, options){
        const {data, errors }= this.state;
        return (
            <Select 
                name={name} 
               value={data[name]}
               label={label}
               options={options}
               onChange={this.handleChange}
               error={errors[name]}
            />
        )
    }

    renderInput(name, label, type= 'text') {
        const { data, errors } = this.state;
        return (
            <Input 
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]} 
        />
        )
    }
}
 
export default Form;