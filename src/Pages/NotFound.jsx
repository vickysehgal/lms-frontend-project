import { useNavigate } from "react-router-dom";

function NotFound() {
  // useNavigate() hook ka use krte ha navigate krne ke lie within page
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#1a2238]">
      <h1 className="text-9xl font-extrabold text-white">404</h1>
      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block font-medium text-sm text-[#ff6a3d] group active:text-yellow-500 focus:outline-none focus:ring">
          <span
            // navigate(-1) iska mtlb ha ki ek step piche jana to jab ham 'Go Back' pe click krenge to yeh mughe ek page piche leke jayega
            onClick={() => navigate(-1)}
            className="relative block px-8 py-3 bg-[#1a2238] border border-current"
          >
            Go Back
          </span>
        </a>
      </button>
    </div>
  );
}

export default NotFound;
