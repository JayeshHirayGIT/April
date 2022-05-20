export class CourseService{
    private course:string[]=['Angular 8','React js','Embber js','Vue Js','JSP'];

    getCourse()
    {
        return (this.course);
    }
}