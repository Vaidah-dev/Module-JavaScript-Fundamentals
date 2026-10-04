import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", () => {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("correctly convert time before 12:00", () => {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("handles midnight correctly", () => {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});
