import DashboardItem from "./DashboardItem";

function DashboardList({
  title,
  questions,
}: {
  title: string;
  questions: any;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="dashboard-list">
        {Object.keys(questions).map((questionId) => {
          const question = questions[questionId];
          return (
            <DashboardItem
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

export default DashboardList;
