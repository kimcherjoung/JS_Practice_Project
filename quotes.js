const quotes = [
    {
        quote : "좋은일을 하면 나쁠것 없고 나쁜일을 하면 좋을것 없다",
    },
    {
        quote : "만남이 있으면 헤어짐이 있고 헤어짐이 있으면 만남이 있다",
    },
    {
        quote : "사람은 살기위해 사람을 죽이고 사람으로 살기 위해 사람을 살린다",
    },
    {
        quote : "하늘은 스스로 돕는자를 돕는다",
    },
    {
        quote : "어제보다 나은 삶을 살자",
    },
    {
        quote : "낭만적으로 사는것 어떤가",
    },
    {
        quote : "신을 믿으며 아무것도 안 할바에는 나를 믿는다",
    },
    {
        quote : "1분마다 인생을 바꿀 기회가 찾아온다",
    },
    {
        quote : "과거를 참고하되 집착하지 마라",
    },
    {
        quote : "자포자기를 삼가라, 가장 어두운 날도 내일이면 사라진다",
    },
    {
        quote : "끝날 때까지 끝난 게 아니다",
    },
    {
        quote : "공부해",
    }, 
    {
        quote : "피할 수 없으면 즐겨라",
    },
    {
        quote : "죽은 자를 위해 울지 말라, 그는 휴식을 취하고 있기 때문이다",
    },
    {
        quote : "No pain, No gain 고통없이 얻는것은 없다",
    },
    {
        quote : "승리해도 병신 패배해도 병신이라면 승리한 병신이 되라",
    }
];

const quote = document.querySelector("#quote span:first-child");

const random = Math.random();

const todaysQuote = quotes[Math.floor(random * quotes.length)];

quote.innerText = todaysQuote.quote;
console.log(todaysQuote);
console.log(random);

