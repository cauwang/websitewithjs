const quotes = [{
    quote: "그러므로 너희는 가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 세례를 베풀고",
    author: "마태복음 28:19"
},{
    quote: "나에게 이르시기를 내 은혜가 네게 족하도다 이는 내 능력이 약한 데서 온전하여짐이라 하신지라 그러므로 도리어 크게 기뻐함으로 나의 여러 약한 것들에 대하여 자랑하리니 이는 그리스도의 능력이 내게 머물게 하려 함이라",
    author: "고린도후서 12:9"
},
{
    quote: "너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라",
    author: "베드로전서 5:7"
},
{
    quote: "믿음이 없이는 하나님을 기쁘시게 하지 못하나니 하나님께 나아가는 자는 반드시 그가 계신 것과 또한 그가 자기를 찾는 자들에게 상 주시는 이심을 믿어야 할지니라",
    author: " 히브리서 11:6"
},
{
    quote: "그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라 그가 징계를 받음으로 우리는 평화를 누리고 그가 채찍에 맞음으로 우리는 나음을 받았도다",
    author: "이사야 53:5"
},
{
    quote: "이것을 너희에게 이르는 것은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라",
    author: "요한복음 16:33"
},
{
    quote: "끝으로 형제들아 무엇에든지 참되며 무엇에든지 경건하며 무엇에든지 옳으며 무엇에든지 정결하며 무엇에든지 사랑 받을 만하며 무엇에든지 칭찬 받을 만하며 무슨 덕이 있든지 무슨 기림이 있든지 이것들을 생각하라",
    author: "빌립보서 4:8"
},
{
    quote: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
    author: "요한복음 3:16"
},
{
    quote: "모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니",
    author: "로마서 3:23"
},{
    quote: "여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라",
    author: "예레미야 29:11"
}

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

