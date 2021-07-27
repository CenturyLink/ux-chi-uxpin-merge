# CHI + UXPin Merge
The repository is an extension of [ux-chi](https://github.com/CenturyLinkCloud/ux-chi) (Chi Design System).

The implementation provides Lumen designers with a UXPin integrated
collection of components based on our own design system (CHI).

## Supported CHI components

| Component     | Chi URL | Status|
| ------------- |:-------------:| :-----|
| Alert | [Alert](https://assets.ctl.io/chi/4.3.0/templates/portal/#alerts/) | ✅ Full Support |
| Badge | [Badge](https://assets.ctl.io/chi/4.3.0/components/badge/) | ✅ Full Support |
| Brand | [Brand](https://assets.ctl.io/chi/4.3.0/components/brand/) | ✅ Full Support |
| Checkbox | [Checkbox](https://assets.ctl.io/chi/4.3.0/components/forms/checkbox/) | ✅ Full Support |
| Date Picker | [Date Picker](https://assets.ctl.io/chi/4.3.0/components/date-picker/) | ✅ Full Support |
| File Input | [File Input](https://assets.ctl.io/chi/4.3.0/components/forms/file-input/) | ✅ Full Support |
| Icon | [Icon](https://assets.ctl.io/chi/4.3.0/components/icon/) | ✅ Full Support |
| Icon Button | [Icon Button](https://assets.ctl.io/chi/4.3.0/templates/portal/#icons) | ✅ Full Support |
| Label | [Label](https://assets.ctl.io/chi/4.3.0/components/label/) | ✅ Full Support |
| Link | [Link](https://assets.ctl.io/chi/4.3.0/components/link/) | ✅ Full Support |
| Marketing Icon | [Marketing Icon](https://assets.ctl.io/chi/4.3.0/components/marketing-icon/) | ✅ Full Support |
| Number Input | [Number Input](https://assets.ctl.io/chi/4.3.0/components/forms/number-input/) | ✅ Full Support |
| Page Title | [Page Title](https://assets.ctl.io/chi/4.3.0/templates/portal/#page-title) | ✅ Full Support |
| Pagination | [Pagination](https://assets.ctl.io/chi/4.3.0/components/pagination/) | ✅ Full Support |
| Picker Group | [Picker Group](https://assets.ctl.io/chi/4.3.0/components/picker-group/) | ✅ Full Support |
| Popover | [Popover](https://assets.ctl.io/chi/4.3.0/components/popover/) | ✅ Full Support |
| Primary Button | [Primary Button](https://assets.ctl.io/chi/4.3.0/templates/portal/#buttons) | ✅ Full Support |
| Progress | [Progress](https://assets.ctl.io/chi/4.3.0/components/progress/) | ✅ Full Support |
| Radio | [Radio](https://assets.ctl.io/chi/4.3.0/components/forms/radio-button/) | ✅ Full Support |
| Secondary Button | [Secondary Button](https://assets.ctl.io/chi/4.3.0/templates/portal/#buttons) | ✅ Full Support |
| Select | [Select](https://assets.ctl.io/chi/4.3.0/components/forms/select/) | ✅ Full Support |
| Spinner | [Spinner](https://assets.ctl.io/chi/4.3.0/components/spinner/) | ✅ Full Support |
| Stat Compact | [Stat Compact](https://assets.ctl.io/chi/4.3.0/components/stat/#portal-compact) | ✅ Full Support |
| Step | [Step](https://assets.ctl.io/chi/4.3.0/components/steps/) | ✅ Full Support |
| Tabs | [Tabs](https://assets.ctl.io/chi/4.3.0/components/tabs/) | ✅ Full Support |
| Tertiary Button | [Tertiary Button](https://assets.ctl.io/chi/4.3.0/templates/portal/#buttons) | ✅ Full Support |
| Text | [Text](https://assets.ctl.io/chi/4.3.0/utilities/text/) | ✅ Full Support |
| Text Input | [Text Input](https://assets.ctl.io/chi/4.3.0/components/forms/text-input/) | ✅ Full Support |
| Textarea | [Textarea](https://assets.ctl.io/chi/4.3.0/components/forms/textarea/) | ✅ Full Support |
| Toggle Switch | [Toggle Switch](https://assets.ctl.io/chi/4.3.0/components/forms/toggle-switch/) | ✅ Full Support |
| Tooltip | [Tooltip](https://assets.ctl.io/chi/4.3.0/components/tooltip/) | ✅ Support as Tooltip property of Icon Button |

## Development
Currently, there are 3 Chi based UXPin Merge libraries
`Chi Merge 2.0 (Lumen)` (Production - based on Lumen styleguide 2.0 and Chi 4.3.0),
`Chi Merge 1.0 (Lumen)` (Production, Legacy - based on Lumen styleguide 1.0 and Chi 3.12.0), 
`Chi Merge (Dev)` (Pre-production).

In order to be able to develop and make changes in them,
define environmental variables `UXPIN_DEV_TOKEN` and `UXPIN_LUMEN_TOKEN`.

1. open the `.bash_profile` file and add these lines indicating corresponding token values:
```sh
export UXPIN_DEV_TOKEN="RESPECTIVE_TOKEN_GOES_HERE"
export UXPIN_LUMEN_TOKEN="RESPECTIVE_TOKEN_GOES_HERE"
```

2. Use command
```sh
$ source ~/.bash_profile
```

3. Try printing the defined variables by using:
```sh
$ echo $UXPIN_DEV_TOKEN
```
and
```sh
$ echo $UXPIN_LUMEN_TOKEN
```
If respective values are printed, the environmental variable definition was successfully.

## Updating version of Chi assets
Chi assets are included by injecting them into `<head>` by UXPin components' wrapper.

Edit Chi assets URLs in `/src/compoennts/UXPinWrapper/UXPinWrapper.js`

## Adding new components
Adding components to Merge is no different than creating normal React.js components.
Merge accepts any standard approach to React. The only limitations that you should be aware of are:
* Components have to have default exports
* Components need to exist in separate directories
* Only one component is allowed per file and directory e.g. `./src/Tabs/Tabs.js`
* You have to add the component to `uxpin.config.js` file

## Component properties - most common examples

```JS
Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Renders a Select with the provided options in UXPin UI
  width: PropTypes.number, // Renders as a Number input in UXPin UI
  icon: PropTypes.string, // Renders as a Text Input in UXPin UI
  closable: PropTypes.bool, // Renders as a Checkbox in UXPin UI
};
```

### Providing default property values
```JS
Alert.defaultProps = {
  size: 'md',
  width: 320,
  icon: 'warning',
  closable: true,
};
```

### Component interaction example
Use `PropTypes.func` to add an interaction to the component
```JS
Button.propTypes = {
  click: PropTypes.func, // Renders as an Interaction provider in UXPin UI
};
```
and use the interaction prop as a function that can be triggered
```JS
const Button = (props) => (
  <button
    type="button"
    className="chi-button"
    onClick={props.click}>
    Button Content
  </button>
);
```
Please note that you can also trigger an interaction function in custom scenarios  by using `props.interactionPropName()`.

## Pushing changes to Chi libraries

### Push changes to `Dev` (pre-production) library
```sh
$ npm push-dev
```

### Push changes to `Lumen` (Production) library
```sh
$ npm push-lumen
```
