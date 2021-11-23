export default class MyCoursesModel{

    async getMyCourses(){

        await new Promise(resolve => setTimeout(resolve, 2000));

        return [
            {
                title:"course 1",
            },
            {
                title:"course 2",
            },
            {
                title:"course 3",
            },
        ]
    }
}