import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 294.55, date: new Date(2023, 2, 2) },
    { id: "e2", title: "New iPhone", amount: 1500, date: new Date(2023, 2, 28) },
    { id: "e3", title: "Food & Beverage", amount: 100.29, date: new Date(2023, 2, 28) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
