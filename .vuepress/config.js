module.exports = {
    base: "/MaZhongKaiCS.github.io/",
    title: "Ray's Blog",
    description: "记录自己的点点滴滴！！!",
    theme: "vuepress-theme-vuetter",
    head: [
        ["link", { rel: "icon", href: "/avatar.png" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:site", conetent: "KORILIN" }],
        ["meta", { name: "twitter:creator", conetent: "@Kori_Lin" }],
    ],
    themeConfig: {
        startTime: 2020,
        ICP: "",
        author: {
            name: "Ray Pony",
            avatar: "/avatar.png", //头像
            description: '记录自己的点点滴滴！！！',
            communities: [
                {
                    id: "Github",
                    icon: "/author/github.png",
                    text: "@MaZhongKaiCS",
                    url: "https://github.com/MaZhongKaiCS",
                },
                {
                    id: "QQ",
                    icon: "/author/logo-qq.png",
                    text: "1012812085",
                },
                {
                    id: "Location",
                    icon: "/author/dingwei.png",
                    text: "广东 广州",
                },
                {
                    id: "Email",
                    icon: "/author/email.png",
                    text: "mazhongkaics@gmail.com",
                },
            ],
        },
        homeNotShowCategories: ["笔记"], // 数组中是不显示的分类
    },
};
