// Наш попап
let highlightMenu = document.querySelector(".highlightMenu");

// Включить попап
function turnOn() {
  highlightMenu.classList.add("reveal");
};
// Выключить попап
function turnOff() {
  highlightMenu.classList.remove("reveal");
};

let getSelectedText = function() {
  let text = "";
  // Метод возвращает объект Selection, представленный в виде диапазона текста, который пользователь выделил на странице.
  if (window.getSelection) {
    // Преобразуем в строку то, что выделили
    text = window.getSelection().toString();
    // IE8, используем объект selection
  } else if (document.selection) {
    text = document.selection.createRange().text;
  }
  // Возвращаем то, что выделили
  return text;
};


// Наш элемент
let sel = document.querySelector('.selected');

// Навешиваем обработчик события "mouseup" на элемент (при отпускании кнопки мыши)
document.addEventListener('mouseup', function() {
  thetext = getSelectedText();
  if (thetext.length > 0) {
    turnOn();
  } else {
    turnOff();
  }
});



/* function checkTextHighlighting(event) {

  var selection = window.getSelection();


  if ((event.target.className === "url-input" ||
      event.target.classList.contains("url") ||
      event.target.parentNode.classList.contains("ui-inputs"))) {

    currentNodeList = findNodes(selection.focusNode);
    updateBubbleStates();
    return;
  }

  // Check selections exist
  if (selection.isCollapsed === true && lastType === false) {

    onSelectorBlur();
  }

  // Text is selected
  if (selection.isCollapsed === false && composing === false) {

    currentNodeList = findNodes(selection.focusNode);

    // Find if highlighting is in the editable area
    if (hasNode(currentNodeList, "ARTICLE")) {
      updateBubbleStates();
      updateBubblePosition();

      // Show the ui bubble
      textOptions.className = "text-options active";
    }
  }

  lastType = selection.isCollapsed;
} */
