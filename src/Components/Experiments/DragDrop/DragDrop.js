import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namesList: [],
    };
  }

  componentDidMount() {
    this.names();
  }

  names = () => {
    var namesList = [
      { id: 1, name: "venusaur" },
      { id: 2, name: "charizard" },
      { id: 3, name: "blastoise" },
    ];
    this.setState({ namesList });
    return namesList;
  };

  render() {
    console.log(this.state.namesList);
    return (
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.namesList.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id && item.id.toString()} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.name}
                      </li>
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DragDrop;
