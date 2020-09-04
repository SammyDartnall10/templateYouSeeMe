import React from 'react'

// export const HelloWorld = () => {
//   return (
//     <div>

//     </div>
//   )
// }


// function HelloWorld(props) {
//   return (
//     <h4>Hello {props.name}</h4>
//   )
// }

class HelloWorld extends React.Component {
  render() {
    return (
      <h4>Hello {this.props.name}</h4>
    )
  }
}

export default HelloWorld