import { _saveQuestion, _saveQuestionAnswer } from "../backend/_DATA";

describe("_saveQuestion", () => {
  it("should return the saved question and populate all fields when correctly formatted data is passed", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "mtsamis",
    };

    const result = await _saveQuestion(question);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("author", "mtsamis");
    expect(result).toHaveProperty("optionOne.text", "Option One");
    expect(result).toHaveProperty("optionTwo.text", "Option Two");
  });

  it("should return an error if incorrect data is passed", async () => {
    const question = {
      optionOneText: "",
      optionTwoText: "",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("should return the saved question answer when correctly formatted data is passed", async () => {
    const answer = {
      authedUser: "mtsamis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(answer);

    expect(result).toBeTruthy();
  });

  it("should return an error if incorrect data is passed", async () => {
    const answer = {
      authedUser: "",
      qid: "",
      answer: "",
    };

    await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
