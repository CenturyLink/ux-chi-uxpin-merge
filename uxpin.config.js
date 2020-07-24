/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Enterprise',
        include: [
          'src/components/Card/Card.js',
          // 'src/components/Modal/Modal.js',
          'src/components/Table/Table.js',
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
          'src/components/forms/radio/radio.js',
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
          'src/components/Button/Button.js',
          'src/components/Divider/Divider.js',
          'src/components/Drawer/Drawer.js',
          'src/components/Dropdown/Dropdown.js',
          'src/components/Icon/Icon.js',
          'src/components/Pagination/Pagination.js',
          'src/components/progress/progress.js',
          'src/components/Spinner/Spinner.js',
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
