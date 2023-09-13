import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); //max özelliği bir argüman dizisi ister. Ancak bizim elde ettiğimiz değerler birer sayı dizisi değil bir javascript nesnesi.
  //Bunun için map fonk. ile value değerleri alınarak birer virgülle ayrılmıs sayı dizisini elde edildi.
  // ayrıca pread operatörü (...) kullanmamızın nedeni max fonk. bir dizi yerine argüman dizisi istediğinden tüm dizi ögelerini bağımsız değişken olarak tek tek max fonksiyonuna yükler.
  // max fonk 12 değer alacak.
  //
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          // max değer hesaplanmalı
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
