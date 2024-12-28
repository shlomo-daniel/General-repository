
function User({ src, style, name, id }) {
  return <div>
    <h1>User</h1>
    <img src={src} style={style} />
    <p>User Name: {name}</p>
    <p>User ID:{id}</p>
  </div>
}

function App() {
  return <div>
    <User src="https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?s=1024x1024&w=is&k=20&c=IkX_YEoSCKwvrUcoQMuvTnGf7Hap5RRts13L7R5a_Q8=" style={{ width: "300px" }} name={"daniel"} id={55} />

    <User src={'https://www.shutterstock.com/shutterstock/photos/2023023581/display_1500/stock-photo-businessman-smiling-with-arms-crossed-on-white-background-2023023581.jpg'} style={{ width: "300px" }} name={"Chnunu"} id={465} />

    <User src={"https://www.shutterstock.com/shutterstock/photos/2063524544/display_1500/stock-photo-smiling-young-middle-eastern-man-with-digital-tablet-in-hands-posing-at-airport-terminal-2063524544.jpg"} style={{ width: "300px" }} name={"Maatof"} id={636254554} />
  </div>
}

export default App
