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
