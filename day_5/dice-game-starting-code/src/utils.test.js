import { randomRoll, changeImage } from "./utils.js"

test("randomRoll generates numbers in correct range", () => {
    const randomArray = [];
    
    // probably overkill...
    for (let i=0; i<1000; i++) {
        randomArray.push(randomRoll());
    }

    expect(randomArray.every((element) => {
        return (element<7) && (element>0)
    })).toBeTruthy();
}); 

function runChangeImage(image) {
    changeImage(image);
    return image;
}

test("changeImage correctly changes image src", () => {
    expect( runChangeImage({src: "hello"}).src.length ).toBe(14);
});