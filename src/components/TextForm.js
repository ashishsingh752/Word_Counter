import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [originalText, setOriginalText] = useState('');

  const handleUpclick = () => {
    if (!originalText) {
      setOriginalText(text);
    }
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoclick = () => {
    if (!originalText) {
      setOriginalText(text);
    }
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleRestoreClick = () => {
    setText(originalText);
  };

  const handleRemoveExtraSpaces = () => {
    if (!originalText) {
      setOriginalText(text);
    }
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length === 1 && words[0] === '' ? 0 : words.length;
  };

  const calculateTime = (text) => {
    const wordsPerMinute = 200; // Assuming an average reading speed of 200 words per minute
    const totalWords = countWords(text);
    const minutes = Math.floor(totalWords / wordsPerMinute);
    const seconds = Math.round(((totalWords % wordsPerMinute) / wordsPerMinute) * 60);
    return { minutes, seconds };
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
        <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            onFocus={() => {
              if (!originalText) {
                setOriginalText(text);
              }
            }}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'rgb(176, 179, 188)',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-primary mx-2 my-1 ${props.mode === 'dark' ? 'btn-dark' : ''}`}
          onClick={handleUpclick}
          style={{ backgroundColor: props.mode === 'dark' ? '#6e798f' : '' }}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-primary mx-2 my-1  ${props.mode === 'dark' ? 'btn-dark' : ''}`}
          onClick={handleLoclick}
          style={{ backgroundColor: props.mode === 'dark' ? '#6e798f' : '' }}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-primary mx-2 my-1  ${props.mode === 'dark' ? 'btn-dark' : ''}`}
          onClick={handleRemoveExtraSpaces}
          style={{ backgroundColor: props.mode === 'dark' ? '#6e798f' : '' }}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-primary mx-2 my-1 ${props.mode === 'dark' ? 'btn-dark' : ''}`}
          onClick={handleRestoreClick}
          style={{ backgroundColor: props.mode === 'dark' ? '#6e798f' : '' }}
        >
          Restore Original Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>
          {countWords(text)} {countWords(text) === 1 ? 'word' : 'words'} and {text.length} characters
        </p>
        <p>
          Total time to read the text: {calculateTime(text).minutes} minute
          {calculateTime(text).minutes !== 1 ? 's' : ''} {calculateTime(text).seconds} second
          {calculateTime(text).seconds !== 1 ? 's' : ''}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something for preview'}</p>
      </div>
    </>
  );
}
