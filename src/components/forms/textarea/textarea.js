import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactDOM from 'react-dom';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Sample Text',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
    this.state.value = nextProps.value;
  }

  render() {
    /* eslint-disable react/no-find-dom-node */
    const chiTextareaNode = ReactDOM.findDOMNode(this);
    /* eslint-enable react/no-find-dom-node */
    setTimeout(() => {
      const textareaElement = chiTextareaNode.querySelector('textarea');

      textareaElement.innerText = this.state.value ? this.state.value : 'Sample Text';
    }, 500);

    return (
      <chi-textarea
        icon-left={this.props.iconLeft}
        icon-right={this.props.iconRight}
        icon-left-color={this.props.iconLeftColor}
        icon-right-color={this.props.iconRightColor}
        disabled={this.props.disabled}
        state={this.props.state}
        size={this.props.size}
        placeholder={this.props.placeholder}>
        Sample Text
      </chi-textarea>
    );
  }
}

/* eslint-disable sort-keys */
Textarea.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['', 'success', 'warning', 'danger']),
  placeholder: PropTypes.string,
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

Textarea.defaultProps = {
  disabled: false,
  size: 'md',
  state: '',
  placeholder: 'Placeholder',
};
