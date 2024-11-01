let data = [
    {
        title: '綠島自由套裝行程',
        location: '台北',
        imgUrl: 'img/1.png',
        description: '嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。',
        rank: 8.6,
        lastNum: '剩下最後8組',
        price: '$1,280'
    },
    {
        title: '清境高空觀景步道二日遊',
        location: '台北',
        imgUrl: 'img/2.png',
        description: '清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。',
        rank: 8.2,
        lastNum: '剩下最後12組',
        price: '$2,580'
    },
    {
        title: '南庄度假村露營車二日遊',
        location: '台中',
        imgUrl: 'img/3.png',
        description: '南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。',
        rank: 9.2,
        lastNum: '剩下最後2組',
        price: '$2,480'
    },
    {
        title: '山林悠遊雙人套票',
        location: '台中',
        imgUrl: 'img/4.png',
        description: '山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）',
        rank: 9.3,
        lastNum: '限時搶購',
        price: '$880'
    },
    {
        title: '漁樂碼頭釣魚體驗套票',
        location: '台中',
        imgUrl: 'img/5.png',
        description: '台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！',
        rank: 8.2,
        lastNum: '剩下最後5組',
        price: '$1,280'
    },
    {
        title: '熊森公園親子二日遊套票',
        location: '高雄',
        imgUrl: 'img/6.png',
        description: '來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！',
        rank: 8.6,
        lastNum: '剩下最後3組',
        price: '$2,480'
    },
];

const resultListRow = document.querySelector("#result-list-row");

data.forEach(function (items) {
    resultListRow.innerHTML +=
        `
        <div class="col-4">
                        <div class="card">
                            <p class="tag-location">${items.location}</p>
                            <img src="${items.imgUrl}" alt="">
                            <div class="d-flex flex-column p-3 position-relative h-100">
                                <p class="tag-rank">${items.rank}</p>
                                <h3 class="mb-2">${items.title}</h3>
                                <p class="description">
                                ${items.description}
                                </p>
                                <div class="price-block d-flex justify-content-between align-items-center">
                                    <p>${items.lastNum}</p>
                                    <div class="d-flex align-items-center">
                                    <p>TWD</p>
                                    <p class="price">${items.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        ;
});

//在文件中找到下拉選單
const selector = document.querySelector("#location-selector");

//將原始資料和selector之間做對應
function filterData() {
    //先定義一個空陣列當容器
    let filterResult = [];
    data.forEach(function (item) {
        //當資料中的地區和selector的value相同時，觸發function將資料推到陣列
        if (item.location === selector.value) {
            filterResult.push(item);
        };
       console.log(filterResult)
    });
};


//監聽selector，當使用者改變（change）選項時，觸發function
selector.addEventListener("change", function () {
    filterData();
});