const React = require("react");
const Default = require("./layout/default");

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <div className="content-wrapper">
        <div className="column">
          <h3>Bakers</h3>
          <ul>
            {bakers.map((baker) => (
              <li key={baker._id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>Breads</h3>
          <ul>
            {breads.map((bread, _id) => (
              <li key={_id}>
                <a href={`/breads/${bread._id}`}>{bread.name}</a>
              </li>
            ))}
          </ul>
          <div className="newButton">
            <a href="/breads/new">
              <button>Add a new bread</button>
            </a>
          </div>
        </div>
      </div>
    </Default>
  );
}

module.exports = Index;
