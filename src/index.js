const quotes = [
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "author": "Steve Jobs"
    },
    {
        "quote": "If life were predictable it would cease to be life, and be without flavor.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "author": "Oprah Winfrey"
    },
    {
        "quote": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "author": "James Cameron"
    },
    {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa"
    },
    {
        "quote": "When you reach the end of your rope, tie a knot in it and hang on.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Always remember that you are absolutely unique. Just like everyone else.",
        "author": "Margaret Mead"
    },
    {
        "quote": "Do not take life too seriously. You will never get out of it alive.",
        "author": "Elbert Hubbard"
    },
    {
        "quote": "People who think they know everything are a great annoyance to those of us who do.",
        "author": "Isaac Asimov"
    },
    {
        "quote": "Procrastination is the art of keeping up with yesterday.",
        "author": "Don Marquis"
    },
    {
        "quote": "Get your facts first, then you can distort them as you please.",
        "author": "Mark Twain"
    },
    {
        "quote": "A day without sunshine is like, you know, night.",
        "author": "Steve Martin"
    },
    {
        "quote": "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
        "author": "Ellen DeGeneres"
    },
    {
        "quote": "Don't sweat the petty things and don't pet the sweaty things.",
        "author": "George Carlin"
    },
    {
        "quote": "Always do right. This will gratify some people and astonish the rest.",
        "author": "Mark Twain"
    },
    {
        "quote": "If you tell the truth, you don't have to remember anything.",
        "author": "Mark Twain"
    },
    {
        "quote": "A lie can travel half way around the world while the truth is putting on its shoes.",
        "author": "Mark Twain"
    }
];

const getQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote.quote + "\n - " + randomQuote.author);
}

module.exports = { getQuote };