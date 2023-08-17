import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="info">
            <span>John</span>
            <p>Posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          incidunt!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum,
          alias natus eum possimus corrupti quidem reiciendis, similique
          nesciunt voluptatibus iste cumque a, quasi tenetur dolor.
          <br />
          <br />
          Suscipit obcaecati harum nihil nesciunt vero eum magnam dignissimos,
          nam deleniti, ab praesentium? Delectus iusto, sunt fugiat et velit
          eaque ex, aliquid nam id at, eum beatae dolorem asperiores? Illum
          voluptatem, magni sed quos minus cum nobis officiis explicabo
          repellendus ipsum quis accusantium soluta consequuntur possimus
          voluptas deleniti animi, corporis placeat odit expedita quidem
          consequatur? Ea, aspernatur quas iste nisi facilis minus ullam autem
          dolorum sit, ut adipisci? Nam quasi saepe ipsam omnis laboriosam, ad
          ut eaque quod cumque
          <br />
          <br />
          commodi. Aliquid cumque quaerat reprehenderit omnis quod ducimus saepe
          harum, iusto aperiam natus laboriosam. Qui, architecto, consectetur
          asperiores rerum deserunt vitae illum inventore facere atque labore
          officiis ad reprehenderit quod expedita adipisci. Quisquam, quam
          suscipit delectus natus corrupti perferendis provident. Vitae esse
          perferendis aliquid sint voluptas culpa recusandae accusamus qui
          ducimus nemo voluptatum, labore accusantium, dolorum corporis commodi
          quod voluptate. Qui pariatur, illum eaque veniam ullam nisi fugit
          commodi quasi esse nihil eum eius perspiciatis sint debitis ducimus
          laudantium distinctio! Asperiores at, praesentium mollitia odio
          ducimus perferendis nulla sapiente!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
