import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   //kodun JavaScript kısmı;
  //   // bir tarih nesnesini değiştirilmez olarak tutalım.
  //   const expenseDate = new Date(2023, 2, 28); //2023 mart ayının 28'i (aylar 0 dan başlayarak atanıyor.)
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 230;
  //   // Bu örnek javascript kodu herhangi bir kod olabilir. Bu bir HTTP isteği göndermek olabilir örneğin.
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   setTitle("Updated!");
  //   console.log(title);
  // }

  return (
    <li>
      {/* // JSX birden fazla satıra izin vermez. Bunun ayrıntısı verilecek ancak şu
      anda bunun çözümü için bütün HTML kodlarını bir div'e sarmak. */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* normalde bu şekilde yazdığımız JSX kodlarının farklı bir yöntemi olarak süslü parantez kullanarak içerisinde temel Javascript kodları yazılabilir.
        Örneğin {1+1} yazılırsa bu normal javascript kodu olarak çalıştırılarak sonuç gösterilir. */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
