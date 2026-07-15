import { COUNT_PER_PAGE } from "@/pages/questions/config/consts.ts";

import { QuestionsList } from "@/widgets";

const QuestionsPage = () => {
  return (
    <div>
      <h1>Questions Page</h1>
      <QuestionsList limit={COUNT_PER_PAGE} />
    </div>
  );
};

export default QuestionsPage;
