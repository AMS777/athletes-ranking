# Athletes Ranking

This is a small demo REST API application developed with the MERN stack (MongoDB, Express, React, Node.js) and Redux.

It shows a ranking of athletes ordered by their prestige points. Athletes may be added to the ranking.

An athlete belongs to one sport (muay thai, athletics, football). A sport has specific data (KOs, olimpic records, goals). The prestige points of an athlete are calculated depending on the sport (1 KO = 1 pp, 1 olimpic record = 4 pp, 11 goals = 1 pp).

## Javascript Syntax

This application includes Javascript syntax elements from ES2015 and ES2017, like destructuring assignments, shorthand property names, spread operator, trailing commas, async/await.

## Design Patterns

This application contains a variety of design patterns to make the code readable and maintainable.

### Render Props

React pattern to get data from a component trough a prop which is a function.

https://reactjs.org/docs/render-props.html

Used on the application to load the athletes list at:

```
/client/src/components/athlete-ranking/AthleteRanking.js->render(): <AthletesLoader />
```

### Strategy Design Pattern

Design pattern to avoid nested `if` statements and `switch` statements.

Can be found on the application at:

```
/client/src/components/athlete-ranking/AthleteRanking.js->getSportSpecificData(): this.sportSpecificData[athlete.sport]

/client/src/components/athlete-form/AthleteForm.js->setSportFactory(): this.sportStrategies[sport]

/server/routes/athletesRoutes.js->app.post('/api/athletes'): sportFactory[req.body.sport]
```

### Factory Design Pattern

Design pattern to create an object of a family of objects with equal structure.

Can be found on the application at:

```
/client/src/components/athlete-form/AthleteForm.js->setSportFactory(): this.sportStrategies[sport]()

/server/routes/athletesRoutes.js->app.post('/api/athletes'): sportFactory[req.body.sport](req.body)
```
The factories are used in combination with the strategy design pattern to avoid the use of nested `if` statements and `switch` statements to determine the object that is to be created.

### Observer Design Pattern

Strategy to bind some functionality execution to the state changes of an object.

This can be found on the application on the actions assigned to events and in the Redux properties changes.

### Decorator Design Pattern

Way to dynamically add some encapsulated functionality to an object.

It can be observed in the application on the Redux middlewares or the React Final Form component.

## Polymorphism

The MongoDB database is optimized to store the minimum necessary amount of data. Depending on the athlete sport, some fields are required and other not, storing polymorphic documents in the same collection of athletes.

This is achieved with `mongoose` discriminators in combination with strategy and factory design patterns.

https://mongoosejs.com/docs/discriminators.html

## React Components

### Fragments

React fragments used with the short syntax to avoid unnecessary wrapping elements.

https://reactjs.org/docs/fragments.html

### Portals

React portals used to show modals. This can be seen on the athletes ranking, when an athlete is clicked to show the details.

https://reactjs.org/docs/portals.html

### Forms and Validation

Forms and field validations are used to add an athlete to the ranking.

React Final Form is used as it's a complete and lightweight library.

## React Packages

Some of the packages used in React:

- `react-redux`: state handler.
- `redux-devtools-extension`: store created with `composeWithDevTools()` to disable the Redux tools on production.
- `@reach/router`: simpler router component than `react-router-dom`.
- `materialize-css`: Material Design visual style.
- `axios`: HTTP requests handler.
- `moxios`: stub `axios` requests for testing.
- `react-final-form`: smaller form and validation component than `redux-form`.

## Testing

React testing performed with Jest including:
- unit tests
- integration tests
- snapshots
- Redux reducers tests
- Redux actions tests
- object mocks
- HTTP requests stubs

To test components within the Redux store, two strategies are used:
- provide a Redux store to the component: `/client/src/components/athlete-ranking/AthleteRanking.test.js`
- export the component without the Redux' `connect()` wrapper:
`/client/src/components/athlete-form/AthleteForm.js`

## Development Environment

Server and client may be run concurrently, both with reload on files change, with following script on the server directory:

```
npm run dev
```

## Deployment

The project has scripts to automatically deploy on Heroku with Git:

```
/package.json: heroku-postbuild
```