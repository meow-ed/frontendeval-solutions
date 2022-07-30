# Two-factor code input Challenge

## Prompt

> Create a 4-digit security code input that allows you to enter a two-factor authorization code. Implement a form submission handler that calls a `submitCode(code)` function with the 4 digits as a concatenated string. Implement a `submitCode` function that validates the code given against a hardcoded 4-digit string.

## Requirements

- [ ] Each field should allow only one digit between 0-9
- [ ] Entering a number in a field should advance cursor to next field
- [ ] Pressing backspace at beginning should focus the previous field and delete input inside
- [ ] Styling:
	- [ ] Inputs should be positioned next to one another
	- [ ] inputs should be rectangular
	- [ ] submit button should be below inputs

## Additional Challenges

- [ ] Add validation to ensure user cannot submit without having all fields populated and highlight feelings that are missing
- [ ] Turn form into reusable component with number of digits customizable
- [ ] Make copy/paste work if the first field is highlighted

## Technologies Used
- Vanilla JS
- HTML
- CSS
