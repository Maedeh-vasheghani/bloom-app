import React, { useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import './assets/styles/globales.css';
import Card from './components/AddCard';
import Cardcontainer from './components/CardContainer';

import { firstCards, secondCards, thirdCards, forthCards, fifthCards } from './consts/cards';
import { COLUMN_NAMES } from './consts/columns';

function App() {
	const MovableItem = ({ name, index, currentColumnName, moveCardHandler, setItems }) => {
		const changeItemColumn = (currentItem, columnName) => {
			setItems((prevState) => {
				return prevState.map((e) => {
					return {
						...e,
						column: e.name === currentItem.name ? columnName : e.column,
					};
				});
			});
		};

		const ref = useRef(null);

		const [, drop] = useDrop({
			accept: 'Our first type',
			hover(item: any, monitor) {
				if (!ref.current) {
					return;
				}
				const dragIndex = item.index;
				const hoverIndex = index;
				// Don't replace items with themselves
				if (dragIndex === hoverIndex) {
					return;
				}
				// Determine rectangle on screen
				const hoverBoundingRect = ref.current?.getBoundingClientRect();
				// Get vertical middle
				const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
				// Determine mouse position
				const clientOffset = monitor.getClientOffset();
				// Get pixels to the top
				const hoverClientY = clientOffset.y - hoverBoundingRect.top;
				// Only perform the move when the mouse has crossed half of the items height
				// When dragging downwards, only move when the cursor is below 50%
				// When dragging upwards, only move when the cursor is above 50%
				// Dragging downwards
				if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
					return;
				}
				// Dragging upwards
				if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
					return;
				}
				// Time to actually perform the action
				moveCardHandler(dragIndex, hoverIndex);
				// Note: we're mutating the monitor item here!
				// Generally it's better to avoid mutations,
				// but it's good here for the sake of performance
				// to avoid expensive index searches.
				item.index = hoverIndex;
			},
		});

		const [{ isDragging }, drag] = useDrag({
			item: { index, name, currentColumnName, type: 'Our first type' },
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();

				if (dropResult) {
					const { name } = dropResult;
					const { FIRST, SECOND, THIRD, FORTH, FIFTH } = COLUMN_NAMES;
					switch (name) {
						case FIRST:
							changeItemColumn(item, FIRST);
							break;
						case SECOND:
							changeItemColumn(item, SECOND);
							break;
						case THIRD:
							changeItemColumn(item, THIRD);
							break;
						case FORTH:
							changeItemColumn(item, FORTH);
						case FIFTH:
							changeItemColumn(item, FIFTH);
							break;
						default:
							break;
					}
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		});

		const opacity = isDragging ? 0.4 : 1;

		drag(drop(ref));

		return (
			<div ref={ref} className='movable-item' style={{ opacity }}>
				{name}
			</div>
		);
	};

	return (
		<div className='App flex flex-col lg:flex-row gap-3.5 overflow-x'>
			<Cardcontainer />
			<Cardcontainer />
			<Cardcontainer />
			<Cardcontainer />
			<Cardcontainer />
		</div>
	);
}

export default App;
