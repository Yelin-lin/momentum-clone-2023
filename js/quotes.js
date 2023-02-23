const quotes = [
    {
        quote: "너는 좋은 일들만 끌어당겨, 그것도 아주 많이",
        author: "꽃의 언어, 이평",
    },
    {
        quote: "성공에 대해서 서두르지 않고, 교만하지 않고, 쉬지 않고, 포기하지 않는다.",
        author: "로버트H.슐러",
    },
    {
        quote: "넌 못할 꺼라고 하는 말 절대 귀 담아 듣지마! 그게 아빠 말이라도. 꿈이 있다면 지켜야해.",
        author: "영화 '행복을 찾아서' 중에서",
    },
    {
        quote: "하루하루를 어떻게 보내는가에 따라 우리 인생이 결정된다.",
        author: "애니 딜러드",
    },
    {
        quote: "우리는 계속 살아야 한다. 그로써 우리가 진정 누구인가를 알 수 있다.",
        author: "토비아스 볼프",
    },
    {
        quote: "시작하는 방법은 이제 그만 말하고 이제 행동하는 것이다.",
        author: "월트 디즈니",
    },
    {
        quote: "한 번 실패와 영원한 실패를 혼동하지 말라.",
        author: "스콧 피츠제럴드",
    },
    {
        quote: "못났다, 못났다 할수록 더 못나고 싶은 게 사람이야. 잘날 기회를 주고 믿어. 그럼 나아져.",
        author: "드라마 <송곳>",
    },
    {
        quote: "아무리 빨리 이 새벽을 맞아도 어김없이 길에는 사람들이 있었다. 남들이 아직 꿈 속을 헤맬거라 생각했지만 언제나 그렇듯 세상은 나보다 빠르다.",
        author: "드라마 <미생>",
    },
    {
        quote: "고만고만한 인생 안에도, 때에 따라 반짝반짝 떠다니는 것들이 있다.",
        author: "드라마 <이번생은 처음이라>",
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;