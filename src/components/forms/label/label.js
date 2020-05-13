import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Label extends React.Component {
    render() {
        const size = this.props.size ? this.props.size.split(' ')[0] : null;

        return <chi-label
            size={size}
            required={this.props.required}
            optional={this.props.optional}
        >
            {this.props.label}
        </chi-label>;
    }
}

/* eslint-disable sort-keys */
Label.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    optional: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};
/* eslint-enable sort-keys */

Label.defaultProps = {
    label: 'Label',
    size: 'md',
    required: false,
    optional: false
};
