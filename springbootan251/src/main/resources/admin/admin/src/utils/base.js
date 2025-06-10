const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootan251/",
            name: "springbootan251",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootan251/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "毕业生信息招聘平台"
        } 
    }
}
export default base
