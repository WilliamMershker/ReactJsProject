import profilePic from "./assets/profile.jpg";

function ProfilePicture() {

    const handleClick = () => {
        console.log("Profile picture clicked!");
    };

    return (
        <img
            src={profilePic}
            alt="Profile Picture"
            onClick={handleClick}
            style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer"
            }}
        />
    );
}

export default ProfilePicture;