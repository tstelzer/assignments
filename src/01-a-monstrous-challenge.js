// use this element as the root of your app
const root = document.querySelector('#root');

/**
 * Fetches list of monsters.
 *
 * @returns {Promise}
 */
const fetchData = (query = '') => 
    fetch(`http://www.dnd5eapi.co${query}`)
        .then(response => response.json())

// define your app logic in here
const main = () => {
    fetchData('/api/monsters')
        .then(monsters => {
            const [first] = monsters.results;
            console.log(first)
            // fetch subsequent data about monster
            return fetchData(first.url);
        })
        .then(monster => {
            console.log(monster)
        });
}

main();
