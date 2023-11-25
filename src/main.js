'use strict';
import EditorJS from '@editorjs/editorjs';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

const editor = new EditorJS({
  tools: {
  }
})

