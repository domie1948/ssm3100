const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmc8l16/",
            name: "ssmc8l16",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmc8l16/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "漫画网站系统"
        } 
    }
}
export default base
