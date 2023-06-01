const { Circle, Triangle, Square } = require('./shapes.js');

//In addition to testing the circle, this test is also meant to test basic colors, like green and yellow.
describe('Circle', () => {
    describe('color', () => {
        it('should return a green circle SVG.', () => {
            const shape = new Circle("ORB", "yellow", "green");
            expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill="green"/>');
        });
    });
});

//In addition to testing the triangle, this test is also meant to test more complex colors, like darkgreen and lightyellow.
describe('Triangle', () => {
    describe('color', () => {
        it('should return a dark green triangle SVG.', () => {
            const shape = new Triangle("GAS", "lightyellow", "darkgreen");
            expect(shape.render()).toEqual('<polygon points= "0,60 100,200 200,60" x="50" y="50" fill="darkgreen"/>');
        });
    });
});

//In addition to testing the square, this test is also meant to test hex codes, like #7baaa4 and #fbc424, which will make green and yellow respectively.
describe('Square', ()=> {
    describe('color', () => {
        it('should return a pale green square SVG, using the hex code #7baaa4.', () => {
            const shape = new Square("BOX", "#fbc424", "#7baaa4");
            expect(shape.render()).toEqual('<rect x="15" y="22" width="170" height="170" fill="#7baaa4"/>');
        });
    });
});

