import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2020);

  const addFilterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Here is from Expenses ${selectedYear}`);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // filtrelenen tarihte eleman olup olmamasına göre ekranda gösterilecek kısmı koşullu olrark yönetmek;

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          showYearHandler={addFilterByYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
