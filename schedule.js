const [SUN, MON, TUE, WED, THU, FRI, SAT] = [0, 1, 2, 3, 4, 5, 6];
const DAY_STR = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const HOLIDAY_LIST = [
    "2022-04-09",
    "2022-04-10",
    "2022-04-11",
    "2022-04-30",
    "2022-05-01",
    "2022-05-02",
    "2022-05-03",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04"
];

const DAY_OFF_LIST = [
    "2022-04-05"
]

let lessons_list = [
    "Bài 1. ",
    "Bài 2. ",
    "Bài 3. ",
    "Bài 4. ",
    "Bài 5. ",
    "Bài 6. ",
    "Bài 7. ",
    "Bài 8. ",
    "Bài 9. ",
    "Bài 10.",
    "Bài 11.",
    "Bài 12.",
    "Bài 13.",
    "Bài 14.",
    "Bài 15.",
    "Bài 16.",
    "Bài 17.",
    "Bài 18.",
    "Bài 19.",
    "Bài 20.",
    "Bài 21.",
    "Bài 22.",
    "Bài 23.",
    "Bài 24.",
    "Bài 25.",
    "Bài 26.",
    "Bài 27.",
    "Bài 28.",
    "Bài 29.",
    "Bài 30."
];

//lay ngay user nhap
// function get_start_date(){
//     let INPUT = document.getElementById("start").value.toString();
//     return INPUT;
// }


// const NGAY_KHAI_GIANG = get_start_date();



const NGAY_KHAI_GIANG = "2022-02-26";
let current = new Date(NGAY_KHAI_GIANG);

const LEARNING_DAYS = [TUE, THU, SAT];
const get_date_string = (date) => date.toISOString().substring(0, 10);
const get_next_date = (date) => date.getDate() + 1;

const get_schedule = lesson => {
    let day = -1, not_learning_day = true, is_day_off = true, date_string = "";

    while (not_learning_day || is_day_off) {
        current.setDate(get_next_date(current));
        date_string = get_date_string(current);
        day = current.getDay();
        not_learning_day = !LEARNING_DAYS.includes(day);
        is_day_off = HOLIDAY_LIST.includes(date_string) || DAY_OFF_LIST.includes(date_string);
    }
    return {
        day: DAY_STR[day],
        lesson,
        date: get_date_string(current)
    };
};

let learning_schedule = [
    {
        day: DAY_STR[current.getDay()],
        lesson: lessons_list[0],
        date: get_date_string(current)
    },
    ...lessons_list.slice(1).map(get_schedule)
];

function makeScheduleTable() {
    
   let result="";
    for(var i=0; i<learning_schedule.length; i++) {
        
        // template string
        result += `<tr>
            <td>
                ${learning_schedule[i].day}
            </td>
            <td>
                ${learning_schedule[i].date}
            </td>
            <td>
                ${learning_schedule[i].lesson}
            </td>
        </tr>
        `;
        // result +="<tr>"+"<td>" + learning_schedule[i].day.toString() + "</td>" + "<td>" + learning_schedule[i].lesson.toString() + "</td>" + "<td>" + learning_schedule[i].date.toString() +
        //         "</td>";   

    }
    console.log(result);
    document.getElementById("result").innerHTML = result;
};

// function displaySchedule(){
//     // get_start_date();
//     makeScheduleTable(learning_schedule);
// };


