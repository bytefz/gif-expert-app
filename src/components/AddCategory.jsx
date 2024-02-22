import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        //* Evita que se recargue la página
        e.preventDefault();
        //* Evita que se agreguen valores vacíos
        if(inputValue.trim().length <= 1) return;
        //* Pasa datos por funciones
        onNewCategory(inputValue.trim());
        // setCategories(categories => [...categories, inputValue]);
        //* Limpia el input
        setInputValue('');
    }

    return (
    <form action="" onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={inputValue} 
        onChange={onInputChange}
        />
    </form>
    );
};
