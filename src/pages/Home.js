import { withRouter } from "react-router";

function Home(props) {
  const {history}=props;
  return (
    <div>
      <button onClick={()=>{history.push('/choosetheme')}}>Theme</button>
    </div>
  );
}

export default withRouter(Home);
