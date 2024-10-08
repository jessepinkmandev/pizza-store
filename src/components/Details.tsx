import { useNavigate } from "react-router-dom";

const style = {
  input: `border-4`,
};

type propDetails = {
  createData: (e: React.FormEvent<HTMLFormElement>) => void;
  input: { name: string; address: string; contact: number };
  setInput: any;
};

export const Details = ({ createData, input, setInput }: propDetails) => {
  const navigate = useNavigate();

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const newValue = e.target.value;
    const inputName = e.target.name;
    console.log(newValue);
    setInput(
      (prevValue: { address: string; name: string; contact: number }) => {
        if (inputName === "name") {
          return {
            name: newValue,
            address: prevValue.address,
            contact: prevValue.contact,
          };
        } else if (inputName === "address") {
          return {
            name: prevValue.name,
            address: newValue,
            contact: prevValue.contact,
          };
        } else if (inputName === "contact") {
          return {
            name: prevValue.name,
            address: prevValue.address,
            contact: newValue,
          };
        }
      }
    );
    console.log(input);
  };

  return (
    <div className="mt-12 grid place-content-center w-full h-[400px] text-2xl text-[#D4BDAC] text-center bg-[#536493]">
      <form
        className="grid place-content-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          createData(e);
          navigate("/pizza-store/success");
        }}
      >
        <label>Name</label>
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          className={style.input}
          type="text"
          required
        />

        <label>Address</label>
        <input
          required
          name="address"
          value={input.address}
          onChange={handleChange}
          className={style.input}
          type="text"
        />

        <label>Contact Number</label>
        <input
          name="contact"
          value={input.contact}
          onChange={handleChange}
          className={style.input}
          type="number"
          required
        />
        <button className="border-2 mt-8  text-[#D4BDAC]">Submit</button>
      </form>
    </div>
  );
};
