import { v4 as uuidv4 } from "uuid";
import { useState } from "preact/hooks";
import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import { Bar, ListForm, Column } from "./components";
import { ListItem, CardItem, DragType } from "./types";

export function App() {
  const queryAttr = "data-rbd-drag-handle-draggable-id";

  const [lists, setLists] = useState<ListItem[]>([
    {
      title: "to do",
      cards: [
        {
          id: uuidv4(),
          content: "add sprites",
        },
        {
          id: uuidv4(),
          content: "implement main menu",
        },
        {
          id: uuidv4(),
          content: "add sounds",
        },
      ],
    },
    {
      title: "in progress",
      cards: [
        {
          id: uuidv4(),
          content: "write story",
        },
        {
          id: uuidv4(),
          content: "add levels",
        },
        {
          id: uuidv4(),
          content: "send demo to friends",
        },
        {
          id: uuidv4(),
          content: "marketing",
        },
      ],
    },
    {
      title: "done",
      cards: [
        {
          id: uuidv4(),
          content: "implement player movement",
        },
      ],
    },
  ]);

  const [placeholderProps, setPlaceholderProps] = useState<{
    clientX?: number;
    clientY?: number;
    clientWidth?: number;
    clientHeight?: number;
  }>({});

  const reorder = (
    items: (CardItem | ListItem)[],
    startIndex: number,
    endIndex: number
  ): (CardItem | ListItem)[] => {
    const [removed] = items.splice(startIndex, 1);

    items.splice(endIndex, 0, removed);

    return items;
  };

  const move = (
    source: CardItem[],
    destination: CardItem[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ) => {
    const sourceClone = Array.from(source);
    const destinationClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destinationClone.splice(droppableDestination.index, 0, removed);

    const result: { [id: string]: CardItem[] } = {};

    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destinationClone;

    return result;
  };

  const addList = (title: string) => {
    const updatedLists = [...lists];
    updatedLists.push({ title, cards: [] });
    setLists(updatedLists);
  };

  const addCard = (index: number, content: string) => {
    const updatedLists = [...lists];
    updatedLists[index].cards.push({ id: uuidv4(), content });
    setLists(updatedLists);
  };

  const removeCard = (listIndex: number, cardIndex: number) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards.splice(cardIndex, 1);
    setLists(updatedLists);
  };

  const changeTitle = (index: number, title: string) => {
    const updatedLists = [...lists];
    updatedLists[index].title = title;
    setLists(updatedLists);
  };

  const handleDragStart = (event: any) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    const parent = draggedDOM.parentElement;
    const parentStyle = window.getComputedStyle(parent as Element);

    if (!parent) {
      return;
    }

    const clientY =
      parseFloat(parentStyle.paddingTop) +
      [...parent.children].slice(0, sourceIndex).reduce((total, curr) => {
        const marginBottom = parseFloat(
          window.getComputedStyle(curr).marginBottom
        );
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientX: parseFloat(parentStyle.paddingLeft),
      clientY,
      clientWidth,
      clientHeight,
    });
  };

  const handleDragEnd = (result: DropResult) => {
    setPlaceholderProps({});

    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    const sourceId: number = parseInt(source.droppableId);
    const destinationId: number = parseInt(destination.droppableId);

    const updatedLists = [...lists];

    switch (type) {
      case DragType.List:
        reorder(updatedLists, source.index, destination.index);
        break;
      case DragType.Card:
        if (sourceId === destinationId) {
          reorder(
            updatedLists[sourceId].cards,
            source.index,
            destination.index
          );
          break;
        } else {
          const result = move(
            lists[sourceId].cards,
            lists[destinationId].cards,
            source,
            destination
          );

          updatedLists[sourceId].cards = result[sourceId];
          updatedLists[destinationId].cards = result[destinationId];
        }
    }

    setLists(updatedLists);
  };

  const handleDragUpdate = (event: any) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM || !draggedDOM.parentElement) {
      return;
    }

    const parent = draggedDOM.parentElement;

    if (!parent) {
      return;
    }

    const parentStyle = window.getComputedStyle(parent as Element);

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentElement.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const updatedArray = [
      ...childrenArray.slice(0, destinationIndex),
      movedItem,
      ...childrenArray.slice(destinationIndex + 1),
    ];

    const clientY =
      parseFloat(parentStyle.paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const marginBottom = parseFloat(
          window.getComputedStyle(curr).marginBottom
        );
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientX: parseFloat(parentStyle.paddingLeft),
      clientY,
      clientWidth,
      clientHeight,
    });
  };

  const getDraggedDom = (draggableId: string) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    return draggedDOM;
  };

  return (
    <div>
      <Bar></Bar>
      <div class="mx-4 flex select-none items-start text-slate-950">
        <DragDropContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragUpdate={handleDragUpdate}
        >
          <Droppable
            droppableId="all-lists"
            direction="horizontal"
            type={DragType.List}
          >
            {(provided: DroppableProvided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                class="flex"
              >
                {lists.map((list: ListItem, index) => (
                  <Column
                    list={list}
                    index={index}
                    changeTitle={changeTitle}
                    addCard={addCard}
                    removeCard={removeCard}
                    placeholderProps={placeholderProps}
                  ></Column>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <ListForm addList={addList}></ListForm>
      </div>
    </div>
  );
}
