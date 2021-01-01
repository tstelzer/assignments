# Homework

## 1: a monstrous challenge

Night has set on castle d00m. (LED-)candle lights flicker ominously on the wet
wall while you ponder the gruesome task at hand. A village needs raiding, and
you are required to gather the vile scum to do it. Monsters of all kind shall
be gathered and set forth to bring pain and suffering upon the world.

And they all need to start with the letter 'M'. For some reason. You guess the
lord is in one of his moods today. With the help of modern web development you begin
your task.

1. Display a list of all monsters that start with the letter 'M'. Obviously
   they need to be evil of some sort.
2. Each list entry should display information about the monster that helps you
   pick the cruelest bunch. Specifically: Name, size, type, challenge rating and alignment.
3. Render each list entry so that it looks something like this.
    ```
    {name}
    type: {type}                         | size: {size}
    challenge rating: {challenge_rating} | alignment: {alignment}
    ```
4. The styling of the page is up to you, but the first letter (the 'M') needs
   to be highlighted in dark-red.

### development notes

* Check out [dnd5eapi.co](http://www.dnd5eapi.co/docs), specifically the
  [monster section](http://www.dnd5eapi.co/docs/#monster-section).
* Check out `src/01-a-monstrous-challenge.js` and modify it while opening
  `src/index.html` in your browser. Open the browser console. You should see
  that it fetched a list of monsters.
* Fetching the initial list of monsters does not include all information about
  them, but should be sufficient to filter by name. To fetch the info for each
  monster, you need to do another request _per monster_ using the `url` field
  in each object. The pre-existing code should include an example.

## 2: ever expanding enterprise

As the painful screams of the villagers die down in the distance, you sip
satisfied on your drink, a job well done. And so thinks the dark queen. So
happy is she, in fact, that she has given responsibility for all the counties
raiding to you. You need to expand your monster search enterprise now ... just
the letter 'M' won't do now.

1. Display a pagination menu that includes each letter of the alphabet.
   Clicking any should render a page displaying only monsters starting
   with that letter.
2. Out of fairness towards the API provider (i.e. not spamming their server
   with requests needlessly), only fetch individual monster information when
   requested, i.e. when the letter is clicked.
3. Change the layout of the page to display the data in a tabular fashion, i.e.

| name         | type      | size  | challenge rating | alignment    |
|--------------|-----------|-------|------------------|--------------|
| Magma Mephit | elemental | Small | 0.5              | neutral evil |

   the styling is up to you.
4. Above the `type` `size` and `alignment` columns (or below the column title,
   up to you), display a drop-down button that filters items in the list by the
   selected value. The drop-down button should be empty by default (suggesting
   that all items are selected). When clicked, it should display a list of all
   values of that property in the list. Clickin on any should filter the list
   by that value, e.g. selecting the value `elemental` in the `type` drop-down
   should only show rows that have the `type` `elemental`.
