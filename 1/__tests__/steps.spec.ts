import findSteps from "../steps";

describe("steps", () => {
  test("number 1 needs 1 steps", () => {
    expect(findSteps(1)).toBe(1);
  });

  test("number 2 needs 2 steps", () => {
    expect(findSteps(2)).toBe(2);
  });

  test("number 3 needs 2 steps", () => {
    expect(findSteps(3)).toBe(2);
  });

  test("number 4 needs 2 steps", () => {
    expect(findSteps(4)).toBe(2);
  });

  test("number 5 needs 3 steps", () => {
    expect(findSteps(5)).toBe(3);
  });

  test("number 6 needs 3 steps", () => {
    expect(findSteps(6)).toBe(3);
  });

  test("number 7 needs 3 steps", () => {
    expect(findSteps(7)).toBe(3);
  });

  test("number 8 needs 3 steps", () => {
    expect(findSteps(8)).toBe(3);
  });

  test("number 9 needs 4 steps", () => {
    expect(findSteps(9)).toBe(4);
  });

  test("number 10 needs 4 steps", () => {
    expect(findSteps(10)).toBe(4);
  });

  test("number 11 needs 4 steps", () => {
    expect(findSteps(11)).toBe(4);
  });

  test("number 12 needs 4 steps", () => {
    expect(findSteps(12)).toBe(4);
  });

  test("number 13 needs 4 steps", () => {
    expect(findSteps(13)).toBe(4);
  });

  test("number 14 needs 4 steps", () => {
    expect(findSteps(14)).toBe(4);
  });

  test("number 15 needs 4 steps", () => {
    expect(findSteps(15)).toBe(4);
  });

  test("number 16 needs 4 steps", () => {
    expect(findSteps(16)).toBe(4);
  });

  test("number 17 needs 5 steps", () => {
    expect(findSteps(17)).toBe(5);
  });

  test("number 18 needs 5 steps", () => {
    expect(findSteps(18)).toBe(5);
  });

  test("number 19 needs 5 steps", () => {
    expect(findSteps(19)).toBe(5);
  });

  test("number 20 needs 5 steps", () => {
    expect(findSteps(20)).toBe(5);
  });

  test("number 21 needs 5 steps", () => {
    expect(findSteps(21)).toBe(5);
  });

  test("number 22 needs 5 steps", () => {
    expect(findSteps(22)).toBe(5);
  });

  test("number 23 needs 5 steps", () => {
    expect(findSteps(23)).toBe(5);
  });

  test("number 24 needs 5 steps", () => {
    expect(findSteps(24)).toBe(5);
  });

  test("number 25 needs 5 steps", () => {
    expect(findSteps(25)).toBe(5);
  });

  test("number 26 needs 5 steps", () => {
    expect(findSteps(26)).toBe(5);
  });

  test("number 27 needs 5 steps", () => {
    expect(findSteps(27)).toBe(5);
  });

  test("number 28 needs 5 steps", () => {
    expect(findSteps(28)).toBe(5);
  });

  test("number 29 needs 5 steps", () => {
    expect(findSteps(29)).toBe(5);
  });

  test("number 30 needs 5 steps", () => {
    expect(findSteps(30)).toBe(5);
  });

  test("number 31 needs 5 steps", () => {
    expect(findSteps(31)).toBe(5);
  });

  test("number 32 needs 5 steps", () => {
    expect(findSteps(32)).toBe(5);
  });

  test("number 33 needs 6 steps", () => {
    expect(findSteps(33)).toBe(6);
  });

  test("number 64 needs 6 steps", () => {
    expect(findSteps(64)).toBe(6);
  });

  test("number 65 needs 7 steps", () => {
    expect(findSteps(65)).toBe(7);
  });

  test("number 128 needs 7 steps", () => {
    expect(findSteps(128)).toBe(7);
  });

  test("number 129 needs 8 steps", () => {
    expect(findSteps(129)).toBe(8);
  });

  test("number 256 needs 8 steps", () => {
    expect(findSteps(256)).toBe(8);
  });

  test("number 257 needs 9 steps", () => {
    expect(findSteps(257)).toBe(9);
  });

  test("number 512 needs 9 steps", () => {
    expect(findSteps(512)).toBe(9);
  });

  test("number 513 needs 10 steps", () => {
    expect(findSteps(513)).toBe(10);
  });

  test("number 1024 needs 10 steps", () => {
    expect(findSteps(1024)).toBe(10);
  });

  test("number 1025 needs 11 steps", () => {
    expect(findSteps(1025)).toBe(11);
  });

  test("number 2048 needs 11 steps", () => {
    expect(findSteps(2048)).toBe(11);
  });

  test("number 2049 needs 12 steps", () => {
    expect(findSteps(2049)).toBe(12);
  });

  test("number 4096 needs 12 steps", () => {
    expect(findSteps(4096)).toBe(12);
  });

  test("number 4097 needs 13 steps", () => {
    expect(findSteps(4097)).toBe(13);
  });
  test("number 8192 needs 13 steps", () => {
    expect(findSteps(8192)).toBe(13);
  });

  test("number 8193 needs 14 steps", () => {
    expect(findSteps(8193)).toBe(14);
  });

  test("number 16384 needs 14 steps", () => {
    expect(findSteps(16384)).toBe(14);
  });

  test("number 16385 needs 15 steps", () => {
    expect(findSteps(16385)).toBe(15);
  });

  test("number 32768 needs 15 steps", () => {
    expect(findSteps(32768)).toBe(15);
  });

  test("number 32769 needs 16 steps", () => {
    expect(findSteps(32769)).toBe(16);
  });

  test("number 65536 needs 16 steps", () => {
    expect(findSteps(65536)).toBe(16);
  });

  test("number 65537 needs 17 steps", () => {
    expect(findSteps(65537)).toBe(17);
  });

  test("number 131072 needs 17 steps", () => {
    expect(findSteps(131072)).toBe(17);
  });

  test("number 131073 needs 18 steps", () => {
    expect(findSteps(131073)).toBe(18);
  });

  test("number 262144 needs 18 steps", () => {
    expect(findSteps(262144)).toBe(18);
  });

  test("number 262145 needs 19 steps", () => {
    expect(findSteps(262145)).toBe(19);
  });

  test("number 524288 needs 19 steps", () => {
    expect(findSteps(524288)).toBe(19);
  });

  test("number 524289 needs 20 steps", () => {
    expect(findSteps(524289)).toBe(20);
  });

  test("number 1048576 needs 20 steps", () => {
    expect(findSteps(1048576)).toBe(20);
  });

  test("number 1048577 needs 21 steps", () => {
    expect(findSteps(1048577)).toBe(21);
  });

  test("number 2097152 needs 21 steps", () => {
    expect(findSteps(2097152)).toBe(21);
  });

  test("number 2097153 needs 22 steps", () => {
    expect(findSteps(2097153)).toBe(22);
  });

  test("number 4194304 needs 22 steps", () => {
    expect(findSteps(4194304)).toBe(22);
  });

  test("number 4194305 needs 23 steps", () => {
    expect(findSteps(4194305)).toBe(23);
  });

  test("number 8388608 needs 23 steps", () => {
    expect(findSteps(8388608)).toBe(23);
  });

  test("number 8388609 needs 24 steps", () => {
    expect(findSteps(8388609)).toBe(24);
  });
});
