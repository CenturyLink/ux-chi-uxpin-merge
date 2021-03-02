/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Buttons',
        include: [
          'src/components/Primary-button/Primary-button.js',
          'src/components/Secondary-button/Secondary-button.js',
          'src/components/Tertiary-button/Tertiary-button.js',
          'src/components/Icon-button/Icon-button.js',
          // 'src/components/Card/Card.js',
          // 'src/components/Modal/Modal.js',
          // 'src/components/Table/Table.js',
        ],
      },
      {
        name: 'Form elements',
        include: [
          'src/components/forms/checkbox/checkbox.js',
          'src/components/forms/Date-picker/Date-picker.js',
          'src/components/forms/file-input/file-input.js',
          'src/components/forms/label/label.js',
          'src/components/forms/number-input/number-input.js',
          'src/components/Picker-group/Picker-group.js',
          'src/components/forms/radio/radio.js',
          'src/components/forms/select/select.js',
          'src/components/forms/text-input/text-input.js',
          'src/components/forms/textarea/textarea.js',
          'src/components/forms/toggle-switch/toggle-switch.js',
        ],
      },
      {
        name: 'General',
        include: [
          'src/components/Alert/Alert.js',
          'src/components/Badge/Badge.js',
          'src/components/Brand/Brand.js',
          // 'src/components/Button/Button.js',
          // 'src/components/Divider/Divider.js',
          // 'src/components/Drawer/Drawer.js',
          // 'src/components/Dropdown/Dropdown.js',
          'src/components/Icon/Icon.js',
          'src/components/Pagination/Pagination.js',
          'src/components/Popover/Popover.js',
          'src/components/progress/progress.js',
          'src/components/StatCompact/StatCompact.js',
          'src/components/Steps/Steps.js',
          'src/components/Spinner/Spinner.js',
          // 'src/components/Tooltip/Tooltip.js',
          'src/components/Tabs/Tabs.js',
        ],
      },
      {
        name: 'Utilities',
        include: [
        ],
      },
    ],
  },
  name: 'Chi design system',
};
