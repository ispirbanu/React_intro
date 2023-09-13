import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    // tüm masraflar gözden geçirilecek ve farklı aylar için tüm masraflar gerekli ayın harcamalarına atanacak
    const expenseMonth = expense.date.getMonth(); // ocak 0 ile başlar.
    //yukarıda aylardan oluşturduğumuz listede sıfırdan başlayacağı için bunu kullanabiliriz.
    chartDataPoints[expenseMonth].value += expense.amount; //Gelecek değerden harcamayı value değerine atıyoruz böylece harcamaların toplamı alınarak grafiğe ekleme yapılabilecek.
  }
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
