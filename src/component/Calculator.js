import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
        setInput(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('0');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else if (value === '±') {
      if (input.startsWith('-')) {
        setInput(input.substring(1));
      } else {
        setInput('-' + input);
      }
    } else {
      setInput(input + value);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const formatDisplayInput = (inputStr) => {
    return inputStr.replace(/\*/g, '×') || '0';
  };

  return (
    <div>
      <div className={`calculator ${darkMode ? 'dark-mode' : ''}`}>
        <div className="header">
          <h2>Modern Calculator</h2>
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        
        <div className="display">
          <div className="input">{formatDisplayInput(input)}</div>
          <div className="result">{result}</div>
        </div>
        
        <div className="keypad">
          <button onClick={() => handleClick('C')} className="clear">C</button>
          <button onClick={() => handleClick('±')} className="operator">±</button>
          <button onClick={() => handleClick('%')} className="operator">%</button>
          <button onClick={() => handleClick('/')} className="operator">÷</button>
          
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')} className="operator">×</button>
          
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')} className="operator">-</button>
          
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')} className="operator">+</button>
          
          <button onClick={() => handleClick('0')} className="zero">0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('⌫')} className="operator">⌫</button>
          <button onClick={() => handleClick('=')} className="equals">=</button>
        </div>
      </div>
      <div className='create-by'>
        <p>Create by <a href='https://ifandika.github.io'>Ifandika</a> ❤️</p>
      </div>
    </div>
  );
};

export default Calculator;