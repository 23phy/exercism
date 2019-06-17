export default class FlattenArray {
    constructor() {};

    public static flatten(array: Array<any>): Array<any> {
        let flatArray: Array<any> = new Array<any>();

        array.forEach((element: any) => {
            if(element instanceof Array) {
                flatArray = flatArray.concat(FlattenArray.flatten(element));
            } else {
                flatArray.push(element);
            }
        });
        
        return flatArray.filter((element: any) => element !== undefined);
    }
}
