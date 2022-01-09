import VirtualPet from "./virtual-pet";

//test go inbetween curlys
describe("VirtualPet", () => {
  test("does it return a name", () => {
    const underTest = new VirtualPet("Drake");
    expect(typeof underTest.name).toMatch("string");
  });

  test("does it return Drake", () => {
    const underTest = new VirtualPet("Drake");
    expect(underTest.name).toEqual("Drake");
  });

  test("does it return hunger of 45 when fed", () => {
    const underTest = new VirtualPet("Drake", "dog", 50, 50);
    underTest.feed();
    expect(typeof underTest.hunger).toMatch("number");
  });

  test("does it return hunger of 45 when fed", () => {
    const underTest = new VirtualPet("Drake", "dog", 50, 50);
    underTest.feed();
    expect(underTest.hunger).toEqual(45);
  });

  test("does it return thirst of 45 when watered", () => {
    const underTest = new VirtualPet("Drake", "dog", 50, 50);
    underTest.watered();
    expect(underTest.thirst).toEqual(45);
  });
});
