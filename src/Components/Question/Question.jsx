import React from 'react'
import { useState } from 'react';
import "./qustion.css";

const Question = () => {

  const [selected,setSelected] = useState(null);

  const toggle = (i) => {
    if(selected === i){
      setSelected(null)
  }
  setSelected(i)
}
  return (
    <>
      <div className='container'>
        <h2 className="headdin">Frequently asked questions</h2>
        <div className="wrapper">
          <div className="q-list">
            {data.map((item, i) => (
              <div className="item">
                <div
                  className={selected === i ? "titel show" : "titel"}
                  onClick={() => toggle(i)}
                >
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti, quod quia repellendus laborum est, quidem consectetur nobis veritatis sint animi, quis amet eligendi totam. Optio consequuntur ex molestiae. Accusamus quisquam ut quia itaque. Tempora reiciendis eos cumque labore sit repudiandae adipisci incidunt nisi vitae commodi, unde consectetur ea tempore ipsum dolores quidem neque, odio laudantium nesciunt. Omnis, similique ex.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti, quod quia repellendus laborum est, quidem consectetur nobis veritatis sint animi, quis amet eligendi totam. Optio consequuntur ex molestiae. Accusamus quisquam ut quia itaque. Tempora reiciendis eos cumque labore sit repudiandae adipisci incidunt nisi vitae commodi, unde consectetur ea tempore ipsum dolores quidem neque, odio laudantium nesciunt. Omnis, similique ex.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti, quod quia repellendus laborum est, quidem consectetur nobis veritatis sint animi, quis amet eligendi totam. Optio consequuntur ex molestiae. Accusamus quisquam ut quia itaque. Tempora reiciendis eos cumque labore sit repudiandae adipisci incidunt nisi vitae commodi, unde consectetur ea tempore ipsum dolores quidem neque, odio laudantium nesciunt. Omnis, similique ex.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti, quod quia repellendus laborum est, quidem consectetur nobis veritatis sint animi, quis amet eligendi totam. Optio consequuntur ex molestiae. Accusamus quisquam ut quia itaque. Tempora reiciendis eos cumque labore sit repudiandae adipisci incidunt nisi vitae commodi, unde consectetur ea tempore ipsum dolores quidem neque, odio laudantium nesciunt. Omnis, similique ex.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti, quod quia repellendus laborum est, quidem consectetur nobis veritatis sint animi, quis amet eligendi totam. Optio consequuntur ex molestiae. Accusamus quisquam ut quia itaque. Tempora reiciendis eos cumque labore sit repudiandae adipisci incidunt nisi vitae commodi, unde consectetur ea tempore ipsum dolores quidem neque, odio laudantium nesciunt. Omnis, similique ex.",
  },
];

export default Question;