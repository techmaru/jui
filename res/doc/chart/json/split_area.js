var chart = jui.include("chart.builder"),
    time = jui.include("util.time");
var today = getTodayData();

chart("#chart", {
    axis : {
        x : {
            type : "date",
            domain : [ today.start, today.end ],
            step : [ time.hours, 1 ],
            format : "HH",
            key: "time"
        },
        y : {
            type : "range",
            step : 10,
            target : function(d) {
                return 600;
            }
        },
        data : today.data,
        buffer : today.data.length
    },
    brush : [{
        type : "splitarea",
        split : 500
    }, {
        type : "splitline",
        split : 500
    }, {
        type : "pin",
        split : 500
    }],
    widget : [{
        type : "title",
        text : "Line Sample"
    }],
    style : {
        lineSplitBorderColor: "#929292"
    }
});