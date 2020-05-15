# Answers

Q1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

A1.  React is a UI library made by Facebook to create complex, rich user interfaces. It allows developers to build small, reusable pieces of pieces of UI that can be used together to build a large scale application. It makes loading webpages faster and less error because I can now simply make a component for something I will use repeatedly instead of typing it over and over again which will lead to errors.  I can separate the components into their own file and work on whatever changes I want there instead of searching through loads of code.

Q2. Describe component state.

A2. The component state displays some  data to the screen for the user.

Q3. Describe props.

A3. Props are the helper object that helps inject data to components. 

Q4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A4. Side effects are anything that affects something outside the scope of the function being executed.  You can use useEffect hook to manage them.
useEffect(function); will synchronize with all states and props
useEffect(function, [ ]); will synchronize with no state or props
useEffect(function[these, states, props]); will only deal with the ones in [ ]. 
