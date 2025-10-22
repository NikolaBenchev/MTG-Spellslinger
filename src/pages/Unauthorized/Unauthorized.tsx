import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Unauthorized</h2>
      <p>You do not have permission to access this page.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Unauthorized;
