// <script>
//
//     // set the dimensions and margins of the graph
//     const margin = {top: 10, right: 30, bottom: 30, left: 40},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

//     // 1) добавление объекта в тело документа
//     const svg = d3.select("#my_dataviz") // образаемся по классу/id для добавления
//     .append("svg")  // что доабвляем
//     .attr("width", width + margin.left + margin.right) // ширина добавление и другие данные размеров
//     .attr("height", height + margin.top + margin.bottom) // высота и другие данные размеров
//     .append("g") // добавляем в svg элемент g
//     .attr("transform", // Все трансформации задаются для элемента с помощью атрибута transform
//     `translate(${margin.left},${margin.top})`); // Для перемещения этот атрибут принимает значение translate(x, y)

//     // обращаемся к данным на сервере
//     d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv").then( function(data) {

//     // 2) Координата X масштаб и отрисовка
//     const x = d3.scaleLinear() //функция интерполяции значений на оси
//     .domain([0, 1000])  // шкала измерения на оси (от 0 до 1000) можно отрисовать максимальное значение с сервера: .domain([0, d3.max(chartdata)])
//     .range([0, width]); // шаг значений в шкале на оси
//     svg.append("g")     //  добавление
//     .attr("transform", `translate(0, ${height})`) //расположение
//     .call(d3.axisBottom(x));  // вызов/отрисовка

// // 2) Координата  Y масштаб и отрисовка
//     const y = d3.scaleLinear()
//     .range([height, 0]);
//     y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
//     svg.append("g")
//     .call(d3.axisLeft(y));

//     // 3) задаем параметры для графика/гистограммы
//     const histogram = d3.histogram() // обозначаем, что хотим создать(гистограмму, пирог, или еще что-то)
//     .value(function(d) { return d.price; })   // задаем данные, которые хотим вывести(чеерез перебор map)
//     .domain(x.domain())  // then the domain of the graphic // ?
//     .thresholds(x.ticks(70)); // задаем количество баров

//     // 4) And apply this function to data to get the bins
//     const bins = histogram(data);
//

//     // 4) append the bar rectangles to the svg element
//     svg.selectAll("rect") // обрашщение ко всем треугольникам/барам
//     .data(bins) // всегда принимает массив объектов и объявляет отношение между выборкой и данными. Другими словами, пустая выборка связывается с массивом данных. Результатом data() является резервирование d3 мест под данные (кол-во новых мест равно кол-ву мест под новые данные), а так же data() возвращает три состояния выборки (enter, update, exit).
//     .join("rect") //Метод возвращает выборку, содержащую все соединенные элементы
//     .attr("x", 1) // отступ по оси x слева направо
//     .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`}) //положение графика translate/transform ???
//     .attr("width", function(d) { return x(d.x1) - x(d.x0) -1}) //высота баров ??
//     .attr("height", function(d) { return height - y(d.length); }) // ширина баров ??
//     .style("fill", "#69b3a2") // какого цвета будут бары

// });
// </script>