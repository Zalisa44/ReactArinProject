import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Fenerbahce"
                cartText="lorem ipsum dfelldfdf ifsdfds"
                updatedTime="update 1 min ago"
                pic="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Malatyaspor"
                cartText="lorem ipsum dfelldfdf 2"
                updatedTime="update 3 min ago"
                pic="https://picsum.photos/id/10/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Galatasaray"
                cartText="lorem ipsum dfelldfdf 3"
                updatedTime="update 4 min ago"
                pic="https://picsum.photos/id/100/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
