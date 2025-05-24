import QuestionItem from "./QuestionItem";

function QeustionList({ title, questions }: { title: string; questions: any }) {
  return (
    <div className="questions">
      <h1>{title}</h1>
      <ul>
        {Object.keys(questions).map((questionId) => {
          const question = questions[questionId];
          return (
            <QuestionItem
              key={questionId}
              questionId={questionId}
              question={question}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default QeustionList;
