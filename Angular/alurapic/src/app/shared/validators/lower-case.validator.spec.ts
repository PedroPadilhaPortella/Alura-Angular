import { isLowerCase } from "./lower-case.validator";

describe("LowerCase Validator", () => {

    it("should return true when it recieve a text in lower case", () => {
        const value = 'mario';
        const resultado = isLowerCase(value);
        expect(resultado).toBeTruthy();
    });

    it("should return false when it recieve a text not in lower case", () => {
        expect(isLowerCase('Mario')).toBeFalsy();
    });
});