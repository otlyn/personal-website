const footer = document.querySelector(".bottom footer");
const message = footer.querySelector("h1");
const author = footer.querySelector("p");
const quoteBtn = footer.querySelector("a");

// Where the quotes are stored
const quotes = [{
        message: "The unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        message: "There is only one good, knowledge, and one evil, ignorance.",
        author: "Socrates"
    },
    {
        message: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        message: "Happiness is the highest good.",
        author: "Aristotle"
    },
    {
        message: "Cogito, ergo sum. I think, therefore I am.",
        author: "René Descartes"
    },
    {
        message: "Happiness is not an ideal of reason but of imagination.",
        author: "Immanuel Kant"
    },
    {
        message: "No man's knowledge here can go beyond his experience.",
        author: "John Locke"
    },
    {
        message: "The greater the difficulty, the more glory in surmounting it.",
        author: "Epicurus"
    },
    {
        message: "It is one thing to show a man that he is in error, and another to put him in possession of truth.",
        author: "John Locke"
    },
    {
        message: "That man is wisest who, like Socrates, realizes that his wisdom is worthless.",
        author: "Plato"
    },
    {
        message: "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.",
        author: "René Descartes"
    },
    {
        message: "Freedom is secured not by the fulfilling of one's desires, but by the removal of desire.",
        author: "Epictetus"
    },
    {
        message: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
        author: "Tyrion Lannister"
    },
    {
        message: "Death is so terribly final, while life is full of possibilities.",
        author: "Tyrion Lannister"
    },
    {
        message: "Once you’ve accepted your flaws, no one can use them against you.",
        author: "Tyrion Lannister"
    },
    {
        message: "Laughter is poison to fear.",
        author: "Catelyn Stark"
    },
    {
        message: "You know nothing, Jon Snow.",
        author: "Ygritte"
    },
    {
        message: "A bruise is a lesson, and each lesson makes us better.",
        author: "Arya Stark"
    }
];

function newQuote(e) {
    // Cross Browser Support
    // If the variable e does not exist
    // Make it a reference to window.event
    if (!e) var e = window.event;

    // Prevent link's default behavior
    e.preventDefault();

    // Generate a random number and store in variable "i"
    let i = Math.floor(Math.random() * quotes.length);

    // Ensure new quote is selected
    // If it is new, print it out
    // If not, run function again
    if (message.innerText != quotes[i].message) {
        message.innerText = quotes[i].message;
        author.innerText = "— " + quotes[i].author;
    } else {
        newQuote(e);
    }
}

// Quote Btn window check for keyboard/tab navigation accessibility
function focusWindow() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var percent = (winScroll / height) * 100;
    // If quote-btn recieves focus without being visible then scroll page down
    if (document.activeElement === quoteBtn && percent < 99) {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
}

quoteBtn.addEventListener("click", newQuote, false);
quoteBtn.addEventListener("focus", focusWindow);