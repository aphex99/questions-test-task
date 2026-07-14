import { Link } from "react-router-dom";

import { routes } from "@/shared/config";

const QuestionsPage = () => {
  return (
    <div>
      <Link to={routes.question("1")}>Open first question</Link>
      <h1>Questions</h1>
    </div>
  );
};

export default QuestionsPage;
