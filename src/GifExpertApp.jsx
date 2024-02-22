import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            alert("Ya existe la categoría");
            return;
        }
            setCategories([newCategory, ...categories]);
    };

    return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* //* Pasa datos por funciones */}
        <AddCategory
            onNewCategory={onAddCategory}
        />

        {/* Listado de Gif */}

        {categories.map((category) => (
            <GifGrid key={category} category={category}/>
        ))}
        {/* Gif Item */}

    </>
    );
};
