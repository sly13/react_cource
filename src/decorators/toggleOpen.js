import React, { Component as ReactComponent } from 'react';

export default (OriginComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() { 
        return <OriginComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    }
}