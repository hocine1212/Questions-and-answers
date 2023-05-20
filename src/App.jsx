import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h1>questions and answers </h1>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default App;
