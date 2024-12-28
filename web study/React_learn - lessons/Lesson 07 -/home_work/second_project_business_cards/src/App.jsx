
function BusinessCard({ src, companyName, phoneNumber, email, repName, color }) {
    return <div style={{
        display: "flex",
        justifyContent: 'space-evenly',
        backgroundColor: color,
        maxWidth: '500px',
        marginTop: '3em',
    }}>
        <img src={src} alt={companyName} style={{
            width: '250px',
            marginRight: '1.5em'
        }} />
        <div style={{
            display: 'flex',
            flexDirection: "column",
        }}>
            <h2>{companyName}</h2>
            <p>Call: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Representetive: {repName}</p>
        </div>
    </div>
}

function App() {
    return <div>
        <BusinessCard src='https://www.shutterstock.com/shutterstock/photos/1083512990/display_1500/stock-photo-may-sunnyvale-ca-usa-amazon-logo-on-the-facade-of-one-of-their-corporate-office-1083512990.jpg' companyName="Omega ltd." phoneNumber={50488565} email="esd@fsd.com" repName="Totayo" color="blue" />

        <BusinessCard src={'https://www.shutterstock.com/shutterstock/photos/2357370565/display_1500/stock-photo-munster-germany-july-michelin-logo-on-a-wall-michelin-is-a-tire-manufacturer-based-in-2357370565.jpg'} companyName={"Michelin"} phoneNumber={55488457} email={"hd@hgi.com"} repName={"Tytoni"} color="red" />

        <BusinessCard src={"https://www.shutterstock.com/shutterstock/photos/2345850089/display_1500/stock-photo-bandung-august-new-balance-logo-2345850089.jpg"} companyName={"New Balance"} phoneNumber={554876645} email={"hhhg@jfjj.com"} repName={'Noch'} color={"green"} />
    </div>
}

export default App
