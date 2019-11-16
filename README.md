# with-prop-types

High Order Component for assigning PropTypes to React components.

You can use with-prop-types to assign PropTypes to any React component. This package is especially useful when trying to assign PropTypes to an anonymous React functional component. By using with-prop-types, you could **declare, define, export, and assign PropTypes all in one statement.**

## Installation

`npm install --save with-prop-types`

## Usage 

withPropTypes is HOC that takes two parameters `propTypes` and `defaultProps` and returns a function that accepts a React component and returns that same React component with `propTypes` and `defaultProps`assigned to it.

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import withPropTypes from 'with-prop-types'

export default withPropTypes({ // default props is optional
	someProp: PropTypes.any,
	someOtherProp: PropTypes.string.isRequired
})(props => (
	<SomeComponent 
		someProp={props.someProp} 
		someOtherProp={props.someOtherProp}
	/>
))
```

The same example as above without using anonymous functions (for clarity):

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import withPropTypes from 'with-prop-types'

const propTypes = {
	someProp: PropTypes.any,
	someOtherProp: PropTypes.string.isRequired
}

const Component = props => (
	<SomeComponent 
		someProp={props.someProp} 
		someOtherProp={props.someOtherProp}
	/>
)

export default withPropTypes(propTypes)(Component)
```

❌Without with-prop-types, assigning PropTypes, declaring, defining, and exporting functional components, would be done like this ❌

```jsx
import React from 'react'
import PropTypes from 'prop-types'

const Component = props => (
	<SomeComponent 
		someProp={props.someProp} 
		someOtherProp={props.someOtherProp}
	/>
)

Component.propTypes = {
	someProp: PropTypes.any,
	someOtherProp: PropTypes.string.isRequired
}

Component.defaultProps = {
	someProp: "someProp's default value"
}

export default Component
```

✅With with-prop-types, you can do the above all in one statement ✅

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import withPropTypes from 'with-prop-types'

export default withPropTypes({ // propTypes
	someProp: PropTypes.any,
	someOtherProp: PropTypes.string.isRequired
}, { // defaultProps
	someProp: "someProp's default value"
})(props => ( // Component
	<SomeComponent 
		someProp={props.someProp} 
		someOtherProp={props.someOtherProp}
	/>
))
```