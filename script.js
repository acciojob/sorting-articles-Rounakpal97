//your JS code here. If required.
        const bands = [
            'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
            'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
            'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
            'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
        ];

        // Function to remove 'a', 'an', 'the' for sorting
        function strip(article) {
            return article.replace(/^(a |an |the )/i, '').trim();
        }

        // Sort by ignoring the above words
        const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

        // Insert into the UL
        document.getElementById('bands').innerHTML =
            sortedBands.map(band => `<li>${band}</li>`).join('');