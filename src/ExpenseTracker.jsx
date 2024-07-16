import React, { useState } from 'react'
import "./ExpenseTracker.css"

export const ExpenseTracker = () => {
    const [input, setInput] = useState("")
    const [amount, setAmount] = useState("")
    const [expense, setExpense] = useState([])


    const addExpense=()=>{
      if(!input || !amount) return;
      const newExpense = {
        id: expense.length + 1,
        title : input,
        amount: amount,
      }
      setExpense([...expense,newExpense])
      setInput("")
      setAmount("")
    }

    const deleteExpenses = (sunny)=>{
      setExpense (expense.filter
        ((logo)=> logo.id !== sunny))
    }

    return (
    <div className='container'>
    <div  className='input'>
        <h2>Expense Tracker</h2>
        <div className='input'>
            <input 
            className='input-1'
            placeholder='Expense'
            value={input}
            type="text" 
            onChange={(e)=> setInput(e.target.value)}
            />

            <input 
            className='input-2'
            type="number" 
            placeholder='amount'
            onChange={(e)=>setAmount(e.target.value)}
            />     

        </div>
        <button className='btn' onClick={addExpense}>Add Expense</button> 
    </div>
    <ul className='expense-list'>
      {
        expense.map((expense)=>(
        <li key={expense.id}>
          <span>{expense.title}</span>&nbsp;&nbsp;&nbsp;
          <span>{expense.amount}</span>&nbsp;&nbsp;&nbsp;

        <button onClick={(id)=>(deleteExpenses( expense.id))}>Delete</button>
        </li>
        ))
      }

    </ul>
    </div>
  )
}
