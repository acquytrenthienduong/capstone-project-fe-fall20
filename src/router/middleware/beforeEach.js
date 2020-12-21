const beforeEach = (router) => {
    router.beforeEach(async (to, from, next) => {
        return next()
    })
}   
export default beforeEach