# monads

Here we are going to learn how to use monads and experiment with them.

## branch 9

adds isNullable

## branch 10

adds a tryCatch monad that returns either a Right or a left

## branch 11

Here we are practicing using what we have created so far

## branch 12

here we are using our Either Monad again to solve an additional problem

## branch 15

enumerate an actual array of objects with logging build in

## branch  16

We are adding a closure and also creating a curried function;

## branch 17

here we are creating an iterator to see what that looks like

## branch 18

we are going to need a new package for this:
npm install --save-dev @babel/plugin-transform-regenerator


``js
{
  "plugins":[
    ["@babel/plugin-transform-react-jsx", {
      "pragma":"vdom.createElement",
      "throwIfNamespace": false
    }],
    ["@babel/plugin-transform-regenerator",{
      "asyncGenerators": true,
      "generators": true,
      "async": true
    }]
  ]
}
``
