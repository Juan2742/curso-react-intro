import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect( () => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;    
        } 
        else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
    
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000)
  }, []);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    };
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};

// localStorage.removeItem('TODO_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Empezar curso de intro a react', completed:true},
//   { text: 'Llorar con la Llorona', completed: false},
//   { text: 'Crear un manga, tocar violin y guitarra, crear una pagina y una aplicación', completed: false},
//   { text: 'LALALLALALALAL', completed: false},
//   { text: 'Estados derivados', completed: true},
// ]
// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos));