(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = require('./data');


const getAllBooks = () => data.books;

const getRecentBooks = () => data.books.reverse().slice(0, 5);

const getFeaturedBooks = () => data.books.filter(book => book.featured);

const getSearchResults = (query) => {
    if(query) {
        const matched = data.searchResults.filter(result => {
            return result.match(new RegExp(`^${query}`, 'i'))
        });
        
        return matched.slice(0, 4);
    }

    return data.searchResults.slice(0, 4);
}

module.exports = {
    getAllBooks,
    getRecentBooks,
    getFeaturedBooks,
    getSearchResults
}
},{"./data":2}],2:[function(require,module,exports){
module.exports = {

    searchResults: [
        "Four Steps To The Epiphany Revised - James McEnroe",
        "Four Steps To The Epiphany - James McEnroe",
        "The Lean Start Up - Eric Reiss",
        "No Excuses - Brian Tracy",
        "Harry Potter and the Goblet of Fire - J.K Rowlings",
        "Song of Fire and Ice - George R.R Martin",
    ],

    books: [
        {
            name: 'Big Magic',
            image: '../assets/images/big-magic.png',
            available: true,
            author: ["Elizabeth Gilbert"],
            year: 2014,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Effective Python',
            image: '../assets/images/effective-python.png',
            available: true,
            author: ["Diomidis Spinellis"],
            year: null,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Built To Last',
            image: '../assets/images/built-to-last.png',
            available: false,
            author: ["Jim Collins", "Jerry I. Porras"],
            year: 2001,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Lean Startup',
            image: '../assets/images/the-lean-startup.png',
            available: true,
            author: ["Eric Reis"],
            year: 2005,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Effective Engineer',
            image: '../assets/images/the-effective-engineer.png',
            available: true,
            author: ["Edmond Lau"],
            year: 2009,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Big Magic',
            image: '../assets/images/big-magic.png',
            available: true,
            author: ["Elizabeth Gilbert"],
            year: 2014,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Effective Python',
            image: '../assets/images/effective-python.png',
            available: true,
            author: ["Diomidis Spinellis"],
            year: null,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Built To Last',
            image: '../assets/images/built-to-last.png',
            available: false,
            author: ["Jim Collins", "Jerry I. Porras"],
            year: 2001,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Lean Startup',
            image: '../assets/images/the-lean-startup.png',
            available: true,
            author: ["Eric Reis"],
            year: 2005,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Effective Engineer',
            image: '../assets/images/the-effective-engineer.png',
            available: true,
            author: ["Edmond Lau"],
            year: 2009,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Big Magic',
            image: '../assets/images/big-magic.png',
            available: true,
            author: ["Elizabeth Gilbert"],
            year: 2014,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: false
        },
        {
            name: 'Effective Python',
            image: '../assets/images/effective-python.png',
            available: true,
            author: ["Diomidis Spinellis"],
            year: null,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: false
        },
        {
            name: 'Built To Last',
            image: '../assets/images/built-to-last.png',
            available: false,
            author: ["Jim Collins", "Jerry I. Porras"],
            year: 2001,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: false
        }
    ]
}
},{}],3:[function(require,module,exports){
const render = require('./render');

render.init();

var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    contain: true,
    draggable: true,
    wrapAround: true,
    arrowShape: { 
        x0: 10,
        x1: 60, y1: 50,
        x2: 60, y2: 40,
        x3: 60
    }
});
},{"./render":4}],4:[function(require,module,exports){
const controller = require('./controller');


const allBooks = document.querySelector('#allBooks');
const slider = document.querySelector('.main-carousel');
const topNav = document.querySelector('.top-navigation');
const navOverlay = document.querySelector('.nav-overlay');
const recentBooks = document.querySelector('#recentBooks');
const autocomplete = document.querySelector('.autocomplete');
const searchInput = document.querySelector('#mainSearchInput');
const navToggleBtns = document.querySelectorAll('[toggle-nav]');
const searchToggleBtns = document.querySelectorAll('[toggle-search]'); 


const toggleSearch = () => {
    topNav.classList.contains('alt-nav') ?
        searchInput.setAttribute('placeholder', 'Search books, genres, authors, etc.') :
        searchInput.setAttribute('placeholder', 'Search')

    topNav.classList.toggle('alt-nav');
}

const toggleMoreDetails = () => {

    // Defining variables within as these components are dynamically generated
    const carouselCells = document.querySelectorAll('.carousel-cell');
    const moreDetailsBtns = document.querySelectorAll('.more-details-btn');

    moreDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            carouselCells.forEach(cell => {
                if(cell.contains(e.target)) {
                    if(!cell.classList.contains('show-details')) {
                        btn.innerHTML = '<img src="./assets/icons/close.svg" class="is-close height-100-pc" alt="Close Icon">';
                        cell.classList.add('show-details');
                    } else {
                        btn.innerHTML = '<img src="./assets/icons/ellipses.svg" class="width-100-pc height-100-pc" alt="Ellipses Icon">';
                        cell.classList.remove('show-details');
                    }
                }
            })
        });
    });

    carouselCells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if(cell.contains(e.target)) {
                if(cell.classList.contains('show-details')) {
                    cell.classList.remove('show-details');
                }
            }
        });
    })
}

const toggleNav = () => {
    document.body.classList.toggle('open-drawer');
}

const toggleAutoComplete = () => {
    topNav.classList.toggle('change-nav-bg');
    autocomplete.classList.toggle('d-none');
}

const displayFeaturedBooks = () => {
    const fragment = document.createDocumentFragment();

    controller.getFeaturedBooks()
        .forEach(item => {
            const div = document.createElement('div'); 
            div.classList.add('carousel-cell');
            div.innerHTML = `
                <button class="more-details-btn">
                    <img src="./assets/icons/ellipses.svg" class="width-100-pc height-100-pc" alt="Ellipses Icon">
                </button>
                <img src="${item.image}" alt="${item.name} Book Cover">
                <div class="with-overlay dc-content">
                    <p class="picotext mb-1 ${item.available ? 'co-primary' : 'co-red'}">${item.available ? 'Available' : 'Borrowed Out'}</p>
                    <div class="mb-1">
                        <h3 class="co-white book-title">${item.name}</h3>
                        <p class="picotext co-white">${item.author.join(', ')} ${item.year ? "<br>" + item.year : ''}</p>
                    </div>
                    <div class="mb-1 show-pretabletup">
                        <p class="picotext co-white"><span>Genre: </span> ${item.genre.join(', ')}</p>
                        <p class="picotext co-white"><span>Labels: </span> ${item.labels.join(', ')}</p>
                    </div>
                    <div class="d-flx al-i-c j-c-sb dc-engagement">
                        <div class="ratings is-bigger">
                            <p class="picotext co-white">Ratings: ${Number.parseFloat(item.ratings).toFixed(1)}</p>
                            <img src="./assets/icons/ratings.svg"  alt="Ratings Icon">
                        </div>
                    </div>
                </div>
            `

            fragment.appendChild(div); 
        })
    
    slider.appendChild(fragment);
    toggleMoreDetails();  
}

const displayBookGrid = (data, parentElem) => {
    const fragment = document.createDocumentFragment();

    data.forEach(item => {
            const li = document.createElement('li'); 
            li.classList.add('details-card');
            li.innerHTML = `
                <div class="dc-image">
                    <img src="${item.image}" class="width-100-pc height-100-pc" alt="${item.name} Book Cover">
                </div>
                <div class="dc-content">
                    <p class="picotext mb-1 ${item.available ? 'co-primary' : 'co-red'}">${item.available ? 'Available' : 'Borrowed Out'}</p>
                    <h3 class="co-black book-title">${item.name}</h3>
                    <p class="picotext co-black">${item.author.join(', ')} ${item.year ? "- " + item.year : ''}</p>
                    <p class="picotext co-black">${item.genre.join(', ')}</p>
                    <div class="d-flx al-i-c dc-engagement">
                        <div class="ratings">
                            <p class="picotext co-black">Ratings: ${Number.parseFloat(item.ratings).toFixed(1)}</p>
                            <img src="./assets/icons/ratings.svg"  alt="Ratings Icon">
                        </div>
                        <div class="d-flx al-i-c stats">
                            <div>
                                <span><img src="./assets/icons/users.svg" class="width-100-pc height-100-pc" alt="Users Icon"></span>
                                <span>${item.borrowed}</span>
                            </div>
                            <div>
                                <span><img src="./assets/icons/love.svg" class="width-100-pc height-100-pc" alt="Love Icon"></span>
                                <span>${item.likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
            fragment.appendChild(li); 
        })
    
        parentElem.appendChild(fragment);
}

const displaySearchResults = (data, inputValueLength) => {
    const fragment = document.createDocumentFragment();

    if(data.length) {
        data.forEach(result => {
            const matched = `<mark>${result.slice(0, inputValueLength)}</mark>`;
            const template = inputValueLength ? matched + result.slice(inputValueLength) : result;

            const li = document.createElement('li'); 
            const span = document.createElement('span'); 

            li.classList.add('autocomplete-items');
            span.innerHTML = template;

            li.appendChild(span);
            fragment.appendChild(li); 
        })
    } else {
        const li = document.createElement('li'); 
        li.classList.add('no-results');
        li.textContent = 'No results found!'
        fragment.appendChild(li); 
    }
    
    autocomplete.innerHTML = '';
    autocomplete.appendChild(fragment);
}

module.exports.init = () => {

    // Function calls
    displayFeaturedBooks();
    displayBookGrid(controller.getRecentBooks(), recentBooks);
    displayBookGrid(controller.getAllBooks(), allBooks);

    // Mobile Search Toggle
    searchToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleSearch);
    });

    // Off-Canvas toggle
    navToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleNav);
    });        
    navOverlay.addEventListener('click', toggleNav);

    // Search autocomplete component
    searchInput.addEventListener('focus', () => {
        const results = controller.getSearchResults();

        displaySearchResults(results);
        toggleAutoComplete();
    });
    searchInput.addEventListener('input', (e) => {
        const results = controller.getSearchResults(e.target.value);
    
        displaySearchResults(results, e.target.value.length);
    });
    searchInput.addEventListener('blur', toggleAutoComplete);
}

},{"./controller":1}]},{},[3]);
