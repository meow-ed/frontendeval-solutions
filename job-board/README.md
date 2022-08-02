# Job board Challenge

## Prompt

>Create a job board that pulls the latest job postings from HackerNews

## Requirements

- [ ] Fetch and display latest 9 job postings on load
- [ ] Company name is displayed at top of card
- [ ] `'Is hiring...'` text should be displayed in center of card
- [ ] Display date at the bottom of card
- [ ] If job metadata contains URL, clicking a card should open the URL in a new tab
- [ ] If metadata does not include URL, clicking a card should open the post in a new tab
- [ ] Clicking 'Load more' should fetch and display next 6 jobs

## Additional Challenges

- [ ] Fix layout shift by creating empty placeholder cards
- [ ] Make page mobile responsive
- [ ] Cache results so the `<POST_ID>` endpoint only fires once per id, even after page reload
- [ ] Use the ID of the poster to display a link to their HackerNews profile on the card

## Technologies Used

- Vanilla JS
- HTML
- CSS
