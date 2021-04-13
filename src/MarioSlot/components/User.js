const User = ({ username, userCoins }) => {
    return(
        <div className="m-5" style={{ alignItems: "center", textAlign: "center" }}>
            <h3 style={{ fontFamily: 'smb2', fontSize: '15px', width: '250px', color: 'white' }}>Username: {username}</h3>
            <h3 style={{ fontFamily: 'smb2', fontSize: '15px', width: '250px', color: 'white' }}>Coins: {userCoins}</h3>
        </div>
    )
}

export default User;
