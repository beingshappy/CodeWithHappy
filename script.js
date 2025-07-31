const navHamburger = document.getElementById("navHamburger");
const navSideMenu = document.getElementById("navSideMenu");
const navCloseBtn = document.getElementById("navCloseBtn");

navHamburger.addEventListener("click", () => {
  navSideMenu.classList.add("open");
  navHamburger.classList.add("hide"); // Hide hamburger when menu opens
});

navCloseBtn.addEventListener("click", () => {
  navSideMenu.classList.remove("open");
  navHamburger.classList.remove("hide"); // Show hamburger again
});




// document.querySelectorAll(".submenu").forEach(function (submenu) {
//   submenu.addEventListener("mouseenter", function () {
//     const submenuDropdown = this.querySelector(".dropdown-submenu");
//     if (!submenuDropdown) return;

//     // Remove class first to reset position
//     submenuDropdown.classList.remove("open-left");

//     const rect = submenuDropdown.getBoundingClientRect();
//     const overflowRight = rect.right > window.innerWidth;

//     if (overflowRight) {
//       submenuDropdown.classList.add("open-left");
//     }
//   });
// });

// function adjustCustomDropdownPosition(el) {
//   const menu = el.querySelector(".custom-menu");
//   if (!menu) return;

//   menu.classList.remove("open-left");

//   const rect = menu.getBoundingClientRect();
//   const overflowRight = rect.right > window.innerWidth;

//   if (overflowRight) {
//     menu.classList.add("open-left");
//   }
// }

// Attach on hover for all custom dropdowns
document
  .querySelectorAll(".nav-item.custom-dropdown")
  .forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      adjustCustomDropdownPosition(dropdown);
    });
  });



// Tab Switching
const tabBtns = document.querySelectorAll(".tab-btn");
const grids = document.querySelectorAll(".challenge-grid");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    grids.forEach((grid) => {
      grid.classList.remove("active");
      if (grid.id === btn.dataset.tab) {
        grid.classList.add("active");
      }
    });
  });
});

// Solutions Data
const solutions = {
  solution1: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,

  solution2: `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,

  solution3: `function findLargest(arr) {
  return Math.max(...arr);
}`,

  solution4: `function isEven(num) {
  return num % 2 === 0;
}`,

  solution5: `function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}`,

  solution6: `function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}`,

  solution7: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`,

  solution8: `function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i-1] + seq[i-2]);
  }
  return seq.slice(0, n);
}`,

  solution9: `function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;

  function isPrime(n) {
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) return false;
    }
    return true;
  }
}`,

  solution10: `function capitalizeWords(str) {
  return str.replace(/\\b\\w/g, char => char.toUpperCase());
}`,

  solution11: `function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}`,

  solution12: `function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}`,

  solution13: `function isValidBrackets(s) {
  const stack = [];
  const map = { '(': ')', '{': '}', '[': ']' };
  for (let char of s) {
    if (map[char]) stack.push(map[char]);
    else if (stack.pop() !== char) return false;
  }
  return stack.length === 0;
}`,

  solution14: `function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}`,

  solution15: `function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`,

  solution16: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`,

  solution17: `function flattenArray(arr) {
  return arr.flat(Infinity);
}`,

  solution18: `function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

// Usage
const factorial = memoize(function(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
});`,
};

// Modal Logic
const modal = document.getElementById("solutionModal");
const solutionCode = document.getElementById("solutionCode");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".solution-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.solution;
    solutionCode.textContent = solutions[id];
    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// quiz section
const quizData = {
  html: [
    {
      q: "What does HTML stand for?",
      options: [
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "HyperText Markup Language",
        "Hyperlinking Text Management Language",
      ],
      answer: 2,
    },
    {
      q: "Which tag is used to define a form in HTML?",
      options: [
        "&lt;form&gt;",
        "&lt;input&gt;",
        "&lt;textarea&gt;",
        "&lt;fieldset&gt;",
      ],
      answer: 0,
    },
    {
      q: "Which HTML tag is used to display a picture on a webpage?",
      options: [
        "&lt;img&gt;",
        "&lt;image&gt;",
        "&lt;picture&gt;",
        "&lt;src&gt;",
      ],
      answer: 0,
    },
    {
      q: "Which HTML element is used for the largest heading?",
      options: ["&lt;heading&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;head&gt;"],
      answer: 2,
    },
    {
      q: "Which tag is used to create an unordered list?",
      options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
      answer: 0,
    },
    {
      q: "Which attribute is used to open a link in a new tab?",
      options: [
        'target="_self"',
        'target="_blank"',
        'href="_new"',
        'rel="external"',
      ],
      answer: 1,
    },
    {
      q: "What does the &lt;br&gt; tag do in HTML?",
      options: [
        "Creates a paragraph break",
        "Makes text bold",
        "Inserts a line break",
        "Adds a space between words",
      ],
      answer: 2,
    },
    {
      q: "Which tag is used to add a table row?",
      options: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;table&gt;"],
      answer: 1,
    },
    {
      q: "Which tag is used to define an internal style sheet?",
      options: [
        "&lt;style&gt;",
        "&lt;script&gt;",
        "&lt;css&gt;",
        "&lt;headstyle&gt;",
      ],
      answer: 0,
    },
    {
      q: "What is the correct HTML element for inserting a line break?",
      options: ["&lt;break&gt;", "&lt;br&gt;", "&lt;lb&gt;", "&lt;newline&gt;"],
      answer: 1,
    },
  ],
  css: [
    {
      q: "Which selector targets an element with id 'header'?",
      options: ["#header", ".header", "header", "*header"],
      answer: 0,
    },
    {
      q: "What is the default position value in CSS?",
      options: ["absolute", "relative", "fixed", "static"],
      answer: 3,
    },
    {
      q: "Which property is used to change text color?",
      options: ["background-color", "font-style", "color", "text-color"],
      answer: 2,
    },
    {
      q: "What does the 'box-sizing: border-box' property do?",
      options: [
        "Adds a border to all elements",
        "Includes padding and border in the element’s total width/height",
        "Ignores padding",
        "Sets box size to border width only",
      ],
      answer: 1,
    },
    {
      q: "Which CSS property is used for flex container?",
      options: ["position", "display", "float", "flex"],
      answer: 1,
    },
    {
      q: "How do you apply a style to all &lt;p&gt; elements?",
      options: ["p {}", "#p {}", ".p {}", "*p {}"],
      answer: 0,
    },
    {
      q: "Which value allows a flex item to grow?",
      options: ["flex-shrink", "flex-wrap", "flex-grow", "flex-basis"],
      answer: 2,
    },
    {
      q: "Which media query is used for mobile responsiveness?",
      options: [
        "@media only screen and (min-width: 768px)",
        "@media only screen and (max-width: 600px)",
        "@media handheld",
        "@media mobile",
      ],
      answer: 1,
    },
    {
      q: "Which property controls spacing outside an element?",
      options: ["padding", "margin", "border", "outline"],
      answer: 1,
    },
    {
      q: "Which unit is relative to the root element in CSS?",
      options: ["em", "%", "px", "rem"],
      answer: 3,
    },
  ],
  js: [
    {
      q: "Which keyword is used to declare a constant in JavaScript?",
      options: ["let", "var", "const", "define"],
      answer: 2,
    },
    {
      q: "Which method is used to select an element by ID?",
      options: [
        "getElementByClassName()",
        "querySelectorAll()",
        "getElementById()",
        "getElementByTagName()",
      ],
      answer: 2,
    },
    {
      q: "What does '===' mean in JavaScript?",
      options: [
        "Assignment",
        "Equality with type coercion",
        "Strict equality",
        "Comparison with coercion",
      ],
      answer: 2,
    },
    {
      q: "Which of the following is not a JavaScript data type?",
      options: ["String", "Number", "Character", "Boolean"],
      answer: 2,
    },
    {
      q: "How do you create a function in JavaScript?",
      options: [
        "function myFunc() {}",
        "def myFunc() {}",
        "create function myFunc()",
        "function:myFunc() {}",
      ],
      answer: 0,
    },
    {
      q: "Which event occurs when a user clicks on an HTML element?",
      options: ["onchange", "onmouseclick", "onmouseover", "onclick"],
      answer: 3,
    },
    {
      q: "What will the following code return: typeof []?",
      options: ["'array'", "'object'", "'list'", "'undefined'"],
      answer: 1,
    },
    {
      q: "Which method converts a JSON string into a JavaScript object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.objectify()",
      ],
      answer: 0,
    },
    {
      q: "Which statement creates a new Promise?",
      options: [
        "new Promise()",
        "Promise.create()",
        "make.Promise()",
        "init Promise()",
      ],
      answer: 0,
    },
    {
      q: "What is the output of 3 + 2 + '7'?",
      options: ["12", "'57'", "'327'", "'57'"],
      answer: 1,
    },
  ],

  react: [
    {
      q: "What is JSX?",
      options: [
        "A JavaScript library",
        "JavaScript XML syntax",
        "JSON format",
        "Component structure",
      ],
      answer: 1,
    },
    {
      q: "Which hook is used for state in React?",
      options: ["useProps", "useReducer", "useEffect", "useState"],
      answer: 3,
    },
    {
      q: "What is the correct way to pass data to a component in React?",
      options: ["using setState", "using props", "using render", "using hooks"],
      answer: 1,
    },
    {
      q: "Which method is called after the component is rendered?",
      options: [
        "componentDidMount",
        "componentWillUpdate",
        "render",
        "constructor",
      ],
      answer: 0,
    },
    {
      q: "Which hook is used for side effects in functional components?",
      options: ["useState", "useEffect", "useCallback", "useRef"],
      answer: 1,
    },
    {
      q: "In React, what is a key used for in lists?",
      options: [
        "To make the component private",
        "To uniquely identify elements",
        "To store values",
        "To trigger re-renders",
      ],
      answer: 1,
    },
    {
      q: "Which of the following is NOT a lifecycle method?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "componentLoop",
        "shouldComponentUpdate",
      ],
      answer: 2,
    },
    {
      q: "What does virtual DOM do in React?",
      options: [
        "Directly manipulates the UI",
        "Replaces the real DOM",
        "Optimizes re-rendering",
        "Avoids using components",
      ],
      answer: 2,
    },
    {
      q: "What is the default behavior of React when state changes?",
      options: [
        "It re-renders the component",
        "It deletes the DOM",
        "It changes the route",
        "It triggers a reload",
      ],
      answer: 0,
    },
    {
      q: "Which file extension is commonly used for React components?",
      options: [".js", ".jsx", ".ts", ".html"],
      answer: 1,
    },
  ],

  node: [
    {
      q: "Which framework is commonly used with Node.js?",
      options: ["Laravel", "Express", "Django", "Flask"],
      answer: 1,
    },
    {
      q: "What does `require` do in Node.js?",
      options: [
        "Define variables",
        "Load modules",
        "Run code",
        "Start a server",
      ],
      answer: 1,
    },
    {
      q: "Which module is used to create a server in Node.js?",
      options: ["http", "fs", "url", "events"],
      answer: 0,
    },
    {
      q: "Which of the following is a built-in Node.js module?",
      options: ["axios", "react", "http", "express"],
      answer: 2,
    },
    {
      q: "How do you export a module in Node.js?",
      options: [
        "export default",
        "module.exports",
        "require.module",
        "exports.module",
      ],
      answer: 1,
    },
    {
      q: "Which method is used to read a file in Node.js?",
      options: [
        "fs.getFile()",
        "fs.openFile()",
        "fs.readFile()",
        "fs.loadFile()",
      ],
      answer: 2,
    },
    {
      q: "What is the use of `fs` module in Node.js?",
      options: [
        "To handle server logic",
        "To interact with file system",
        "To manage database",
        "To create routes",
      ],
      answer: 1,
    },
    {
      q: "What does `npm` stand for?",
      options: [
        "Node Project Manager",
        "Node Package Manager",
        "Network Project Module",
        "New Package Manager",
      ],
      answer: 1,
    },
    {
      q: "Which function is used to handle events in Node.js?",
      options: ["eventCaller", "eventHandler", "on()", "trigger()"],
      answer: 2,
    },
    {
      q: "How do you start a basic Express server?",
      options: [
        "express.listen(80)",
        "app.listen(3000)",
        "server.start()",
        "express.start()",
      ],
      answer: 1,
    },
  ],

  mongo: [
    {
      q: "Which command is used to insert data in MongoDB?",
      options: ["add()", "insert()", "insertOne()", "push()"],
      answer: 2,
    },
    {
      q: "Mongoose is used for?",
      options: [
        "Mongo shell commands",
        "MongoDB cloud",
        "Object Data Modeling",
        "Authentication",
      ],
      answer: 2,
    },
    {
      q: "Which data format does MongoDB use?",
      options: ["XML", "JSON", "CSV", "BSON"],
      answer: 3,
    },
    {
      q: "Which method is used to find a single document?",
      options: ["find()", "findOne()", "get()", "fetchOne()"],
      answer: 1,
    },
    {
      q: "What does `_id` represent in MongoDB documents?",
      options: [
        "Collection ID",
        "Database ID",
        "Document's unique identifier",
        "Object type",
      ],
      answer: 2,
    },
    {
      q: "Which operator is used for greater than in MongoDB?",
      options: ["$greater", "$gt", "$more", "$gte"],
      answer: 1,
    },
    {
      q: "Which method deletes a single document?",
      options: ["removeOne()", "delete()", "deleteOne()", "dropOne()"],
      answer: 2,
    },
    {
      q: "Which command lists all databases in MongoDB shell?",
      options: ["show dbs", "list databases", "get dbs", "db.list()"],
      answer: 0,
    },
    {
      q: "How do you switch to a specific database?",
      options: [
        "switch db <name>",
        "use <name>",
        "db.set(<name>)",
        "open <name>",
      ],
      answer: 1,
    },
    {
      q: "Which command drops a collection?",
      options: [
        "collection.remove()",
        "dropCollection()",
        "db.drop()",
        "collection.drop()",
      ],
      answer: 3,
    },
  ],
};

const quizForm = document.getElementById("quizForm2");
const scoreOutput = document.getElementById("scoreOutput");
const tabs = document.querySelectorAll(".quiz-tab");
const container = document.getElementById("quizContainer");

let currentTopic = "html";

// Render quiz on topic click
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTopic = tab.dataset.topic;
    renderQuiz(currentTopic);
  });
});

// Render quiz function
function renderQuiz(topic) {
  container.innerHTML = "";
  quizData[topic].forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `
      <h3>${index + 1}. ${q.q}</h3>
      ${q.options
        .map(
          (opt, i) =>
            `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label>`
        )
        .join("")}
    `;
    container.appendChild(block);
  });
}

// Handle submit
quizForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  const formData = new FormData(quizForm);

  quizData[currentTopic].forEach((q, index) => {
    const userAnswer = formData.get(`q${index}`);
    if (userAnswer !== null && parseInt(userAnswer) === q.answer) {
      score++;
    }
  });

  scoreOutput.textContent = `Your Score: ${score} / ${quizData[currentTopic].length}`;
});

// Initial quiz render
renderQuiz(currentTopic);



// contact page
const form = document.getElementById("contactForm");
const popup = document.getElementById("thankYouPopup");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mqaleylq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      popup.classList.remove("hidden");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
});

function closePopup() {
  popup.classList.add("hidden");
}

// support sec
// document.addEventListener("DOMContentLoaded", function () {
//     const copyBtn = document.getElementById("copy-upi");
//     const upiID = document.getElementById("upi-id");
//     const copyMsg = document.getElementById("copy-msg");

//     copyBtn.addEventListener("click", function () {
//       const upiText = upiID.textContent;
//       navigator.clipboard.writeText(upiText).then(() => {
//         copyMsg.style.display = "inline";
//         setTimeout(() => {
//           copyMsg.style.display = "none";
//         }, 2000);
//       }).catch(err => {
//         alert("Failed to copy: " + err);
//       });
//     });
//   });
