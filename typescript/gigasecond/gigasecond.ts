export default class Gigasecond {
    public static readonly GIGASECOND: number = Math.pow(10, 9) * 1000;
    
    constructor(private readonly startDate: Date) {};

    public date(): Date {
        return new Date(this.startDate.getTime() + Gigasecond.GIGASECOND);
    }
}