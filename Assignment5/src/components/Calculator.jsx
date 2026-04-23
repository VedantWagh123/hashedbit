import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult('Please enter valid numbers');
            return;
        }

        switch (operation) {
            case '+':
                setResult(n1 + n2);
                break;
            case '-':
                setResult(n1 - n2);
                break;
            case '*':
                setResult(n1 * n2);
                break;
            case '/':
                if (n2 === 0) {
                    setResult('Error: Division by zero');
                } else {
                    setResult(n1 / n2);
                }
                break;
            default:
                setResult(null);
        }
    };

    const handleCancel = () => {
        setNum1('');
        setNum2('');
        setOperation('+');
        setResult(null);
    };

    return (
        <div className="calculator-container">
            <div className="calculator-card">
                <h1 className="calculator-title">Pro Calculator</h1>
                
                <div className="input-group">
                    <div className="input-field">
                        <label>Enter first number</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                            className="calc-input"
                        />
                    </div>
                    
                    <div className="operation-selector">
                        {['+', '-', '*', '/'].map((op) => (
                            <button
                                key={op}
                                className={`op-btn ${operation === op ? 'active' : ''}`}
                                onClick={() => setOperation(op)}
                            >
                                {op === '*' ? '×' : op === '/' ? '÷' : op}
                            </button>
                        ))}
                    </div>

                    <div className="input-field">
                        <label>Enter second number</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                            className="calc-input"
                        />
                    </div>
                </div>

                <div className="action-buttons">
                    <button onClick={handleCalculate} className="btn-calculate">
                        Calculate
                    </button>
                    <button onClick={handleCancel} className="btn-cancel">
                        Cancel
                    </button>
                </div>

                {result !== null && (
                    <div className="result-container">
                        <div className="result-glass">
                            <span className="result-label">The result is</span>
                            <span className="result-value">
                                {typeof result === 'number' ? result.toLocaleString() : result}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
