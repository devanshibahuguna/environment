import React, { Component } from 'react'
import pic from  './pic1.png'
import './Home.css'
export class Home extends Component {
  render() {
    return (
      <div className='hoome'>
        <br /><br /><br /><br /><br />
        <div className="headin">
            Our Mission
        </div>
        <div className="text_home">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore sit vel maiores autem. Excepturi magni explicabo nam ullam enim expedita cum labore, nulla quis maxime ex eaque dolorem aliquid quae odio ab pariatur. Sunt suscipit voluptatem saepe nemo illum libero quibusdam quaerat ipsam unde neque harum fugiat sapiente, facere praesentium repellendus, dolores quos atque expedita! Consequuntur, quidem distinctio perspiciatis repellat, quaerat dolor velit quos perferendis corporis odit fugiat eveniet eius eligendi iste assumenda, tenetur vel obcaecati! Facilis voluptates, tenetur cupiditate nobis inventore dolor illum consequuntur doloremque ipsa. Provident dolorem illo odio consectetur nesciunt non quas cum exercitationem maiores quaerat!
        </div>
        <div className="pic">
            <img src={pic} alt="home"  />
        </div>
      </div>
    )
  }
}

export default Home
