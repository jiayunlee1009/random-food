$(document).ready(function() {
    // 定義美食數據
    const meals = {
        breakfast: [
            {
                name: "煎蛋",
                description: "簡單美味的煎蛋，早餐的經典選擇。",
                image: "https://png.pngtree.com/png-vector/20240607/ourlarge/pngtree-fried-egg-vector-png-image_12636390.png"
            },
            {
                name: "煎餅果子",
                description: "用薄餅包裹的新鮮配料，口感獨特。",
                image: "https://img.lovepik.com/free-png/20220127/lovepik-shandong-pancake-fruit-lu-hui-hand-painted-food-png-image_401910277_wh1200.png"
            }
        ],
        lunch: [
            {
                name: "炒飯",
                description: "香噴噴的炒飯，搭配各種配料。",
                image: "https://png.pngtree.com/png-clipart/20230114/original/pngtree-yangzhou-fried-rice-cartoon-hand-drawn-food-png-image_8912043.png"
            },
            {
                name: "三明治",
                description: "新鮮的三明治，健康又美味。",
                image: "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-cartoon-cute-food-element-sandwich-cartoonfoodelement-designsandwichbreakfastdelicious-png-image_684103.jpg"
            }
        ],
        dinner: [
            {
                name: "牛排",
                description: "嫩滑多汁的牛排，適合晚餐。",
                image: "https://png.pngtree.com/png-clipart/20220222/ourmid/pngtree-original-cute-cartoon-delicious-lunch-steak-hand-painted-food-elements-png-image_4457492.png"
            },
            {
                name: "壽司",
                description: "新鮮的壽司，獨特的風味。",
                image: "https://png.pngtree.com/png-clipart/20210308/original/pngtree-hand-drawn-cartoon-cute-sushi-decoration-png-image_5762802.jpg"
            }
        ],
        dessert: [
            {
                name: "巧克力蛋糕",
                description: "濃郁的巧克力蛋糕，甜品中的經典。",
                image: "https://img.lovepik.com/free-png/20211203/lovepik-creative-cherry-chocolate-cake-png-image_401286268_wh1200.png"
            },
            {
                name: "冰淇淋",
                description: "各種口味的冰淇淋，夏天的最佳解暑良品。",
                image: "https://png.pngtree.com/png-clipart/20190921/original/pngtree-delicious-ice-cream-cartoon-illustration-png-image_4729573.jpg"
            }
        ]
    };

    // 隨機推薦美食
    $("#recommendButton").click(function() {
        const mealType = $("#mealType").val(); // 獲取選擇的菜餚類型
        const selectedMeals = meals[mealType]; // 根據類型獲取美食數據

        // 隨機選擇一個美食
        const randomIndex = Math.floor(Math.random() * selectedMeals.length);
        const selectedMeal = selectedMeals[randomIndex];

        // 顯示結果
        $("#result").html(`
            <h2>${selectedMeal.name}</h2>
            <p>${selectedMeal.description}</p>
            <img src="${selectedMeal.image}" alt="${selectedMeal.name}">
        `);
    });

    // 為按鈕添加動畫效果
    setTimeout(function() {
        $("#recommendButton").addClass("animate__animated animate__bounce");
    }, 100); // 延遲 100 毫秒
});
