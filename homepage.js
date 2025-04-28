// Random Quote Generator
const quotes = [
  "Every action counts. 🌟",
  "Be the change you wish to see in the world.",
  "Hunger knows no boundaries — neither should kindness. 🤝",
  "A small act of love can feed a soul. ❤️",
  "Together, we can end hunger. 🥪",
  "Hope begins with a meal. 🍽️",
  "One person can make a difference — you can. 🌎"
];

function showRandomQuote() {
  const quoteElement = document.getElementById('quote');
  
  // Remove the existing fade-in animation by resetting the class
  quoteElement.classList.remove('fade');
  
  // Trigger reflow to reset animation
  void quoteElement.offsetWidth;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];

  // Add the fade class to trigger the animation
  quoteElement.classList.add('fade');
}

// Random Fact Generator
const facts = [
  "Over 800 million people suffer from hunger every night.",
  "1 in 9 people globally experience hunger.",
  "Children under 5 are the most vulnerable to malnutrition.",
  "A staggering number of people in developed nations
