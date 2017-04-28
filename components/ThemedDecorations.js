import React from 'react'

class ThemedDecoration extends React.Component {
  render() {
    const decoratedChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { className: this.props.theme })
    )

    return (
      <div className="wrapper">
        {decoratedChildren}
      </div>
    )
  }
}

export default ThemedDecoration
