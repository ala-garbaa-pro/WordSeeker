
/**
 * 
 *        Contants
 * 
 */

const DEBUG = false;
const DISPLAY_MESSAGE_ID = "display-message";

const display_message_span_DOM = document.getElementById(DISPLAY_MESSAGE_ID);

const WORD_FOUND_STRING = `The word '000000' is in the text`;
const WORD_NOT_FOUND_STRING = `The word '000000' is NOT in the text`;

function onSubmitFormHandler(event) {
    event.preventDefault(); // Prevent form submission

    var mainText = document.getElementById("main-text").value;
    var word = document.getElementById("word").value;
    var indexOfWordInText = mainText.indexOf(word);
    DEBUG && console.log("Main Text:", mainText);
    DEBUG && console.log("Word:", word);
    DEBUG && console.log("Index of word in text:", indexOfWordInText);
    setDisplayMessageSpanTextAndStyle(indexOfWordInText, word);
    highlightText("main-text", indexOfWordInText, indexOfWordInText + word.length);
}


/**
* Sets the style and the text of the display message span based on the search result parameter.
* @param {number} resultOfSearch - The result of the search.
* If negative, it indicates "not found".
*/
function setDisplayMessageSpanTextAndStyle(resultOfSearch, word) {
    if (resultOfSearch < 0) {
        // Add the 'message-error' class and remove the 'message-success' class if present
        display_message_span_DOM.classList.add('message-error');
        display_message_span_DOM.classList.remove('message-success');
        display_message_span_DOM.innerText = `${WORD_NOT_FOUND_STRING.replace("000000", word)}`;
    } else {
        // Add the 'message-success' class and remove the 'message-error' class if present
        display_message_span_DOM.classList.add('message-success');
        display_message_span_DOM.classList.remove('message-error');
        display_message_span_DOM.innerText = `${WORD_FOUND_STRING.replace("000000", word)}`;
    }
}

/**
 * Highlights the text within a textarea element.
 * @param {string} textareaId - The ID of the textarea element.
 * @param {number} startIndex - The starting index of the text to be highlighted.
 * @param {number} endIndex - The ending index of the text to be highlighted.
 */
function highlightText(textareaId, startIndex, endIndex) {
    var textarea = document.getElementById(textareaId);
  
    if (typeof textarea.selectionStart !== "undefined") {
      textarea.focus();
      textarea.selectionStart = startIndex;
      textarea.selectionEnd = endIndex;
    }
  }
  