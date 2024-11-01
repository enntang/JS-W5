let data = [
    {
        id: 0,
        title: '綠島自由套裝行程',
        location: '台北',
        imgUrl: 'img/1.png',
        description: '嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。',
        rank: 8.6,
        lastNum: '8',
        price: '$1,280'
    },
    {
        id: 1,
        title: '清境高空觀景步道二日遊',
        location: '台北',
        imgUrl: 'img/2.png',
        description: '清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。',
        rank: 8.2,
        lastNum: '1',
        price: '$2,580'
    },
    {
        id: 2,
        title: '南庄度假村露營車二日遊',
        location: '台中',
        imgUrl: 'img/3.png',
        description: '南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。',
        rank: 9.2,
        lastNum: '2',
        price: '$2,480'
    },
    {
        id: 3,
        title: '山林悠遊雙人套票',
        location: '台中',
        imgUrl: 'img/4.png',
        description: '山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）',
        rank: 9.3,
        lastNum: '限時搶購',
        price: '$880'
    },
    {
        id: 4,
        title: '漁樂碼頭釣魚體驗套票',
        location: '台中',
        imgUrl: 'img/5.png',
        description: '台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！',
        rank: 8.2,
        lastNum: '5',
        price: '$1,280'
    },
    {
        id: 5,
        title: '熊森公園親子二日遊套票',
        location: '高雄',
        imgUrl: 'img/6.png',
        description: '來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！',
        rank: 8.6,
        lastNum: '3',
        price: '$2,480'
    },
];

//定義文件中的關鍵位置
const selector = document.querySelector("#location-selector");
const resultNum = document.querySelector("#resultNum");
const resultListRow = document.querySelector("#result-list-row");
const addDataBtn = document.querySelector(".btn");

const form = document.querySelector("form");
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");

//定義出執行渲染的條件
function renderData(data) {
    //渲染出旅遊行程卡片
    data.forEach(function (item) {
        resultListRow.innerHTML +=
            `<div class="col-4">
                        <div class="card">
                            <p class="tag-location">${item.location}</p>
                            <img src="${item.imgUrl}" alt="">
                            <div class="d-flex flex-column p-3 position-relative h-100">
                                <p class="tag-rank">${item.rank}</p>
                                <h3 class="mb-2">${item.title}</h3>
                                <p class="description">
                                ${item.description}
                                </p>
                                <div class="price-block d-flex justify-content-between align-items-center">
                                    <p>剩下最後${item.lastNum}組</p>
                                    <div class="d-flex align-items-center">
                                    <p>TWD</p>
                                    <p class="price">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });
    //顯示搜尋結果數量
    resultNum.textContent = `本次搜尋共${data.length}筆資料`
};

renderData(data);

//新增套票的功能
function addData() {
    let obj = {
        id: data.length,
        //加上trim清除不必要空白，以及針對該是數字的欄位加上自動轉型
        title: ticketName.value.trim(),
        imgUrl: ticketImgUrl.value.trim(),
        location: ticketRegion.value.trim(),
        description: ticketDescription.value.trim(),
        lastNum: Number(ticketNum.value.trim()),
        price: Number(ticketPrice.value.trim()),
        rank: Number(ticketRate.value.trim()),
    };
    data.push(obj);
}
addDataBtn.addEventListener("click", function () {
    addData();

    // 確保篩選後立即更新頁面結果
    filterData();

    // 清空表單欄位
    form.reset();
});


//將原始資料和selector之間做對應，並且更新渲染結果
function filterData() {
    //清空舊的渲染結果
    resultListRow.innerHTML = "";
    //定義一個空陣列當容器
    let filterResult = [];
    //設定篩選條件
    if (selector.value === "全部地區") {
        //全部地區的時候，陣列即等於初始資料的全部範圍
        filterResult = data;
    } else {
        data.forEach(function (item) {
            //當資料中的地區和selector的value相同時，觸發function將符合條件的資料推到陣列
            if (item.location === selector.value) {
                filterResult.push(item);
            };
        });
    }

    //地區符合當前選項的資料，會儲存在filterResult裡面，此時抓filterResult裡的資料做渲染
    renderData(filterResult);
};


//監聽selector，當使用者改變（change）選項時，觸發function
selector.addEventListener("change", function () {
    filterData();
});