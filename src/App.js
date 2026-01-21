import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🚀 AWS Static Website PoC</h1>
      <p>Deployed using CodeBuild, Private S3 and CloudFront (OAC)</p>

      <div className="card">
        <h3>Pipeline</h3>
        <ul>
          <li>GitHub</li>
          <li>CodePipeline</li>
          <li>CodeBuild</li>
          <li>CloudFront</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
