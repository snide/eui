import React from 'react';
import ReactDOM from 'react-dom';
import { resetServerContext } from 'react-beautiful-dnd';
import html from 'html';
import { requiredProps } from '../../test/required_props';
import { EuiDragDropContext, EuiDraggable, EuiDroppable } from './';

function takeSnapshot(element: HTMLElement) {
  expect(
    html.prettyPrint(element.innerHTML, {
      indent_size: 2,
      unformatted: [], // Expand all tags, including spans
    })
  ).toMatchSnapshot();
}

describe('EuiDraggable', () => {
  let appDiv: HTMLElement;

  beforeEach(() => {
    resetServerContext(); // resets react-beautiful-dnd's internal instance counter which affects snapshots
    appDiv = document.createElement('div');
    document.body.appendChild(appDiv);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(appDiv);
    document.body.removeChild(appDiv);
  });

  test('is rendered', () => {
    const handler = jest.fn();

    ReactDOM.render(
      <EuiDragDropContext onDragEnd={handler} {...requiredProps}>
        <EuiDroppable droppableId="testDroppable">
          <EuiDraggable draggableId="testDraggable" index={0}>
            {() => <div>Hello</div>}
          </EuiDraggable>
        </EuiDroppable>
      </EuiDragDropContext>,
      appDiv
    );

    expect(takeSnapshot(appDiv)).toMatchSnapshot();
  });

  test('can be given ReactElement children', () => {
    const handler = jest.fn();

    ReactDOM.render(
      <EuiDragDropContext onDragEnd={handler} {...requiredProps}>
        <EuiDroppable droppableId="testDroppable">
          <EuiDraggable draggableId="testDraggable" index={0}>
            <div>Hello</div>
          </EuiDraggable>
        </EuiDroppable>
      </EuiDragDropContext>,
      appDiv
    );

    expect(takeSnapshot(appDiv)).toMatchSnapshot();
  });
});
