var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", sales : 40, profit : 35 },
    { quarter : "2Q", sales : 10, profit : 5 },
    { quarter : "3Q", sales : 15, profit : 10 },
    { quarter : "4Q", sales : 30, profit : 25 }
];

chart("#chart", {
    axis : {
        x : {
            type : "block",
            target : "quarter",
            line : true
        },
        y : {
            type : "range",
            target : "sales",
            step : 10,
            line : true
        },
        data : data
    },
    brush : {
        type : "bubble",
        min: 1,
        max: 50,
        target : [ "sales", "profit" ]
    },
    widget : [
    	{ type : "title", text : "Bubble Sample"},
        { type : "tooltip" },
    	{ type : "legend" }
    ]
});