export default class RotationalCipher {
    constructor() {};
    public static rotate(text: string, rotateCount: number = 1): string {
        if(rotateCount < 0) {
            return text;
        }

        let result = '';

        text.split('').forEach((value: string) => {
            if(value.match(/[a-z]/i)) {
                let code: number = value.charCodeAt(0);

                if(code >= 65 && code <= 90) {
                    result += String.fromCharCode((code - 65 + rotateCount) % 26 + 65);
                } else if(code >= 97 && code <= 122) {
                    result += String.fromCharCode((code - 97 + rotateCount) % 26 + 97);
                }
            } else {
                result += value;
            }
        });

        return result;
    }
}
