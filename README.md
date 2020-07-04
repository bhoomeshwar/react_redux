# React Redux

### Product Requirement 
- To display to two counters when checked
- Every counter to display two buttons when selected
    - One to Increment
    - One to decrement
- Display counters
- Reset Counters to initial state


### How to implement
- Create a main page/parent page with 2 checkboxes *(App.js)*
- Create onclick functionality for checkboxes
- Create components for buttons (increment and decrement)
- Create component for Reset counters
- Show button component when clicked
- Component to display both counters
- Create onclick for reset to reset both counters

## Detailed Implementation
- Create App.js *(parent page)* and create 3 components
- Reddy component to display checkbox, increment and decrement button
- Rakesh component to display checkbox, increment and decrement button
- Display counter to display both the counters
- Create combined reducers which should include reddy state and rakesh state.
- Reddy state: should have show reddy counter boolean flag and reddy counter. It should also have action type(action creators) and reducers to subscribe to that action
- Rakesh state: should have show reddy counter boolean flag and reddy counter. It should also have action type(action creators) and reducers to subscribe to that action
- Create “createStore”(react redux) to take combined reducers as input.
- Inject store to your App.js using react redux provider. (That gives your app access to store object)
- Create component connectors for each reddy and rakesh counters, buttons and checkbox. (mapStateToProps and mapDispatchToProps) and connect to reddy and rakesh counter components.
