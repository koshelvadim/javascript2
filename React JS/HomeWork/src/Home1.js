import Message from "./components/home1/Message/Message";

function Home1() {
  return (
    <div>
      <Message
        data={{
          title: "Title 1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ad?",
        }}
      />
      <Message
        data={{
          title: "Title 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ad?",
        }}
      />
      <Message
        data={{
          title: "Title 3",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ad?",
        }}
      />
    </div>
  );
}

export default Home1;
