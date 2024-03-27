import "./User.css";

const User = (props) => {
  const { nama, id, member, message } = props;
  // const tableStyle = {
  //   border: "1px solid black",
  //   width: "300px",
  //   margin: "20px auto",
  // };
  // const headerStyle = {
  //   textAlign: "center",
  //   fontWeight: "bold",
  // };
  // const cellStyle = { textAlign: "center" };
  return (
    <div>
      <table className="card">
        <thead className="card-head">
          <tr>
            <td colSpan={2}>{nama} {id}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr>
            <td colSpan={2} className="member">{member}</td>
          </tr>
          <tr>
            <td>
              <button onClick={message}>Message</button>
            </td>
            <td>
              <button>Subscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
