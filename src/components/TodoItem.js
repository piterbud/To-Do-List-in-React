import React from 'react';

const TodoItem = (props) => {
    // bardziej elegancki zapis użycia funkcji od rodzica
    // const markHandler = () => props.markClicked(props.element.id);
    // <button onClick={markHandler}>Zakończone</button>  

    return (
        <div className={`card ${props.element.isComplited ? 'complited' : ''}`} key={props.element.id}>
            <h2>{props.element.title}</h2>            
            <button onClick={() => props.markClicked(props.element.id)}>Zakończone</button>  
        </div>
    );
}

export default TodoItem;

// jak powiedzieć rodzicowi, żeby po naciśnięciu przycisku wykonać funkcję markComplited(id) i przekazać mu id? --> patrz Todo.js
// do funckcji przekazujemy 'id' klikanego elementu