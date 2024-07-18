import React from 'react';
import TodoItem from './TodoItem';

class Todo extends React.Component {
    state = {
        elements: [
            { id: '3435345', isComplited: false, title: 'Zrobić zakupy' },
            { id: '3432314', isComplited: false, title: 'Opłacić domenę' }
        ],
        inputValue: ''
    }

    // funkcja do zaznaczania, że zadanie jest zrobione dla danego id:
    markComplited(id) {
        const index = this.state.elements.findIndex(item => item.id === id);
        const newElements = this.state.elements; // kopia tablicy
        newElements[index].isComplited = true; // zmiana właściwości isComplited w elemencie o wyszukanym indeksie
        this.setState({elements: newElements}); // podmiana całej tablicy
    }

    // funkcje do dodawania elementów
    // najpierw do stanu dodajemy nową wartość inputValue i dopisujemy ją do inputa
    // do inputa dodajemy onChange, żeby wartość się aktualizowała jak tylko coś się zmieni
    inputHandler(event) {
        const newValue = event.target.value;
        this.setState({inputValue: newValue});
    }

    // jak wartość zaktualizowana to muszę dodać nową wartość do mojej listy zadań

    addItem() {
        const item = {
            id: Math.random(),
            isComplited: false,
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements];
        this.setState({elements: newElements});
        this.setState({inputValue: ''});
    }

    render() {
        const elements = this.state.elements.map(item => <TodoItem element={item} markClicked={this.markComplited.bind(this)} />);
        // oprócz zmiennej 'element' przekażemy referencje do funkcji, która zostanie przekazana do dziecka
        
        return (
            <div>
                <p class="label">Todo app</p>
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}

export default Todo;

// do stanu dodajemy elementy listy Todo (tablica obiektów)
