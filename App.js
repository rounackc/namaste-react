
    //    const heading =  React.createElement("h1",{
    //     id:"heading",xyz:"ron"},
    //     "hello world from React-Rounack")
    //     console.log(heading);

    const parent = React.createElement("div",{id:"parent"},[
        React.createElement("div", {id:"child"}, [
            React.createElement("h1", {}, "I am a h1 Tag"),
            React.createElement("h2", {}, "I am a h2 Tag"),
        ]),
        React.createElement("div", {id:"child2"}, [
            React.createElement("h1", {}, "I am a h1 Tag"),
            React.createElement("h2", {}, "I am a h2 Tag"),
        ]),

    ]);
       console.log(parent)
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(parent);
