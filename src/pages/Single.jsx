import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu"
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/500/200" alt="" />
        <div className="user">
          <img src="https://picsum.photos/50/50" alt="" />

          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab consequuntur laudantium enim tempora vitae cumque itaque consectetur, explicabo quasi.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam doloremque, distinctio quod consectetur odio id tempora odit officia maiores, perferendis facere praesentium impedit explicabo reiciendis adipisci? 
           Vitae sequi officiis laborum, provident non expedita ut commodi ducimus velit beatae exercitationem consequuntur nostrum accusantium veritatis temporibus quis minima cum quas adipisci earum tenetur dicta illum ratione voluptas? 
           <br/><br/>Commodi esse asperiores aspernatur inventore vel ipsa, harum delectus ad molestias distinctio? Laborum voluptatibus minima soluta officia accusamus sit explicabo libero ducimus dicta iure ex quae unde, assumenda voluptatum maxime corrupti quasi tempora, esse facilis totam! Modi, alias facilis sed illum necessitatibus delectus esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sint atque exercitationem sit maiores mollitia, dolore dolor non quia quam a corrupti sunt explicabo vel fugiat, placeat debitis id, saepe esse excepturi minima? Atque molestiae commodi provident alias, recusandae eveniet doloremque expedita voluptatem dignissimos consequatur, quis porro nostrum, eum temporibus qui magnam rerum harum.<br/><br/> Ex modi perspiciatis minima praesentium quaerat placeat alias a, autem adipisci veritatis voluptas ratione obcaecati doloribus temporibus? Consequatur incidunt mollitia velit soluta, deleniti perferendis sunt qui illo autem maiores expedita quasi, a odit quis. Minus, fuga! Magni debitis quaerat nam, officia at voluptate laborum neque corporis.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
