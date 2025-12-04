import Styles from "./Testimonials.module.scss";
import DATA from "../../DATA/testimonials_array.json";

export const Testimonials = () => {
  console.log(DATA);
  return (
    <div className={`${Styles.container} bg-white`}>
      <div className="main-container bg-red-500">
        {DATA.map((user) => (
          <div key={user.id}>
            <h3>{user.person}</h3>
            <p>{user.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
