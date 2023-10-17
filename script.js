const getMessage = document.getElementById("receiveMessage");
const getAuthor = document.getElementById("receiveAuthor");
const button = document.getElementById("reloadbtn");

const Message = [
  {
    message:
      "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    Author: " Albert Einstein",
  },
  {
    message:
      " Learn as if you will live forever, live like you will die tomorrow.",
    Author: " Mahatma Gandhi",
  },
  {
    message:
      " Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    Author: " Mark Twain",
  },
  {
    message:
      "When you change your thoughts, remember to also change your world",
    Author: " Norman Vincent Peale",
  },
  {
    message:
      " Success is not final; failure is not fatal: It is the courage to continue that counts.",
    Author: " Winston S. Churchill",
  },
  {
    message:
      " Setting goals is the first step in turning the invisible into the visible.",
    Author: " W. P. Kinsella",
  },
  {
    message:
      " Success is getting what you want, happiness is wanting what you get.",
    Author: " Tony Robbins",
  },
  {
    message:
      " We don’t just sit around and wait for other people. We just make, and we do.",
    Author: "  Arlan Hamilton",
  },
  {
    message:
      " The thing women have yet to learn is nobody gives you power. You just take it.",
    Author: " Roseanne Barr",
  },
  {
    message:
      " One secret of success in life is for a man to be ready for his opportunity when it comes ",
    Author: " Benjamin Disraeli",
  },
];

function passingValue() {
  const randomNumber = Math.floor(Math.random() * Message.length);
  const logMessage = Message[randomNumber].message;
  const logAuthor = Message[randomNumber].Author;

  getMessage.innerHTML = logMessage;
  getAuthor.innerHTML = logAuthor;
}

button.addEventListener("click", passingValue);
