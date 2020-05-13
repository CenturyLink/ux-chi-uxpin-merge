import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
    render() {
        return <p className={`
            ${this.props.color ? `-text--${this.props.color}`: ''}
            ${this.props.weight ? `-text--${this.props.weight}` : ''}
            ${this.props.transform ? `-text--${this.props.transform === 'default' ? '' : this.props.transform}`: ''}
            ${this.props.size ? `-text--${this.props.size}`: ''}
        `}
        style={{margin: 0}}>
            {this.props.text}
        </p>;
    }
}

/* eslint-disable sort-keys */
Text.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(['body', 'primary', 'secondary', 'success', 'warning', 'danger', 'grey', 'muted', 'light']),
    weight: PropTypes.oneOf(['thin', 'normal', 'bold', 'bolder']),
    transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalized']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'])
};
/* eslint-enable sort-keys */

Text.defaultProps = {
    text: 'Text',
    color: 'body'
};
