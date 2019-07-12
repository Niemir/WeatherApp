import React from 'react'


const Form = props => {

  return (
    <form className={props.active ? 'active' : null} onSubmit={props.submit}>
      <input
        className="input-city"
        type="text"
        input={props.input}
        onChange={props.change}
        placeholder='Wpisz miasto'
      />
      <button ><i className="fas fa-search-location"></i></button>

    </form>
  );
}

export default Form;