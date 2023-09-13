import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const titleChangeHandler = (event) => {
    // Sadece JavaScript ile eventl listener etkileşimi;
    // document.getElementById("").addEventListener("click",(event)=> {});
    // console.log(event.target.value);

    setTitle(event.target.value);
  };
  const AmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);

    //bir useState kullanılan durumda değişkeni kullanmak için;
    // setUserInput({
    // ...userInput,
    // enteredTitle: event.target.value,
    // sadece bu değer böyle güncelleyerek bırakılamaz. Aksi halde diğer iki veri kaybolur.
    // iki verinin kaybolmaması için bu nesneleri de yönetmek gerekiyor.
    // bunun için mevcut değerleri alarak güncelleme veya kaybolma işlemi yapılmaması dağlanır.
    // bunun için de JavaScript operatörü olan sprad operatörü kullanılır.
    // Bunun için ...userInput başta olacak şekilde bu söz dizimi kullanılır.
    // bu şekilde userInput verileri kopyalanır ancak aşağısında girilen değer dışında
    // })

    //sadece sprad operatörü yerine bunu bir işlevle kullanmak !! Her zaman en son durumu almak için
    // setUserInput((prevState)=>{
    //   return{...prevState,enteredTitle:event.target.value};
    // })
  };

  // birden fazla useState kullanmak yerine bir defada bunu işlemek;
  // const[userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const submitHandler = (event) => {
    // Submit işlemi yapıldığında sayfa yeniden yüklenir. Bunun olmasını engellemek için (açıp kapanabilen bir özellik) bu ifade kullanılır.
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date), //yeni bir obje oluşturulduğunda bu tarih dizisini parçalayarak tarih objesi olarak kullanmayı sağlayacak
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={AmountHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
